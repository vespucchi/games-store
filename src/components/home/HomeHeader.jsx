import Search from "./Search";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const Header = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: left;
    align-items: center;
    gap: 20px;
`;

const Link = styled(NavLink)`
    color: #747474;
    font-weight: 600;
    font-size: 1.1rem;

    &.active {
        color: white;
    }

    &:hover:not(.active),
    &:focus-visible:not(.active) {
        color: #d1d1d1;
    }

    &:nth-of-type(3) {
        margin-left: auto;
    }
`;

const Cart = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const CartCountDiv = styled.div`
    background-color: #26bbff;
    color: black;
    border-radius: 16px;
    display: flex;
    align-items: center;
    overflow: hidden;
    font-weight: bold;
    box-shadow: 0px 0px 0px 2px rgb(18, 18, 18);
    padding: 2px 10px;
`;

export default function HomeHeader({ cartCount }) {

    return (
        <Header>
            <Search />
            <Link to='/'>Discover</Link>
            <Link to='/browse'>Browse</Link>
            <Link to='/wishlist'>Wishlist</Link>
            <Cart to='/cart'>Cart {cartCount !== 0 && (
                <CartCountDiv>
                    {cartCount}
                </CartCountDiv>
            )}</Cart>
        </Header>
    )
}

HomeHeader.propTypes = {
    cartCount: PropTypes.number,
};