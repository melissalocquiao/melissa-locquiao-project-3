import './styles/App.css';
import Header from './Header.js';
import ShoppingCart from './ShoppingCart.js'
import Inventory from './Inventory.js';
import Footer from './Footer.js';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

//App Component that 
function App() {

  //Store icon in variable
  const bag = <FontAwesomeIcon icon={faShoppingBag} />
  //Initialize cart visibility state to false
  const [isVisible, setIsVisible] = useState(false);
  //Initialize state to add products to cart with empty array
  const [addToCart, setAddToCart] = useState([]);

  //Event listener for cart side bar toggle
  const toggleCart = () => {
    //Set visibility state to opposite of current state
    setIsVisible(!isVisible);
  }

  //Method to hide cart from user
  const hideCart = () => {
    //Set visibility state to opposite of current state
    setIsVisible(!isVisible);
  }

  //Method to add item to cart
  const itemAdded = (item) => {
    //Make a copy of the original array state
    const cartArray = [...addToCart];

    //If cart contains item
    if (cartArray.includes(item)) {
      //Get the index of the item in the array
      const index = cartArray.findIndex(x => x.key === item.key);
      //Get the quantity of the item in the cart
      const count = item.quantity;
      //Update quantity value of item in state
      cartArray[index].quantity = count + 1;
    } else { //If cart does not contain item
      //Add item to cart
      cartArray.push(item);
      //Get the index of the item in the array
      const index = cartArray.findIndex(x => x.key === item.key);
      //Get the quantity of the item in the cart
      const count = item.quantity;
      //Update quantity value of item in state
      cartArray[index].quantity = count + 1;
    }

    //Update state array with new updated array
    setAddToCart(cartArray);
  }

  //Method to remove item from cart
  const productRemoved = (item) => {
    //Make a copy of the original array state
    const cartArray = [...addToCart];

    //If item is in cart
    if (cartArray.includes(item)) {
      //Get the index of the item in the array
      const index = cartArray.findIndex(x => x.key === item.key);
      //Get the quantity of the item in the cart
      const count = item.quantity;
      //Update quantity value of item in state
      cartArray[index].quantity = count - 1;

      //If quantity of item in cart is greater than 0
      if (cartArray[index].quantity > 0) {
        //Update quatity of item in cart
        cartArray[index].quantity = count - 1;
      }
      //If quantity of item is 0
      if (cartArray[index].quantity === 0) {
        //Remove item from cart
        cartArray.splice(index, 1);
      }
    }

    //Update state array with new updated array
    setAddToCart(cartArray);
  }

  //Counter of items to show user how many items are in the cart
  let count = 0;
  addToCart.forEach((item) => {
    //Add amount of items in cart
    count = count + item.quantity;
  })

  return (
    <div className="App">
      <button onClick={toggleCart} className="cartButton">
        <p className="count">{count}</p>
        <i className="cart" aria-hidden="true">{bag}</i>
      </button>
      <Header toggleCart={toggleCart} />
      {isVisible && <ShoppingCart hideCart={hideCart} items={addToCart} productRemoved={productRemoved} />}
      <Inventory itemAdded={itemAdded} />
      <Footer />
    </div>
  );
}

export default App;