import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
const  RpgRight = ()=> {
    const [right , setRight] = useState([])
    useEffect(()=>{
        const right = data.RpgRight
        setRight(right)
    },[])
    const rpgRight = right.map((item)=>{
        return (
            <div key={item.id} className="mini-info">
                <img src={item.img} alt={item.alt} className="mmoRight-images"/>
                <Link to={item.link} className="link-name">{item.link}</Link>
            </div>
        )
    })
return (
    <div>{rpgRight}</div>
)
}

export default RpgRight