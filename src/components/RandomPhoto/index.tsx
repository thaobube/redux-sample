import * as React from 'react';
import { Button } from 'reactstrap';

interface RandomPhotoProps {
    name: string;
    imageUrl: string;
    onImageUrlChange: (...args: any[]) => void;
    onRandomButtonBlur: (...args: any[]) => void;
}

const defaultPropValues = {
    name: '',
    imageUrl: '',
    onImageUrlChange: null,
    onRandomButtonBlur: null,
};

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
};

const RandomPhoto: React.FunctionComponent<RandomPhotoProps> = ({
    name,
    imageUrl,
    onImageUrlChange,
    onRandomButtonBlur,
}: RandomPhotoProps) => {
    const handleRandomPhotoClick = async () => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl);
        }
    };
    return (
        <div className='random-photo'>
            <div className='random-photo__button'>
                <Button
                    outline
                    name={name}
                    color='primary'
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
                </Button>
            </div>
            <div className='random-photo__photo'>
                {imageUrl && (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                        src={imageUrl}
                        alt='Not found image. Please click to random again.'
                        onError={handleRandomPhotoClick}
                    />
                )}
            </div>
        </div>
    );
};

export default RandomPhoto;
