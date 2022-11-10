import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoForm from 'features/Photo/components/PhotoForm';
import './styles.scss';

interface AddEditPageProps {}

const AddEditPage: React.FunctionComponent<AddEditPageProps> = () => {
    const [message, setMessage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            setMessage(`The id number is ${id}`);
        } else {
            setMessage('There is no id provided');
        }
    }, [id]);
    console.log('params: ', id);
    return (
        <div>
            <Banner title='Pick your amazing photo' backgroundUrl={Images.ORANGE_BG} />
            <div className='photo-edit__form'>
                <PhotoForm />
            </div>
            <p>{message}</p>
            <button onClick={() => navigate('/')}>Go to Main page</button>
        </div>
    );
};

export default AddEditPage;
