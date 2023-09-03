import { useEffect } from "react"
import { getAllNews } from "../../api"
import { useState } from "react"
import './News.css'
import { useNavigate } from "react-router-dom"

const AllNews = () => {
    const navigate = useNavigate()
    const [news, setNews] = useState([])

    const allNews = async () => {
        await getAllNews()
            .then((result) => {
                setNews(result?.data?.news)
            })
    }

    useEffect(() => {
        allNews()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>

            <div className="max-w-screen-xl mx-auto px-6 sm:px-2">
                <div className="sm:hidden block">
                    <button className="inline-flex items-center py-2 mt-8 sm:mt-14 space-x-2 bg-[#FC3657] text-[12px] px-6 rounded-md text-white cursor-default">
                        MORE NEWS
                    </button>
                </div>
                <div className="sm:block hidden">
                    <div className="flex">
                        <div className="max-w-2xl mx-auto">
                            <button className="inline-flex items-center py-2 space-x-2 bg-[#FC3657] text-[12px] px-6 rounded-md text-white cursor-default">
                                MORE NEWS
                            </button>
                        </div>
                    </div>
                </div>
                <main>
                    <div className="flex flex-wrap">
                        {news?.map((news) => (
                            <>
                                <div className="max-w-2xl mx-auto mt-8">
                                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
                                        <img className="rounded-t-lg h-56 w-full object-cover" src={news?.coverImage?.url} alt="" />
                                        <div className="p-5">
                                            <span className="text-gray-500 text-[12px]"> 27 JULY 2023 </span>
                                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 mt-4 dark:text-black truncate">{news?.title}</h5>
                                            <p className="font-normal text-gray-700 mb-3 dark:text-gray-700 truncate-lines-2" dangerouslySetInnerHTML={{ __html: news?.content }} />
                                            <button onClick={() => navigate(`/news/${news?._id}`)} className="text-white bg-[#FC3657] hover:bg-gray-800 font-medium rounded-lg text-sm px-3 py-2 mt-5 text-center inline-flex items-center">
                                                Read more
                                                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </main>
            </div>
        </>
    )
}

export default AllNews