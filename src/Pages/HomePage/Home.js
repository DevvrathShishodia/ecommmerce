import React from 'react'
import "./Home.css"
import bg from "./gray-sofa-brown-living-room-with-copy-space.jpg"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <div className="main">
    <section>
      
        <img src={bg} alt="" /> 
        <div className="heading">
            <h1>Creative Home Simplify Your Furniture</h1>
            <div className='h3'><h3>"Explore our curated collection of exquisite furniture. Elevate your space with timeless pieces that blend style and comfort flawlessly. Discover your perfect piece today."</h3></div>
            <Link to = "/Products"><button className="btn">Shop Now</button></Link>
        </div>
        <div className="box">
            <div className="in-Box"><h1>7</h1><h2>Year <br /> Experience</h2></div> 
            <div className="in-Box"><h1>2</h1><h2>Opened in <br /> Country</h2></div>
            <div className="in-Box"><h1>15k+</h1><h2>Furniture <br /> Sold</h2></div>
            <div className="in-Box"><h1>250k+</h1><h2>Variant <br /> Furniture</h2></div>
        </div>
        </section>
    </div>
    </>
  )
}

export default Home
