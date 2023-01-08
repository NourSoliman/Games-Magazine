import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/data.json'
function TheDebate() {
    const [latest , setLatest] = useState([])
    useEffect(()=>{
        const latest = data.LatestNews
        setLatest(latest)
    },[])
    const LatestArticle = latest.map((item)=>{
        return (
            <div className='latest-container' key={item.id}>
                <img src={item.img} alt={item.alt} className="latest-images"/>
                <div>
                    <Link to={item.link} className="link-name">{item.link}</Link>
                </div>
            </div>
        )
    })
    return (
        <div>
            <p className='article-header'>LatestNews</p>
            {LatestArticle}
        </div>
    )
}

export default TheDebate