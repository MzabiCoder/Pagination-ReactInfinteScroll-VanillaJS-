import React from 'react'

export const Navbar = ({changeValue}) => {
    
    
    return (
        <nav>
        <button onClick={()=>changeValue('people')} >people</button>  
            <button onClick={() => changeValue('planets')} >planets</button>       
        </nav>
    )
}
