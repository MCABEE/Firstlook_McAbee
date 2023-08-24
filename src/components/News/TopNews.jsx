import { Link } from 'react-router-dom';
import news from '../../assets/news.jpg'
import { motion } from 'framer-motion'

const TopNews = () => {
    return (
        <>
            <div className="max-w-screen-xl lg:px-6 mx-auto mt-8 sm:mt-16 sm:mb-8">
                <div className="container m-auto">

                    <div className="md:flex justify-between items-center">

                        <div className="lg:w-6/12 lg:p-0 p-7">

                            <div className="sm:pt-6 pb-4 space-y-2 -mt-8">
                                <h1 className="text-5xl font-bold">News</h1>
                                <p className="text-base text-[#545454] sm:pt-1">See, what’s new from Firstlook. <br />
                                    News and updates from us.
                                </p>
                            </div>

                            <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.8 } }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="md:w-6/12 order-2 xl:ml-20 sm:pt-0 pt-2 sm:hidden block">
                                <Link to='/news'>
                                    <img src={news} className='border-2 rounded-lg' alt="" />
                                </Link>
                            </motion.div>

                            <motion.hr initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.5 } }}
                                viewport={{ once: true, amount: 0.8 }} className='border-t-1 border-gray-300 sm:mt-2 mt-6 sm:w-[435px] hidden sm:block' />

                            <Link to='/pageunderconstruction' className="inline-flex items-center py-2 mt-8 space-x-2 bg-[#FC3657] text-[12px] px-6 rounded-md text-white transform transition hover:scale-95 duration-300 ease-in-out">
                                TOP NEWS
                            </Link>

                            <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.6 } }}
                                viewport={{ once: true, amount: 0.8 }} className="pt-5 sm:pt-5 space-y-2">


                                <span className="text-[12px]">13 JULY 2023</span>

                                <Link to='/news'>
                                    <h1 className="text-[21px] font-bold sm:w-[337px] pt-2 sm:pt-2">‘Firstlook’ introduced the web version in India</h1>
                                </Link>

                                <p className='pt-3 sm:w-[435px] text-justify pb-6 sm:pb-4'>Launched ‘Firstlook’ a social network for singles to find life partner. The web version is now introduced in India in the domain called www.firstlok.pro. The app is now available for Indian citizen’s globally. User’s can signup with mobile number and ‘Firtlook’ assured the data security of each users.</p>

                            </motion.div>

                        </div>
                        <motion.div initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.8 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="md:w-6/12 order-2 xl:ml-20 sm:block hidden">

                            <Link to='/news'>
                                <img src={news} className='border-2 rounded-lg' alt="" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNews