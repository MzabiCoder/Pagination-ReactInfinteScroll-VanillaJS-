import React from 'react'

export const Planet = ({planet:{name,created}}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
             <p>Creation date : {new Date(created).toDateString()}</p>
         </div>
    )
}
