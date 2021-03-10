import './styles/App.css';
import Header from './Header.js';
import ShoppingCart from './ShoppingCart.js'
import Gallery from './Gallery.js';
import Footer from './Footer.js';
import { useState } from 'react';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  //Initialize state to add products to cart
  const [addToCart, setAddToCart] = useState([]);

  // const [cartUpdated, setCartUpdated] = useState("");

  //Event listener for cart side bar toggle
  const toggleCart = () => {
    setIsVisible(!isVisible);
  }

  const hideCart = () => {
    setIsVisible(!isVisible);
  }

  //Event listener for product clicked
  const productAdded = (product) => {
    const cartArray = [...addToCart];

    if (product.cartCount === 0) {
      product.cartCount = product.cartCount + 1;
      cartArray.push(product);
    } else {
      product.cartCount = product.cartCount + 1;
    }

    setAddToCart(cartArray);
    console.log("added ", cartArray);

    if (isVisible === false) {
      setIsVisible(!isVisible);
    }
  }

  const productRemoved = (product) => {
    const cartArray = [...addToCart];
    if (product.cartCount === 1) {
      
      const index = cartArray.indexOf(cartArray[product.key]);
      // console.log("index",index);
      product.cartCount = product.cartCount - 1;
      cartArray.splice(index, 1);
    } else if (product.cartCount !== 0){
      product.cartCount = product.cartCount - 1;
    }

    setAddToCart(cartArray);

    console.log("removed ",cartArray);
  }

  return (
    <div className="App">
      <Header toggleCart={toggleCart} />
      {isVisible && <ShoppingCart hideCart={hideCart} items={addToCart} productRemoved={productRemoved} />}
      <Gallery productAdded={productAdded} />
      <Footer />
    </div>
  );
}

export default App;

// 