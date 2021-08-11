import styled from 'styled-components'; 
import { NavLink as Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";

const media = {
    tablet: '@media screen and (max-width: 1200px)',
    mobile: '@media screen and (max-width: 768px)',
    megaMobile: '@media screen and (max-width: 468px)'
}

export const Nav = styled.nav`
    background: #131313;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 250px;
    position: relative;

    ${media.tablet} {
        padding: 20px 100px;
    }

    ${media.mobile} {
        padding: 20px 50px;
    }
    
    ${media.megaMobile} {
        display: flex;
        flex-direction: column;
    }

`

export const NavLink = styled(Link)`
    color: #b2b2b2; 
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right:  20px;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #ffffff;
        border-bottom: 6px solid #E50914;
    }

    ${media.megaMobile} {
        margin: 0 10px;
    }
`
export const NavLogo = styled.div`
    color: #e5e5e5;
    display: flex;
    align-items: center;
    padding: 0.5em;
    height: 100%;
    cursor: pointer;

    ${media.tablet} {
        display: none;
    }

    ${media.mobile} {
        display: none;
    }
    
    ${media.megaMobile} {
        display: none;
    }
    
`

export const NavMenu = styled.div`
    display: flex;
    width: 30%;

    ${media.megaMobile} {
        width: auto;
    }
`

export const NavLikes = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: flex-end;

    ${media.mobile} {
        display: none;
    }
    
    ${media.megaMobile} {
        display: none;
    }
`

export const Star = styled(AiFillStar)`
    color: #F8E71C;
    cursor: pointer;
`

