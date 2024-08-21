import removeWishlist from './helpers/removeWishlist';
import addCart from './helpers/addCart';
import removeCart from './helpers/removeCart';

export async function loader() {
    const gamesData = await JSON.parse(localStorage.getItem('wishlistData')) || [];
    const cartIds = await JSON.parse(localStorage.getItem('cartIds')) || [];

    return { gamesData, cartIds };
};

export async function action({ request }) {
    const data = await request.formData();

    if (data.get('remove-wishlist')) {
        const gameData = JSON.parse(data.get('remove-wishlist'));

        return removeWishlist(gameData.id);
    } else if (data.get('add-cart')) {
        const gameData = JSON.parse(data.get('add-cart'));

        return addCart(gameData);
    } else if (data.get('remove-cart')) {
        const gameData = JSON.parse(data.get('remove-cart'));

        return removeCart(gameData.id);
    }
};