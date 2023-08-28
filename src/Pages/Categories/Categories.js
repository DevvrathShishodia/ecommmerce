import React from 'react'
import "./Categories.css"
import Cards from "../../Components/Cards/Cards"
import beds from "../../Components/Cards/beds.jpg"
import couch from "../../Components/Cards/couch.jpg"
import cabinet from "../../Components/Cards/cabinets.jpg"
import lamps from "../../Components/Cards/lamps.jpg"
function Categories() {
  return (
    <>
    <div className="mainCategory">
        <h1 id='h1'>Product Catalogue</h1>
        <div className="container">
        <Cards img={beds} title={"BEDS"}/>
        <Cards img={couch} title={"COUCHES"}/>
        <Cards img={cabinet} title={"CABINETS"}/>
        <Cards img={lamps} title={"LAMPS"}/>
        </div>
       
    </div>
    </>
  )
}

export default Categories
