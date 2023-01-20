import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { Row, Col } from "react-bootstrap";
const Magazine = () => {
    const [magazine, setMagazine] = useState([]);
    useEffect(() => {
        const magazines = data.Magazine;
        setMagazine(magazines);
    }, []);
    const MagazinePart = magazine.map((item) => {
        return (
            <Col className="row-container" key={item.id} lg={3} md={6} data-aos="zoom-out-up" >
                <div key={item.id} className="Magazine-section">
                    <img src={item.img} alt={item.alt} className="new-image" />
                    <div className="magazine-info">
                        <span className="cover-span">COVER </span>
                        <span className="span-title">{item.alt}</span>
                        <div>
                            <Link to={item.link} className="link-name">{item.title}</Link>
                        </div>
                    </div>
                </div>
            </Col>
        );
    });
    return (
        <div>
            <div className="magazine-header">
                <span className="header-span"></span>
                <h2 className="magazine-header1">In The Magazine</h2>
            </div>
            <Row className="Magazine-row">{MagazinePart}</Row>
        </div>
    );
};

export default Magazine;
