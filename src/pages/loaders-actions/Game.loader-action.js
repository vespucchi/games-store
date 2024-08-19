import { defer } from 'react-router-dom';
import axios from 'axios';
import addWishlist from './helpers/addWishlist';
import removeWishlist from './helpers/removeWishlist';
import addCart from './helpers/addCart'
import removeCart from './helpers/removeCart'


export async function loader({ params }) {
    const splitTitle = params.gameTitle.split('-');
    const gameId = splitTitle[splitTitle.length - 1];

    console.log('fetching game');
    let data = axios.get(`https://api.rawg.io/api/games/${gameId}?key=${import.meta.env.VITE_RAWG_API_KEY0}`, { type: 'get' }).then(res => res.data);
    const screenshots = axios.get(`https://api.rawg.io/api/games/${gameId}/screenshots?key=${import.meta.env.VITE_RAWG_API_KEY0}`, { type: 'get' }).then(res => res.data.results);

    const gameInfo = Promise.all([data, screenshots]).then((values) => {
        return { data: values[0], screenshots: values[1]};
    });

    return defer({gameInfo});
};

export async function action({ request }) {
    const data = await request.formData();
    if (data.get('add-wishlist')) {
        const gameData = JSON.parse(data.get('add-wishlist'));

        return addWishlist(gameData);
    } else if (data.get('remove-wishlist')) {
        const gameData = JSON.parse(data.get('remove-wishlist'));

        return removeWishlist(gameData.id);
    } else if (data.get('add-cart')) {
        const gameData = JSON.parse(data.get('add-cart'));

        return addCart(gameData);
    } else if (data.get('remove-cart')) {
        const gameData = JSON.parse(data.get('remove-cart'));

        return removeCart(gameData.id);
    } 

    throw new Error('Action failed');
};