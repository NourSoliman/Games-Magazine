import React, { useEffect, useState } from 'react'
import { Row, Col , Container, Nav, Navbar, Form} from 'react-bootstrap';
import {BsFillCloudSunFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import data from '../../data/data.json'
const Header = () => {
    const [nav , setNav] = useState([])
    const currentDate = new Date();
        const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`
    useEffect(()=>{
        const nav = data.navLinks;
        setNav(nav)
    },[])
    const navItem = nav.map(item => {
        return (
            <Nav.Link as={Link} to={`/${item.name}`} key={item.id}>{item.name}</Nav.Link>
        )
    })
    return (
        <Container fluid >
            <Row className='header'>
                <Col xs={2} lg={3} className="left">
                    <span className='weather-icon'><BsFillCloudSunFill /></span>
                    <span className='weather'> 15° <span className='city'>Cairo-EG</span></span>
                    <p className='date'>{date}</p>
                </Col>
                <Col xs={4} lg={6} className='logo'>
                <h1 className='logo-name'>GamesMagazine</h1>
                </Col>
                <Col className='right' xs={6} lg={3}>
                <a href='sign-in' className='sign'>SIGN IN</a >
                <a href='subscribe' className='subscribe'>SUBSCRIBE</a >
                </Col>
                </Row>
                <Navbar sticky='sticky-top' expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='header-toggle'/>
                <Navbar.Collapse >
                <Nav className='header-links'>
                    {navItem}
                </Nav>
                <Form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </Form>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Header