import React from 'react'
import Mobileimage from '../../assets/mob_image_index.png'

const JoinSection = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto py-16">
                <div className="container m-auto px-6">

                    <div className="md:flex justify-between items-center">
                        <div className="lg:w-6/12 lg:p-0 p-7">
                            <h1 className="text-5xl font-bold leading-tight mb-5 text-red-900">JOIN <br /> TODAY !</h1>
                            <p className="text-xl text-gray-500">Experience the easyness of <br /> quick signup, searching <br /> for your matches and free communication </p>

                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <a
                                    href="#"
                                    className="rounded-md bg-gradient-to-b from-orange-500 to-rose-600 text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>

                            {/* <div className="py-5">
                                <a href="#" className="text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3">Experience the easyness of</a>
                                <a href="#" className="text-black rounded-full py-2 px-5 text-lg font-semibold bg-gray-400 inline-block border hover:bg-white hover:text-black">Requist a demo</a>
                            </div> */}

                        </div>
                        <div className="md:w-4/12 order-2">
                            <img src={Mobileimage} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default JoinSection