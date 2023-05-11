import React from 'react'
import Mobileimage from '../../assets/Index_Model_001.png'
import { motion } from 'framer-motion'
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const JoinSection = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto py-16">
                <div className="container m-auto px-6">

                    <div className="md:flex justify-between items-center">
                        <div className="lg:w-6/12 lg:p-0 p-7">
                            <motion.h1
                                initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="text-4xl lg:mt-16 font-oxygen font-semibold leading-tight mb-5 text-black">Join Today</motion.h1>
                            <motion.p
                                initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="text-lg font-oxygen text-gray-500">Experience the easyness of quick signup, <br /> searching for your matches and free communication </motion.p>

                            <div className="mt-10 flex items-center gap-x-6 justify-start">
                                <a
                                    href="#"
                                    className="transform transition hover:scale-95 duration-300 ease-in-out rounded-md bg-rose-600 text-white hover:bg-black px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Get started
                                </a>
                                {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500">
                                    Learn more <span aria-hidden="true">→</span>
                                </a> */}
                            </div>

                            <a
                                class="block rounded-xl bg-sky-200 p-4 shadow-xl sm:p-6 lg:p-8 mt-8 md:mt-20 md:w-3/4"
                                href=""
                            >

                                <h3 class="text-lg font-semibold text-black sm:text-3xl">
                                    FAQs
                                </h3>

                                <p class="mt-3 text-sm text-black">
                                    Here are frequently asked questions. Might help you as well.
                                </p>

                                <p class="mt-4 text-sm text-black">
                                    View FAQ <span aria-hidden="true"> <KeyboardDoubleArrowRightOutlinedIcon sx={{color:"gray"}}/></span>
                                </p>
                            </a>

                        </div>
                        <motion.div
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="md:w-6/12 order-2">
                            <img src={Mobileimage} alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinSection