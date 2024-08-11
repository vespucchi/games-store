import React from 'react';
import { Outlet, Link, useLoaderData, Form, redirect, useNavigation, useSubmit, } from "react-router-dom";
import Search from './Search';
import styled from 'styled-components';

const Header = styled.header`
`;

const Nav = styled.nav`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 15px 20px;
    background-color: #121216;

    display: flex;
    align-items: center;
    gap: 15px;
`;

const LinkNav = styled(Link)`
    background-color: #353539;
    color: #FAFAFA;
    font-size: 1em;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: #656567;
    }

    &:nth-of-type(3) {
        margin-left: auto;
    }

    &:nth-of-type(4) {
        background-color: #26BBFF;
        color: #353539;
    }

    &:nth-of-type(4):hover {
        background-color: #72D3FF;
    }
`;

export default function NavigationBar() {
    return (
        <Header>
            <Nav>
                <LinkNav>LOGO</LinkNav>
                <LinkNav to='/'>STORE</LinkNav>
                <Search />
                <LinkNav to='/wishlist'>WISHLIST</LinkNav>
                <LinkNav to='/cart'>CART</LinkNav>
            </Nav>
        </Header>
    )
}
