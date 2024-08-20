import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Form, useFetcher, useRouteLoaderData } from 'react-router-dom';

const SidebarContainer = styled.div`
    height: fit-content;
    width: 100%;
    margin-top: -30px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    color: white;
    font-weight: 600;
    font-size: 1.3rem;
`;

const TypeOfGame = styled.div`
    width: fit-content;
    background-color: #343437;
    padding: 4px 6px;
    border-radius: 5px;
    font-weight: 600;
`;

const Buttons = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Btn = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background-color: #343437;

    color: white;
    font-weight: 600;

    cursor: pointer;

    &.buy-now {
        background-color: #0078f2;
    }

    &:hover {
        background-color: #636366;
    }

    &.buy-now:hover {
        color: #162F3A;
        background-color: #61CDFF;
    }
`;

const GameInfo = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 12px;

    font-size: 1.1rem;
`;

const InfoItem = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: inherit;

    & p {
        font-size: inherit;
    }

    & p:first-of-type {
        color: #ffffffa5;
    }
`;

const HrLine = styled.hr`
    width: 100%;
    border-top: 1px solid #ffffff22;
`;


export default function GameSidebar({ gameInfo }) {
    const fetcher = useFetcher();

    const [isWhishlisted, setIsWhislisted] = useState(() => {
        // check if it's already stored in local storage
        if (localStorage.getItem('wishlistIds')) {
            const saved = localStorage.getItem('wishlistIds');
            const games = JSON.parse(saved);
            return games.includes(gameInfo.id);
        }

        return false;
    });

    const [isInCart, setIsInCart] = useState(() => {
        // check if it's already stored in local storage
        if (localStorage.getItem('cartIds')) {
            const saved = localStorage.getItem('cartIds');
            const games = JSON.parse(saved);
            return games.includes(gameInfo.id);
        }

        return false;
    });

    return (
        <SidebarContainer>
            <TypeOfGame>Base Game</TypeOfGame>
            {gameInfo.price}
            <Buttons>
                <Btn className='buy-now'>Buy Now</Btn>
                <fetcher.Form method='post' action='./' onSubmit={() => setIsInCart(!isInCart)}>
                    {isInCart
                        ? <Btn type='submit' name='remove-cart' value={JSON.stringify(gameInfo)}>Remove From Cart</Btn>
                        : <Btn type='submit' name='add-cart' value={JSON.stringify(gameInfo)}>Add To Cart</Btn>
                    }
                </fetcher.Form>
                <fetcher.Form method='post' action='./' onSubmit={() => setIsWhislisted(!isWhishlisted)}>
                    {isWhishlisted
                        ? <Btn type='submit' name='remove-wishlist' value={JSON.stringify(gameInfo)}>Remove From Wishlist</Btn>
                        : <Btn type='submit' name='add-wishlist' value={JSON.stringify(gameInfo)}>Add To Wishlist</Btn>
                    }
                </fetcher.Form>
            </Buttons>
            <GameInfo>
                <InfoItem>
                    <p>Refund Type</p>
                    <p>Self-Refundable</p>
                </InfoItem>
                <HrLine />
                <InfoItem>
                    <p>Developer</p>
                    <p>{gameInfo.developers[0].name}</p>
                </InfoItem>
                <HrLine />
                <InfoItem>
                    <p>Publisher</p>
                    <p>{gameInfo.publishers[0].name}</p>
                </InfoItem>
                <HrLine />
                <InfoItem>
                    <p>Release Date</p>
                    <p>{gameInfo.released}</p>
                </InfoItem>
                <HrLine />
                <InfoItem>
                    <p>Platform</p>
                    <svg width="21px" height="21px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier"> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7439.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M13.1458647,7289.43426 C13.1508772,7291.43316 13.1568922,7294.82929 13.1619048,7297.46884 C16.7759398,7297.95757 20.3899749,7298.4613 23.997995,7299 C23.997995,7295.84873 24.002005,7292.71146 23.997995,7289.71311 C20.3809524,7289.71311 16.7649123,7289.43426 13.1458647,7289.43426 M4,7289.43526 L4,7296.22153 C6.72581454,7296.58933 9.45162907,7296.94113 12.1724311,7297.34291 C12.1774436,7294.71736 12.1704261,7292.0908 12.1704261,7289.46524 C9.44661654,7289.47024 6.72380952,7289.42627 4,7289.43526 M4,7281.84344 L4,7288.61071 C6.72581454,7288.61771 9.45162907,7288.57673 12.1774436,7288.57973 C12.1754386,7285.96017 12.1754386,7283.34361 12.1724311,7280.72405 C9.44461153,7281.06486 6.71679198,7281.42567 4,7281.84344 M24,7288.47179 C20.3879699,7288.48578 16.7759398,7288.54075 13.1619048,7288.55175 C13.1598997,7285.88921 13.1598997,7283.22967 13.1619048,7280.56914 C16.7689223,7280.01844 20.3839599,7279.50072 23.997995,7279 C24,7282.15826 23.997995,7285.31353 24,7288.47179" id="windows-[#ffffff]"> </path> </g> </g> </g> </g>
                    </svg>
                </InfoItem>
                <HrLine />
            </GameInfo>
        </SidebarContainer>
    )
}

GameSidebar.propTypes = {
    gameInfo: PropTypes.object.isRequired,
};
