import RandomPhoto from 'components/RandomPhoto';
import { ErrorMessage } from 'formik';
import * as React from 'react';
import { FormFeedback, FormGroup, Label } from 'reactstrap';

interface RandomPhotoFieldProps {
    field: { name: string; value: any; onChange: any; onBlur: any };
    form: { touched: any; errors: any; setFieldValue: any };

    label: string;
}

const defaultPropValues = {
    label: '',
};

const RandomPhotoField: React.FunctionComponent<RandomPhotoFieldProps> = ({
    field,
    form,
    label,
}: RandomPhotoFieldProps) => {
    const { name, value, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const handleImageUrlChange = (newImageUrl: string) => {
        form.setFieldValue(name, newImageUrl);
    };
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />
            <div className={showError ? 'is-invalid' : ''}></div>
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
};

export default RandomPhotoField;
