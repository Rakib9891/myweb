import React from 'react'
import BigText from '../components/BigText'
import Footer from '../components/Footer'
import ContactMe from '../components/ContactMe'
function Contact() {
  return (
    <div className='contact'>
      <BigText props={"Contact Me"}></BigText>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default Contact