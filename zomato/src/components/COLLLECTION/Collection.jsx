import React from 'react'
import "../COLLLECTION/collec.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NextArrow from '../Carausal/NextArrow';
import PrevArrow from '../Carausal/PrevArrow';
import Slider from "react-slick";
const Collection = ({list}) => {


    var settings = {
    
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };


      return (
        <div className='collection-wrapper'>
          <div className="max-width collection">
            <div className="tle">Collections</div>
            <div className="collection-subtitle-row">
              <div className="collection-subtitle-text">
                Explore curated lists of top restaurants, cafes, pubs, and bars in Kolkata, based on trends
              </div>
              <div className="collection-location">
                <div>All Collections in Kolkata</div>
                <div className="absolute-center"><KeyboardArrowRightIcon /></div>
              </div>
            </div>
            <Slider {...settings}>
              {list.map((item) => (
                <div key={item.id}>
                  <div className="collection-cover">
                    <img src={item.cover} className='collection-image' alt={item.title} />
                    <div className="gradient-bg"></div>
                    <div className="collection-card-title">{item.title}</div>
                    <div className="collection-card-subtitle">

                        <div>{item.places}</div>
                        <div className="absolute-center"><KeyboardArrowRightIcon /></div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      );
    };
    
    export default Collection;
    
    
    
    
    
    