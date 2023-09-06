import { useEffect, useState } from "react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { faq } from "../../lib/constants";
import { useNavigate } from "react-router-dom";
import { getAllNews } from "../../api";
import { Toaster, toast } from "react-hot-toast";

const HelpCenter = () => {

    const [isOpen, setIsOpen] = useState("")
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const [allNews, setAllNews] = useState([])

    const moreNews = async () => {
        await getAllNews()
            .then((result) => {
                setAllNews(result?.data?.news)
            })
    }

    // Function to randomly select two objects from the news array
    const getRandomNews = () => {
        const newsCopy = [...allNews];
        const selectedNews = [];

        while (selectedNews.length < 2 && newsCopy.length > 0) {

            const randomIndex = Math.floor(Math.random() * newsCopy.length);
            const randomNewsItem = newsCopy.splice(randomIndex, 1)[0];

            // Check if the selectedNews already contains the same _id & Check if the _id is not the same as the current news item
            if (!selectedNews.some((item) => item._id === randomNewsItem._id)) {
                selectedNews.push(randomNewsItem);
            }

        }

        return selectedNews;
    };

    // Get two random news objects
    const selectedNews = getRandomNews();

    const handleSearch = (e) => {
        e.preventDefault()

        if (search === '' || search === ' ') {
            toast.error("Please enter a search query")
        }
        else {
            toast.error("We're working on it! \nSearch will be Available Soon")
        }
    }

    useEffect(() => {
        moreNews()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <Toaster />
                <section className=" text-gray-800">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <div className="grid gap-10 lg:gap-20 sm:p-3 md:grid-cols-2 2xl:px-32">
                            <div>
                                <p className="mb-2 text-3xl font-bold sm:text-4xl">
                                    Help Centre
                                </p>
                                <p className="text-[16px] text-[#545454] sm:w-3/5">
                                    See, what’s new from Firstlook. <br className="sm:hidden block" />
                                    News and updates from us.
                                </p>
                            </div>
                            <div>
                                <p className="text-[21px]">
                                    How can we help you?
                                </p>
                                <form onSubmit={handleSearch}>
                                    <div className="flex mt-4">
                                        <div className="absolute px-1.5 py-1">
                                            <SearchOutlinedIcon />
                                        </div>
                                        <input
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            type="text"
                                            className="sm:w-[32vw] w-[80vw] px-8 rounded-bl-md rounded-tl-md border border-[#DDDCDC] bg-[#DDDCDC]" />
                                        <button type='submit'
                                            className="sm:ml-1 w-1/4 bg-[#FC4055] cursor-pointer rounded-br-md rounded-tr-md sm:px-6 px-1 py-2 text-[14px] text-white transition-none"
                                        >
                                            ASK
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container flex flex-col justify-center sm:px-4 md:px-8 2xl:px-40 mt-6 sm:mt-0 mb-4 sm:mb-0 mx-auto">
                    <hr className='border-gray-300 border-1 w-full mx-auto' />
                </div>

                <section className=" text-gray-800">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <h2 className="mb-5 text-3xl 2xl:px-32 font-bold sm:text-4xl">Top Question’s</h2>
                        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 2xl:px-32">
                            <div>
                                <h3 className="font-semibold">How does the verification process work?</h3>
                                <p className="mt-1 text-gray-600">First of all, we will verify whether the mobile number is active or nor via OTP. Our executives will contact you to ensure the data you have... <span onClick={() => setIsOpen((prev) => (prev === "Q1" ? "" : "Q1"))} className="text-[#FC3657] font-bold cursor-pointer">[ More ]</span></p>
                                {isOpen === 'Q1' ?
                                    <div className="overflow-x-hidden overflow-y-auto mt-8 sm:mt-0 sm:fixed md:h-full top-4 left-0 right-0 md:inset-0 z-50 flex justify-center items-center">
                                        <div className="relative w-full max-w-4xl px-4 h-full md:h-auto">

                                            <div className="bg-gray-200 rounded-lg shadow relative">

                                                <div className="flex items-start justify-between p-5 rounded-t border-gray-600">
                                                    <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold">
                                                        How does the verification process work?
                                                    </h3>
                                                    <button onClick={() => setIsOpen("")} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="default-modal">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                    </button>
                                                </div>

                                                <div className="p-6 space-y-6">
                                                    <p className="text-gray-600 text-base leading-relaxed">
                                                        First of all, we will verify whether the mobile number is active or nor via OTP. Our executives will contact you to ensure the data you have entered is correct if required. It’s not mandatory for all accounts. You may need to add your Aadhar Card issues by the Govt. of India. Your profile will be activated once the ID is verified. Your profile will not be activated if you have not provided a valid ID, provided wrong ID or an inactive contact number. Identification documents and profile details will be verified manually. Your profile will be activated within 14 days. You have limited access to your account until we verify the account information.
                                                    </p>
                                                </div>

                                                <div className="flex space-x-10 items-center p-6 border-t border-gray-200 rounded-b">
                                                    <p>
                                                        Is this answer helpful ?
                                                    </p>
                                                    <div className="text-gray-600 space-x-2">
                                                        <ThumbUpAltOutlinedIcon />
                                                        <span>Yes</span>
                                                    </div>
                                                    <div className="text-gray-600 space-x-2">
                                                        <ThumbDownAltOutlinedIcon />
                                                        <span>No</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ""
                                }
                            </div>
                            <div>
                                <h3 className="font-semibold">What about the security of my personal data and photos?</h3>
                                <p className="mt-1 text-gray-600">Your photos, personal details, and videos are completely secure with us. Your details will only be shown to our verified profiles, looking... <span onClick={() => setIsOpen((prev) => (prev === "Q2" ? "" : "Q2"))} className="text-[#FC3657] font-bold cursor-pointer">[ More ]</span></p>
                                {isOpen === 'Q2' ?
                                    <div className="overflow-x-hidden overflow-y-auto mt-8 sm:mt-0 sm:fixed md:h-full top-4 left-0 right-0 md:inset-0 z-50 flex justify-center items-center">
                                        <div className="relative w-full max-w-4xl px-4 h-full md:h-auto">

                                            <div className="bg-gray-200 rounded-lg shadow relative">

                                                <div className="flex items-start justify-between p-5 rounded-t border-gray-600">
                                                    <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold">
                                                        What about the security of my personal data and photos?
                                                    </h3>
                                                    <button onClick={() => setIsOpen("")} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="default-modal">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                    </button>
                                                </div>

                                                <div className="p-6 space-y-6">
                                                    <p className="text-gray-600 text-base leading-relaxed">
                                                        Your photos, personal details, and videos are completely secure with us. Your details will only be shown to our verified profiles, looking for a match. We will share the details of your profile views and contact views with you. The details and photos that you have shared with us will not be shared outside. We have even blocked screen recording while using our app.
                                                    </p>
                                                    <p className="text-gray-600 text-base leading-relaxed">
                                                        No digital platform is secure in a perfect sense. Like all the other high-profile websites, we also have some challenges with regards to security. A possibility of threat always exists in terms of technical errors or cyber-attacks beyond our control.
                                                    </p>
                                                    <p className="text-gray-600 text-base leading-relaxed">
                                                        For more details, please read our privacy policy www.firstlook.pro/privacypolicy
                                                    </p>
                                                </div>

                                                <div className="flex space-x-10 items-center p-6 border-t border-gray-200 rounded-b">
                                                    <p>
                                                        Is this answer helpful ?
                                                    </p>
                                                    <div className="text-gray-600 space-x-2">
                                                        <ThumbUpAltOutlinedIcon />
                                                        <span>Yes</span>
                                                    </div>
                                                    <div className="text-gray-600 space-x-2">
                                                        <ThumbDownAltOutlinedIcon />
                                                        <span>No</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ""
                                }
                            </div>
                            <div>
                                <h3 className="font-semibold">How do I register for FirstLook?</h3>
                                <p className="mt-1 text-gray-600">you can register your account or profile with our website www.firstlook.pro. It’s for registration purpose only. To access your profile and to... <span onClick={() => setIsOpen((prev) => (prev === "Q3" ? "" : "Q3"))} className="text-[#FC3657] font-bold cursor-pointer">[ More ]</span></p>
                                {isOpen === 'Q3' ?
                                    <div className="overflow-x-hidden overflow-y-auto mt-8 sm:mt-0 sm:fixed md:h-full top-4 left-0 right-0 md:inset-0 z-50 flex justify-center items-center">
                                        <div className="relative w-full max-w-4xl px-4 h-full md:h-auto">

                                            <div className="bg-gray-200 rounded-lg shadow relative">

                                                <div className="flex items-start justify-between p-5 rounded-t border-gray-600">
                                                    <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold">
                                                        How do I register for FirstLook?
                                                    </h3>
                                                    <button onClick={() => setIsOpen("")} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="default-modal">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                    </button>
                                                </div>

                                                <div className="p-6 space-y-6">
                                                    <p className="text-gray-600 text-base leading-relaxed">
                                                        you can register your account or profile with our website www.firstlook.pro. It’s for registration purpose only. To access your profile and to find matches you should use the mobile app that available in Appstore or Playstore. Or you can do the all activities include account registration through the mobile app.
                                                    </p>
                                                    <p className="text-gray-600 text-base leading-relaxed">
                                                        You must have an active mobile number. You may need to verify your number via OTP. Fill in your personal info, such as educational qualifications, professional details, family etc. Add atleast three of your recent photos. You can also add a video profile, which is a new feature. This will help your profile to standout and get more views. Upload a proof of identification approved by the government of India, and you are ready to go!
                                                    </p>
                                                </div>

                                                <div className="flex space-x-10 items-center p-6 border-t border-gray-200 rounded-b">
                                                    <p>
                                                        Is this answer helpful ?
                                                    </p>
                                                    <div className="text-gray-600 space-x-2">
                                                        <ThumbUpAltOutlinedIcon />
                                                        <span>Yes</span>
                                                    </div>
                                                    <div className="text-gray-600 space-x-2">
                                                        <ThumbDownAltOutlinedIcon />
                                                        <span>No</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ""
                                }
                            </div>
                            <div>
                                <h3 className="font-semibold">Is this service free?</h3>
                                <p className="mt-1 text-gray-600">This is a freemium application. This app is exclusively crafted for people who are seriously looking for a partner. You may not use this app for... <span onClick={() => setIsOpen((prev) => (prev === "Q4" ? "" : "Q4"))} className="text-[#FC3657] font-bold cursor-pointer">[ More ]</span></p>
                                {isOpen === 'Q4' ?
                                    <div className="overflow-x-hidden overflow-y-auto mt-8 sm:mt-0 sm:fixed md:h-full top-4 left-0 right-0 md:inset-0 z-50 flex justify-center items-center">
                                        <div className="relative w-full max-w-4xl px-4 h-full md:h-auto">

                                            <div className="bg-gray-200 rounded-lg shadow relative">

                                                <div className="flex items-start justify-between p-5 rounded-t border-gray-600">
                                                    <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold">
                                                        Is this service free?
                                                    </h3>
                                                    <button onClick={() => setIsOpen("")} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="default-modal">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                    </button>
                                                </div>

                                                <div className="p-6 space-y-6">
                                                    <p className="text-gray-600 text-base leading-relaxed">
                                                        This is a freemium application. This app is exclusively crafted for people who are seriously looking for a partner. You may not use this app for entertainment or time-pass. You can use certain features completely without charges for a limited time period. We are providing this offer for you to understand the features of our app. Once the offer period is over, you need to pay for the continuous service. Kindly visit our payment page for more details www.firstlook.pro/pricing
                                                    </p>
                                                </div>

                                                <div className="flex space-x-10 items-center p-6 border-t border-gray-200 rounded-b">
                                                    <p>
                                                        Is this answer helpful ?
                                                    </p>
                                                    <div className="text-gray-600 space-x-2">
                                                        <ThumbUpAltOutlinedIcon />
                                                        <span>Yes</span>
                                                    </div>
                                                    <div className="text-gray-600 space-x-2">
                                                        <ThumbDownAltOutlinedIcon />
                                                        <span>No</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ""
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container flex flex-col justify-center sm:px-4 md:px-8 2xl:px-40 mt-6 sm:mt-0 mb-5 sm:mb-0 mx-auto">
                    <hr className='border-gray-300 border-1 w-full mx-auto' />
                </div>

                <section className=" text-gray-800">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <div className="grid gap-10 lg:gap-96 sm:p-3 md:grid-cols-2 2xl:px-32">
                            <div>
                                <p className="mb-5 text-2xl font-bold sm:text-4xl">
                                    Frequently asked Q’s
                                </p>
                                <div className="lg:w-[42rem] w-full h-[48rem] overflow-y-scroll mt-10">
                                    {faq.map((faq) => (
                                        <>
                                            <div>
                                                <button onClick={() => setIsOpen((prev) => (prev === faq?.id ? "" : faq?.id))} className="flex items-center focus:outline-none">
                                                    {isOpen === faq?.id ?
                                                        <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                                        :
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                        </svg>
                                                    }

                                                    <h1 className="mx-4 text-[18px] text-gray-700 text-start">{faq?.qns}</h1>
                                                </button>

                                                {isOpen === faq?.id
                                                    ?
                                                    <div className="flex mt-8 md:mx-10">
                                                        <span className="border border-blue-500"></span>
                                                        <p className="max-w-3xl px-4 text-gray-500" dangerouslySetInnerHTML={{ __html: faq?.ans.replace(/\n/g, "<br>") }} />
                                                    </div>
                                                    :
                                                    ""
                                                }
                                            </div>

                                            <hr className="my-8 border-gray-200" />
                                        </>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <button className="inline-flex items-center py-2 mt-1 sm:mt-2 space-x-2 bg-[#FC3657] text-[12px] px-6 rounded-md text-white cursor-default">
                                    TOP ARTICLES
                                </button>

                                {selectedNews.map((newsItem) => (
                                    <div className="rounded w-full flex flex-col mb-3 md:mb-10 items-start" key={newsItem?._id}>
                                        <div onClick={() => navigate(`/news/${newsItem?._id}`)} className="text-gray-800 font-semibold text-[21px] mt-10 mb-5 cursor-pointer">
                                            {newsItem?.title}
                                        </div>
                                        <img onClick={() => navigate(`/news/${newsItem?._id}`)} src={newsItem?.coverImage?.url} className="block md:hidden lg:block rounded-md sm:h-44 sm:w-3/4 lg:w-full xl:w-3/4 w-full object-cover sm:m-4 md:m-0 cursor-pointer" />
                                        <div className="bg-white rounded mt-5">
                                            <p className=" p-2 pl-0 pt-1 text-[14px] text-gray-600 text-justify truncate-lines-3" dangerouslySetInnerHTML={{ __html: newsItem?.content }} />
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default HelpCenter