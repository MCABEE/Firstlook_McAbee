import React from 'react'
import { motion } from 'framer-motion'
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const PaymentPlans = () => {
    return (
        <>
            <div class="relative w-full h-full bg-no-repeat bg-cover lg:bg-bg_pay">
                <div class="absolute hidden w-full lg:block h-96" />
                <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <motion.h2
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span class="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span class="relative">Affordable</span>
                            </span>{' '}
                            for Everyone
                        </motion.h2>
                        <motion.p
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            class="text-base text-gray-700 md:text-lg">
                            We introduce the
                            most affordable annual packages and the
                            first unlimited package in the industry !
                        </motion.p>
                    </div>
                    <div class="grid gap-10 lg:grid-cols-3 mt-20 sm:mx-auto">
                        <motion.div
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <div class="w-6/12 h-8 bg-red-500 rounded-t-xl">
                                <p class="text-base h-full flex justify-center items-center font-oxygen text-white">
                                    Standard Plan
                                </p>
                            </div>
                            <div class="p-8 bg-white shadow-2xl lg:shadow-sm rounded-b-xl">
                                <div class="text-start">

                                    <div class="flex items-start justify-start">
                                        <p class="mr-2 text-5xl font-semibold text-black lg:text-4xl">
                                            ₹999
                                        </p>
                                        <p class="text-lg text-gray-900 mt-3">/ Year</p>
                                    </div>
                                    <hr className='w-full mt-6 bg-black' />
                                </div>
                                <ul class="mb-8 mt-8 space-y-4">
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <UpdateOutlinedIcon />
                                        </div>
                                        <p class="font-medium text-black">One year validity</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <SensorOccupiedOutlinedIcon/>
                                        </div>
                                        <p class="font-medium text-black">36 Connections</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <ChatOutlinedIcon/>
                                        </div>
                                        <p class="font-medium text-black">Chat with favorites</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <FavoriteBorderOutlinedIcon/>
                                        </div>
                                        <p class="font-medium text-black">Unlimited proposals</p>
                                    </li>
                                </ul>
                                <button
                                    type="submit"
                                    class="inline-flex mt-4 items-center bg-red-500 justify-center w-full h-12 px-6 font-normal tracking-wide text-white rounded-xl shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    Purchase
                                </button>
                                <button
                                    type="submit"
                                    class="inline-flex items-center justify-center w-full h-12 px-6 font-normal tracking-wide text-gray-500 mt-5 underline transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    more details
                                </button>
                            </div>
                            {/* <div class="w-11/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-75" />
                            <div class="w-10/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-50" />
                            <div class="w-9/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-25" /> */}
                        </motion.div>
                        <motion.div
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <div class="w-6/12 h-8 bg-orange-500 rounded-t-xl">
                                <p class="text-base h-full flex justify-center items-center font-oxygen tracking-wide text-white">
                                    Premiuim Plan
                                </p>
                            </div>
                            <div class="p-8 bg-white shadow-2xl lg:shadow-sm rounded-b-xl">
                                <div class="text-start">

                                    <div class="flex items-start justify-start">
                                        <p class="mr-2 text-5xl font-semibold text-black lg:text-4xl">
                                            ₹2499
                                        </p>
                                        <p class="text-lg text-gray-900 mt-3">/ Year</p>
                                    </div>
                                    <hr className='w-full mt-6 bg-black' />
                                </div>
                                <ul class="mb-8 mt-8 space-y-4">
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <UpdateOutlinedIcon />
                                        </div>
                                        <p class="font-medium text-black">One year validity</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <SensorOccupiedOutlinedIcon/>
                                        </div>
                                        <p class="font-medium text-black">Unlimited Connections</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <ChatOutlinedIcon/>
                                        </div>
                                        <p class="font-medium text-black">Chat with favorites</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <FavoriteBorderOutlinedIcon/>
                                        </div>
                                        <p class="font-medium text-black">Unlimited proposals</p>
                                    </li>
                                </ul>
                                <button
                                    type="submit"
                                    class="inline-flex mt-4 items-center bg-red-500 justify-center w-full h-12 px-6 font-normal tracking-wide text-white rounded-xl shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    Purchase
                                </button>
                                <button
                                    type="submit"
                                    class="inline-flex items-center justify-center w-full h-12 px-6 font-normal tracking-wide text-gray-500 mt-5 underline transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    more details
                                </button>
                            </div>
                            {/* <div class="w-11/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-75" />
                            <div class="w-10/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-50" />
                            <div class="w-9/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-25" /> */}
                        </motion.div>
                        <motion.div
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <div class="w-6/12 h-8 bg-yellow-400 rounded-t-xl">
                                <p class="text-base h-full flex justify-center items-center font-oxygen text-white">
                                    Top Up
                                </p>
                            </div>
                            <div class="p-8 bg-white shadow-2xl lg:shadow-sm rounded-b-xl">
                                <div class="text-start">

                                    <div class="flex items-start justify-start">
                                        <p class="mr-2 text-5xl font-semibold text-black lg:text-4xl">
                                            ₹99
                                        </p>
                                        <p class="text-lg text-gray-900 mt-3">/ Connection</p>
                                    </div>
                                    <hr className='w-full mt-6 bg-black' />
                                </div>
                                <ul class="mb-8 mt-8 space-y-4">
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <UpdateOutlinedIcon />
                                        </div>
                                        <p class="font-medium text-black">Validity as per Basic Plan</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <SensorOccupiedOutlinedIcon/>
                                        </div>
                                        <p class="font-medium text-black">01 Connections</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <ChatOutlinedIcon/>
                                        </div>
                                        <p class="font-medium text-black">Chat with favorites</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <FavoriteBorderOutlinedIcon/>
                                        </div>
                                        <p class="font-medium text-black">Unlimited proposals</p>
                                    </li>
                                </ul>
                                <button
                                    type="submit"
                                    class="inline-flex mt-4 items-center bg-red-500 justify-center w-full h-12 px-6 font-normal tracking-wide text-white rounded-xl shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    Add on
                                </button>
                                <button
                                    type="submit"
                                    class="inline-flex items-center justify-center w-full h-12 px-6 font-normal tracking-wide text-gray-500 mt-5 underline transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    more details
                                </button>
                            </div>
                            {/* <div class="w-11/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-75" />
                            <div class="w-10/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-50" />
                            <div class="w-9/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-25" /> */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPlans