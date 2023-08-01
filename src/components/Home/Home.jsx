import Footer from './Footer'
import Banner from './Banner'
import Feature from './Feature'
import News from './News'
import Media from './Media'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Banner />
      <Feature />
      <hr className='mt-4 border-gray-300 border-1 w-5/6 mx-auto sm:hidden block' />
      <News />
      <Media />
      <Footer />
    </div>
  )
}

export default Home