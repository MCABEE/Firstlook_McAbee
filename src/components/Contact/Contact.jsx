import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import ContactHead from './ContactHead'
import ContactDetails from './ContactDetails'

const Contact = () => {
  return (
    <>
        <Navbar/>
        <ContactHead/>
        <ContactDetails/>
        <Footer/>
    </>
  )
}

export default Contact