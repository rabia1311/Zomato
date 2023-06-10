import React from 'react'
import "../Collection/Collection.scss"
import collection1 from "../../images/collection1.webp"
import collection2 from "../../images/collection2.webp"
import collection3 from "../../images/collection3.webp"
import collection4 from "../../images/collection4.webp"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Collection = () => {
  return (
    <div className="collection">
        <h1>Collections</h1>
        <div className="collectiontext">
            <p>Explore curated lists of top restuarants ,cafes,pubs and bars in Kolkata,based on trends</p>
            <span>All collection in Kolkata <KeyboardArrowRightIcon /></span>
        </div>
        <div className="collectionCard">
            <div className="collectionImg">
                <img src={collection1} alt="collection1" />
                <h3>10 Great Buffets</h3>
                <span>10 places <KeyboardArrowRightIcon /></span>

            </div>

            <div className="collectionImg">
                <img src={collection4} alt="collection4" />
                <h3>10 Best Luxury Dining Places</h3>
                <span> 9 places <KeyboardArrowRightIcon /></span>
                
            </div>

            

            <div className="collectionImg">
                <img src={collection2} alt="collection2" />
                <h3>Finest Buffet Places </h3>
                <span>7 places <KeyboardArrowRightIcon /></span>
                
            </div>
           
        </div>
    </div>
  )
}

export default Collection;