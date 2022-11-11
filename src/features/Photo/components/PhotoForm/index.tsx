import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import * as React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import RandomPhotoField from 'custom-fields/RandomPhotoField/index';
import * as Yup from 'yup';

interface PhotoFormProps {
    onSubmit: (...args: any[]) => void;
}

const PhotoForm: React.FunctionComponent<PhotoFormProps> = ({ onSubmit }: PhotoFormProps) => {
    const initialValues = {
        title: '',
        categoryId: null,
        photo: '',
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required.'),

        categoryId: Yup.number().required('This field is required.').nullable(),

        photo: Yup.string().required('This field is required.'),
        // example: if only the category for Technology is required:
        // photo: Yup.string().when('categoryId', {
        //     is: 1,
        //     then: Yup.string().required('This field is required.'),
        //     otherwise: Yup.string().notRequired(),
        // }),
    });
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formikProps) => {
                // do something here
                const { values, errors, touched, isSubmitting } = formikProps;
                // console.log({ values, errors, touched });
                return (
                    <Form>
                        <FastField
                            name='title'
                            component={InputField}
                            label='Title'
                            placeholder='Eg: Nature...'
                        />
                        <FastField
                            name='categoryId'
                            component={SelectField}
                            label='Category'
                            placeholder='What is your photo category?'
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField name='photo' component={RandomPhotoField} label='Photo' />
                        <FormGroup>
                            <Button type='submit' color='primary'>
                                {isSubmitting && <Spinner size='sm' />}
                                Add to album
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default PhotoForm;
