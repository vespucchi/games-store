import React, { useState } from 'react';
import { Outlet, Link, useLoaderData, Form, redirect, useNavigation, useSubmit, } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Heading = styled.div`
    color: white;
    width: 100%;

    display: flex;
    align-items: center;

    & > h1 {
        font-size: 1.5rem;
    }

    & > div {
        margin-left: auto;
        display: flex;
        gap: 10px;
    }
`;

const Title = styled.h1`
    font-size: 1.5rem;
`;

const GamesCarouselSwiper = styled.div`
    min-height: 400px;

    --gap: 15px;

    display: grid;
    grid-template-columns: repeat(6, calc(calc(100% - calc(var(--gap) * 5))/ 6));
    grid-auto-columns: calc(calc(100% - calc(var(--gap) * 5))/ 6);
    grid-auto-flow: column;
    align-items: center;
    gap: var(--gap);

    overflow: hidden;
`;

const GarouselItem = styled(Link)`
    box-sizing: content-box;
    height: 95%;
    border-radius: 10px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 1fr;
    gap: 10px;

    &:hover > *,
    &:focus > * {
        color: #d3d3d3;
    }
`;

const GameImage = styled.div`
    border-radius: 10px;

    &:hover,
    &:focus {
        opacity: 0.9;
    }
`;

const GameInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    color: white;
    padding: 0px 10px 10px 10px;

    & > h2 {
        font-size: 1.2rem;
    }

    & > h3 {
        font-size: 1rem;
        color: #747474;
    }

    & > p {
        font-weight: 600;
        margin-top: auto;
    }
`;

export default function CarouselSwiperSlider({ games, title }) {
    const collectionPath = title.replaceAll(' ', '-').toLowerCase();

    return (
        <Container aria-label={title}>
            <Heading aria-label='Heading' >
                <Link to={`/collection/${collectionPath}`}>
                    <Title>{title}</Title>
                </Link>
                {/* TODO: add arrow icon */}
            </Heading>

            <GamesCarouselSwiper aria-label='Games carousel swiper slider' id='swiper-slider'>
                {games.map((game) => (
                    <GarouselItem to={`/game/${game.title}`} aria-label='Game item' key={game.title}>
                        <GameImage style={{
                            backgroundImage: `url(${game.image})`
                        }} />
                        <GameInfo>
                            <h3>Base Game</h3>
                            <h2>{game.title}</h2>
                            <p>€9,99</p>
                        </GameInfo>
                    </GarouselItem>
                ))}
            </GamesCarouselSwiper>
        </Container>
    )
}

CarouselSwiperSlider.propTypes = {
    games: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};