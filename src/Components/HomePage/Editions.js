import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { Nav } from 'react-bootstrap'
const Editions = () => {
  const [edition, setEdition] = useState([])
  useEffect(() => {
    const edition = data.Editions
    setEdition(edition)
  }, [])
  const editions = edition.map((item) => {
    return (
      <ul className="edition-container" key={item.id}>
        <li><Nav.Link as={Link} to="/" key={item.id}>{item.name}</Nav.Link></li>
      </ul>
    )
  })
  return (
    <div className="editions-container">
      <p>Editions: </p>
      {editions}
    </div>
  )
}

export default Editions