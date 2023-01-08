import React, {useState , useEffect} from 'react'
import { Col , Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import data from '../../data/data.json'
function BestGames() {
    const [best , setBest] = useState([])
    useEffect(()=>{
        const bestGames = data.BestGames
        setBest(bestGames)
    },[])
    const bestArticle = best.map((item) => {
        return (
            <Col sm={4} xs={12} key={item.id} className="best-Article" >
            <div className='bestgames-container' key={item.id}>
                <img src={item.img} alt={item.alt} className="best-images"/>
                <div>
                    <Link to={item.link} className="header-link">{item.link}</Link>
                </div>
                <div>
                    <p className='bestGames-p'>{item.subject}</p>
                </div>
            </div>
            </Col>
        )
    })
    return (
        <div>
            <p className='article-header'>BEST GAMES</p>
            <Row>
            {bestArticle}
            </Row>
        </div>
    )
}

export default BestGames