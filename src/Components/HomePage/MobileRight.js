import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
const MobileRight = () => {
  const [mobileR, setMobileR] = useState([])
  useEffect(() => {
    const mobileR = data.MobileRight
    setMobileR(mobileR)
  }, [])
  const MobileRight = mobileR.map((item) => {
    return (
      <div key={item.id} className="mini-info" data-aos="slide-right" >
        <img src={require(`./../../Images` + item.img)} alt={item.alt} className="mmoRight-images" />
        <Link to={item.link} className="link-name">{item.title}</Link>
      </div>
    )
  })
  return (
    <div>{MobileRight}</div>
  )
}

export default MobileRight