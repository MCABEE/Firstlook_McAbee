import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';

const Feature = () => {
    return (
        <>
            <section className="relative pt-16 bg-blueGray-50">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                                <img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" className="w-full align-middle rounded-t-lg" />
                                <blockquote className="relative p-8 mb-4">
                                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                                        <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current"></polygon>
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">
                                        Great for your awesome project
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        Putting together a page has never been easier than matching
                                        together pre-made components. From landing pages presentation
                                        to login areas, you can easily customise and built your pages.
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-b from-orange-500 to-rose-600">
                                                <DoneIcon sx={{ color: "white" }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Verified Profiles</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Only profiles with validated government ID's will be featured here. Additionally, each profile will undergo thorough screening to ensure the accuracy of the data.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-b from-orange-500 to-rose-600">
                                                <Diversity1OutlinedIcon sx={{ color: "white" }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Pool of Matches
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                You will get a global reach, a wide range of profiles from different sectors. Accurate filters helps to pick the right one for you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-b from-orange-500 to-rose-600">
                                                <SecurityOutlinedIcon sx={{ color: "white" }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Data Security</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                We committed to provide maximum possible security for your data, images and videos. Our features help you to keep your data safe and secure here.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-b from-orange-500 to-rose-600">
                                                <ShoppingCartCheckoutOutlinedIcon sx={{ color: "white" }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Budget Plans</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                This is our biggest offer to you. Our packages are the best in class, in the present industry ranges.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-full px-4">
                                    <div className='relative flex flex-col items-end min-w-0'>
                                        <button className='bg-gradient-to-b from-orange-500 to-rose-600 text-white w-full lg:w-36 h-10 rounded-lg md:ml-5 transform transition hover:scale-95 duration-300 ease-in-out'>Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature