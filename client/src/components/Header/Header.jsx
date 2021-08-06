import { Nav, NavLink, NavMenu, NavLogo, NavLikes, Star, Logo } from './HeaderElements';
import './Header.css';

const Header = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/homepage" activeStyle>
                        Homepage
                    </NavLink>
                    <NavLink to="/series" activeStyle>
                        Series
                    </NavLink>
                    <NavLink to="/movies" activeStyle>
                        Movies
                    </NavLink>
                </NavMenu>
                <NavLogo to="/">
                    <div id="logo"></div>
                </NavLogo>
                <NavLikes>
                    <Star/>
                </NavLikes>
            </Nav>  
        </>
    )
}

export default Header
