import { useState, useEffect } from "react"
import {TextField, Button} from '@mui/material'
import { useParams, useNavigate } from "react-router-dom"

export default function SearchPage (){

    const [data, setData] = useState('')
    const [query, setQuery] = useState('')
    const [imgUrl, setImgUrl] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg")

    const navigate = useNavigate()
    const params = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${params.queryText}`

    useEffect(()=>{
        fetch(url).then((response)=>{
            return response.json().then((data)=>{
                console.log(data)
                setData(data)
                setImgUrl(data.sprites.other.dream_world.front_default)
                console.log(imgUrl)
            })
        })
    }, [url])
    
    const handleChange=(event)=>{
        const change = event.target.value
        console.log(change)
        setQuery(change.toLowerCase())
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        navigate(`/search/${query}`)
    }

    return <div>
        <h1>Welcome to My Pokemon Search App</h1>

        <form onSubmit={handleSubmit}>
            <TextField
            id="search"
            label="enter text"
            variant="outlined"
            size="small"
            value={query}
            onChange={handleChange}
            >
            </TextField>
            <Button type="submit" variant="contained" size="large">Search</Button>
        </form>

        <h2>{data.name}</h2>
        <img src={imgUrl} alt="noimage"/>
    </div>
}