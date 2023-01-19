import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { Row, Col } from "react-bootstrap";
import MmoRight from "./MmoRight";
function Mmo() {
    const [mmo, setMmo] = useState([])
    useEffect(() => {
        const mmos = data.MmoLeft
        setMmo(mmos)
    }, [])
    const mmoLeft = mmo.map((item) => {
        return (
            <Col key={item.id} data-aos="slide-right" data-aos-duration="2000">
                <div key={item.id} >
                    <img src={item.img} alt={item.alt} className="mmoLeft-images" />
                </div>
                <div>
                    <Link to={item.link} className="link-name">{item.title}</Link>
                </div>
            </Col>
        )
    })
    return (
        <div>
            <div className="mmo-container">
                <h3 className="section-title">Mmo</h3>
            </div>
            <Row className="mmo-row">
                {mmoLeft}
                <Col md={4}>
                    <MmoRight />
                </Col>
            </Row>
        </div>
    )
}

export default Mmo