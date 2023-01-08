import React, {useState , useEffect}from 'react'
import data from '../../data/data.json'
import {Link} from 'react-router-dom'
const TopStory = () => {
  const [story , setStory] = useState([])
  useEffect(()=>{
    const topstory = data.TopStory
    setStory(topstory)
  },[])
  const storyArticle = story.map((item) => {
    return (
      <div key={item.id} className="topStory-container">
        <img src={item.img} alt={item.alt} className="top-image"/>
        <div>
          <Link to={item.link} className="header-link">{item.link}</Link>
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
