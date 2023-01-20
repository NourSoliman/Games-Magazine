import React , {useState , useEffect} from 'react'
import data from '../../../data/data.json'
import {Col , Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const MmoPart2 = () => {
    const [part2 , setPart2] = useState([])
    useEffect(()=>{
        const mmo = data.MmoPart2
        setPart2(mmo)
    },[])
    const mmoPart2 = part2.map((item)=>{
        return (
                <Col md={3} xs={12} key={item.id} data-aos="zoom-in" >
                    <div>
                    <img src={item.img} alt="mmo" className='mmo-images'/>
                    </div>
                    <div>
                        <Link to={ '/' + item.link  }  className="link-name">{item.title}</Link>
                        <p>{item.subject}</p>
                    </div>
                </Col>
        )
    })
    return (
        <Row className='row-part2'>
            {mmoPart2}
        </Row>
 )
}

export default MmoPart2