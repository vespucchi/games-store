import { useLoaderData, Await, Link } from "react-router-dom";
import { Suspense, useEffect, useState, useReducer } from "react";
import styled from "styled-components";
import { ChevronDown } from 'lucide-react';
import CollectionSkeleton from "./skeleton-loaders/CollectionSkeleton";

const OrderContainer = styled.div`
    width: max-content;
    gap: 16px;

    display: flex;
    align-items: center;

`;

const OrderText = styled.p`
    width: 100%;
    font-weight: 600;
    font-size: 1.1rem;
    color: #929292;
`;

const OrderDropdown = styled.div`
    width:  auto;
    display: flex;
    align-items: center;
    gap: 4px;

    border-radius: 5px;
    background-color: transparent;
    color: white;
    font-weight: 600;

    cursor: pointer;

    position: relative;
    box-sizing: border-box;
    padding: 5px 10px;

    & p {
        width: max-content;
    }

    &:hover {
        background-color: #202020;
    }
`;

const OrderList = styled.div`
    position: absolute;
    z-index: 1;

    left: 0;
    top: 110%;

    width: max-content;
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    padding: 5px;
    border-radius: 5px;
    background-color: #303034;
`;

const OrderItem = styled.button`
    width: 100%;
    color: white;
    text-align: start;

    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;

    font-weight: 600;
    background-color: transparent;

    cursor: pointer;

    &:hover {
        background-color: #4d4d4d;
    }
`;

const Container = styled.div`
    margin-top: -20px;
    height: auto;

    display: grid;
    grid-template-columns: 9fr 2fr;
    gap: 48px;
    margin-bottom: 40px;

    color: white;
`;

const Title = styled.h1`
    grid-column: span 2;
    font-size: 3rem;
    color: white;
`;

const GamesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: 400px;
    grid-auto-rows: 400px;
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

const HrLine = styled.hr`
    width: 100%;
    border-top: 1px solid #ffffff22;
`;

const PageContainer = styled.div`
    width: 100%;
    height: 50px;
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

const PageNumber = styled.button`
    cursor: pointer;
    color: #747474;
    background-color: transparent;
    font-weight: 600;
    font-size: 1.2rem;

    &.active {
        color: white;
    }
`;

let genres, filteredGames;

export default function BrowsePage() {
    const data = useLoaderData(null);
    const [genreVisible, setGenreVisible] = useState(false);
    const [platformVisible, setPlatformVisible] = useState(false);
    const [activeFilters, setActiveFilters] = useState([]);
    const [activeOrderType, setActiveOrderType] = useState('All');
    const [gamesList, dispatch] = useReducer(reducer, { orderedList: []});
    const [orderVisible, setOrderVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const gamesListLength = gamesList.orderedList.length;
    let pages = [...Array(gamesListLength / 20 < 1 ? 1 : Math.ceil(gamesListLength / 20)).keys()].map(i => i + 1);

    function reducer(state, action) {
        switch (action.type) {
            case 'All': {
                return {
                    orderedList: [...action.gamesList],
                };
            }
            case 'Alphabetically': {
                const orderedList = action.gamesList.sort((a, b) => a.slug.localeCompare(b.slug))
                return {
                    orderedList: [...orderedList],
                };
            }
            case 'New Release': {
                const orderedList = action.gamesList.sort((a, b) => {
                    const aSplitDate = a.released.split('-');
                    const bSplitDate = b.released.split('-');

                    const aDate = new Date([...aSplitDate]).getTime();
                    const bDate = new Date([...bSplitDate]).getTime();

                    console.log(aDate, bDate);

                    return bDate - aDate;
                });
                return {
                    orderedList: [...orderedList],
                };
            }
            default: {
                return {
                    orderedList: [...action.gamesList],
                };
            }
        }
    }

    useEffect(() => {
        data.gamesData.then((games) => {
            genres = [...new Set(games.results.map((game) => game.genres.map((genre) => genre.name)).flat(1))];
            filteredGames = [...games.results.filter((game) => game.genres.some((genre) => activeFilters.includes(genre.name)))];
            const gamesList = filteredGames.length === 0 ? [...games.results] : [...filteredGames];
            dispatch({ type: activeOrderType, gamesList: gamesList });
        })

    }, [data, activeFilters, activeOrderType]);

    const toggleFilterType = (e) => {
        const filterType = e.target.closest('button');

        if (filterType.value === 'genre') {
            setGenreVisible(!genreVisible);
        } else if (filterType.value === 'platform') {
            setPlatformVisible(!platformVisible);
        }
    };

    const toggleFilter = (e) => {
        setCurrentPage(1);

        const filterItem = e.target.value;
        if (!activeFilters.includes(filterItem)) {
            setActiveFilters([...activeFilters, filterItem]);
        } else {
            const newActiveFilters = activeFilters.filter((filter) => filter !== filterItem);
            setActiveFilters([...newActiveFilters]);
        }
    };

    const closeOrderDropdown = (e) => {
        console.log(e.target)
        if (e.target.closest('button') && e.target.closest('button').name === 'order-type') {
            setActiveOrderType(e.target.textContent);
        } 

        setOrderVisible(false);
        document.body.removeEventListener('click', closeOrderDropdown);
    };

    const handleOrderDropdown = () => {
        console.log('test');

        if (!orderVisible) {
            document.body.addEventListener('click', closeOrderDropdown, true);
        }

        setOrderVisible(!orderVisible);
    };

    const changePage = (page) => {
        setCurrentPage(page);
        
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    };

    const resetFilters = () => {
        setActiveFilters([]);
        setCurrentPage(1);
    };


    return (
        <>
            <Title>Browse Games</Title>
            <Suspense fallback={<CollectionSkeleton />}>
                <Await resolve={data.gamesData}>
                    {() => (
                        <>
                            <OrderContainer>
                                    <OrderText>Show:</OrderText>
                                    <OrderDropdown type='button' onClick={() => handleOrderDropdown()}>{<p>{activeOrderType}</p>} <ChevronDown />
                                        {orderVisible && (
                                            <OrderList>
                                                <OrderItem name='order-type' value='All'>All</OrderItem>
                                                <OrderItem name='order-type' value='Alphabetical'>Alphabetically</OrderItem>
                                                <OrderItem name='order-type' value='Release'>New Release</OrderItem>
                                            </OrderList>
                                        )}
                                    </OrderDropdown>
                            </OrderContainer>
                            <Container>
                                <GamesGrid>
                                    {gamesList.orderedList.length !== 0 && gamesList.orderedList.slice((currentPage * 20 - 20), (currentPage * 20)).map((game) => (
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
                                    <PageContainer>
                                        {
                                            pages.map((page) => (
                                                    <PageNumber key={page} className={page === currentPage && 'active'}
                                                        onClick={() => changePage(page)}>{page}</PageNumber>
                                            ))
                                        }
                                    </PageContainer>
                                </GamesGrid>
                                <FiltersContainer>
                                    <FiltersTitle>Filters {activeFilters.length !== 0 && `(${activeFilters.length})`}
                                        {activeFilters.length !== 0 && (<FiltersResetBtn onClick={() => resetFilters()}>reset</FiltersResetBtn>)}
                                    </FiltersTitle>
                                    <Filters>
                                        <HrLine />
                                        <FilterGroup>
                                            <FilterType onClick={(e) => toggleFilterType(e)} value='genre' name='filter-type' >Genre <ArrowDown className={genreVisible && 'active'} /></FilterType>
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
                                            <FilterType onClick={(e) => toggleFilterType(e)} value='platform' name='filter-type' >Platform <ArrowDown className={platformVisible && 'active'} /></FilterType>
                                            {platformVisible &&
                                                <FilterItems>
                                                    <FilterItem disabled>Windows</FilterItem>
                                                </FilterItems>
                                            }
                                        </FilterGroup>
                                        <HrLine />
                                    </Filters>
                                </FiltersContainer>
                            </Container>
                        </>
                    )}
                </Await>
            </Suspense>
        </>
    )
}
