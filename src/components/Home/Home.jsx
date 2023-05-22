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
      <div className='bg-white w-fit -mt-20 mx-auto p-1 px-4 md:p-2 md:px-10 rounded-2xl opacity-80 shadow-xl flex justify-center items-center'>
        <p className='text-sm'>We are providing you this web experience using cookies. <br className='hidden sm:block' /> Can we proceed ?</p>
        <button className='bg-red-500 text-end p-1 px-7 rounded-xl text-white ml-20 transform transition hover:scale-95 duration-300 ease-in-out'>
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