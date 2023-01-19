import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import { Row, Col } from 'react-bootstrap'
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai'
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
const FirstFooter = () => {
    const [footer, setFooter] = useState([])
    useEffect(() => {
        const footer = data.FirstFooter
        setFooter(footer)
    }, [])
    const FirstFooter = footer.map((item) => {
        return (
            <div className="footer-container" key={item.id}>
                <Row>
                    <Col md={3} className="footer-Logo">
                        {item.logo}
                    </Col>
                    <Col md={3} className="footer-copy">
                        {item.copyRight}
                    </Col>
                    <Col md={6} >
                        <ul className="footer-icons">
                            <li><a className="footer-icon" href={item.link}><AiFillFacebook size="30px" /></a></li>
                            <li><a className="footer-icon" href={item.link}><AiFillGithub size="30px" /></a></li>
                            <li><a className="footer-icon" href={item.link}><BsInstagram size="30px" /></a></li>
                            <li><a className="footer-icon" href={item.link}><BsLinkedin size="30px" /></a></li>
                            <li><a className="footer-icon" href={item.link}><BsTwitter size="30px" /></a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    })
    return (
        <div>
            {FirstFooter}
        </div>
    )
}

export default FirstFooter