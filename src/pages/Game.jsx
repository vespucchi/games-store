import { useEffect, Suspense } from 'react';
import styled from 'styled-components';
import { useLoaderData, Await } from 'react-router-dom';
import GameOverview from '../components/game/GameOverview';
import GameRequirements from '../components/game/GameRequirements';
import GameSidebar from '../components/game/GameSidebar';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import SkeletonLoader from './skeleton-loaders/GameSkeleton';

const Container = styled.div`
    min-height: 100vh;
    height: auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    row-gap: 50px;
    column-gap: 70px;

    margin-bottom: 40px;

`;

const Heading = styled.div`
    height: fit-content;
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    gap: 4px;

    color: white;
`;

const Title = styled.h1`
    font-size: 3rem;
`;

const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    & p {
        font-weight: 600;
        font-size: 1.1rem;
    }
`;

const RatingStars = styled(Rating)`
    transform: scale(1.3);
    left: 0;
    margin-left: 10px;

    color: white !important;
`;

const SkeletonContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: start;
`

let gamePrice;

export default function GamePage() {
    const data = useLoaderData();

    useEffect(() => {
        gamePrice = `€${Math.round(Math.random() * Math.random() * 70)},99`;
    }, []);
    
    return (
            <Suspense fallback={
                <SkeletonContainer>
                    <SkeletonLoader />
                </SkeletonContainer>
                }>
                <Await resolve={data.gameInfo}>
                    {
                        (resolvedGameInfo) => (
                            <Container>
                                {console.log(resolvedGameInfo)}

                                <Heading>
                                    <Title>{resolvedGameInfo.data.name}</Title>
                                    <RatingContainer>
                                        <RatingStars
                                            name="text-feedback"
                                            value={resolvedGameInfo.data.rating}
                                            readOnly
                                            precision={0.1}
                                            size="large"
                                            emptyIcon={<StarIcon style={{ color: '#ffffff', opacity: 0.3 }} fontSize="inherit" />}
                                        />
                                        <p>{(Math.round(resolvedGameInfo.data.rating * 10) / 10).toFixed(1)}</p>
                                    </RatingContainer>
                                </Heading>
                                <GameOverview gameInfo={resolvedGameInfo} />
                                <GameSidebar gameInfo={{...resolvedGameInfo.data, price: gamePrice}} />
                                <GameRequirements gameInfo={resolvedGameInfo} />
                            </Container>
                        )
                    }
                </Await>
            </Suspense>
    )
}

GamePage.propTypes = {
};