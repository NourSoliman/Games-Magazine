import React , {useState , useEffect} from 'react'
import data from '../../../data/data.json'
import {Link} from 'react-router-dom'
import { Row, Col  } from "react-bootstrap";
function MoreInPages() {
    const [more , setMore] = useState([])
    useEffect(()=>{
        const morePage = data.MoreinMmo
        setMore(morePage)
    },[])
    const moreMmorpgs = more.map((item)=>{
        return (
                <Col md={4} key={item.id}>
                    <div>
                    <img src={require(`./../../../Images` + item.img)} alt="mmo-pic" className='moremmo-images '/>
                    <Link className="header-link">{item.title}</Link>
                    </div>
                </Col>
        )
    }) 
  return (
    <Row >
        <div>
            <h4 className="section-title">
                More In MMORPG
            </h4>
        </div>
        {moreMmorpgs}
        </Row>
  )
}

export default MoreInPages