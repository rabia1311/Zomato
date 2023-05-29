import React, { useState } from 'react'
import Homeheader from "../components/Homeheader/Homeheader"
import Tab from '../components/Taboptions/tab';
import Hfooter from '../components/Hfooter/Hfooter';
import Nightlife from '../components/Nightlife/Nightlife';
import Delivery from "../components/Delivery/Delivery"
import DiningOut from "../components/DiningOut/DiningOut"

const Home  = () => {
  const [activetab,setActivetab]=useState("Delivery");

  return (
    <div>
    <Homeheader/>
    
    <Tab activetab={activetab} setActivetab={setActivetab}/>
    {getCorrectscreen(activetab)}
    <Hfooter/>
       </div>
  )
}
const getCorrectscreen=(tab)=>{
  switch(tab){
    case "Delivery":
      return <Delivery/>;
      case "Dining Out":
        return <DiningOut/>;
        case "Nightlife":
          return <Nightlife/>;
          default:
            return <Delivery/>;
  }

}
export default Home;