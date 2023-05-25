import React from 'react'
import "../CTA/CTA.scss";
import Iphone from "../../images/Iphone.png"
import Google from "../../images/Google.png"
import AppStore from "../../images/AppStore.png"
const CTA = () => {
  return (
    <div className="cta">
        <div className="left">
<img src={Iphone} alt="phone" />
        </div>
        <div className="right">
            <h1>Get the Zomato app </h1>
            <p>We will send you a link,open it  on your phone to download the app
            </p>
<div className="radio">
    <div className="radioButn">
        <input type="radio" name="email"/>
        <label htmlFor="email">Email</label>

    </div>
    <div className="radio">
    <div className="radioButn">
        <input type="radio" name="phone"/>
        <label htmlFor="phone">Phone</label>

    </div>
</div>
<form className="input">
    <input type="email" placeholder="Email"/>
    <input type="number" placeholder="Phone"/>
    <button type ="submit">Share App Link</button>
    </form>
    <span>Download App from </span>
  
    <div className="img">
        <img src={Google} alt="google" />
        <img src={AppStore} alt="app" />
    </div>


        </div>
    </div>
   </div>
  )
}

export default CTA;