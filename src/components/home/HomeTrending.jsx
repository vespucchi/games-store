import PropTypes from 'prop-types';
import CarouselSwiperSlider from './CarouselSwiperSlider';

export default function HomeTrending({ games }) {

    return (
        <CarouselSwiperSlider games={games} title='Trending' />
    )
}

HomeTrending.propTypes = {
    games: PropTypes.array.isRequired,
};