import './styles/Gallery.css';
import Product from './Product';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';

function Gallery() {

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
          price: priceFloat
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
              <Product
                key={product.key}
                imgSrc={product.img}
                altText={product.alt}
                title={product.title}
                price={product.price}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default Gallery;
