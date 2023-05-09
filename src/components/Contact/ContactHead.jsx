import React from 'react'
import Navbar from '../Home/Navbar'

const ContactHead = () => {
    return (
        <>
            <div class="mt-12 mb-12 py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        class="absolute inset-0 bg-gradient-to-b from-orange-500 to-rose-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div class="text-white relative px-4 py-10 bg-gradient-to-b from-orange-400 to-rose-500 shadow-lg sm:rounded-3xl sm:p-20">

                        <div class="text-center pb-6">
                            <h1 class="text-3xl">Contact Us!</h1>

                            <p class="text-gray-300">
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactHead