import React, { useEffect, useState } from 'react';
import "../DeliveryCollection/Deliverycollec.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from '../../Carausal/NextArrow';
import PrevArrow from '../../Carausal/PrevArrow';

const Deliverycollection = () => {
  const [categories, setCategories] = useState([]);
  const [catCredentials, setCatCredentials] = useState({
    category: {
      CategoryType: "",
      CategoryName: "",
      Description: "",
      image: "",
    },
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("http://localhost:8000/admin/category")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  const sliderSettings = {
    
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
   
   
  };



  return (
    <div>
    <h1 className="categories-title">Categories</h1>
    <Slider {...sliderSettings}>
      {categories.map((category) => (
        <div key={category._id} className="category-item">
          <img
            src={`http://localhost:8000/category/${category.image}`}
            alt="Category"
            className="image-thumbnail category-image"
          />
          <span className="category-name">{category.CategoryName}</span>
        </div>
      ))}
    </Slider>
  </div>
  );
        }  
export default Deliverycollection;
