import removeCart from './helpers/removeCart';

export async function loader() {
    const gamesData = await JSON.parse(localStorage.getItem('cartData'));
    const cartIds = await JSON.parse(localStorage.getItem('cartIds'));

    return { gamesData, cartIds };
};

export async function action({ request }) {
    const data = await request.formData();

    if (data.get('remove-cart')) {
        const gameId = JSON.parse(data.get('remove-cart'));

        return removeCart(gameId);
    }
};