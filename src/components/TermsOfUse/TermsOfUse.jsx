import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import Terms from './Terms'
import { useEffect } from 'react'

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <>
        <Navbar/>
        <Terms/>
        <Footer/>
    </>
  )
}

export default TermsOfUse