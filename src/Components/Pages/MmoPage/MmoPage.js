import React from "react";
import MmoVideo from './MmoVideo';
import '../../Styles/Pages.scss'
import "aos/dist/aos.css"
import Opinion from '../../HomePage/Opinion'
import LatestNews from '../../HomePage/LatestNews'
import { Row, Col, Container } from "react-bootstrap";
import MoreInPages from "./MoreInPages";
import Magazine from "../../HomePage/Magazine";
import Sponoser from "./Sponoser";
import ReadMore from "./ReadMore";
function MmoPage() {
  return (
    <Container fluid>
      <Row>
        <Col md={8} xs={12}>
          <MmoVideo />
        </Col>
        <Col md={4}>
          <Opinion />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <ReadMore />
        </Col>
        <Col md={4}>
          <Sponoser />
        </Col>
      </Row>
      <Row className='morein'>
        <Col md={8} xs={12}>
          <MoreInPages />
        </Col>
        <Col md={4} xs={12}>
          <LatestNews />
        </Col>
      </Row>
      <Row>
        <Magazine />
      </Row>
    </Container>
  )
}

export default MmoPage