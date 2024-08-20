import { useLoaderData, Await, Link, useLocation } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";
import CollectionSkeleton from "./skeleton-loaders/CollectionSkeleton";

const Title = styled.h1`
    color: white;
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 36px;
`;

const GamesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: 550px;
    gap: 18px;
`;

const GameItem = styled(Link)`
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
        font-size: 1.1rem;
    }
`;


export default function CollectionPage() {
    const {title, gamesData} = useLoaderData();
    const location = useLocation();

    return (
        <div>
            <Title>{title}</Title>
            <Suspense fallback={<CollectionSkeleton />}>
                <Await resolve={gamesData}>
                    {(resolvedData) => (
                        <GamesGrid>
                            {resolvedData.map((game) => (
                                <GameItem to={`/game/${game.name.replaceAll(' ', '-').toLowerCase()}-${game.id}`} aria-label='Game item' key={game.id}>
                                    <GameImage style={{
                                        backgroundImage: `url(${game.background_image})`
                                    }}>
                                    </GameImage>
                                    <GameInfo>
                                        <h3>Base Game</h3>
                                        <h2>{game.name}</h2>
                                        <p>{location.pathname.includes('free') 
                                            ? 'Free' 
                                            : location.pathname.includes('upcoming')
                                                ? 'Coming Soon'
                                                : `€${Math.round(Math.random() * Math.random() * 70)},99`}</p>
                                    </GameInfo>
                                </GameItem>
                            ))}
                        </GamesGrid>
                    )}
                </Await>
            </Suspense>
        </div>
    )
}

