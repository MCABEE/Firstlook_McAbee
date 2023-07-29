import { useEffect } from 'react'
import Footer from '../Home/Footer'
import ContactDetails from './ContactDetails'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <>
        <ContactDetails/>
        <Footer/>
    </>
  )
}

export default Contact