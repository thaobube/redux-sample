import { useAppDispatch } from 'app/hooks';
import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto } from 'features/Photo/photoSlice';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

interface AddEditPageProps {}

const AddEditPage: React.FunctionComponent<AddEditPageProps> = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleSubmit = (values: any) => {
        // Fake loading API by returning a promise
        return new Promise((resolve) => {
            // console.log('values: ', values);
            setTimeout(() => {
                const action = addPhoto(values);
                // console.log('action: ', action); // payload: {title: 'Test2', categoryId: 1, photo: 'https://picsum.photos/id/867/300/300'; type: "photo/addPhoto"
                dispatch(action);

                navigate('/photos');
                resolve(true);
            }, 1000);
        });
    };

    return (
        <div>
            <Banner title='Pick your amazing photo' backgroundUrl={Images.ORANGE_BG} />
            <div className='photo-edit__form'>
                <PhotoForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default AddEditPage;
