import React from 'react'
import MyVideo from './FPS1.mp4'
import { GrFacebookOption } from 'react-icons/gr'
import { FiTwitter } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { FcReddit } from 'react-icons/fc'
import { FaPinterestP } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
function FpsVideo() {
    return (
        <div >
            <div className='mmovideo-container'>
                <video src={MyVideo} type="video/mp4" autoPlay loop controls className='mmo-video' />
            </div>
            <div className="social-container">
                <h4>Share: </h4>
                <ul className='social-icons'>
                    <li><a href='https://github.com/NourSoliman/Games-Magazine'><GrFacebookOption size="20px" className='face' /></a></li>
                    <li><a href='https://github.com/NourSoliman/Games-Magazine'><FiTwitter size="20px" className='twitter' /></a></li>
                    <li><a href='https://github.com/NourSoliman/Games-Magazine'><FaLinkedin size="20px" className='link' /></a></li>
                    <li><a href='https://github.com/NourSoliman/Games-Magazine'><FcReddit size="20px" className='reddit' /></a></li>
                    <li><a href='https://github.com/NourSoliman/Games-Magazine'><FaPinterestP size="20px" className='pinter' /></a></li>
                    <li><a href='https://github.com/NourSoliman/Games-Magazine'><AiOutlineMail size="20px" className='mail' /></a></li>
                </ul>
            </div>
            <div className='link-container'>
                <Link to="/FPS">FPS</Link>
                <Link to="/RPG">RPG</Link>
                <Link to="/MMORPG">MMORPG</Link>
            </div>
        </div>
    )
}

export default FpsVideo