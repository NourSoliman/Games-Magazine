import React, { useState, useEffect } from 'react'
import data from '../../../data/data.json'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function RpgPart3() {
    const [part3, setPart3] = useState([])
    useEffect(() => {
        const rpg = data.RpgPart3
        setPart3(rpg)
    }, [])
    const rpgPart3 = part3.map((item) => {
        return (
            <Col md={12} sm={12} data-aos="fade-left"  key={item.id}>
                <div className='mmogames-container'>
                    <div>
                        <img src={item.img} alt="rpg" className='mmo3-images' />
                    </div>
                    <div >
                        <div>
                            <Link to={'/' + item.link} className="mmo-infolink">{item.title}</Link>
                        </div>
                        <p className="mmo-infoP">{item.subject}</p>
                    </div>
                </div>
            </Col>
        )
    })
    return (
        <Row className='mmo-row'>{rpgPart3}</Row>
    )
}

export default RpgPart3