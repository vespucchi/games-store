export default async function(gameId) {
    let wishlistGamesId = JSON.parse(localStorage.getItem('wishlistIds'));
    let wishlistGamesData = JSON.parse(localStorage.getItem('wishlistData'));
    const gameIndex = wishlistGamesId.findIndex((game) => game === gameId);
    wishlistGamesId.splice(gameIndex, 1);
    wishlistGamesData.splice(gameIndex, 1);

    wishlistGamesId.length !== 0 ? localStorage.setItem('wishlistIds', JSON.stringify(wishlistGamesId)) : localStorage.removeItem('wishlistIds');
    wishlistGamesData.length !== 0 ? localStorage.setItem('wishlistData', JSON.stringify(wishlistGamesData)) : localStorage.removeItem('wishlistData');

    return localStorage.getItem('wishlistGamesData');
};