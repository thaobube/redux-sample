import { PhotoState } from 'features/Photo/photoSlice';
import * as React from 'react';
import { Col, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';

interface PhotoListProps {
    photoList: PhotoState[];
    onPhotoEditClick: (...args: any[]) => void;
    onPhotoRemoveClick: (...args: any[]) => void;
}

const PhotoList: React.FunctionComponent<PhotoListProps> = ({
    photoList,
    onPhotoEditClick,
    onPhotoRemoveClick,
}: PhotoListProps) => {
    return (
        <Row>
            {photoList.map((photo) => (
                <Col key={photo.title} xs='12' md='6' lg='3'>
                    <PhotoCard
                        photo={photo}
                        onEditClick={onPhotoEditClick}
                        onRemoveClick={onPhotoRemoveClick}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default PhotoList;
