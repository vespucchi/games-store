import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './css-modules/home-helper.module.css';

const GridContainer = styled.div`
    max-height: 700px;
    height: 70vh;
    display: grid;
    grid-template-columns: 8fr 2fr;
`;

const SelectedGame = styled.div`
    height: inherit;
    width: 95%;
    box-sizing: border-box;
    padding: 20px;
    margin: auto;
    border-radius: 15px;

    cursor: pointer;

    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;

    &:hover {
        transform: scale(1.01);
    }
`;

// const ActiveImage = styled.img`
//     background-size: cover;
//     background-position: center;
//     width: 100%;
//     height: 100%;
// `;

const GamesQueue = styled.div`
    height: 100%;
    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    gap: 1%;
`

const QueueImage = styled.div`
    height: 100%;
    width: 70%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover; 

    border-radius: 5px;
`;

const QueueGameButton = styled.button`
    display: grid;
    grid-template-columns: 2fr 4fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: start;

    box-sizing: border-box;
    padding: 4% 5%;

    cursor: pointer;

    height: 100%;
    width: 100%;
    
    border-radius: 10px;
    overflow: hidden;

    color: #FAFAFA;
    font-weight: 600;
    background-color: transparent;

    position: relative;
    z-index: 1;


    &:hover,
    &:focus {
        background-color: #28282C;
    }

    &:hover > ${QueueImage},
    &:focus > ${QueueImage} {
        transform: scale(1.05);
    }
`;





export default function HomeSlider({ games }) {
    const [activeGameIndex, setActiveGameIndex] = useState(0);

    useEffect(() => {
        const activeTimeout = setTimeout(() => {
            if (activeGameIndex === games.length - 1) setActiveGameIndex(0);
            else setActiveGameIndex(currentIndex => currentIndex + 1);
        }, 5000);
        return (() => clearTimeout(activeTimeout));
    }, [activeGameIndex, games]);

    return (
        <GridContainer>
            {/* TO DO: on click open game in store */}
            <SelectedGame role='button' aria-label='Selected game tab in carousal' id={`tab-${activeGameIndex}`} style={{ backgroundImage: `url(${games[activeGameIndex].image})` }} />

            <GamesQueue role='tablist' aria-label='Games tabs in carousal'>
                {games.map((game, index) => (
                    <QueueGameButton key={game.title} role="tab" aria-selected={activeGameIndex === index ? true : false} aria-label={`tab-${index}`} onClick={() => setActiveGameIndex(index)}>
                        <QueueImage style={{ backgroundImage: `url(${game.image})` }} />
                        {game.title}
                        {activeGameIndex === index ? <div className={styles.carouselProgress}></div> : null}
                    </QueueGameButton>
                ))}
            </GamesQueue>
        </GridContainer>
    )
}

HomeSlider.propTypes = {
    games: PropTypes.array.isRequired,
};
