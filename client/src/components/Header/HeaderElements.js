import styled from 'styled-components'; 
import { NavLink as Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import logo from  '../../images/nerdflix.png';

export const Nav = styled.nav`
    background: #131313;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;

`

export const NavLink = styled(Link)`
    color: #b2b2b2; 
    display: flex;
    align-items: center;
    text-decoration: none; // Check this later
    padding: 0.5em;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #ffffff;
    }
`
export const NavLogo = styled.div`
    color: #e5e5e5;
    display: flex;
    align-items: center;
    text-decoration: none; // Check this later
    padding: 0.5em;
    height: 100%;
    cursor: pointer;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: 100px;

    @media screen and (max-width: 768px) {
        
    }
`

export const NavLikes = styled.div`
    display: flex;
    align-items: center
`

export const Star = styled(AiFillStar)`
    color: #F8E71C;
    cursor: pointer;
`

