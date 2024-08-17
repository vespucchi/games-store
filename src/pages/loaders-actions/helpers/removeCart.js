export default async function (gameId) {
    let cartGamesId = JSON.parse(localStorage.getItem('cartIds'));
    let cartGamesData = JSON.parse(localStorage.getItem('cartData'));
    const gameIndex = cartGamesId.findIndex((game) => game === gameId);
    cartGamesId.splice(gameIndex, 1);
    cartGamesData.splice(gameIndex, 1);

    cartGamesId.length !== 0 ? localStorage.setItem('cartIds', JSON.stringify(cartGamesId)) : localStorage.removeItem('cartIds');
    cartGamesData.length !== 0 ? localStorage.setItem('cartData', JSON.stringify(cartGamesData)) : localStorage.removeItem('cartData');

    return localStorage.getItem('cartGamesData');
};