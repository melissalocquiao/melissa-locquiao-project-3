import firebase from './firebase.js';
import { useState, useEffect } from 'react';

function Inventory(props) {
  //Initialize state for inventory data
  const [inventoryArray, setInventoryArray] = useState([]);
  //Initialize state for loading data
  const [isLoading, setIsLoading] = useState(true);

  //Define our useEffect Hook
  useEffect(() => {
    //Reference firebase database
    const dbReference = firebase.database().ref("products");

    //Fire up firebase event listener
    dbReference.on('value', (data) => {
      //Save the database object in a variable
      const inventoryData = data.val();
      //Store empty array
      const inventory = [];

      //For each key in data
      for (let inventoryKey in inventoryData) {
        //Store price of item 
        let priceInt = inventoryData[inventoryKey].price;
        //Convert price to two decimal places
        let priceFloat = parseFloat(priceInt).toFixed(2);

        //Push data to array
        inventory.push({
          key: inventoryKey,
          title: inventoryData[inventoryKey].title,
          type: inventoryData[inventoryKey].type,
          img: inventoryData[inventoryKey].img,
          alt: inventoryData[inventoryKey].alt,
          price: priceFloat,
          quantity: 0
        });
      }

      //Update state with inventory array
      setInventoryArray(inventory);
      //Set is loading state to false;
      setIsLoading(false);
    })
  }, []);

  return (
    <main className="Inventory">
      <h2>Products</h2>
      <div className="inventory-container wrapper">
        {
          //Display message if data is still loading
          isLoading ? <h2>Loading products...</h2>
            :
            //Error handling if error with database data
            inventoryArray.length === 0 ?
              <h2>No products found! Check back later.</h2>
              :
              inventoryArray.map((item) => {
                return (
                  <div className="item" key={item.key}>
                    <div className="img-container">
                      {
                        item.img === "" || item.img === null ?
                          <div className="img-placeholder">
                            <p>No image found.</p></div>
                          :
                          <img src={item.img} alt={item.alt} />
                      }
                      <div className="overlay" onClick={() => { props.itemAdded(item, inventoryArray) }}>
                        <p>Add to cart</p>
                      </div>
                    </div>
                    <h3>{item.title}</h3>
                    <h4>${item.price}</h4>
                  </div>
                )
              })
        }
      </div>
    </main>
  );
}

export default Inventory;
