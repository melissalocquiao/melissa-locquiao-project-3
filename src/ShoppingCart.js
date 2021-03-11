import './styles/ShoppingCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function ShoppingCart(props) {

    const trash = <FontAwesomeIcon icon={faTrash} />
    const close = <FontAwesomeIcon icon={faTimes} />

    let count = 0;
    props.items.forEach((item) => {
        count = count + item.cartCount;
    })

    return (
        < div className="ShoppingCart" >
            <button className="closeCart" onClick={props.hideCart}>
                <i className="close">{close}</i>
            </button >
            <h3>Cart</h3>
            {
            count > 0 &&
                <h4>{count} Items</h4>
            }
            <div className="items">
                {
                    props.items.map((item) => {
                        return (
                            <div className="item-container" key={item.key}>
                                <div className="img-container">
                                    <img src={item.img} alt={item.alt} />
                                </div>
                                <div className="text-container">
                                    <button className="delete" onClick={() => { props.productRemoved(item) }}>
                                        <i className="trash">{trash}</i>
                                    </button>
                                    <h3>{item.title}</h3>
                                    <h4>${item.price}</h4>
                                    <h4>Quantity: {item.cartCount}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="total">
                <h3>Total: </h3>
            </div>
        </div >
    )
}

export default ShoppingCart;
