import Footer from './Footer'
import Banner from './Banner'
import Feature from './Feature'
import News from './News'
import Media from './Media'

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <hr className='sm:hidden block border-t-1 border-gray-300 mt-4 w-10/12 ml-8' />
      <News />
      <Media/>
      <Footer />
    </div>
  )
}

export default Home