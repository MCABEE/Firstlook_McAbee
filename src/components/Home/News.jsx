import { Link } from 'react-router-dom';
import news from '../../assets/Working_remotely.png'
import { motion } from 'framer-motion'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const News = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto sm:mt-10 sm:mb-8">
                <div className="container m-auto px-6">

                    <div className="md:flex justify-between items-center">

                        <div className="lg:w-6/12 lg:p-0 p-7">
                            <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                                viewport={{ once: true, amount: 0.8 }} className="sm:pt-6 pb-4 space-y-2">
                                <h1 className="text-5xl font-bold">News</h1>
                                <p className="text-base text-[#545454] ">See, what’s new from Firstlook. <br />
                                    News and updates from us.
                                </p>
                            </motion.div>
                            <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.8 } }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="md:w-6/12 order-2 xl:ml-20 sm:hidden block">
                                <img src={news} alt="" />
                            </motion.div>
                            <motion.hr initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.5 } }}
                                viewport={{ once: true, amount: 0.8 }} className='border-t-1 border-gray-300 sm:mt-3 mt-6 sm:w-[435px]' />
                            <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.6 } }}
                                viewport={{ once: true, amount: 0.8 }} className="pt-3 sm:pt-10 pb-4 space-y-2">
                                <span className="text-[12px]">13 JULY 2023</span>
                                <h1 className="text-[21px] font-bold sm:pt-3 sm:w-[337px]">‘Firstlook’ introduced the web version in India</h1>
                                <p className='sm:pt-3 sm:w-[435px] text-justify'>Launched ‘Firstlook’ a social netwrok for singles to find life partner. The web version is now introduced in India in the domain called www.firstlok.pro</p>
                                <Link className="inline-flex items-center py-2 sm:pt-7 space-x-2 text-gray-600">
                                    <EastOutlinedIcon />
                                </Link>
                            </motion.div>
                        </div>
                        <motion.div initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.8 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="md:w-6/12 order-2 xl:ml-20 sm:block hidden">
                            <img src={news} alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News