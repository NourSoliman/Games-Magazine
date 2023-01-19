import React, { useEffect, useState } from 'react'
import data from '../../../data/data.json'
import { Link } from 'react-router-dom'
const ReadMore = () => {
    // const [toggle, setToggle] = useState(1)
    const [image, setImage] = useState([])
    useEffect(() => {
        const images = data.images
        setImage(images)
    }, [])
    const imagesPart = image.map((item) => {
        return (
            // <div>
            //     <ul>
            //         <li>
            //         <Link onClick={() => setToggle(item.key)}>One Of The Best MMORPG games last 12 Months</Link>
            //         </li>
            //     </ul>
            //     <div>
            //         {toggle === item.key ?
            //         <>
            //             <img src={item.img} key={item.key} className="link-images" />
            //         </> : null}
            //     </div>
            // </div>
            <div key={item.id} >
                <ul>
                    <li>
                        <Link to={'/' + item.type } key={item.id} className="links">{item.title}</Link>
                    </li>
                </ul>
            </div>
        )
    })
    return (
        <div className="link-mainContainer">
            <div className='links-header'>
                <h4>Read More</h4>
            </div>
            {imagesPart}
        </div>
    )
}

export default ReadMore