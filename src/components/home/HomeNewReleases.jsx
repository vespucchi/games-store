import PropTypes from 'prop-types';
import CarouselSwiperSlider from './CarouselSwiperSlider';

export default function HomeNewReleases({ games }) {

    return (
        <CarouselSwiperSlider games={games} title='Top New Releases' />
    )
}

HomeNewReleases.propTypes = {
    games: PropTypes.array.isRequired,
};