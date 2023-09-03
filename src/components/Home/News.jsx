import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion'
import { getAllNews } from '../../api';
import { useEffect } from 'react';

const News = () => {

    const navigate = useNavigate()
    const [news, setNews] = useState([])

    const allNews = async () => {
        await getAllNews()
            .then((result) => {
                setNews(result?.data?.topNews)
            })
    }

    useEffect(() => {
        allNews()
    }, [])

    return (
        <>
            <div className="max-w-screen-xl lg:px-6 mx-auto mt-8 sm:mt-16 sm:mb-8">
                <div className="container m-auto">

                    <div className="md:flex justify-between items-center">

                        <div className="lg:w-6/12 lg:p-0 p-7">

                            <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                                viewport={{ once: true, amount: 0.8 }} className="sm:pt-6 pb-4 space-y-2 -mt-8">
                                <h1 className="text-5xl font-bold">News</h1>
                                <p className="text-base text-[#545454] sm:pt-1">See, what’s new from Firstlook. <br />
                                    News and updates from us.
                                </p>
                            </motion.div>

                            <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.8 } }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="md:w-6/12 order-2 xl:ml-20 sm:pt-0 pt-2 sm:hidden block">

                                <img onClick={() => navigate(`/news/${news?._id}`)} src={news?.coverImage?.url} className='border-2 rounded-lg h-full w-full' alt="" />
                            </motion.div>

                            <motion.hr initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.5 } }}
                                viewport={{ once: true, amount: 0.8 }} className='border-t-1 border-gray-300 sm:mt-2 mt-6 sm:w-[435px] hidden sm:block' />

                            <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.6 } }}
                                viewport={{ once: true, amount: 0.8 }} className="pt-5 sm:pt-5">

                                <span className="text-[12px]">13 JULY 2023</span>

                                <h1 onClick={() => navigate(`/news/${news?._id}`)} className="text-[21px] font-bold sm:w-[337px] pt-2 sm:pt-2 cursor-pointer">{news?.title}</h1>

                                <p className='pt-3 sm:w-[435px] text-justify sm:pb-4 truncate-lines-3' dangerouslySetInnerHTML={{ __html: news?.content }} />

                                <div className='mt-5'>
                                    <Link to='/allnews' className="inline-flex items-center py-3 space-x-2 bg-[#FC3657] text-[12px] px-5 rounded-md text-white transform transition hover:scale-95 duration-300 ease-in-out">
                                        MORE NEWS
                                    </Link>
                                </div>

                            </motion.div>

                        </div>
                        <motion.div initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.8 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="md:w-6/12 order-2 xl:ml-20 sm:block hidden">

                            <img onClick={() => navigate(`/news/${news?._id}`)} src={news?.coverImage?.url} className='border-2 rounded-lg h-full w-full' alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News