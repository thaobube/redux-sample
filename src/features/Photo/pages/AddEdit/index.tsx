import { useAppDispatch, useAppSelector } from 'app/hooks';
import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { randomNumber } from 'utils/common';
import './styles.scss';

interface AddEditPageProps {}

const AddEditPage: React.FunctionComponent<AddEditPageProps> = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { photoId } = useParams();

    const isAddMode: boolean = !photoId;
    const editedPhoto = useAppSelector((state) =>
        state.photos.find((photo) => photo.id?.toString() === photoId),
    );

    const initialValues = isAddMode
        ? {
              title: '',
              categoryId: 0,
              photo: '',
          }
        : editedPhoto;

    const handleSubmit = (values: any) => {
        // Fake loading API by returning a promise
        return new Promise((resolve) => {
            setTimeout(() => {
                if (isAddMode) {
                    const newPhoto = {
                        ...values,
                        id: randomNumber(10000, 99999),
                    };
                    const action = addPhoto(newPhoto);
                    // console.log('action: ', action); // payload: {title: 'Test2', categoryId: 1, photo: 'https://picsum.photos/id/867/300/300'; type: "photo/addPhoto"
                    dispatch(action);
                } else {
                    // Do something here
                    const action = updatePhoto(values);
                    dispatch(action);
                }

                navigate('/photos');
                resolve(true);
            }, 1000);
        });
    };

    return (
        <div>
            <Banner title='Pick your amazing photo' backgroundUrl={Images.ORANGE_BG} />
            <div className='photo-edit__form'>
                {initialValues !== undefined ? (
                    <PhotoForm
                        onSubmit={handleSubmit}
                        initialValues={initialValues}
                        isAddMode={isAddMode}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default AddEditPage;
