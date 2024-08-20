import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import CarouselSlider from './CarouselSlider';

const Container = styled.div`
    width: 100%;
    min-height: 50%;
    height: fit-content;
    color: white;
    box-sizing: border-box;
    padding: 0% 2%;

    display: flex;
    flex-direction: column;
    gap: 16px;

    & * {
        font-size: 1.2rem;
    }
`;

const Desc = styled.p`
    margin-top: 30px;
    font-size: 1.1rem;
    font-weight: 600;
`;

const GenresContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    & p {
        font-weight: 600;
        color: #747474;
    }
`;

const GenresButtons = styled.div`
    display: flex;
    gap: 8px;
`;

const Genre = styled(Link)`
    background-color: #343437;
    padding: 4px 6px;
    border-radius: 5px;
    font-weight: 600;
`;


export default function GameOverview({ gameInfo }) {

    return (
        <Container>
            <CarouselSlider images={gameInfo.screenshots} />
            <Desc>{gameInfo.data.description_raw}</Desc>
            <GenresContainer>
                <p>Genres</p>
                <GenresButtons>
                    {gameInfo.data.genres.map((genre) => (
                        <Genre key={genre.id} >{genre.name}</Genre>
                    ))}
                </GenresButtons>
            </GenresContainer>
        </Container>
    )
}

GameOverview.propTypes = {
    gameInfo: PropTypes.object.isRequired
};
