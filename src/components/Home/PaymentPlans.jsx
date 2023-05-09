import React from 'react'

const PaymentPlans = () => {
    return (
        <>
            <div class="relative w-full h-full">
                <div class="absolute hidden w-full lg:block h-96" />
                <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
                        </h2>
                        <p class="text-base text-gray-700 md:text-lg">
                            We introduce the
                            most affordable annual packages and the
                            first unlimited package in the industry !
                        </p>
                    </div>
                    <div class="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
                        <div>
                            <div class="p-8 bg-gradient-to-b from-orange-500 to-rose-600 rounded">
                                <div class="mb-4 text-center">
                                    <p class="text-xl font-medium tracking-wide text-white">
                                        Standard Plan
                                    </p>
                                    <div class="flex items-center justify-center">
                                        <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                            ₹999
                                        </p>
                                        <p class="text-lg text-gray-100">/ year</p>
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
                                        <p class="font-medium text-gray-300">10 deploys per day</p>
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
                                        <p class="font-medium text-gray-300">10 GB of storage</p>
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
                                        <p class="font-medium text-gray-300">3 domains</p>
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
                                        <p class="font-medium text-gray-300">SSL Certificates</p>
                                    </li>
                                </ul>
                                <button
                                    type="submit"
                                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    Get Now
                                </button>
                            </div>
                            <div class="w-11/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-75" />
                            <div class="w-10/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-50" />
                            <div class="w-9/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-25" />
                        </div>
                        <div>
                            <div class="p-8 bg-gradient-to-b from-orange-500 to-rose-600 rounded">
                                <div class="mb-4 text-center">
                                    <p class="text-xl font-medium tracking-wide text-white">
                                        Unlimited Plan
                                    </p>
                                    <div class="flex items-center justify-center">
                                        <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                            ₹2499
                                        </p>
                                        <p class="text-lg text-gray-100">/ year</p>
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
                                        <p class="font-medium text-gray-300">100 deploys per day</p>
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
                                        <p class="font-medium text-gray-300">50 GB of storage</p>
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
                                        <p class="font-medium text-gray-300">Unlimited domains</p>
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
                                        <p class="font-medium text-gray-300">SSL Certificates</p>
                                    </li>
                                </ul>
                                <button
                                    type="submit"
                                    class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white rounded shadow-md hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    Get Now
                                </button>
                            </div>
                            <div class="w-11/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-75" />
                            <div class="w-10/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-50" />
                            <div class="w-9/12 h-2 mx-auto bg-gradient-to-b from-orange-500 to-rose-600 rounded-b opacity-25" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPlans