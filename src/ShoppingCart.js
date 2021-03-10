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
            <button onClick={props.hideCart}>
                <i className="close">{close}</i>
            </button >
            <h3>Cart</h3>
            {
            count > 0 &&
                <h4>{count}</h4>
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
                                    <h3>{item.title}</h3>
                                    <h4>${item.price}</h4>
                                    <h4>Quantity: {item.cartCount}</h4>
                                    <button className="delete" onClick={() => { props.productRemoved(item) }}>
                                        <i className="trash">{trash}</i>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >


    )

    //    if (props) {
    //        return (
    //                <div className="ShoppingCart">
    //                    <h3>Cart</h3>
    //                </div>
    //        );
    //    } else {
    //        return (
    //        <div>

    //        </div>
    //        )
    //    }
}

export default ShoppingCart;


//if product array contains an item
//return cart update
//