import * as React from 'react';
import { Outlet } from 'react-router-dom';

interface PhotoProps {}

const Photo: React.FunctionComponent<PhotoProps> = () => {
    return (
        <div style={{ border: 2, borderColor: 'red', borderStyle: 'solid' }}>
            <Outlet />
        </div>
    );
};

export default Photo;
