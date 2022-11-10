import * as React from 'react';
import { Outlet } from 'react-router-dom';

interface PhotoProps {}

const Photo: React.FunctionComponent<PhotoProps> = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Photo;
