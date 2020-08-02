import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from './Spinner'
import { Planet } from './Planet'
 import uuid from 'react-uuid'
import { Search } from './Search'
 

 
const Planets = () => {
    let [outputs, setOutput] = useState([])
    let [page, setPage] = useState(1)
    const [loading,setloading]=useState(true)
    const [target,setTarget]=useState('')

    useEffect(() => {
        const fetchPlanets = async () => {
        const {data:{results}} = await axios(`https://swapi.dev/api/planets/?search=${target}`)
            setloading(false)
            setOutput(results)
        } 
        fetchPlanets()
        
    
    },[target])
    
    const changeTerget = value => {
        setTarget(value)
    }
    const fectMore = async () => {
        setPage(page++)
        let {data:{results}} = await axios(`https://swapi.dev/api/people/?page=${page}`)
        setOutput(results)
    }
    const fectLess = async () => {
        setPage(page--)
        let {data:{results}} = await axios(`https://swapi.dev/api/people/?page=${page}`)
        setOutput(results)
    }
    if (loading) {
         return <Spinner/>
    }
   
     return (
        <div className="container">
             <Search  placeholder={'Search planet...'}  changeTerget={changeTerget}/>
             <button onClick={fectLess} disabled={page===1} >Prev</button>
             {page}
            <button onClick={fectMore} disabled={page===8}>Next</button>
           {outputs.length>0 && outputs.map(planet => (
                <Planet key={uuid()} planet={planet} />
           ))}
           
        </div>
    )
}

 

export default Planets
