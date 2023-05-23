import React from 'react'
import "../Header/Header.scss"
import logo from "../../images/logo.png"
const Header = () => {
  return (
   <div className="header">
    <nav>
        <span>Get the App</span>
        <div className="right">
            <span>Investor Relations</span>
            <span>Add restuarants</span>
            <span>Log in </span>
            <span>Sign in</span>
           
        </div>
    </nav>
    <div className="headerContent">

        <img src={logo} alt="logo"/>
        <h3>Discover the best food and drinks in Kolkata</h3>
        <div className="input">
            <select name="" id="">
                <option value="kolkata">kolkata</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="pune">Pune</option>
            </select>
            <input type="text" placeholder="Search for a restuarant , cuisine or a dish" />
        </div>
    </div>
   </div>
  )
}

export default Header