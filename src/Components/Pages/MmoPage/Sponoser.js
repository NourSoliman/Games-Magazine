import React, { useState, useEffect } from 'react'
import data from '../../../data/data.json'
import {Link} from 'react-router-dom'
function Sponoser() {
    const [ad, setAd] = useState([])
    useEffect(() => {
        const ads = data.Sponsored
        setAd(ads)
    }, [])
    const adArea = ad.map((item , index) => {
        if (index > 0) {
            return null;
        }
        else {
            return (
                <div key={item.id}> 
                    <div className="newgames-container" key={item.id}>
                        <img src={require(`./../../../Images` + item.img)} alt={item.alt} className="new-image" />
                        <div className='adver-content'>
                            <div>
                                <Link to={item.link} className="header-link">{item.link}</Link>
                            </div>
                            <div>
                                <p className="newgames-p">{item.subject}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    })
    return (
        <div>
            {adArea}
        </div>
    )
}

export default Sponoser