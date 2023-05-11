import React from 'react'
import { motion } from 'framer-motion'

const PaymentPlans = () => {
    return (
        <>
            <div class="relative w-full h-full bg-cover bg-bg_pay">
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
                    <div class="grid gap-10 lg:grid-cols-3 sm:mx-auto">
                        <motion.div
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <div class="p-8 bg-white shadow-2xl rounded-xl">
                                <div class="mb-4 text-center">
                                    <p class="text-xl font-medium tracking-wide text-black">
                                        Standard Plan
                                    </p>
                                    <div class="flex items-center justify-center">
                                        <p class="mr-2 text-5xl font-semibold text-black lg:text-6xl">
                                            ₹999
                                        </p>
                                        <p class="text-lg text-black">/ year</p>
                                    </div>
                                </div>
                                <ul class="mb-8 space-y-2">
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <svg
                                                class="w-4 h-4 text-black"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p class="font-medium text-black">10 deploys per day</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <svg
                                                class="w-4 h-4 text-black"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p class="font-medium text-black">10 GB of storage</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <svg
                                                class="w-4 h-4 text-black"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p class="font-medium text-black">3 domains</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <svg
                                                class="w-4 h-4 text-black"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p class="font-medium text-black">SSL Certificates</p>
                                    </li>
                                </ul>
                                <button
                                    type="submit"
                                    class="inline-flex items-center bg-gray-200 justify-center w-full h-12 px-6 font-medium tracking-wide text-black rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    Get Now
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
                            <div class="p-8 bg-white rounded-xl ">
                                <div class="mb-4 text-center">
                                    <p class="text-xl font-medium tracking-wide text-black">
                                        Unlimited Plan
                                    </p>
                                    <div class="flex items-center justify-center">
                                        <p class="mr-2 text-5xl font-semibold text-black lg:text-6xl">
                                            ₹2499
                                        </p>
                                        <p class="text-lg text-black">/ year</p>
                                    </div>
                                </div>
                                <ul class="mb-8 space-y-2">
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <svg
                                                class="w-4 h-4 text-black"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p class="font-medium text-black">100 deploys per day</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <svg
                                                class="w-4 h-4 text-black"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p class="font-medium text-black">50 GB of storage</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <svg
                                                class="w-4 h-4 text-black"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p class="font-medium text-black">Unlimited domains</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <svg
                                                class="w-4 h-4 text-black"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p class="font-medium text-black">SSL Certificates</p>
                                    </li>
                                </ul>
                                <button
                                    type="submit"
                                    class="inline-flex items-center bg-blue-100 justify-center w-full h-12 px-6 font-semibold tracking-wide text-black rounded shadow-md hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    Get Now
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
                            <div class="p-8 bg-gradient-to-b from-orange-500 to-rose-600 rounded-xl">
                                <div class="mb-4 text-center">
                                    <p class="text-xl font-medium tracking-wide text-white">
                                        Unlimited Plan
                                    </p>
                                    <div class="flex items-center justify-center">
                                        <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                            ₹99
                                        </p>
                                        <p class="text-lg text-white">/ year</p>
                                    </div>
                                </div>
                                <ul class="mb-8 space-y-2">
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <svg
                                                class="w-4 h-4 text-white"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p class="font-medium text-white">100 deploys per day</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <svg
                                                class="w-4 h-4 text-white"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p class="font-medium text-white">50 GB of storage</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <svg
                                                class="w-4 h-4 text-white"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p class="font-medium text-white">Unlimited domains</p>
                                    </li>
                                    <li class="flex items-center">
                                        <div class="mr-3">
                                            <svg
                                                class="w-4 h-4 text-white"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke="currentColor"
                                                    points="6,12 10,16 18,8"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    fill="none"
                                                    r="11"
                                                    stroke="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <p class="font-medium text-white">SSL Certificates</p>
                                    </li>
                                </ul>
                                <button
                                    type="submit"
                                    class="inline-flex items-center bg-red-500 justify-center w-full h-12 px-6 font-semibold tracking-wide text-white rounded shadow-md hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    Get Now
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