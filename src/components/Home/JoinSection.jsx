import Mobileimage from '../../assets/mobIndex.png'
import msgIcon from '../../assets/icon_message.png'
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
                                className="text-[42px] lg:mt-16 font-oxygen font-semibold leading-tight mb-5 text-black">Join Today</motion.h1>
                            <motion.p
                                initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="text-[16px] font-oxygen text-gray-500">Experience how quickly you can find a life partner, <br /> through Firstlook ... </motion.p>

                            <div className="mt-10 flex items-center gap-x-6 justify-start">
                                <a
                                    href="#"
                                    className="transform transition hover:scale-95 duration-300 ease-in-out rounded-xl bg-[#FC3657] text-white hover:bg-black px-3.5 py-2.5 text-sm font-semibold shadow-sm w-32"
                                >
                                    <span className='ml-5'>Let’s Start</span>
                                </a>
                            </div>

                            <a
                                className="block rounded-xl bg-[#D8E8FE] p-4 shadow-xl sm:p-6 lg:p-8 mt-8 md:mt-20 md:w-3/4"
                                href=""
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