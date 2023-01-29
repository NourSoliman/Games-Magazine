import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { Row, Col } from "react-bootstrap";
import RpgRight from "./RpgRight";
const RpgLeft = () => {
    const [rpg, setRpg] = useState([])
    useEffect(() => {
        const rpg = data.RpgLeft
        setRpg(rpg)
    }, [])
    const RpgLeft = rpg.map((item) => {
        return (
            <Col md={4} key={item.id} data-aos="slide-left">
                <div key={item.id}>
                    <img src={require(`./../../Images` + item.img)} alt={item.alt} className="mmoLeft-images" />
                    <div>
                        <Link to={item.link} className="link-name">{item.title}</Link>
                    </div>
                </div>
            </Col>
        )
    })
    return (
        <div className="mmo-container">
            <div>
                <h3 className="section-title">RPG</h3>
            </div>
            <Row className="rpg-row">
                {RpgLeft}
                <Col>
                    <RpgRight />
                </Col>
            </Row>
        </div>
    )
}

export default RpgLeft