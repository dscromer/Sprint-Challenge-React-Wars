import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StarWars.scss'
import StarWarsCard from './StarWarsCard'



function StarWars() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(res => setData(res.data.results))
        .catch(err => `You hit an error: ${err}`)
    }, [])
    console.log(data)
    return (
        <div>
            <div className='head'>
                <h1>Star Wars Characters</h1>
                <h3>Click on a name to find out more!</h3>
            </div>
            {data.map((character) => {
                return <StarWarsCard character={character} />
            })}
        </div>
    )
}

export default StarWars;