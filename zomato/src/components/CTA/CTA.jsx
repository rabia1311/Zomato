import React, { useState } from 'react'
import "../CTA/CTA.scss";
import phonpic from "../../images/phonpic.png"
import Google from "../../images/Google.png"
import AppStore from "../../images/AppStore.png"
const CTA = () => {
    const[email,setEmail]=useState(true);
    const[phone,setPhone]=useState(false);

  return (
    <div className="cta">
        <div className="left">
<img src={phonpic} alt="phone" />
        </div>
        <div className="right">
            <h1>Get the Zomato app </h1>
            <p>We will send you a link,open it  on your phone to download the app
            </p>
<div className="radio">
    <div className="radioButn">
        <input type="radio" name="radio" id="email"  onClick={()=>setEmail(true)||setPhone(false)}/>
        <label htmlFor="email">Email</label>

    </div>
    <div className="radio">
    <div className="radioButn">
        <input type="radio" name="radio" id="phone" onClick={()=>setPhone(true)||setEmail(false)}/>
        <label htmlFor="phone">Phone</label>

    </div>
    </div>
</div>
<br/>
<form className="input">
    {email && < input type="email" placeholder="Email"/>}
    {phone &&<input type="number" placeholder="Phone"/>}
    <button type ="submit">Share App Link</button>
    </form>
    <span>Download App from </span>
  
    <div className="img">
        <img src={Google} alt="google" />
        <br/>
        <img src={AppStore} alt="app" />
    </div>


       
    </div>
   </div>
  )
}

export default CTA;