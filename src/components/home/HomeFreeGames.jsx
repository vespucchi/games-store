import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
   width: 95%;
   height: 500px;
   background-color: #202024;
   border-radius: 20px;
   margin-left: auto;
   margin-right: auto;

   box-sizing: border-box;
   padding: 2%;

   display: flex;
   flex-direction: column;
   gap: 6%;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Heading = styled.h1`
    color: white;
    font-size: 1.5rem;
`;

const ViewMoreBtn = styled(Link)`
    background-color: transparent;
    border: 1px solid #808080;
    border-radius: 10px;

    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 10px;

    &:hover,
    &:focus {
        background-color: #414145;
    }
`;

const CardsContainer = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    gap: 20px;
`;

const CardItem = styled(Link)`
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    gap: 10px;

    cursor: pointer;

    &:hover > *,
    &:focus > * {
        color: #d3d3d3;
    }
`;

const CardImage = styled.div`
    border-radius: 10px;
    overflow: hidden;

    position: relative;

    &:hover,
    &:focus {
        opacity: 0.9;
    }
`;

const GameFree = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #26BBFF;
    color: white;
    font-weight: 600;

    box-sizing: border-box;
    padding: 5px;

    text-align: center;
    margin-top: auto;

    position: absolute;
    bottom: 0;
`;

const GameSoon = styled(GameFree)`
    background-color: black;
`;

const CardTitle = styled.h2`
    color: white;
    font-size: 1.2rem;
`;

const CardInfo = styled.p`
    color: #B1B1B3;
    font-size: 1.1rem;
    font-weight: 600;
`;

export default function HomeFreeGames({ games }) {
    return (
        <Container>
            <Header>
                <Heading>Free Games</Heading>
                <ViewMoreBtn to='/collection/free-games'>View More</ViewMoreBtn>
            </Header>
            <CardsContainer>
                {games.slice(0, 3).map((game) => (
                    <CardItem to={`/game/${game.title}`} aria-label='Game item' key={game.title}>
                        <CardImage style={{
                            backgroundImage: `url(${game.image})`
                        }}>
                            <GameFree>FREE NOW</GameFree>
                        </CardImage>
                        <CardTitle>{game.title}</CardTitle>
                        <CardInfo>Free Now - Aug 15</CardInfo>
                    </CardItem>
                ))}
                {games.slice(-2).map((game) => (
                    <CardItem to={`/game/${game.title}`} aria-label='Game item' key={game.title}>
                        <CardImage style={{
                            backgroundImage: `url(${game.image})`
                        }}>
                            <GameSoon>COMING SOON</GameSoon>
                        </CardImage>
                        <CardTitle>{game.title}</CardTitle>
                        <CardInfo>Free Aug 15 - Aug 22</CardInfo>
                    </CardItem>
                ))}
            </CardsContainer>
        </Container>
    )
}

HomeFreeGames.propTypes = {
    games: PropTypes.array.isRequired,
};