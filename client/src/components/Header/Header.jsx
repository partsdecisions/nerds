import { Nav, NavLink, NavMenu, NavLogo, NavLikes, Star, Logo } from './HeaderElements';
import './Header.css';

const Header = ({ likes }) => {

    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" exact activeStyle>
                        Home
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
                    <div style={{color: 'white', marginLeft: '5px'}}>{likes}</div>
                </NavLikes>
            </Nav>  
        </>
    )
}

export default Header
