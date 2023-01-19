import React, { useState, useEffect } from 'react'
import data from '../../../data/data.json'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function FpsPart2() {
    const [fps2, setFps2] = useState([])
    useEffect(() => {
        const fps = data.FpsPart2
        setFps2(fps)
    }, [])
    const fpsPart2 = fps2.map((item) => {
        return (
            <Col md={3} xs={12} key={item.id} data-aos="zoom-in" data-aos-duration="1000">
                <div>
                    <img src={item.img} alt="rpg" className='mmo-images' />
                </div>
                <div>
                    <Link to={'/' + item.link} className="link-name">{item.title}</Link>
                    <p>{item.subject}</p>
                </div>
            </Col>
        )
    })
    return (
        <Row className='row-part2'>
            {fpsPart2}
        </Row>
    )
}

export default FpsPart2