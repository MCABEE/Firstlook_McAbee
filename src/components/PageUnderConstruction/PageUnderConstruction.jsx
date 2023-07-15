import { useEffect } from 'react'
import coding from '../../assets/coding.png'
import sign from '../../assets/Group.png'

const PageUnderConstruction = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="text-gray-900 mb-36">
        <div className="grid grid-cols-12 mx-auto max-w-7xl">
          <div className="justify-center items-end col-span-12 lg:col-span-6 lg:h-auto block lg:hidden">
            <img src={coding} className='w-[500px] h-[350px]' alt="" />
          </div>
          <div className="flex flex-col col-span-12 px-16 lg:px-0 lg:col-span-6 lg:p-4 divide-gray-300">
            <div className="pt-6 pb-4 space-y-2 mb-5">
              <img src={sign} className='h-[52.2px] w-[60px]' alt="" />
              <h1 className="text-5xl font-bold">Sorry !</h1>
              <p className="text-base text-[#545454]">This page is currently unavailable. <br />
                Service will resume as early as possible.
              </p>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <p>
                Thank you.
              </p>
            </div>
          </div>
          <div className="justify-center items-end col-span-12 lg:col-span-6 lg:h-auto hidden lg:block">
            <img src={coding} className='w-[500px] h-[350px]' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default PageUnderConstruction