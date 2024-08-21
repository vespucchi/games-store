import { useLoaderData, Link, Form } from 'react-router-dom';
import styled from 'styled-components';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const Container = styled.div`
    height: auto;

    display: grid;
    grid-template-columns: 9fr 3fr;
    gap: 48px;
    margin-bottom: 40px;

    color: white;
`;

const Title = styled.h1`
    grid-column: span 2;
    font-size: 3rem;
    color: white;
`;

const GamesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const GameItem = styled.div`
    height: 250px;
    
    background-color: #202024;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 16px;

    display: flex;
    flex-direction: column;
    gap: 8px;

`;

const GameInfo = styled.div`
    width: 100%;
    height: 80%;
    display: grid;
    grid-template-columns: 1fr 7fr;
    gap: 32px;
`;

const Image = styled(Link)`
    background-size: cover;
    background-position: center;

    border-radius: 5px;

    min-width: 125px;
`;

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Info = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: space-between;
`;

const GameTitle = styled(Link)`
    font-size: 1.4rem;
    font-weight: 700;
    height: fit-content;
    width: fit-content;
    cursor: pointer;
`;

const GamePrice = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
`;

const GenresButtons = styled.div`
    display: flex;
    gap: 8px;
`;

const Genre = styled.p`
    background-color: #343437;
    padding: 4px 6px;
    border-radius: 5px;
    font-weight: 600;
`;

const Website = styled(Link)`
    font-weight: 600;
    font-size: 1rem;

    display: flex;
    align-items: center;
    gap: 8px;
`;

const HrLine = styled.hr`
    width: 100%;
    border-top: 1px solid #ffffff22;
`;

const GameBtns = styled(Form)`
    margin-left: auto;

    display: flex;
    gap: 24px;
`;

const RemoveBtn = styled.button`
    background-color: transparent;
    color: #ffffffa5;
    font-size: 1.1rem;
    font-weight: 600;

    cursor: pointer;
`;

const CartBtn = styled.button`
    background-color: #26BBFF;
    color: #ffffffa5;
    font-size: 1.1rem;
    font-weight: 600;
    color: #07212D;
    border-radius: 5px;

    padding: 5px 8px;

    cursor: pointer;


    &:hover {
        background-color: #61CDFF;
    }
`;

const CartLink = styled(Link)`
    background-color: #26BBFF;
    color: #ffffffa5;
    font-size: 1.1rem;
    font-weight: 600;
    color: #07212D;
    border-radius: 5px;

    padding: 5px 8px;

    cursor: pointer;


    &:hover {
        background-color: #61CDFF;
    }
`;

const FiltersContainer = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

const FiltersTitle = styled.h2`
    width: 100%;
    font-weight: 800;
    font-size: 1.5rem;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
`;

const Filters = styled.div`
    width:  95%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FilterGroup = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    box-sizing: border-box;
    padding: 20px 0px;

`;

const FilterType = styled.button`
    font-size: 1.2rem;
    font-weight: 600;
    background-color: transparent;
    color: white;
    width: 100%;
    
    display: flex;
    justify-content: space-between;

    cursor: pointer;
`;

const FilterItems = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const FilterItem = styled.button`
    width: 100%;
    padding: 15px;
    text-align: start;
    background-color: transparent;
    color: #747474;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;

    border-radius: 5px;

    &:hover {
        background-color: #353535;
    }

    &.active {
        background-color: #353535;
        color: white;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

const ArrowDown = styled(ChevronDown)`
    transition: transform 0.5s;

    &.active {
        transform: rotate(0.5turn);
    }
`;

const FiltersResetBtn = styled.button`
    background-color: transparent;
    color: #26BBFF;
    font-size: 1.1rem;

    cursor: pointer;
`;


export default function WishlistPage() {
    const data = useLoaderData();
    const [genreVisible, setGenreVisible] = useState(false);
    const [platformVisible, setPlatformVisible] = useState(false);
    const [activeFilters, setActiveFilters] = useState([]);

    // get all genres of all games in the wishlist into single array and then create new Set of unique values
    const genres = [...new Set(data.gamesData.map((game) => game.genres.map((genre) => genre.name)).flat(1))];
    const filteredGames = data.gamesData.filter((game) => game.genres.some((genre) => activeFilters.includes(genre.name)));

    const gamesList = activeFilters.length === 0 ? data.gamesData : filteredGames;
    console.log(gamesList)

    const toggleFilterType = (e) => {
        const filterType = e.target.closest('button');

        if (filterType.value === 'genre') {
            setGenreVisible(!genreVisible);
        } else if (filterType.value === 'platform') {
            setPlatformVisible(!platformVisible);
        }
    };

    const toggleFilter = (e) => {
        const filterItem = e.target.value;
        if (!activeFilters.includes(filterItem)) {
            setActiveFilters([...activeFilters, filterItem]);
        } else {
            const newActiveFilters = activeFilters.filter((filter) => filter !== filterItem);
            setActiveFilters([...newActiveFilters]);
        }
    };

    return (
        <Container>
            <Title>My Wishlist</Title>
            {data.gamesData.length !== 0 &&
                <>
                    <GamesList>
                    {gamesList.map((game, index) => (
                        <GameItem key={index} >
                            <GameInfo>
                                <Image style={{backgroundImage: `url(${game.background_image})`}}
                                    to={`../game/${game.name.replaceAll(' ', '-').toLowerCase()}-${game.id}`}/>
                                <RightSide>
                                    <Info>
                                        <GameTitle to={`../game/${game.name.replaceAll(' ', '-').toLowerCase()}-${game.id}`}>{game.name}</GameTitle>
                                        <GamePrice>{game.price}</GamePrice>
                                    </Info>
                                    <Info>
                                        <GenresButtons>
                                            {game.genres.map((genre) => (
                                                <Genre key={genre.id}>{genre.name}</Genre>
                                            ))}
                                        </GenresButtons>
                                    </Info>
                                    <Info>
                                        <svg width="24px" height="24px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier"> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7439.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M13.1458647,7289.43426 C13.1508772,7291.43316 13.1568922,7294.82929 13.1619048,7297.46884 C16.7759398,7297.95757 20.3899749,7298.4613 23.997995,7299 C23.997995,7295.84873 24.002005,7292.71146 23.997995,7289.71311 C20.3809524,7289.71311 16.7649123,7289.43426 13.1458647,7289.43426 M4,7289.43526 L4,7296.22153 C6.72581454,7296.58933 9.45162907,7296.94113 12.1724311,7297.34291 C12.1774436,7294.71736 12.1704261,7292.0908 12.1704261,7289.46524 C9.44661654,7289.47024 6.72380952,7289.42627 4,7289.43526 M4,7281.84344 L4,7288.61071 C6.72581454,7288.61771 9.45162907,7288.57673 12.1774436,7288.57973 C12.1754386,7285.96017 12.1754386,7283.34361 12.1724311,7280.72405 C9.44461153,7281.06486 6.71679198,7281.42567 4,7281.84344 M24,7288.47179 C20.3879699,7288.48578 16.7759398,7288.54075 13.1619048,7288.55175 C13.1598997,7285.88921 13.1598997,7283.22967 13.1619048,7280.56914 C16.7689223,7280.01844 20.3839599,7279.50072 23.997995,7279 C24,7282.15826 23.997995,7285.31353 24,7288.47179" id="windows-[#ffffff]"> </path> </g> </g> </g> </g>
                                        </svg>
                                    </Info>
                                    <Info>
                                        <Website to={game.website} target="_blank" rel="noopener noreferrer">Website <ExternalLink size={16} /></Website>
                                    </Info>
                                </RightSide>
                            </GameInfo>
                            <HrLine />
                            <GameBtns method='post' action='./'>
                                <RemoveBtn type='submit' name='remove-wishlist' value={JSON.stringify(game)}>Remove</RemoveBtn>
                                {data.cartIds ? data.cartIds.includes(game.id)
                                        ? <CartLink to='../cart'>View In Cart</CartLink>
                                        : <CartBtn type='submit' name='add-cart' value={JSON.stringify(game)}>Add To Cart</CartBtn>
                                    : <CartBtn type='submit' name='add-cart' value={JSON.stringify(game)}>Add To Cart</CartBtn>
                                }
                            </GameBtns>
                        </GameItem>
                    ))}
                    </GamesList>
                    
                    <FiltersContainer>
                            <FiltersTitle>Filters {activeFilters.length !== 0 && `(${activeFilters.length})`}
                                {activeFilters.length !== 0 && (<FiltersResetBtn onClick={() => setActiveFilters([])}>reset</FiltersResetBtn>)}
                            </FiltersTitle>
                            <Filters>
                                <HrLine />
                                <FilterGroup>
                                    <FilterType onClick={(e) => toggleFilterType(e)} value='genre'>Genre <ArrowDown className={genreVisible && 'active'}/></FilterType>
                                    {genreVisible &&
                                        <FilterItems>
                                            {genres.map((genre, index) => (
                                                <FilterItem key={index} 
                                                    onClick={(e) => toggleFilter(e)} 
                                                    value={genre}
                                                    className={activeFilters.includes(genre) && 'active'}
                                                    >{genre}</FilterItem>
                                            ))}
                                        </FilterItems>
                                    }
                                </FilterGroup>
                                <HrLine />
                                <FilterGroup>
                                <FilterType onClick={(e) => toggleFilterType(e)} value='platform'>Platform <ArrowDown className={platformVisible && 'active'} /></FilterType>
                                    {platformVisible &&
                                        <FilterItems>
                                                <FilterItem disabled>Windows</FilterItem>
                                        </FilterItems>
                                    }
                                </FilterGroup>
                                <HrLine />
                            </Filters>
                    </FiltersContainer>
                </>
            }
        </Container>
    )
}
