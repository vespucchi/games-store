import axios from "axios";
import { defer } from "react-router-dom";

export async function loader() {
    console.log('fetching browse');
    const page1 = axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY0}&page_size=40`, { type: 'get' }).then(res => res.data.results);
    const page2 = axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY0}&page=2&page_size=40`, { type: 'get' }).then(res => res.data.results);

    const gamesData = Promise.all([page1, page2]).then((values) => {
        return { results: values[0].concat(values[1]) };
    });

    return defer({ gamesData });
};