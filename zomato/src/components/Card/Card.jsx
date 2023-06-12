import React from 'react'
import "../Card/Card.scss"
import Dine from "../../images/Dine.png"
import Night from "../../images/Night.png"
import Online from "../../images/Online.png"
import { Link } from 'react-router-dom';
const Card = () => {
  return (
   <div className="card">
    
    <div className="cardImg">
   <a href='/home'>
        <img src={Dine} alt="dine-img" />
        </a>
        <h1>Order Online</h1>
        
        <span>Stay home and order to your doorstep</span>
        
    </div>
    <div className="cardImg">
        <a href='/night'>
        <img src={Night} alt="night-img" /></a>
        <h1>Nightlife and club's</h1>
        <span>Explore the city's top nightlife outlets</span>
    </div>
    <div className="cardImg">
        <a href='/dining'>
    <img src={Online} alt="online_img" /></a>
    <h1>Dinning</h1>
    <span>Views the city's favourite venues</span>
</div>
   </div>
  )
}

export default Card;