import React from 'react'
import "../Nightlife/Nightlife.css"
import Collection from '../Collection/Collection'
import Explore from '../Explore/Explore';
import { Nightlifedata } from '../../data/Nightlifedata';
import Filter from '../Filter/filter';
import Footer from '../Footer/Footer';
const Nightlife = () => {
  const collectionlist = [
    {
      id: 1,
      title: '10 Blissful breakfast places',
      cover:
        'https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054191.jpg',
      places: '10 places',
    },
    {
      id: 2,
      title: '11 Best instaworthy places',
      cover:
        'https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252730.jpg',
      places: '11 places',
    },
    {
      id: 3,
      title: '19 Best Bars and Pubs',
      cover:
        'https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675232844.jpg',
      places: '19 places',
    },
    {
      id: 4,
      title: '18 Summer Bonanza Offers',
      cover:
        'https://b.zmtcdn.com/data/collections/3e2dd804d8d11e0c5cb54d3adbcc81a4_1686375660.jpg',
      places: '18 places',
    },
    {
      id: 5,
      title: '6 Newly opened Restaurants',
      cover:
        'https://b.zmtcdn.com/data/collections/123f5085308f9feef24b37b237c707ca_1685686439.png?output-format=webp',
      places: '10 places',
    },
    {
      id: 6,
      title: '10 Great Buffets',
      cover:
        'https://b.zmtcdn.com/data/collections/038023025a7859881a3fa3b3b1c93416_1675231457.jpg',
      places: '6 places',
    },
  ];


  const Nightfilter=[

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
      title:"Distance",
     

    },
    {

      id:4,
      title:"Pubs and Bars ",
      icon:<i className="fi fi-rr-apps-sort absolute-center"></i>,

    },
   
  ];

  const nightList=Nightlifedata;
  return (
    <div> 


      <Collection list={collectionlist} />
      <div className="max-width">
      <Filter filterlist={Nightfilter}/>
      </div>
      <Explore list={nightList} collectionname='Nightlife Restaurants in Newtown, Kolkata'/>
      <Footer/>
    </div>
    
  )
}

export default Nightlife