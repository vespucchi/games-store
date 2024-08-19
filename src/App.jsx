import { useState, useEffect } from 'react';
import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit, ScrollRestoration } from "react-router-dom";
import NavigationBar from './components/global/navbar/NavigationBar';
import Footer from './components/global/footer/Footer';
import HomeHeader from './components/home/HomeHeader';
import styled from 'styled-components';

const Main = styled.main`
    width: 100%;
    max-width: 1500px;

    display: flex;
    flex-direction: column;
    gap: 48px;
    margin-left: auto;
    margin-right: auto;

    box-sizing: border-box;
    padding: 1%;
`;


function App() {
    const games = useLoaderData();
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => () => {
        const cart = JSON.parse(localStorage.getItem('cartIds'));
        return cart ? setCartCount(cart.length) : setCartCount(0);
    }, [games]);

    return (
        <>
            <NavigationBar />
            <Main>
                <HomeHeader cartCount={cartCount} />
                <Outlet context={games} />
            </Main>
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default App
