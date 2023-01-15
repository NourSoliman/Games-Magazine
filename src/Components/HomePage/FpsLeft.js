import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { Row, Col } from "react-bootstrap";
import FpsRight from "./FpsRight";
const  FpsLeft = ()=> {
    const [fps , setFps] = useState([])
    useEffect(()=>{
        const fps = data.Fpsleft
        setFps(fps)
    },[])
    const fpsLeft = fps.map((item)=>{
        return (
            <Col md={4} key={item.id} data-aos="slide-left" >
            <div key={item.id}>
                <img src={item.img} alt={item.alt} className="mmoLeft-images"/>
                <div>
                    <Link to={item.link} className="link-name">{item.link}</Link>
                </div>
            </div>
            </Col>
        )
    })
    return (
    <div className="mmo-container">
        <div>
            <h3 className="section-title">FPS</h3>
        </div>
        <Row className="fps-row">
            {fpsLeft}
            <Col>
            <FpsRight />
            </Col>
        </Row>
    </div>
    )
}

export default FpsLeft