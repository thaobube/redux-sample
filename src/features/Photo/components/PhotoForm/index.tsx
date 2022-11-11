import * as React from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { Formik, Form, FastField, FormikProps, FormikValues } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from './../../../../custom-fields/RandomPhotoField/index';

interface PhotoFormProps {}

const PhotoForm: React.FunctionComponent<PhotoFormProps> = (props) => {
    const initialValues = {
        title: '',
        categoryId: null,
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log('Submit values: ', values);
            }}
        >
            {(formikProps) => {
                // do something here
                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched });
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
