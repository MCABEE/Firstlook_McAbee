import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Feature from './Feature'
import PaymentPlans from './PaymentPlans'
import Footer from './Footer'
import CtaSection from './CtaSection'
import JoinSection from './JoinSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='bg-white w-fit -mt-28 mx-auto p-1 px-4 md:p-4 md:px-20 rounded-2xl opacity-80 shadow-xl flex justify-center items-center'>
        <p>We are providing you this web experience using cookies. <br /> Can we proceed ?</p>
        <button className='bg-red-500 text-end p-3 px-7 rounded-2xl ml-20 transform transition hover:scale-95 duration-300 ease-in-out'>
          Okay
        </button>
      </div>
      <Feature />
      <PaymentPlans />
      <CtaSection />
      <JoinSection />
      <Footer />
    </div>
  )
}

export default Home