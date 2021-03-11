import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

//Store icon in variable
const bag = <FontAwesomeIcon icon={faShoppingBag} />

function Header(props) {
    return (
        <header className="Header">
            <span className="background-image" role="img" aria-label="Cake with gold leaf and fresh florals"> </span>
            <div className="header-flex wrapper">
                <div className="logo">
                    <img src={logo} alt={"mel's cookie dough co. logo"}></img>
                </div>
                <button onClick={props.toggleCart}>
                    <i className="cart" aria-hidden="true">{bag}</i>
                </button>
            </div>
            <h1>Mel's Cookie Dough Co.</h1>
        </header>
    );
}

export default Header;