import React from 'react'

export const Person = ({person:{birth_year,name,created}}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{birth_year}</p>
            <p>Creation date : {new Date(created).toDateString()}</p>
         </div>
    )
}
