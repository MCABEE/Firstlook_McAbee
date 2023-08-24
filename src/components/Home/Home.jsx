import Footer from './Footer'
import Banner from './Banner'
import Feature from './Feature'
import News from './News'
import Media from './Media'
import { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'

const Home = () => {

  useEffect(() => {

    toast.custom((t) => (
      <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                We are providing you this web experience
                using cookies. Can we proceed ?
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mr-5">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full h-10 bg-red-600 text-white px-6 py-1 rounded-lg"
          >
            Okay
          </button>
        </div>
      </div>
    ))

    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          className: 'custom-toast',
          duration: Infinity, // To keep the toast open until clicked
        }}
      />
      <Banner />
      <Feature />
      <hr className='mt-4 border-gray-300 border-1 w-5/6 mx-auto sm:hidden block' />
      <News />
      <Media />
      <hr className='mt-4 border-gray-300 border-1 w-5/6 mx-auto sm:hidden block' />
      <Footer />
    </div>
  )
}

export default Home