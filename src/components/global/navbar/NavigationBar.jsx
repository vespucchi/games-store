import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Globe } from 'lucide-react';

const Nav = styled.nav`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0px 20px 0px 20px;
    background-color: #121216;

    display: flex;
    align-items: center;
    gap: 20px;
`;

const LinkNav = styled(Link)`
    color: #FAFAFA;
    font-size: 1em;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus-visible {
        color: #0078f2;
    }

    &:nth-of-type(3) {
        margin-left: auto;
    }

    &:nth-of-type(4) {
        display: flex;
        gap: 8px;
    }

    &:nth-of-type(4):hover,
    &:nth-of-type(4):focus-visible {
        color: #FAFAFA;
        opacity: 0.8;
    }

    &:nth-of-type(5) {
        padding: 6px 12px;
        background-color: #26BBFF;
        font-size: 1.1rem;
        color: #10181b;
        display: flex;
    }

    &:nth-of-type(5):hover,
    &:nth-of-type(5):focus-visible {
        background-color: #72d3ff;
    }
`;

const UserIcon = styled.div`
    position: relative;

    width: 30px;
    height: 30px;
    background-color: #404044;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const UserInitial = styled.p`
    font-size: 1.1rem;
`;

const UserActivityIcon = styled.div`
    position: absolute;
    right: -5%;
    bottom: -5%;
    width: 7px;
    height: 7px;
    background-color: #A9D34F;
    border: 2px solid #121216;
    border-radius: 50%;
`;

export default function NavigationBar() {
    return (
        <header>
            <Nav>
                <LinkNav>LOGO</LinkNav>
                <LinkNav to='/'>STORE</LinkNav>
                <LinkNav onClick={(e) => e.preventDefault()}><Globe size={22} /></LinkNav>
                <LinkNav to='/profile'>
                    <UserIcon>
                        <UserInitial>u</UserInitial>
                        <UserActivityIcon />
                    </UserIcon>
                    user
                </LinkNav>
                <LinkNav onClick={(e) => e.preventDefault()}>Download</LinkNav>
            </Nav>
        </header>
    )
}
