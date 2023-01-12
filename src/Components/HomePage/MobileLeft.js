import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { Row, Col } from "react-bootstrap";
import MobileRight from "./MobileRight";
const MobileLeft = () => {
    const [mobile , setMobile] = useState([])
    useEffect(()=>{
        const mobile = data.MobileLeft
        setMobile(mobile)
    },[])
    const mobileLeft = mobile.map((item)=>{
        return (
            <Col md={4} key={item.id}>
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
            <h3>Mobile Games</h3>
        </div>
        <Row className="mobile-row">
            {mobileLeft}
            <Col>
            <MobileRight />
            </Col>
        </Row>
    </div>
  )
}

export default MobileLeft