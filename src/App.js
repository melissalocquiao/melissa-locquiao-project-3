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
  
  const productAdded = (product) => {
    const cartArray = [...addToCart];

    if (cartArray.includes(product)) {
      const index = cartArray.findIndex(x => x.key === product.key);
      const count = product.cartCount;
      cartArray[index].cartCount = count + 1;
    } else {
      cartArray.push(product);
      const index = cartArray.findIndex(x => x.key === product.key);
      const count = product.cartCount;
      cartArray[index].cartCount = count + 1;
    }

    setAddToCart(cartArray);

    if (isVisible === false) {
      setIsVisible(!isVisible);
    }

  }

  const productRemoved = (product) => {
    const cartArray = [...addToCart];

    if (cartArray.includes(product)) {
      const index = cartArray.findIndex(x => x.key === product.key);
      const count = product.cartCount;
      cartArray[index].cartCount = count - 1;
      if (cartArray[index].cartCount > 0) {
        cartArray[index].cartCount = count - 1;
      }
      if (cartArray[index].cartCount === 0) {
        cartArray.splice(index,1);
      }
    }

    setAddToCart(cartArray);
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