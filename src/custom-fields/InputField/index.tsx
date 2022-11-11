import * as React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';

interface InputFieldProps {
    field: { name: string; value: any; onChange: any; onBlur: any };
    form: { touched: boolean; errors: any; setFieldValue: any };

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
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}
                type={defaultPropValues.type}
                disabled={defaultPropValues.disabled}
                placeholder={placeholder}
            />
        </FormGroup>
    );
};

export default InputField;
