import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function ShoppingCart(props) {
    //Store icons
    const trash = <FontAwesomeIcon icon={faTrash} />
    const close = <FontAwesomeIcon icon={faTimes} />

    //Create a variable for cart item counter
    let count = 0;
    //For each item in cart
    props.items.forEach((item) => {
        //Add amount of items in cart
        count = count + item.quantity;
    })

    //Create a variable for total value in cart
    let total = 0;
    //For each item i ncart
    props.items.forEach((item) => {
        //Add total amount of value in cart
        total = total + (item.quantity * item.price);
    })
    //Convert total to a float
    total = parseFloat(total).toFixed(2);

    return (
        < div className="ShoppingCart" >
            <button className="closeCart" onClick={props.hideCart}>
                <i className="close">{close}</i>
            </button >
            <h3>Cart</h3>
            {
                //If there are items in the cart, show number of items
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
                                    <h4>Quantity: {item.quantity}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="total">
                <hr></hr>
                <h4>Total: ${total}</h4>
                <div className="checkOut">
                    <button className="checkOutButton">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;
