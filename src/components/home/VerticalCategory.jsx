import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const CategoryItem = styled.div`
    height: 100%;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding-right: 16px;
`;

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

const GamesList = styled.div`
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
`;

const GameItem = styled(Link)`
    background-color: transparent;
    border-radius: 10px;

    display: grid;
    grid-template-columns: 2fr 6fr;
    align-items: center;
    gap: 8px;

    box-sizing: border-box;
    padding: 12px;

    &:hover,
    &:focus {
        background-color: #28282C;
    }
`;

const GameImage = styled.div`
    border-radius: 5px;
    height: 100%;
    width: 80%;

    background-size: cover;
    background-position: center;
`;

const GameInfo = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > * {
        font-weight: 600;
    }

    & > h2 {
        font-size: 1.3rem;
    }

    & > h3 {
        font-size: 1.15rem;
    }

    & > h4 {
        font-size: 0.95rem;
        color: #747474;
    }
`;

export default function VerticalCategory({ title, games, released }) {
    const collectionPath = title.replaceAll(' ', '-').toLowerCase();
    const sliceArrayAtIndex = Math.random() * 14;

    return (
        <CategoryItem>
            <HeadingContainer>
                <Heading to={`/collection/${collectionPath}`} aria-label='Heading' >
                    <Title>{title}</Title>
                    <ChevronRight />
                </Heading>
            </HeadingContainer>
            <GamesList>
                {games.slice(sliceArrayAtIndex, sliceArrayAtIndex + 5).map((game) => (
                    <GameItem key={game.name} to={`/game/${game.name.replaceAll(' ', '-').toLowerCase()}`}>
                        <GameImage style={{
                            backgroundImage: `url(${game.background_image})`
                        }} />
                        <GameInfo>
                            <h2>{game.name}</h2>
                            {released === false
                                ? game.release === undefined 
                                    ? (<h4>Coming Soon</h4>)
                                    : (<h4>{`Available ${game.release}`}</h4>)
                                : null
                            }
                            <h3>{`€${Math.round(Math.random() * Math.random() * 70)},99`}</h3>
                        </GameInfo>
                    </GameItem>
                ))}
            </GamesList>
        </CategoryItem>
    )
}

VerticalCategory.propTypes = {
    title: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired,
    released: PropTypes.bool
};