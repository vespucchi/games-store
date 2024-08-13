import Search from "../global/navbar/Search";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
`;

export default function HomeHeader() {
    return (
        <Header>
            <Search />
            <Link to='/'>Discover</Link>
            <Link to='/browse'>Browse</Link>
        </Header>
    )
}
