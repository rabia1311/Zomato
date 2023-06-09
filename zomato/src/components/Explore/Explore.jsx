import React from 'react'
import "../Explore/explore.css"
import { restuarant } from '../../data/restuarant'
import ExploreCard from './Explorecard/ExploreCard'
const Explore = ({list,collectionname}) => {
  return (
    <div className='max-width explore-section'> 
    <div className='collection-title'>{collectionname}</div>
    <div className='explore-grid'>

        {list.map((restuarant)=>{
            return <ExploreCard  restuarant={restuarant}/>
        })}
    </div>
    </div>
  )
}

export default Explore