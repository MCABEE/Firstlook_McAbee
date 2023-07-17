import Footer from './Footer'
import Banner from './Banner'
import Feature from './Feature'
import News from './News'

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <hr className='sm:hidden block border-t-1 border-gray-400 mt-4 w-10/12 ml-8' />
      <News />
      <Footer />
    </div>
  )
}

export default Home