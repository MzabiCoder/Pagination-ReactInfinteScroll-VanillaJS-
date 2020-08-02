import React,{useState} from 'react'

export const Search = ({changeTerget,placeholder}) => {
    const [text, setTex] = useState()
    
    const  fun= (e) => {
        changeTerget(text)
        setTex(e.target.value)
    }
    return (
        <form>
            <input type="text" placeholder={placeholder} onChange={fun} value={text}/>  
            
        </form>
    )
}
