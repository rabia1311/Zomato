import React from 'react'
import "../Deliveryitem/deliveritem.css"
const Deliveryitem = ({item}) => {
  return (
    <div>
    <div className='delivery-item-cover'> 
    <img src={item.cover} className='delivery-item-img' alt={item.title} /></div>
    

    <div className="delivery-item-title">

        {item.title}
    </div>
    </div>
  )
}

export default Deliveryitem;