import React from "react";
import '../../Styles/Pages.scss'
import "aos/dist/aos.css"
import Opinion from '../../HomePage/Opinion'
import ReadMore from '../MmoPage/ReadMore'
import Sponoser from "../MmoPage/Sponoser";
import Magazine from "../../HomePage/Magazine";
import LatestNews from '../../HomePage/LatestNews'
import { Row, Col, Container } from "react-bootstrap";
import RpgVideo from "./RpgVideo";

function RpgPage() {
    return (
        <Container fluid>
            <Row>
                <Col md={8}>
                    <RpgVideo />
                </Col>
                <Col md={4}>
                    <Opinion />
                </Col>
                <Row>
                    <Col md={8}>
                        <ReadMore />
                    </Col>
                    <Col md={4}>
                        <Sponoser />
                    </Col>
                    <Row>
                        <Col md={8}>
                            <Magazine />
                        </Col>
                        <Col md={4}>
                            <LatestNews />
                        </Col>
                    </Row>
                </Row>
            </Row>
        </Container >
    )
}

export default RpgPage