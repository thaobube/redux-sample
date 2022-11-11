import { PhotoState } from 'features/Photo/photoSlice';
import * as React from 'react';
import { Button } from 'reactstrap';
import './PhotoCard.scss';

interface PhotoCardProps {
    photo: PhotoState;
    onEditClick: (...args: any[]) => void;
    onRemoveClick: (...args: any[]) => void;
}

const PhotoCard: React.FunctionComponent<PhotoCardProps> = ({
    photo,
    onEditClick,
    onRemoveClick,
}: PhotoCardProps) => {
    const handleEditClick = () => {
        if (onEditClick) {
            onEditClick(photo);
        }
    };
    const handleRemoveClick = () => {
        if (onRemoveClick) {
            onRemoveClick(photo);
        }
    };
    return (
        <div className='photo'>
            <img src={photo.photo} alt={photo.title} />

            <div className='photo__overlay'>
                <h3 className='photo__title'>{photo.title}</h3>

                <div className='photo__actions'>
                    <div>
                        <Button outline size='sm' color='light' onClick={handleEditClick}>
                            Edit
                        </Button>
                    </div>

                    <div>
                        <Button outline size='sm' color='danger' onClick={handleRemoveClick}>
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoCard;
