import React from 'react'
import "./App.css"
import NavBar from './components/NavBar/NavBar'
import Event from './components/Event/Event'
import AboutUs from './components/AboutUs/AboutUs'

const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      <hr />
      <div className='hero'>
        <Event/>
      </div>
      <hr />
      <AboutUs/>

    </div>
  )
}

export default App
