import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface AddEditPageProps {}

const AddEditPage: React.FunctionComponent<AddEditPageProps> = () => {
    const [message, setMessage] = useState('');
    const { id } = useParams();

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
        </div>
    );
};

export default AddEditPage;
