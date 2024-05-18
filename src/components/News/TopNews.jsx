import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAllNews } from '../../api';
import { useEffect } from 'react';

const TopNews = () => {

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

                            <div className="sm:pt-6 pb-4 space-y-2 -mt-8">
                                <h1 className="text-5xl font-bold">News</h1>
                                <p className="text-base text-[#545454] sm:pt-1">See, what’s new from Firstlook. <br />
                                    News and updates from us.
                                </p>
                            </div>

                            <div className='sm:hidden block'>
                                <button className="inline-flex items-center py-2 mb-4 space-x-2 bg-[#FC3657] text-[12px] px-6 rounded-md text-white cursor-default">
                                    TOP NEWS
                                </button>
                            </div>

                            <div
                                className="md:w-6/12 order-2 xl:ml-20 sm:pt-0 pt-2 sm:hidden block">
                                <img onClick={() => navigate(`/news/${news?._id}`)} src={news?.coverImage?.url} className='border-2 rounded-lg h-full w-full cursor-pointer' alt="" />
                            </div>

                            <hr className='border-t-1 border-gray-300 sm:mt-2 mt-6 sm:w-[435px] hidden sm:block' />

                            <div className='sm:block hidden'>
                                <button className="inline-flex items-center py-2 mt-8 space-x-2 bg-[#FC3657] text-[12px] px-6 rounded-md text-white cursor-default">
                                    TOP NEWS
                                </button>
                            </div>

                            <div className="pt-5 sm:pt-5 space-y-2">

                                <span className="text-[12px]">05 NOVEMBER 2023</span>

                                <h1 onClick={() => navigate(`/news/${news?._id}`)} className="text-[21px] font-bold sm:w-[337px] pt-2 sm:pt-2 cursor-pointer">{news?.title}</h1>

                                <p className='pt-1.5 sm:w-[435px] text-justify sm:pb-4 truncate-lines-4' dangerouslySetInnerHTML={{ __html: news?.content }} />

                            </div>

                        </div>
                        <div
                            className="md:w-6/12 order-2 xl:ml-20 sm:block hidden">
                            <img onClick={() => navigate(`/news/${news?._id}`)} src={news?.coverImage?.url} className='border-2 rounded-lg h-full w-full cursor-pointer' alt="" />
                        </div>
                    </div>
                    <hr className='mt-4 mb-1 sm:mb-0 sm:mt-10 border-gray-300 border-1 w-5/6 sm:w-full mx-auto' />
                </div>
            </div>
        </>
    )
}

export default TopNews