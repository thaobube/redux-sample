import RandomPhoto from 'components/RandomPhoto';
import * as React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';

interface RandomPhotoFieldProps {
    field: { name: string; value: any; onChange: any; onBlur: any };
    form: { touched: boolean; errors: any; setFieldValue: any };

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
        </FormGroup>
    );
};

export default RandomPhotoField;
