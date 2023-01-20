import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
const FpsRight = () => {
    const [fps, setFps] = useState([])
    useEffect(() => {
        const fps = data.FpsRight
        setFps(fps)
    }, [])
    const fpsRight = fps.map((item) => {
        return (
            <div key={item.id} className="mini-info" data-aos="slide-right" >
                <img src={item.img} alt={item.alt} className="mmoRight-images" />
                <Link to={item.link} className="link-name">{item.title}</Link>
            </div>
        )
    })
    return (
        <div>{fpsRight}</div>
    )
}

export default FpsRight