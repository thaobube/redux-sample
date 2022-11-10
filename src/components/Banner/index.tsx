import * as React from 'react';
import './Banner.scss';

interface BannerProps {
    title: string;
    backgroundUrl: string;
}

const Banner: React.FunctionComponent<BannerProps> = ({ title, backgroundUrl }: BannerProps) => {
    const bannerStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : {};
    return (
        <section className='banner' style={bannerStyle}>
            <h1 className='banner__title'>{title}</h1>
        </section>
    );
};

export default Banner;
