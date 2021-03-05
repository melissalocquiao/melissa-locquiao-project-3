import './Header.css';
import logo from './assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const hamburger = <FontAwesomeIcon icon={faBars} />
const cart = <FontAwesomeIcon icon={faShoppingCart} />

function Header() {
    return (
        <div className="Header">
            <div className="wrapper">
                <i className="menu">{hamburger}</i>

                <h1>Mel's Cookie
        <img src={logo} alt={"mel's cookie dough co. logo"} className="logo"></img>
        Dough Co.</h1>

                <i className="cart">{cart}</i>
            </div>
        </div>
    );
}

export default Header;
