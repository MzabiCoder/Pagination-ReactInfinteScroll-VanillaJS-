import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import Planets from './components/Planets'
import People from './components/People'
import './App.css'
 
const App = () => {
  const [value, setValue] = useState('planet')
  const changeValue = value => {
    setValue(value)
  }
  return (
    <div className="App">
      <h1>WELCOME TO THE CLUB</h1>
      <Navbar changeValue={changeValue} />
      <div className="container">
      {value==='planets' ? <Planets/>:<People/> }
      </div>
    </div>
  )
}

 

export default App
