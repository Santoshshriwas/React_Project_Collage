import React from 'react'
import './Contact.css'
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png"
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8e7d2c16-3eee-4477-8951-3cc537cccada");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
           <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
           <p>If you have a website, it might not seem like the page you need to prioritize, but that’s a huge mistake, especially considering that it’s one of the most valuable pages on your website and, typically, one of the most visited site pages. </p>
           <ul>
            <li> <img src={mail_icon} alt="" /> santosh@gmail.com</li>
            <li><img src={phone_icon} alt="" /> +91 9589050819</li>
            <li><img src={location_icon} alt="" /> 448 , Ashok Vihar , Ashoka Garden,Bhopal (M.P)</li>
           </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' />
            <label >Contact No</label>
            <input type="tel" name='phone'  placeholder='Enter your Mobile Number'/>
            <label >Write your messahes here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submite now <img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact