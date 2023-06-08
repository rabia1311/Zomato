import React from 'react'

const Branditem = ({item}) => {
  return (
    <div>
    <div className='brand-item-cover'> 
    <img src={item.cover} className='brand-item-img' alt={item.id} /></div>
    

    <div className="brand-item-title">

        {brand.time}
    </div>
    </div>
  )
}

export default Branditem
