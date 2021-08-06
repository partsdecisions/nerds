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
    /* padding: 1em; */
    padding: 20px 250px;
    position: relative;

`

export const NavLink = styled(Link)`
    color: #b2b2b2; 
    display: flex;
    align-items: center;
    text-decoration: none; // Check this later
    /* padding: 0.5em; */
    margin-right:  20px;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #ffffff;
        border-bottom: 6px solid #E50914;
    }
`
export const NavLogo = styled.div`
    color: #e5e5e5;
    /* display: flex; */
    align-items: center;
    text-decoration: none; // Check this later
    padding: 0.5em;
    height: 100%;
    cursor: pointer;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    display: block;
    
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /* margin-left: 100px; */

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

