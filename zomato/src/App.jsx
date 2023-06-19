import React from 'react'
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Collection from './components/Collection/Collection';
import Cities from './components/Cities/Cities';
import CTA from "./components/CTA/CTA"
import Footer from "./components/Footer/Footer"
import AccContainer from './components/AccordianContainer/AccContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import Welcome from './pages/Welcome';
import Nightlifepage from './pages/Nightlifepage';
import Dining from './pages/Dining';
import Signup from '../src/pages/Signup';
const App = () => {
  return (
   <div className="App">
    
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/night" element={<Nightlifepage />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/signup" element={<Signup />} />



          
        </Routes>
      </BrowserRouter>
   
   </div>
  )
}

export default App;