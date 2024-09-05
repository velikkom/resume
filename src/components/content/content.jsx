import React from 'react'
import "./content.css";
import About from './about/about';
import Experiences from './experience/experiences';

const Content = () => {
  return (
    <div className='main-content pull-right'>
        <About/>
        <Experiences/>
    </div>
  )
}

export default Content