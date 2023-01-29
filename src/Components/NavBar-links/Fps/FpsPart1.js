import React, { useState, useEffect } from 'react'
import data from '../../../data/data.json'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function FpsPart1() {
    const [fps, setFps] = useState([])
    useEffect(() => {
        const fpsPart = data.FpsPart1
        setFps(fpsPart)
    }, [])
    const fpsPart1 = fps.map((item) => {
        return (
            <Col md={4} sm={12} key={item.id}>
                <div>
                    <img src={require(`./../../../Images` + item.img)} alt="fps" className='mmo-images' />
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
                <h4 className="magazine-header1">FPS</h4>
            </div>
            <Row >
                {fpsPart1}
            </Row>
        </div>
    )
}

export default FpsPart1