import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Feature from './Feature'
import PaymentPlans from './PaymentPlans'
import Footer from './Footer'
import CtaSection from './CtaSection'

const Home = () => {
  return (
    <div>        
        <Hero/>
        <Feature/>
        <PaymentPlans/>
        <CtaSection/>
        <Footer/>
    </div>
  )
}

export default Home