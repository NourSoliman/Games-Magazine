import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
const  MmoRight =()=>  {
    const [right , setRight] = useState([])
    useEffect(()=>{
        const right = data.MmoRight
        setRight(right)
    },[])
    const mmoRight = right.map((item)=>{
        return (
            <div key={item.id} className="mini-info" data-aos="slide-left">
            <img src={item.img}  alt={item.alt} className="mmoRight-images"/>
            <Link className="link-name">{item.link}</Link>
            </div>
        )
    })
  return (
    <div className="mmo-right">{mmoRight}</div>
  )
}

export default MmoRight