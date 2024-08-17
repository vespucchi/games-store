import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

const CarousalContainer = styled.div`
    width: 100%;
    height: 80%;
    margin-top: -30px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 7fr 1fr;
    gap: 24px;
`;

const ActiveImage = styled.div`
    max-height: 500px;
    height: 70vh;
    width: 100%;
    border-radius: 15px;

    background-size: cover;
    background-position: center;

    position: relative;
    z-index: 0;

    &:hover > div {
        visibility: visible;
        opacity: 1;
    }

    &:hover button {
        visibility: visible;
        opacity: 1;
    }

    &:hover button:nth-of-type(1) {
        left: 2%;
    }

    &:hover button:nth-of-type(2) {
        right: 2%;
    }
`;

const ActiveImageOverlay = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    visibility: hidden;
    background: linear-gradient(90deg, #0000003e 0%, transparent 15%, transparent 85%, #0000003e 100%);
    transition: opacity 0.1s ease-in;
    opacity: 0.5;
`;

const ActiveImageButton = styled.button`
    position: absolute;
    z-index: 2;
    visibility: hidden;
    background-color: transparent;
    opacity: 0.5;

    cursor: pointer;
`

const ActiveImageButtonLeft = styled(ActiveImageButton)`
    left: 0%;
    top: 50%;
    transition: left 0.1s ease-in, opacity 0.1s ease-in;
`;

const ActiveImageButtonRight = styled(ActiveImageButton)`
    right: 0%;
    top: 50%;
    transition: right 0.1s ease-in, opacity 0.1s ease-in;

`;

const QueueContainer = styled.div`
    width: 100%;
`;

const Queue = styled.div`
    width: 60%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 90%;
    gap: 8px;
    margin: auto;
`;

const QueueItem = styled.button`
    height: 100%;
    width: 100%;
    border-radius: 5px;

    background-size: cover;
    background-position: center;

    cursor: pointer;

    opacity: 0.5;

    &.active {
        border: 1px solid white;
        opacity: 1;
    }
`;

export default function CarouselSlider({ images }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        if (images.length > 5) {
            images.splice(5, images.length - 6);
        }
    }, [images]);
    
    return (
        <CarousalContainer>
            <ActiveImage style={{ backgroundImage: `url('${images[activeImageIndex].image}')` }}>
                <ActiveImageOverlay>
                    <ActiveImageButtonLeft onClick={() => activeImageIndex === 0 ? setActiveImageIndex(4) : setActiveImageIndex(currentIndex => currentIndex - 1)} >
                        <ChevronLeft color="#ffffff" size={36} />
                    </ActiveImageButtonLeft>
                    <ActiveImageButtonRight onClick={() => activeImageIndex === 4 ? setActiveImageIndex(0) : setActiveImageIndex(currentIndex => currentIndex + 1)}>
                        <ChevronRight color="#ffffff" size={36} />
                    </ActiveImageButtonRight>
                </ActiveImageOverlay>
            </ActiveImage>
            <QueueContainer>
                <Queue>
                    {images.map((img, index) => (
                        <QueueItem style={{ backgroundImage: `url('${img.image}')` }} className={index === activeImageIndex ? 'active' : null} key={index} onClick={() => setActiveImageIndex(index)} />
                    ))}
                </Queue>
            </QueueContainer>
        </CarousalContainer>
    )
}

CarouselSlider.propTypes = {
    images: PropTypes.array.isRequired
};
