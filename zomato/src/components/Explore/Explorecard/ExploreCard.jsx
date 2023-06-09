import React from 'react'
import "../Explorecard/exploreCard.css"
import { AiOutlineStar } from 'react-icons/ai';
const ExploreCard = ({ restuarant }) => {
  const name = restuarant?.info?.name ?? "";
  const coverImg = restuarant?.info?.image?.url;
  const deliveryTime = restuarant?.order?.deliveryTime;
  const rating = restuarant?.info?.rating?.rating_text;
  const approxPrice = restuarant?.info?.cfo?.text;
  const offers = restuarant?.offers ?? [];
  const cuisines = restuarant?.info?.cuisine?.map((item) => item.name).slice(0, 3);

  const bottomContainers = restuarant?.bottomContainers;
  const goldOff = bottomContainers?.[0]?.text;
 

  const bulkOffers = restuarant?.bulkOffers ?? [];
  const proOff = bulkOffers.length > 0 ? bulkOffers[0].text : null;

  const discount =
    offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;

  return (
    <div className='explore-card cur-po'>
      <div className='explore-card-cover'>
        <img src={coverImg} alt={name} className='explore-card-image' />
        <div className='delivery-time'>{deliveryTime}</div>

        {proOff && <div className='pro-off'>{proOff}</div>}
        
        {discount && <div className='discount absolute-center'>{discount}</div>}
      </div>
      <div className='res-row'>
        <div className='res-name'>{name}</div>
        {rating && (
  <div className='res-rating absolute-center'>
    {rating} <AiOutlineStar className='star-icon' />
  </div>
)}
        
      </div>

      <div className='res-row'>

        {cuisines.length && <div className='res-cuisine'>
          {cuisines.map((item,i)=>{

            return <span className='res-cuisine-tag'>{item} {i!==cuisines.length-1 && ","}</span>
          })}
          
          </div>}

          {approxPrice && <div className='approx-price'>{approxPrice}</div>}
      </div>
      {bottomContainers.length>0 && <div>
        <div className='separator'></div>
        <div className="explore-bottom">

          <img src={bottomContainers[0]?.image?.url}alt={bottomContainers[0]?.text}style={{height:"18px"}}/>
          <div className='res-bottom-text'> {bottomContainers[0]?.text}</div>
        </div>
        </div>}
    </div>
  );
};

export default ExploreCard;
