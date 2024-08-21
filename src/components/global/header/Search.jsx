import { useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


const SearchForm = styled.form`
    height: 100%;
    width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    align-items: center;

    position: relative;
`;

const SearchInput = styled.input`
    width: 250px;
    height: 80%;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 0px 35px;
    color: #FFFFFF;
    background: #202024 5% no-repeat; /*Your Image Link*/
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23B1B1B3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-search'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.3-4.3'/%3E%3C/svg%3E");
    
    &::placeholder {
        color: #B1B1B3;
        font-weight: 600;
    }
`;

const SearchOutput = styled.div`
    position: absolute;
    left: 0;
    top: 110%;
    z-index: 1;

    min-width: 200%;
    width: max-content;
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    padding: 5px;

    border-radius: 10px;
    border-top-left-radius: 25px;
    background-color: #18181C;
`;

const OutputItem = styled.a`
    color: white;
    width: 100%;

    box-sizing: border-box;
    padding: 10px;

    font-weight: 600;
    font-size: 1.1rem;

    display: flex;
    align-items: center;
    gap: 24px;

    &:hover {
        text-decoration: underline;
    }

    & p {
        margin-right: auto;
        font-size: 1.1rem;
    }
`;

const OutputImage = styled.div`
    background-size: cover;
    background-position: center;
    height: 40px;
    width: 30px;

    border-radius: 5px;
`;

export default function Search() {
    const navigation = useNavigation();
    const [query, setQuery] = useState('');
    const [games, setGames] = useState([]);
    const [visibleQueryList, setVisibleQueryList] = useState(false);

    console.log(visibleQueryList);

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has(
            "q"
        );

    useEffect(() => {
        const controller = new AbortController();

        const handleClick = (e) => {
            if (e.target.closest('input')) {
                setVisibleQueryList(true);
            } else if (!(e.target.closest('button') && e.target.closest('button').name !== 'search-game')) {
                setVisibleQueryList(false);
            }
        };

        const timeout = setTimeout(async () => {
            if (query !== '') {
                console.log('fetching query')
                const gamesList = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY0}&search=${query}&search_precise=true&page_size=5`, 
                    {
                        type: 'get',
                        signal: controller.signal,
                    }
                    ).then(res => res.data.results.sort((a, b) => b.playtime - a.playtime));
                
                setGames(gamesList);
                setVisibleQueryList(true);
                document.body.addEventListener('click', handleClick, true);
            }
        }, 500);

        return(() => {
            document.body.removeEventListener('click', handleClick);
            setGames([]);
            controller.abort();
            clearTimeout(timeout);
        });
    }, [query]);


    return (
        <SearchForm>
            <SearchInput 
                id="q"
                className={searching ? "loading" : ""}
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={query}
                onChange={(event) => {
                    setQuery(event.target.value);
                }}
                autoComplete='off' />
            {visibleQueryList && games.length !== 0 && (
                <SearchOutput>
                    {games.map((game) => (
                        <OutputItem key={game.id} name='search-game' href={`/game/${game.name.toLowerCase().replaceAll(' ', '-')}-${game.id}`}>
                            <OutputImage style={{backgroundImage: `url(${game.background_image})`}} />
                            <p>{game.name}</p>
                        </OutputItem>
                    ))}
                </SearchOutput>
            )}
        </SearchForm>
    )
}
