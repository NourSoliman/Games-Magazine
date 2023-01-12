import React from 'react'
import Home from './Home'
import Magazine from './Magazine'
import BestImages from './BestImages'
import Sideshow from './Sideshow'
import Mmo from './MmoLeft'
import FpsLeft from './FpsLeft'
import RpgLeft from './RpgLeft'
import MobileLeft from './MobileLeft'
import Subscribe from './Subscribe'
import FirstFooter from './FirstFooter'
import Editions from './Editions'
import FooterInfo from './FooterInfo'
const MainPage = () => {
return (
    <div>
        {/*first Part*/}
        <Home />
        {/*2nd Part*/}
        <Magazine />
        {/*Third*/}
        <BestImages />
        {/*Fourth*/}
        <Sideshow />
        {/*fifth*/}
        <Mmo />
        {/*Sixth*/}
        <FpsLeft />
        {/*seventh*/}
        <RpgLeft />
        {/*eighth*/}
        <MobileLeft />
        {/*Ningth*/}
        <Subscribe />
        {/*Footer*/}
        <FirstFooter />
        {/*Editions*/}
        <Editions />
        <FooterInfo />
    </div>
)
}

export default MainPage