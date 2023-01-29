import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { Row, Col } from "react-bootstrap";
function BestImages() {
    const [images, setImages] = useState([])
    useEffect(() => {
        const image = data.BestImages
        setImages(image)
    }, [])
    const imagesPart = images.map((item) => {
        return (
            <Col className="row-container" key={item.id} lg={3} md={6} data-aos="zoom-out-left" >
                <div className="bestinfo-container">
                    <div >
                        <Link to={item.link} className="images-link">{item.link}</Link>
                    </div>
                    <img src={require(`./../../Images` + item.img)} alt={item.alt} className="new-image" />
                </div>
                <div>
                    <div>
                        <Link to={item.title} className="link-name">{item.title}</Link>
                    </div>
                    <div>
                        <p>{item.subject}</p>
                    </div>
                </div>
            </Col>
        )
    })
    return (
        <div className="bestImages-container">
            <div className="magazine-header">
                <span className="header-span"></span>
                <h3 className="magazine-header1">Best Images</h3>
            </div>
            <Row className="bestImages-row">
                {imagesPart}
            </Row>
        </div>
    )
}

export default BestImages