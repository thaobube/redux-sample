import * as React from 'react';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

interface SelectFieldProps {
    field: { name: string; value: any; onChange: any; onBlur: any };
    form: { touched: any; errors: any; setFieldValue: any };

    label: string;
    placeholder: string;
    disabled: boolean;
    options: any[];
}

const defaultPropValues = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
};

const SelectField: React.FunctionComponent<SelectFieldProps> = ({
    field,
    form,
    label,
    placeholder,
    disabled,
    options,
}: SelectFieldProps) => {
    const { name, value } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const selectedOption = options.find((option) => option.value === value);
    const handleSelectedOptionChange = (selectedOption: any) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue,
            },
        };
        field.onChange(changeEvent);
    };
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}
                placeholder={placeholder}
                isDisabled={defaultPropValues.disabled}
                options={options}
                className={showError ? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
};

export default SelectField;
