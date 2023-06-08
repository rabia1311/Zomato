import React from 'react'
import FilterItem from '../filteritem/FilterItem';
import "../Filter/filter.css"
const Filter = ({filterlist}) => {
  return (
    <div className='filters'> 
        {filterlist && filterlist.map((filter)=> {

            return  <FilterItem filter={filter} key={filter.id}/>
        })}
    </div>
  )
}

export default Filter;