import React, { useState, useEffect } from 'react'
import data from '../../../data/data.json'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function FpsPart4() {
    const [fps4, setFps4] = useState([])
    useEffect(() => {
        const fps = data.FpsPart2
        setFps4(fps)
    }, [])
    const fpsPart4 = fps4.map((item) => {
        return (
            <Col md={12} sm={12} data-aos="fade-left"  key={item.id} className="mmo-col" >
                <div className='mmogames-container'>
                    <div>
                        <img src={item.img} alt="mmo" className='mmo3-images' />
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
        <Row className='part4-row'>{fpsPart4}</Row>
    )
}

export default FpsPart4