import * as React from 'react';
import Images from 'constants/images';
import Banner from 'components/Banner';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

interface MainPageProps {}

const MainPage: React.FunctionComponent<MainPageProps> = () => {
    return (
        <div className='photo-main'>
            <Banner title='Your awesome photo' backgroundUrl={Images.PINK_BG} />
            <Container className='text-center'>
                <Link to='/photos/add'>Add new photo</Link>
            </Container>
        </div>
    );
};

export default MainPage;
