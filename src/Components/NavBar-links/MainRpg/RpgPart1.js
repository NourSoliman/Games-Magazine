import React, { useState, useEffect } from 'react'
import data from '../../../data/data.json'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function RpgPart1() {
    const [rpg1, setRpg1] = useState([])
    useEffect(() => {
        const rpg = data.RpgPart1
        setRpg1(rpg)
    }, [])
    const RpgPart1 = rpg1.map((item) => {
        return (
            <Col md={4} sm={12} key={item.id}>
                <div>
                    <img src={item.img} alt="rpg" className='mmo-images' />
                </div>
                <div>
                    <h4><Link to={'/' + item.link} className="link-name">{item.title}</Link></h4>
                </div>
                <div>
                    <p className='bestGames-p'>{item.subject}</p>
                </div>
            </Col>
        )
    })
    return (
        <div>
            <div className="mmo-head">
                <span className="mmo-span"></span>
                <h4 className="magazine-header1">RPG</h4>
            </div>
            <Row >
                {RpgPart1}
            </Row>
        </div>
    )
}

export default RpgPart1