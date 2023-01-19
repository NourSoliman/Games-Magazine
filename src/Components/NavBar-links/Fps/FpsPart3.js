import React, { useState, useEffect } from 'react'
import data from '../../../data/data.json'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function FpsPart3() {
    const [fps3, setFps3] = useState([])
    useEffect(() => {
        const fps = data.FpsPart3
        setFps3(fps)
    }, [])
    const fpsPart3 = fps3.map((item) => {
        return (
            <Col md={12} sm={12} data-aos="fade-left" data-aos-duration="1000" key={item.id}>
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
        <Row className='mmo-row'>{fpsPart3}</Row>
    )
}

export default FpsPart3