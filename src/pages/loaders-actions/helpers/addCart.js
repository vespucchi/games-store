export default async function (gameData) {
    let cartGamesId = localStorage.getItem('cartIds');
    if (cartGamesId) {
        cartGamesId = JSON.parse(cartGamesId);
        const cartGamesData = JSON.parse(localStorage.getItem('cartData'));
        console.log(cartGamesData)
        if (cartGamesId.includes(gameData.id)) {
            throw new Error('Game is already in cart');
        }
        cartGamesData.push(gameData);
        cartGamesId.push(gameData.id);

        localStorage.setItem('cartData', JSON.stringify(cartGamesData));
        localStorage.setItem('cartIds', JSON.stringify(cartGamesId));
    } else {
        localStorage.setItem('cartData', JSON.stringify([gameData]));
        localStorage.setItem('cartIds', JSON.stringify([gameData.id]));
    }

    return localStorage.getItem('cartGamesData');
};