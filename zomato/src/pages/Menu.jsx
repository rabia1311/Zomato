import React from "react";
import { useLocation } from "react-router-dom";
import Tab from '../components/Taboptions/tab';
import Footer from '../components/Footer/Footer';
import Filter from '../components/Filter/filter';
import Homeheader from '../components/Homeheader/Homeheader';
import { restuarant } from "../data/restuarant";
import  "../pages/Menu.css"

const Menu = () => {
  const location = useLocation();
  const { subcategories } = location.state || [];

  return (
    <div>
      <Homeheader />
      <Tab />
      <Filter />
      
      <div className="subcategory-container">
        {subcategories.map((subcategory) => (
          <div key={subcategory._id} className="subcategory-item">
             <h1> {subcategory.Restaurantname}</h1>
            <div className="horizontal-card">
              
              <div className="card-details">
               
                <h4>Item Name: {subcategory.Itemname}</h4>
                <img
                  src={`http://localhost:8000/subcategoryimg/${subcategory.image}`}
                  alt="Category"
                  className="item-image"
                />
                <h4>Category: {subcategory.Itemcategory}</h4>
                <h4>Price: {subcategory.Itemprice}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
  
};

export default Menu;
