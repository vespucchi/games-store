export default async function (gameData) {
    let wishlistGamesId = localStorage.getItem('wishlistIds');
    if (wishlistGamesId) {
        wishlistGamesId = JSON.parse(wishlistGamesId);
        const wishlistGamesData = JSON.parse(localStorage.getItem('wishlistData'));
        console.log(wishlistGamesData)
        if (wishlistGamesId.includes(gameData.id)) {
            throw new Error('Game is already in wishlist');
        }
        wishlistGamesData.push(gameData);
        wishlistGamesId.push(gameData.id);

        localStorage.setItem('wishlistData', JSON.stringify(wishlistGamesData));
        localStorage.setItem('wishlistIds', JSON.stringify(wishlistGamesId));
    } else {
        localStorage.setItem('wishlistData', JSON.stringify([gameData]));
        localStorage.setItem('wishlistIds', JSON.stringify([gameData.id]));
    }

    return localStorage.getItem('wishlistGamesData');
};