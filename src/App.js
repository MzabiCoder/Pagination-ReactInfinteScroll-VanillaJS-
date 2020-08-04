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

// import React,{useEffect,useState} from 'react'
// import axios from 'axios'
 
// const App = () => {

//   const [results,setdata]=useState([])
//   const [loading, setLoading] = useState(true)
//   const [text, setText] = useState(null)
  
//   useEffect(() => {
//     const fetchPeople = async () => {
//     const {data} = await axios(`https://jsonplaceholder.typicode.com/comments`)
//       setdata(data)
//       setLoading(false)
//     } 
//     fetchPeople()
    

//   }, [])
//   const promt = (name) => {
    
//       window.alert(name);
    
//   }

//   const change = async e => {
//     setText(e.target.value)
     
//       const {data} = await axios(`https://jsonplaceholder.typicode.com/comments&_comment${text}`)
//         setdata(data)
//         setLoading(false)
       
//   }

   

//    return (
//     <div className="wrapper">
//       <div className="control">
//          <input type="text" value={text} onChange={change}/>
//        </div>
//        {!loading && results.length && results.map(val => (
//          <div className="list" onClick={()=>promt(val.name)}  style={list} key={val.id}>{val.name}</div>
//        ))}
     
//     </div>
//   )
// }

// const list = {
//   marginTop:'1rem',
//   padding: '1rem',
//   backgroundColor: 'grey',
//   color: 'blue',
//   cursor:'pointer' 
// }
 

// export default App

