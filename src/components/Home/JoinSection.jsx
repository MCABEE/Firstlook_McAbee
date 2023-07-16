import Mobileimage from '../../assets/mobIndex.png'
import msgIcon from '../../assets/icon_message.png'
import { motion } from 'framer-motion'
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const JoinSection = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <div className="container m-auto px-6">

                    <div className="md:flex justify-between items-center">
                        <motion.div
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="lg:w-6/12 lg:p-0 p-7 sm:block hidden">
                            <img src={Mobileimage} alt="" />
                        </motion.div>
                        <hr className='sm:hidden block border-t-1 border-gray-400 mt-4 mb-6'/>
                        <div className="md:w-6/12 order-2 xl:ml-20 sm:px-0 px-6">
                            <motion.h1
                                initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="text-[42px] lg:mt-16 font-oxygen font-semibold leading-tight mb-5 text-black">Join Today</motion.h1>
                            <motion.p
                                initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.5 } }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="text-[16px] font-oxygen text-gray-500">Experience how quickly you can find a life partner, <br /> through Firstlook ... </motion.p>

                            <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.6 } }}
                                viewport={{ once: true, amount: 0.8 }} className="mt-10 flex items-center gap-x-6 justify-start">
                                <Link
                                    to='/register'
                                    className="transform transition hover:scale-95 duration-300 ease-in-out rounded-xl bg-[#FC3657] text-white hover:bg-black px-3.5 py-2.5 text-sm font-semibold shadow-sm w-32"
                                >
                                    <span className='ml-5'>Let’s Start</span>
                                </Link>
                            </motion.div>

                            <motion.a initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.7 } }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="block rounded-xl bg-[#D8E8FE] p-4 shadow-xl sm:p-6 lg:p-8 mt-8 md:mt-20 md:w-4/4"
                            >
                                <div className='flex'>
                                    <h3 className="font-semibold text-black text-[24px]">
                                        FAQs
                                    </h3>
                                    <img src={msgIcon} className='w-8 h-6 ml-auto mt-1' alt="" />
                                </div>

                                <p className="mt-3 text-[14px] text-black">
                                    Here are frequently asked questions. Might help you as well.
                                </p>

                                <p className="mt-4 text-[14px] text-black">
                                    View FAQ <span aria-hidden="true"> <KeyboardDoubleArrowRightOutlinedIcon sx={{ color: "gray" }} /></span>
                                </p>
                            </motion.a>
                        </div>
                        <motion.div
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="lg:w-6/12 lg:p-0 p-7 sm:hidden block">
                            <img src={Mobileimage} alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinSection