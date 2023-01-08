import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/data.json'
const GamesNews = () => {
    const [games , setGames] = useState([])
    useEffect(()=>{
        const newItems = data.NewGames
        setGames(newItems)
    },[])
    const newGames = games.map((item)=> {
        return (
            <div key={item.id} className="newgames-container">
                <img src={item.img} alt={item.alt} className="new-image"/>
                <div>
                    <Link to={item.link} className="header-link">{item.link}</Link>
                </div>
                <div >
                    <p className="newgames-p">{item.subject}</p>
                </div>
            </div>
        )
    })
    return (
        <div>            
            <p className='article-header'>GAMES NEWS</p>
            {newGames}
        </div>
    )
}

export default GamesNews