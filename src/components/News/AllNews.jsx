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

            <div className="max-w-screen-xl mx-auto px-6 sm:px-2 py-2">
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

                <section className="flex flex-row flex-wrap mx-auto mt-4" >
                    {news?.map((news) => (
                        <div className="transition-all duration-150 flex w-full sm:px-4 py-6 md:w-1/2 lg:w-1/3" key={news?._id}>
                            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-md">
                                <div className="md:flex-shrink-0">
                                    <img
                                        src={news?.coverImage?.url}
                                        alt="Blog Cover"
                                        className="object-fill w-full rounded-lg rounded-b-none md:h-56"
                                    />
                                </div>

                                <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-start">
                                    <div>
                                        <span className="text-gray-500 text-[12px]"> 27 JULY 2023 </span>

                                        <h2 className="text-2xl font-bold tracking-normal text-gray-800">
                                            {news?.title}
                                        </h2>
                                    </div>
                                </div>

                                <p className="flex flex-row flex-wrap w-full px-4  overflow-hidden text-sm text-justify text-gray-700 truncate-lines-2" dangerouslySetInnerHTML={{ __html: news?.content }} />

                                <section className="px-4 mt-2">
                                    <div className="flex items-center justify-between">
                                        <button onClick={() => navigate(`/news/${news?._id}`)} className="text-white bg-[#FC3657] hover:bg-gray-800 font-medium rounded-lg text-sm px-3 py-2 mt-5 text-center inline-flex items-center">
                                            Read more
                                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </>
    )
}

export default AllNews