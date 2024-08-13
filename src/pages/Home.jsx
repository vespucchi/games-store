import React from 'react';
import styled from 'styled-components';
import HomeHeader from '../components/home/HomeHeader';
import DiscoverPage from './Discover';
import BrowsePage from './Browse';
import { Outlet, useLocation } from "react-router-dom";



// LOADER FOR GAMES API

const Main = styled.main`
    width: 100%;
    max-width: 1500px;

    display: flex;
    flex-direction: column;
    gap: 75px;
    margin-left: auto;
    margin-right: auto;

    box-sizing: border-box;
    padding: 0 1% 1% 1%;
`;

export default function HomePage() {
    let location = useLocation();

    const games = [
        {
            title: 'Apex Legends',
            image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop191x100.628p.jpg',
            release: '08/20/24',
        },
        {
            title: 'Dota 2',
            image: 'https://community.tm/attachments/thumb-099-dota-2-3-jpg.15775/',
            release: '10/29/24',
        },
        {
            title: 'League Of Legends',
            image: 'https://assetsio.gnwcdn.com/137367349888.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
            release: undefined,
        },
        {
            title: 'Counter Strike 2',
            image: 'https://i.gadgets360cdn.com/products/large/image-720-1000x563-1679550825.png',
            release: '12/01/24',
        },
        {
            title: 'Grand Theft Auto 5',
            image: 'https://i.pinimg.com/originals/1d/5d/96/1d5d960d98349ae3678a14ee87a5f33d.jpg',
            release: undefined,
        },
        {
            title: 'Smite',
            image: 'https://m.media-amazon.com/images/M/MV5BMzAxYTZkNGItYjkyOC00ZTJhLWIzZDItMTBhZjg5ZDdiZmI1XkEyXkFqcGdeQXVyNjU5OTYzNDQ@._V1_.jpg',
            release: null,
        },
    ];

    console.log(location.pathname === '/')

    return (
        <Main>
            <HomeHeader />
            {location.pathname === '/' ? (<DiscoverPage games={games} />) : (<BrowsePage games={games} />)}
        </Main>
    )
}