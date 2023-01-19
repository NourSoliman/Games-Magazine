import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
const NewsLetter = () => {
  const [sub, setSub] = useState([])
  useEffect(() => {
    const sub = data.NewsLetter
    setSub(sub)
  }, [])
  const subRight = sub.map((item) => {
    return (
      <div className="news-container" key={item.id}>
        <div>
          <img src={item.img} alt={item.title} className="news-image" />
        </div>
        <div className="news-info">
          <h4>{item.title}</h4>
          <p>{item.subject}</p>
          <Link className="sub-link">Sign Up</Link>
        </div>
      </div>
    )
  })
  return (
    <div >
      {/* <div>
        <h3>NewsLetter</h3>
      </div> */}
      {subRight}
    </div>
  )
}

export default NewsLetter