import React, { useState, useEffect } from 'react'
import data from '../../data/data.json'
import { Link } from 'react-router-dom'
const TopStory = () => {
  const [story, setStory] = useState([])
  useEffect(() => {
    const topstory = data.TopStory
    setStory(topstory)
  }, [])
  const storyArticle = story.map((item) => {
    return (
      <div key={item.id} className="topStory-container">
        <img src={require('./../../Images'+ item.img)} alt={item.alt} className="top-image" />
        <div>
          <Link to={item.link} className="header-link">{item.title}</Link>
        </div>
        <div>
          <p className="newgames-p">{item.subject}</p>
        </div>
      </div>
    )
  })
  return (
    <div>
      <p className='article-header'>TOP STORY</p>
      <div>{storyArticle}</div>
    </div>
  )
}
export default TopStory

// "img": "https://s3.gaming-cdn.com/images/products/3266/orig/throne-and-liberty-pc-game-cover.jpg?v=1666626936",
// "img": "https://s3.gaming-cdn.com/images/products/3266/orig/throne-and-liberty-pc-game-cover.jpg?v=1666626936",
// "img": "https://s3.gaming-cdn.com/images/products/3266/orig/throne-and-liberty-pc-game-cover.jpg?v=1666626936",

