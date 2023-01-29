import React, { useState, useEffect } from 'react'
import data from '../../../data/data.json'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const MmoPart4 = () => {
    const [part4, setPart4] = useState([])
    useEffect(() => {
        const mmo = data.MmoPart2
        setPart4(mmo)
    }, [])
    const MmoPart4 = part4.map((item) => {
        return (
            <Col md={12} sm={12} data-aos="fade-left"  key={item.id} className="mmo-col">
                <div className='mmogames-container'>
                    <div>
                        <img src={ require(`./../../../Images` + item.img)} alt="mmo" className='mmo3-images' />
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
        <Row className='part4-row'>{MmoPart4}</Row>
    )
}

export default MmoPart4