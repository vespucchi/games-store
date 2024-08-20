import React, { useState } from 'react';
import { Outlet, Link, useLoaderData, Form, redirect, useNavigation, useSubmit, } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const HeadingContainer = styled.div`
    color: white;
    width: 100%;
`;

const Heading = styled(Link)`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 4px;

    & > svg {
        transition: transform 0.1s ease-in;
    }

    &:hover > svg {
        transform: translateX(4px);
    }
`;

const Title = styled.h1`
    font-size: 1.5rem;
`;

const GamesCarouselSwiper = styled.div`
    min-height: 400px;

    --gap: 16px;

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
    gap: 8px;

    &:hover > *,
    &:focus > * {
        color: #d3d3d3;
    }
`;

const GameImage = styled.div`
    border-radius: 10px;
    background-size: cover;
    background-position: center;

    &:hover,
    &:focus {
        opacity: 0.9;
    }
`;

const GameInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

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
    const sliceArrayAtIndex = Math.random() * 14;

    return (
        <Container aria-label={title}>
            <HeadingContainer>
                <Heading to={`/browse/collection/${collectionPath}`} aria-label='Heading' >
                    <Title>{title}</Title>
                    <ChevronRight size={30} />
                </Heading>
            </HeadingContainer>

            <GamesCarouselSwiper aria-label='Games carousel swiper slider' id='swiper-slider'>
                {games.slice(sliceArrayAtIndex, sliceArrayAtIndex + 6).map((game) => (
                    <GarouselItem to={`/game/${game.name.replaceAll(' ', '-').toLowerCase()}-${game.id}`} aria-label='Game item' key={game.id}>
                        <GameImage style={{
                            backgroundImage: `url(${game.background_image})`
                        }} />
                        <GameInfo>
                            <h3>Base Game</h3>
                            <h2>{game.name}</h2>
                            <p>{game.price}</p>
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