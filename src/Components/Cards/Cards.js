import React from 'react'
import "./Cards.css"
import { Link } from 'react-router-dom'

function cards({img,title,id}) {
  return (
   
    <Link to = {`/Products/${title}`}>
      <div id={id} className="image-container">
    <img src={img} alt='#'/>
    <div className="image-text">
      <h1>{title}</h1>
    </div>
  </div>
  </Link>
    
  )
}

export default cards
