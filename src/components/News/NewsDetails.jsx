import { Link, useNavigate, useParams } from "react-router-dom"
import { getAllNews, getSingleNews } from "../../api"
import { useEffect } from "react"
import { useState } from "react"

const NewsDetails = () => {

  const { newsId } = useParams()
  const navigate = useNavigate()

  const [allNews, setAllNews] = useState([])
  const [news, setNews] = useState("")

  const getNewsDetails = async () => {
    await getSingleNews(newsId)
      .then((result) => {
        console.log(result)
        setNews(result?.data?.newsDetails)
      })
  }

  const moreNews = async () => {
    await getAllNews()
      .then((result) => {
        setAllNews(result?.data?.news)
      })
  }

  // Function to randomly select six objects from the news array
  const getRandomNews = () => {
    const newsCopy = [...allNews];
    const selectedNews = [];

    while (selectedNews.length < 6 && newsCopy.length > 0) {

      const randomIndex = Math.floor(Math.random() * newsCopy.length);
      const randomNewsItem = newsCopy.splice(randomIndex, 1)[0];

      // Check if the selectedNews already contains the same _id & Check if the _id is not the same as the current news item
      if (
        !selectedNews.some((item) => item._id === randomNewsItem._id) &&
        news._id !== randomNewsItem._id 
      ) {
        selectedNews.push(randomNewsItem);
      }

    }

    return selectedNews;
  };

  // Get six random news objects
  const selectedNews = getRandomNews();

  useEffect(() => {
    getNewsDetails()
    moreNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="max-w-screen-xl mx-auto sm:px-10 px-2">
        <main className="mt-10">
          <h1 className="text-gray-800 text-2xl sm:text-[48px] font-bold sm:mb-4 leading-tight sm:ml-0 ml-3">
            {news?.title}
          </h1>
          <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-28">

            <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-[90rem] relative rounded block">
              <p className="text-gray-500 md:text-sm text-[10px] sm:text-[13px] flex -mt-2 sm:mt-0 mb-6"> 13 SEPTEMBER 2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <p>PUBLISHED BY : FIRSTLOOK TEAM</p> </p>
              <img src={news?.coverImage?.url} className="rounded-md object-cover sm:w-[600px] w-full sm:h-[359px] sm:mb-0 mb-4 mt-6" />
              <p className="text-gray-600 mb-4 text-justify mt-6" dangerouslySetInnerHTML={{ __html: news?.content }} />

            </div>

            <hr className="mb-5 border-gray-300 border-1 w-full text-center md:hidden block" />

            <div className="w-full md:w-4/7 mt-4 md:mt-[2.8rem]">

              <Link className="inline-flex items-center py-2 space-x-2 bg-[#FC3657] text-[12px] px-6 rounded-md text-white ml-4 md:ml-0 md:mt-0 mt-4 mb-5">
                MORE NEWS
              </Link>

              {selectedNews?.map((allNews) => (
                <>
                  <div className="rounded w-full flex flex-col md:flex-row mb-5 md:mb-10 items-center">
                    <img onClick={() => {
                      navigate(`/news/${allNews?._id}`)
                      window.location.reload()
                    }} src={allNews?.coverImage?.url} className="block md:hidden lg:block rounded-md w-[17rem] md:w-44 h-44 md:h-32 object-cover m-4 md:m-0 cursor-pointer" />
                    <div className="bg-white rounded px-4">
                      <span className="text-gray-500 text-[12px]"> 27 JULY 2023 </span>
                      <div onClick={() => {
                        navigate(`/news/${allNews?._id}`)
                        window.location.reload()
                      }} className="md:mt-0 text-gray-800 font-semibold text-[14px] mb-2 cursor-pointer">
                        {allNews?.title}
                      </div>
                      <p className="p-2 pl-0 pt-1 text-[12px] text-gray-600 text-justify truncate-lines-3" dangerouslySetInnerHTML={{ __html: allNews?.content }} />
                    </div>
                  </div>
                </>
              ))}

            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default NewsDetails