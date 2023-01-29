import React, { useState, useEffect } from 'react'
import data from '../../../data/data.json'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function RpgPart2() {
    const [rpg2, setRpg2] = useState([])
    useEffect(() => {
        const rpg = data.RpgPart2
        setRpg2(rpg)
    }, [])
    const rpgPart2 = rpg2.map((item) => {
        return (
            <Col md={3} xs={12} key={item.id} data-aos="zoom-in" >
                <div>
                    <img src={ require(`./../../../Images` + item.img)} alt="rpg" className='mmo-images' />
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
            {rpgPart2}
        </Row>
    )
}

export default RpgPart2