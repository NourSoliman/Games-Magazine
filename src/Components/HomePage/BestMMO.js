import React, { useState, useEffect } from 'react'
import data from '../../data/data.json'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function BestMMO() {
    const [mmo, setMmo] = useState([])
    useEffect(() => {
        const bestMmo = data.BestMmo
        setMmo(bestMmo)
    }, [])
    const bestMmorpg = mmo.map((item) => {
        return (
            <Col sm={4} xs={12} key={item.id} data-aos="fade-up" data-aos-duration="1000">
                <div className='bestmmo-container' key={item.id}>
                    <img src={item.img} alt={item.alt} className="best-images" />
                    <div>
                        <Link to={item.link} className="link-name">{item.title}</Link>
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
            <p className='article-header'>BEST MMORPG</p>
            <Row>
                {bestMmorpg}
            </Row>
        </div>
    )
}

export default BestMMO