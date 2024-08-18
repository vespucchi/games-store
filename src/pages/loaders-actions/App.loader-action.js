import axios from 'axios';


export async function loader() {
    console.log('fetching');
    let data;

    const apiKeys = [
        import.meta.env.VITE_RAWG_API_KEY0,
        import.meta.env.VITE_RAWG_API_KEY1,
        import.meta.env.VITE_RAWG_API_KEY2,
        import.meta.env.VITE_RAWG_API_KEY3,
        import.meta.env.VITE_RAWG_API_KEY4,
    ]

    for (let i = 0; i < 5; i += 1) {
        try {
            const res = await axios.get(`https://api.rawg.io/api/games?key=${apiKeys[i]}`, { type: 'get' });
            data = res.data.results;

            data = data.map((game) => {
                return {
                    ...game, price: `€${Math.round(Math.random() * Math.random() * 70)},99`
                }
            });

            break;
        } catch (error) {
            console.log(error);
        }
    }

    return data ? data : [];
};