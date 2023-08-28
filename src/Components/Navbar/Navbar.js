import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className="main">
        <nav className="navbar">
            <div className="leftnav">
                <Link style={{textDecoration:"none"}} to="/"><h1>FurniShop</h1></Link>
            </div>
            
            <div className="rightnav">
                <Link style={{textDecoration:"none",}} to = "/"><li>Home</li></Link>
                <Link style={{textDecoration:"none"}} to = "Products"><li>Products</li></Link>
                <Link style={{textDecoration:"none"}} to = "Contactus"><li>Contact us</li></Link>
                <li>About</li>
            </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
