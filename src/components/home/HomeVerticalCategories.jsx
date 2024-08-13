import PropTypes from 'prop-types';
import styled from 'styled-components';
import VerticalCategory from './VerticalCategory';

const Container = styled.div`
    display: flex;
    height: 800px;
    gap: 16px;
    margin-bottom: 100px;

    & > div:nth-child(1),
    & > div:nth-child(2) {
        border-right: 1px solid #747474;
    }
`;

export default function HomeVerticalCategories({ games }) {
    return (
        <Container>
            <VerticalCategory title='Top Sellers' games={games} />
            <VerticalCategory title='Most Played' games={games} />
            <VerticalCategory title='Top Upcoming Wishlisted' games={games} released={false} />
        </Container>
    )
}

HomeVerticalCategories.propTypes = {
    games: PropTypes.array.isRequired,
};