import { defer } from "react-router-dom";
import axios from "axios";

export async function loader({ params }) {
    console.log('fetching collection');
    const splitTitle = params.collectionTitle.split('-');
    const capitalizedTitle = splitTitle.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    const title = capitalizedTitle.join(' ');

    console.log(title)
    
    const MyDate = new Date();
    const currentDate = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);

    let gamesData;

    if (splitTitle.includes('trending')) {
        const threeMonthsAgo = (MyDate.getFullYear()) + '-' + ('0' + (MyDate.getMonth() - 2)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
        gamesData = axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY0}&dates=${threeMonthsAgo},${currentDate}&ordering=-added`, { type: 'get' }).then(res => res.data.results);
    } else if (splitTitle.includes('sellers')) {
        const fiveYearsAgo = (MyDate.getFullYear() - 5) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
        gamesData = axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY0}&dates=${fiveYearsAgo},${currentDate}&ordering=-metacritic,-added`, { type: 'get' }).then(res => res.data.results);
    } else if (splitTitle.includes('new')) {
        const lastYear = (MyDate.getFullYear() - 1) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
        gamesData = axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY0}&dates=${lastYear},${currentDate}&ordering=-added`, { type: 'get' }).then(res => res.data.results);
    } else if (splitTitle.includes('free')) {
        const fiveYearsAgo = (MyDate.getFullYear() - 5) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
        gamesData = axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY0}&dates=${fiveYearsAgo},${currentDate}&ordering=released`, { type: 'get' }).then(res => res.data.results);
    } else if (splitTitle.includes('most')) {
        const lastYear = (MyDate.getFullYear() - 1) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
        gamesData = axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY0}&dates=${lastYear},${currentDate}&ordering=released`, { type: 'get' }).then(res => res.data.results);
    } else if (splitTitle.includes('wishlisted')) {
        const threeMonthsAgo = (MyDate.getFullYear()) + '-' + ('0' + (MyDate.getMonth() - 2)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
        gamesData = axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY0}&dates=${threeMonthsAgo},${currentDate}&ordering=released`, { type: 'get' }).then(res => res.data.results);
    } else {
        gamesData = [];
    }

    return defer({title, gamesData});
};