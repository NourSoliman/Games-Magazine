import React , {useState , useEffect} from 'react'
import data from '../../data/data.json'
import {Link} from 'react-router-dom'
const Advertisement = () => {
    const [adver , setAdver] = useState([])
    useEffect(()=>{
    const advertise = data.Sponsored
        setAdver(advertise)
    },[])
    const AdvertisementArea = adver.map((item)=>{
        return (
            
            <div className="newgames-container">
                <img src={item.img} alt={item.alt} className="new-image"/>
                <div className='adver-content'>
                <div>
                    <Link to={item.link} className="header-link">{item.link}</Link>
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