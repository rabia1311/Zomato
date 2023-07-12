
    
import React, { useState, useEffect } from 'react';
import "../Delivery/DeliveryCollection/Deliverycollec.css";
import "../TopBrands/topbrand.css";
import NextArrow from '../Carausal/NextArrow';
import PrevArrow from '../Carausal/PrevArrow';
import Slider from "react-slick";


var settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Topbrand = () => {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = () => {
    fetch("http://localhost:8000/admin/brand")
      .then((response) => response.json())
      .then((data) => {
        setBrandList(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className='deliverycollection'>
      <div className='topbrand-container'>
        <div className="collectop">Top Brands For You</div>
        <div className='slider-container'>
          <Slider {...settings}>
            {brandList.map((brand) => (
              <div key={brand.time}>
                <div className='top_brand-cover'>
                <img
            src={`http://localhost:8000/brandimg/${brand.image}`}
            alt="Category"
            className="image-thumbnail category-image"
          />
                  {brand.brandname} - {brand.time}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Topbrand;
