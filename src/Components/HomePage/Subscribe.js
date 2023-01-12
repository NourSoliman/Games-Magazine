import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { Row, Col } from "react-bootstrap";
import NewsLetter from "./NewsLetter";
const Subscribe =() => {
    const [sub , setSub] = useState([])
    useEffect(()=>{
        const sub = data.Subscribe
        setSub(sub)
    },[])
    const SubRight = sub.map((item)=>{
        return (
            <div className="sub-container">
                <Row>
                    <Col lg={8}>
                        <Row className="sub-row">
                <Col md={4} >
                    <div className="subImages-container">
                    <img src={item.img1} alt="first-pic" className="sub-image1"/>
                    <img src={item.img2} alt="2nd-pic" className="sub-image2"/>
                </div>
                </Col>
                <Col md={8} xs={12} className="sub-info">
                    <Link to={item.title} className="sub-title">{item.title}</Link>
                    <div className="sub-ino">
                    <h4>{item.subject1}</h4>
                    <p>{item.subject2}</p>
                    </div>
                    <div className="sub-button">
                        <Link className="sub-link">SUBSCRIBE</Link>
                    </div>
                </Col>
                </Row>
                </Col>
                <Col lg={4}>
                <NewsLetter />
                </Col>
                </Row>
            </div>
            
        )
    })
  return (
    <div className="mmo-container">
        <div>
            <h3>
                Subscribe
            </h3>
            <div className="subscribe-container">
                {SubRight}

            </div>
        </div>
    </div>
  )
}

export default Subscribe