import React from 'react'
import Home from './components/Home'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './styles/index.scss';

import {Routes,Route} from "react-router-dom";


export default function App() {
  return (
      <Routes>
    
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        {/* <Route path='/Projects' element={<Projects/>}/> */}
      </Routes>
  )
}
