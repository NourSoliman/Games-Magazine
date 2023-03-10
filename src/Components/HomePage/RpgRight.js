import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
const RpgRight = () => {
    const [right, setRight] = useState([])
    useEffect(() => {
        const right = data.RpgRight
        setRight(right)
    }, [])
    const rpgRight = right.map((item) => {
        return (
            <div key={item.id} className="mini-info" data-aos="slide-right" >
                <img src={require(`./../../Images` + item.img)} alt={item.alt} className="mmoRight-images" />
                <Link to={item.link} className="link-name">{item.title}</Link>
            </div>
        )
    })
    return (
        <div>{rpgRight}</div>
    )
}

export default RpgRight