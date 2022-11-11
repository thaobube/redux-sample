import { ErrorMessage } from 'formik';
import * as React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';

interface InputFieldProps {
    field: { name: string; value: any; onChange: any; onBlur: any };
    form: { touched: any; errors: any; setFieldValue: any };

    type: InputType | undefined;
    label: string;
    placeholder: string;
    disabled: boolean;
}
interface defaultFieldProps {
    type: InputType | undefined;
    label: string;
    placeholder: string;
    disabled: boolean;
}
const defaultPropValues: defaultFieldProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
};

const InputField: React.FunctionComponent<InputFieldProps> = ({
    field,
    form,
    type,
    label,
    placeholder,
    disabled,
}: InputFieldProps) => {
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}
                type={defaultPropValues.type}
                disabled={defaultPropValues.disabled}
                placeholder={placeholder}
                invalid={showError}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
};

export default InputField;
