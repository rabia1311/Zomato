import React from 'react'
import "../Homeheader/header.css";
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Homeheader = () => {
  return (
    <div className=".max Header"> 
    
    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt='logo' className='hlogo'></img>

    <div className="header_right">
      <div className="header_search">
        <div className="location_wrapper">
          <div className="location_icon">

          <div className="location"><LocationOnTwoToneIcon/></div>
          <div className='city'> Kolkata </div>
          </div>
         <div className="arrow"><KeyboardArrowDownIcon/></div>
        </div>
        <div className="separator">|</div>
        <div className="searcher">
<SearchOutlinedIcon absolute_center className='search_icon' />
<input placeholder='Search for a restuarant,cuisine or a dish' className='search_input'/>
        </div>
        
      </div>
      <div className="profile_wrapper">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmuxSfnCDqjuXUweaYUiofOkOAwpVGzAlv9S3T74TVQ&usqp=CAU&ec=48665699" alt="user" className='header_img' />
          <span className='username'>Rabia</span>
          <div className="arrow"><KeyboardArrowDownIcon absolute_center/></div>
        </div>
    </div>
     </div>
  )
}

export default Homeheader;