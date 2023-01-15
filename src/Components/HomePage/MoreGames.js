import React , {useState , useEffect} from 'react'
import data from '../../data/data.json'
import {Link} from 'react-router-dom'
function MoreGames() {
    const [more , setMore] = useState([])
    useEffect(()=>{
    const MoreInfo = data.MoreGames
    setMore(MoreInfo)
    },[])
    const MoreInfoGames = more.map((item)=>{
        return (
            <div className='moregames-container' key={item.id} data-aos="fade-up" data-aos-duration="1000">
                <div>
                    <img src={item.img} alt={item.alt} className="more-images"/>
                </div>
                <div className='info'>
                    <Link to={item.link} className="header-link">{item.link}</Link>
                    <p className="newgames-p">{item.subject}</p>
                </div>
            </div>
        )
    })
    return (
        <div>
            <p className='article-header'>More Games</p>
            {MoreInfoGames}
        </div>
    )
}

export default MoreGames