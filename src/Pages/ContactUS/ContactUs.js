import React from 'react'
import asset from "./3969587-removebg-preview.png"
import"./ContactUs.css"
function ContactUs() {
  return (
    <>
    <div className="formpage">
      <div className="contactForm">
        <div className="leftform">
            <div className="upperleftform">
                <h1 className='contactHeading'>Contact Us</h1>
                <h2 className="contactSubheading">Call Dirrectly at: <span>+1-23547574</span></h2>
                <h2 className="contactSubheading">whatsApp Number: <span>+1-238569856</span></h2>
                <h2 className="contactSubheading">Email: <span>abc@gmail.com</span></h2>    
            </div>
            <div className="lowerleftform">
                <img src={asset} alt="#" />
            </div>
        </div>
        <div className="rightform">
          <div className="form">
            <form action="">
              <h1>Get in Touch</h1>
              <h2>Feel free to drop us a line Below</h2>
              <label htmlFor="fullName">FullName</label><br />
              <input type="text" id='fullName' />
              <br />
              <label htmlFor="Email">Email</label><br />
              <input type='email' id='Email'  />
              <br />
              <label htmlFor="Number">Phone Number</label><br />
              <input type="number" id='Number'  />
              <br />
              <label htmlFor="subject">Subject</label><br />
              <input type="text" id='Subject' />
              <br />
              <label htmlFor="message">Message</label><br />
              <input type="text" id='Message'  /><br />
              <input  style={{backgroundColor:"#183D3D", marginTop:"20px", color:"white", fontSize:"28px",cursor:"pointer"}} type="submit" value="Submit"/>
            </form>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default ContactUs
