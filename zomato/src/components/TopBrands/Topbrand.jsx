import React from 'react'
import "../Delivery/DeliveryCollection/Deliverycollec.css"
import "../TopBrands/topbrand.css"
import NextArrow from '../Carausal/NextArrow';
import PrevArrow from '../Carausal/PrevArrow';
import Slider from "react-slick";
import Branditem from './Branditem';

var settings = {
    
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

  const brandlist=[
    {
        id:1,
        time:"23mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png"
    },
    {
        id:2,
        time:"25mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252779.png"
    },
    {
        id:3,
        time:"23mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png"
    },
    {
        id:4,
        time:"29mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png"
    },
    {
        id:5,
        time:"32mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715114.png"
    },
    {
        id:6,
        time:"23mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/efde2eca9cd50d60b03fc90a236def72_1666522017.png"
    },
    {
        id:7,
        time:"23mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/ea590b040a4902b757fd6126439bd5c3_1605071443.png"
    },
    {
        id:8,
        time:"23mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655799691.png"
    },


]




const Topbrand = () => {
   

   


    return (
        <div className='deliverycollection'>
          <div className='topbrand-container'>
            <div className="collection-title">Top brands for you</div>
            <div className='slider-container'>
            <Slider {...settings}>
              {brandlist.map((brand) => (
                <div key={brand.time}>
                  <div className='top_brand-cover'>
                    <img src={brand.cover} className='top-brand-img' alt={brand.time} />
                    {brand.time}
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