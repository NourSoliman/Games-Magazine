import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import GamesNews from "./GamesNews";
import Advertisement from "./Advertisement";
import TopStory from "./TopStory";
import BestGames from "./BestGames";
import MoreGames from "./MoreGames";
import Opinion from "./Opinion";
import LatestNews from "./LatestNews";
import "../Styles/Home.scss";
import Aos from 'aos';
import "aos/dist/aos.css"
import BestMMO from "./BestMMO";
const Home = () => {
        Aos.init(()=>{
            Aos.init({duration:4000})
        })
    return (
        <Row>
            <Col lg={3} md={5} xs={12} className="main-left-column" >
                {/*Left Column*/}
                <GamesNews />
                <Advertisement />
            </Col>
            <Col lg={5} md={5} className="main-middle-column" >
                {/*Middle Column*/}
                <TopStory />
                <BestGames />
                <BestMMO />
                <MoreGames />
            </Col>
            <Col lg={4} md={5} className="main-left-column">
                {/*Right Column*/}
                <Opinion />
                <LatestNews />
                <Advertisement />
            </Col>
        </Row>
    );
};

export default Home;
