import React, { useState, useEffect } from 'react'
import data from '../../data/data.json'
const Advertisement = () => {
    const [adver, setAdver] = useState([])
    useEffect(() => {
        const advertise = data.Sponsored
        setAdver(advertise)
    }, [])
    const AdvertisementArea = adver.map((item) => {
        return (

            <div className="newgames-container" key={item.id}>
                <img src={ require(`./../../Images` + item.img)} alt={item.alt} className="new-image" />
                <div className='adver-content'>
                    <div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="header-link">{item.title}</a>
                    </div>
                    <div>
                        <p className="newgames-p">{item.subject}</p>
                    </div>
                </div>
            </div>

        )
    })
    return (
        <div>
            <p className='article-header'>ADVERTISEMENT AREA</p>
            {AdvertisementArea}
        </div>
    )
}

export default Advertisement