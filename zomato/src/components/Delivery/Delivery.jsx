import React from 'react'
import "../Delivery/Delivery.css"
import Filter from "../Filter/filter"
import Deliverycollection from './DeliveryCollection/Deliverycollection';
import Topbrand from '../TopBrands/Topbrand';
import Explore from '../Explore/Explore';
import { restuarant } from '../../data/restuarant';
import Footer from '../Footer/Footer';



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

  const restuarantlist=restuarant;
  return (
    <div > 
<div className="max-width">
<Filter  filterlist={Deliveryfilter}/>
</div>
     <Deliverycollection/>
      <Topbrand/>
      <div className='collectiontiltle'>
      <Explore list={restuarantlist} collectionname='Delivery Restuarants in New Town, Kolkata'/></div>
      <Footer/>
    </div>
    
  
  )
}

export default Delivery;