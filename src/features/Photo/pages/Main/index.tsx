import * as React from 'react';
import Images from 'constants/images';
import Banner from 'components/Banner';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';

interface MainPageProps {}

const MainPage: React.FunctionComponent<MainPageProps> = () => {
    const photos = useAppSelector((state) => state.photos);
    console.log('List of photos: ', photos);

    return (
        <div className='photo-main'>
            <Banner title='Your awesome photo' backgroundUrl={Images.PINK_BG} />
            <Container className='text-center'>
                <div className='py-5'>
                    <Link to='/photos/add'>Add new photo</Link>
                </div>
            </Container>
        </div>
    );
};

export default MainPage;
