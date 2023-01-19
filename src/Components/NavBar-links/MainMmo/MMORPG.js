import React , {useState , useEffect} from 'react'
import data from '../../../data/data.json'
import {Col , Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const MMORPG = () => {
    const [mmorpg , setMmorpg] = useState([])
    useEffect(()=>{
        const mmorpgGames = data.MmorpgPart1
        setMmorpg(mmorpgGames)
    },[])
    const mmorpgPage = mmorpg.map((item)=>{
        return (
            <Col md={4} sm={12} key={item.id}>
                        <div>
                    <img src={item.img} alt="mmo" className='mmo-images'/>
                        </div>
                    <div>
                        <h4><Link to={ '/' + item.link  } className="link-name">{item.title}</Link></h4>
                    </div>
                    <div>
                        <p className='bestGames-p'>{item.subject}</p>
                    </div>
                </Col>
        )
    })
    return (
        <div>
        <div className="mmo-head">
            <span className="mmo-span"></span>
            <h4 className="magazine-header1">MMORPG</h4>
        </div>
        <Row >
            {mmorpgPage}
        </Row>
        </div>
    )
}

export default MMORPG