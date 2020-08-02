import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from './Spinner'
 import InfiniteScroll from 'react-infinite-scroll-component';
import uuid from 'react-uuid'
import { Search } from './Search'
import {Person} from './Person'
 

 
const People = () => {
    let [outputs, setOutput] = useState([])
    let [page, setPage] = useState(1)
    const [loading,setloading]=useState(true)
    const [target,setTarget]=useState('')

    useEffect(() => {
        const fetchPlanets = async () => {
        const {data:{results}} = await axios(`https://swapi.dev/api/people/?search=${target}`)
            setloading(false)
            setOutput(results)
        } 
        fetchPlanets()
        
    
    },[target])
     const fectMore = async () => {
        setPage(page=page+1)
        const {data:{results}} = await axios(`https://swapi.dev/api/people/?page=${page}`)
        setOutput(outputs.concat(results))
    }
    const changeTerget = value => {
        setTarget(value)
    }
    if (loading) {
         return <Spinner/>
    }

    
     return (
        <div className="container">
             <Search placeholder={'Search people...'} changeTerget={changeTerget}/>
            <InfiniteScroll
                dataLength={outputs.length}
                hasMore={true}
                loader={outputs.length < 60 ? <Spinner className="spinner"/> : null}
                next={fectMore}
            >
           {outputs.length>0 && outputs.map(person => (
                <Person key={uuid()} person={person} />
           ))}
           </InfiniteScroll>
        </div>
    )
}
export default People
 

 
