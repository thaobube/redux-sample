import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
            <p>Photo AddEdit Page</p>
            <p>{message}</p>
            <button onClick={() => navigate('/')}>Go to Main page</button>
        </div>
    );
};

export default AddEditPage;
