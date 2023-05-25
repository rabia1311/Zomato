import React from 'react'
import "../Card/Card.scss"
import Dine from "../../images/Dine.png"
import Night from "../../images/Night.png"
import Online from "../../images/Online.png"
const Card = () => {
  return (
   <div className="card">
    <div className="cardImg">
        <img src={Dine} alt="dine-img" />
        <h1>Order Online</h1>
        <span>Stay home and order to your doorstep</span>
    </div>
    <div className="cardImg">
        <img src={Night} alt="night-img" />
        <h1>Nightlife and club's</h1>
        <span>Explore the city's top nightlife outlets</span>
    </div>
    <div className="cardImg">
    <img src={Online} alt="online_img" />
    <h1>Dinning</h1>
    <span>Views the city's favourite venues</span>
</div>
   </div>
  )
}

export default Card;