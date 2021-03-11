import './styles/Gallery.css';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';

function Gallery(props) {

  //Initialize state for products data within gallery
  const [productsArray, setProductsArray] = useState([]);

  //Define our useEffect Hook
  useEffect(() => {
    //Reference database
    const dbReference = firebase.database().ref("products");

    //Fire up firebase event listener
    dbReference.on('value', (data) => {
      // console.log(data.val());

      //Save the database object in a variable
      const productData = data.val();

      //Store empty array in variable
      const gallery = [];

      for (let productKey in productData) {
        //Convert price to two decimal places
        let priceInt = productData[productKey].price;
        let priceFloat = parseFloat(priceInt).toFixed(2);

        //Push data to array
        gallery.push({
          key: productKey,
          title: productData[productKey].title,
          type: productData[productKey].type,
          img: productData[productKey].img,
          alt: productData[productKey].alt,
          price: priceFloat,
          cartCount: 0
        });
      }

      //Update state with gallery array
      setProductsArray(gallery);
    })

  }, []);


  return (
    <div className="Gallery">
      <h2>Products</h2>
      <div className="products">
        {
          productsArray.map((product) => {
            return (
              <div className="product" key={product.key}>
                <div className="img-container">
                  <img src={product.img} alt={product.alt} />
                  <div className="overlay" onClick={() => { props.itemAdded(product, productsArray) }}>
                    <div className="text">Add To Cart</div>
                  </div>
                </div>
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Gallery;
