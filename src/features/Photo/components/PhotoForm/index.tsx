import * as React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/images';

interface PhotoFormProps {}

const PhotoForm: React.FunctionComponent<PhotoFormProps> = () => {
    return (
        <Form>
            <FormGroup>
                <Label for='titleId'>Title</Label>
                <Input name='title' id='titleId' placeholder='Ef: Nature...' />
            </FormGroup>
            <FormGroup>
                <Label for='categoryId'>Category</Label>
                <Select
                    id='categoryId'
                    name='categoryId'
                    placeholder='What is your photo category?'
                    options={PHOTO_CATEGORY_OPTIONS}
                />
            </FormGroup>
            <FormGroup>
                <Label for='randomPhoto'>Photo</Label>
                <div>
                    <Button type='button' outline color='primary'>
                        Random a photo
                    </Button>
                </div>
                <div>
                    <img
                        width='200px'
                        height='200px'
                        src={Images.COLORFUL_BG}
                        alt='colorfulBackground'
                    />
                </div>
            </FormGroup>
            <FormGroup>
                <Button color='primary'>Add to album</Button>
            </FormGroup>
        </Form>
    );
};

export default PhotoForm;
