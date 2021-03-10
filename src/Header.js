import './styles/Header.css';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const cart = <FontAwesomeIcon icon={faShoppingCart} />

function Header(props) {

    return (
        <div className="Header">
            <div className="flex">
                <div className="logo">
                    <img src={logo} alt={"mel's cookie dough co. logo"}></img>
                </div>
                <button onClick={props.toggleCart}>
                    <i className="cart">{cart}</i>
                </button>                
            </div>

            <h1>Mel's Cookie Dough Co.</h1>
        </div>
    );
}

export default Header;
