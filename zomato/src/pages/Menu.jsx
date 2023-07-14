import React from "react";
import { useLocation } from "react-router-dom";
import Tab from '../components/Taboptions/tab';
import Footer from '../components/Footer/Footer';
import Filter from '../components/Filter/filter';
import Homeheader from '../components/Homeheader/Homeheader';
import "../pages/Menu.css";

const Menu = () => {
  const location = useLocation();
  const { subcategories, restaurants } = location.state || {};

  return (
    <div>
      <Homeheader />
      
      <h1></h1>
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-item">
            
            <img
              src={`http://localhost:8000/uploads/${restaurant.image}`}
              alt="Restaurant Picture"
              className="restaurant-image"
            />
            <h2 className="name">{restaurant.Restaurant_name}</h2>
            <p> {restaurant.Description}</p>
            <div className="items-container">
              {subcategories
                .filter(
                  (subcategory) =>
                    subcategory.Restaurantname === restaurant.Restaurant_name
                )
                .map((subcategory) => (
                  <div
                    key={subcategory._id}
                    className="item-item"
                  >
                    <div className="item-details">
                      <h4>Item Name: {subcategory.Itemname}</h4>
                      <img
                        src={`http://localhost:8000/subcategoryimg/${subcategory.image}`}
                        alt="Item"
                        className="item-image"
                      />
                      <h4>Category: {subcategory.Itemcategory}</h4>
                      <h4>Price: {subcategory.Itemprice}</h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
