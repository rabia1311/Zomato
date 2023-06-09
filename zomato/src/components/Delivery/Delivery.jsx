import React from 'react'
import "../Delivery/Delivery.css"
import Filter from "../Filter/filter"
import Deliverycollection from './DeliveryCollection/Deliverycollection';
import Topbrand from '../TopBrands/Topbrand';



const Delivery = () => {


  const Deliveryfilter=[

    {
      id:1,
      icon:<i className="fi fi-rr-settings-sliders absolute-center"></i>,
      title:"Filters",

    },
    {
      id:2,
      title:"Rating : 4.0+",

    },

    {
      id:3,
      title:"Pure-Veg",
     

    },
    {

      id:4,
      title:"Cuisine",
      icon:<i className="fi fi-rr-apps-sort absolute-center"></i>,

    },
   
  ];
  return (
    <div > 
<div className="max-width">
<Filter  filterlist={Deliveryfilter}/>
</div>
     <Deliverycollection/>
      <Topbrand/>
    </div>
    
  
  )
}

export default Delivery;