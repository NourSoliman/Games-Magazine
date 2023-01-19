import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { Row, Col } from "react-bootstrap";
const Slider = () => {
  const [side, setSide] = useState([])
  useEffect(() => {
    const sideShow = data.SideShow
    setSide(sideShow)
  }, [])
  const SideShowPart = side.map((item) => {
    return (
      <Col key={item.id} md={4} data-aos="flip-right" data-aos-duration="2000">
        <div className="side-container" key={item.id}>
          <img src={item.img} alt={item.alt} className="side-image" />
          <div>
            <Link to={item.link} className="link-name">{item.link}</Link>
          </div>
        </div>
      </Col>
    )
  })
  return (
    <div>
      <div className="magazine-header">
        <span className="header-span"></span>
        <h3 className="magazine-header1">SideShow</h3>
      </div>
      <Row className="side-row">
        {SideShowPart}
      </Row>
    </div>
  )
};

export default Slider;
