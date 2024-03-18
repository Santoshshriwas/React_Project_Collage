import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png"
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
          <img src={about_img} alt="" className='about-img'/>
          <img src={play_icon} alt="" className='play_icon'/>
        </div>
        <div className="about-right">
           <h3>ABOUT UNIVERCITY</h3>
           <h2>Nurtuing Tonorrow's Leaders Today</h2>
           <p>With Canva’s free online collage maker, creating a masterpiece of memories is as simple as a few clicks. Create beautifully designed collages by dropping your images into our designer-made templates and instantly downloading them onto any device.</p>
           <p>Whether it’s a Thank You Card for your family and friends, or an Instagram Post marketing your latest product, we’ve got thousands of print and digital photo collage templates to suit every occasion.</p>
           <p>From fun and festive to corporate and minimalist designs, we’ve created thousands of beautiful templates that are flexible and completely customizable. </p>
        </div>
    </div>
  )
}

export default About