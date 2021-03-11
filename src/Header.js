import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBag } from '@fortawesome/free-solid-svg-icons';

//Store icon in const
const bag = <FontAwesomeIcon icon={faShoppingBag} />

function Header(props) {
    return (
        <div className="Header">
            <div className="flex">
                <div className="logo">
                    <img src={logo} alt={"mel's cookie dough co. logo"}></img>
                </div>
                <button onClick={props.toggleCart}> 
                    <i className="cart">{bag}</i>
                </button>                
            </div>
            <h1>Mel's Cookie Dough Co.</h1>
        </div>
    );
}

export default Header;