import React, { useState, useEffect } from 'react'
import data from '../../data/data.json'
import { Link } from 'react-router-dom'
function Opinion() {
    const [opin, setOpin] = useState([])
    useEffect(() => {
        const dataOpin = data.opinions
        setOpin(dataOpin)
    }, [])
    const dataOpinion = opin.map((item) => {
        return (
            <div className='opinion-container' key={item.id}>
                <img src={require(`./../../Images` + item.img)}  alt={item.alt} className="opinion-images"></img>
                <div>
                    <Link to={item.link} className="opinion-link">{item.link}</Link>
                    <p className='writer-name'>{item.by}</p>
                </div>
            </div>
        )
    })
    return (
        <div>
            <p className='article-header'>Opinion</p>
            {dataOpinion}
        </div>
    )
}

export default Opinion