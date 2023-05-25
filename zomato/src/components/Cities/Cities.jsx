import React from 'react'
import "../Cities/Cities.scss"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Cities = () => {
  return (
   <div className="cities">
    <h1>Popular localities in and around <span>Kolkata</span></h1>
    <div className="cityContainer">
    <div className="city">
        <div className="cityleft">

            <h3>ParkStreet Area</h3>
            <span>161 places</span>
        </div>
        <div className="icon">
<ChevronRightIcon/>
        </div>
    </div>
    <div className="city">
        <div className="cityleft">

            <h3>Sector 5 , Saltlake</h3>
            <span>213 places</span>
        </div>
        <div className="icon">
<ChevronRightIcon/>
        </div>
    </div>
    <div className="city">
        <div className="cityleft">

            <h3>Ballygunge</h3>
            <span>175 places</span>
        </div>
        <div className="icon">
<ChevronRightIcon/>
        </div>
    </div>
    <div className="city">
        <div className="cityleft">

            <h3>Southern Avenue</h3>
            <span>116 places</span>
        </div>
        <div className="icon">
<ChevronRightIcon/>
        </div>
    </div>
    <div className="city">
        <div className="cityleft">

            <h3>New Town</h3>
            <span>695 places</span>
        </div>
        <div className="icon">
<ChevronRightIcon/>
        </div>
    </div>
    <div className="city">
        <div className="cityleft">

            <h3>Camac Street Area</h3>
            <span> 69 places</span>
        </div>
        <div className="icon">
<ChevronRightIcon/>
        </div>
    </div>
    <div className="city">
        <div className="cityleft">

            <h3>Saltlake,Sector 1</h3>
            <span>161 places</span>
        </div>
        <div className="icon">
<ChevronRightIcon/>
        </div>
    </div>
    
    

    <div className="city">
        <div className="cityleft">

            <h3>See More</h3>
            
        </div>
        <div className="icon">
        <KeyboardArrowDownIcon />
        </div>
    </div>
   
    </div>
   </div>
  )
}

export default Cities;