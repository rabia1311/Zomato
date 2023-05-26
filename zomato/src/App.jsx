import React from 'react'
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Collection from './components/Collection/Collection';
import Cities from './components/Cities/Cities';
import CTA from "./components/CTA/CTA"
import Footer from "./components/Footer/Footer"
import AccContainer from './components/AccordianContainer/AccContainer';

const App = () => {
  return (
   <div className="App">
    <Header/>
    <Card/>
    <Collection/>
    <Cities/>
    <CTA/>
    <AccContainer />
  <Footer/>
   </div>
  )
}

export default App;