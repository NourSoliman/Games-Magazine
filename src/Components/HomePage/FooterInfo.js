import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import data from "../../data/data.json";
import { Link } from 'react-router-dom'
const FooterInfo = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        const info = data.FooterInfo
        setInfo(info)
    }, [])
    const FooterInfo = info.map((item) => {
        return (
            <ul className="info-container" key={item.id}>
                <li><Nav.Link as={Link}>{item.name}</Nav.Link></li>
            </ul>
        )
    })
    return (
        <div className="footerInfo-container">
            {FooterInfo}
        </div>
    )
}

export default FooterInfo