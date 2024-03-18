import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Titel from './Components/Title/Titel'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'


const App = () => {
  return (
    <>
       <Navbar/>   
       <Hero/>
       <div className="container">
        <Titel subTitle="Our PROGRAM" title="What We Offer"/>
       <Programs/>
       <About/>
       <Titel subTitle="Gallery" title="Campus Photos"/>
       <Campus/>
       <Titel subTitle="TESTIMONIALS" title="What Student Says"/>
       <Testimonials/>
       </div>
    </>
  )
}

export default App