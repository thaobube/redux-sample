import * as React from 'react';
import Images from 'constants/images';
import Banner from 'components/Banner';
import { Container } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import PhotoList from 'features/Photo/components/PhotoList';
import { PhotoState, removePhoto } from 'features/Photo/photoSlice';

interface MainPageProps {}

const MainPage: React.FunctionComponent<MainPageProps> = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const photos = useAppSelector((state) => state.photos);
    // console.log('List of photos: ', photos);

    const handlePhotoEditClick = (photo: PhotoState) => {
        console.log('Edit: ', photo);
        const editPhotoUrl = `/photos/${photo.id}`;
        navigate(editPhotoUrl);
    };

    const handlePhotoRemoveClick = (photo: PhotoState) => {
        // console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    };

    return (
        <div className='photo-main'>
            <Banner title='Your awesome photo' backgroundUrl={Images.PINK_BG} />
            <Container className='text-center'>
                <div className='py-5'>
                    <Link to='/photos/add'>Add new photo</Link>
                </div>

                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    );
};

export default MainPage;
