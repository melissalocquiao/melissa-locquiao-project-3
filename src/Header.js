import './styles/Header.css';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const menu = <FontAwesomeIcon icon={faBars} />
const cart = <FontAwesomeIcon icon={faShoppingCart} />

function Header() {
    return (
        <div className="Header">
            <div className="flex">
                {/* <ul className="nav">
                    <li><a href="">About</a></li>
                    <li><a href="">Flavors</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Contact</a></li>
                </ul> */}
                <img src={logo} alt={"mel's cookie dough co. logo"}></img>

                <div className="cart">
                    <i className="cart">{cart}</i>
                    {/* <p>Cart</p> */}
                </div>
            </div>

            <h1>Mel's Cookie Dough Co.</h1>
        </div>
    );
}

export default Header;
