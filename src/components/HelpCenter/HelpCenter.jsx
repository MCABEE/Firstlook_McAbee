import { useState } from "react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

const HelpCenter = () => {

    const [isOpen, setIsOpen] = useState("")

    return (
        <>
            <div className="flex flex-col justify-center items-center">

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
                                <form>
                                    <div className="flex mt-4">
                                        <div className="absolute px-1.5 py-1">
                                            <SearchOutlinedIcon />
                                        </div>
                                        <input type="text" className="sm:w-[32vw] w-[80vw] px-8 rounded-bl-md rounded-tl-md border border-[#DDDCDC] bg-[#DDDCDC]" />
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

                <div className="container flex flex-col justify-center sm:px-4 md:px-8 2xl:px-40 mx-auto">
                    <hr className='border-gray-300 border-1 w-full mx-auto' />
                </div>

                <section className=" text-gray-800">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <h2 className="mb-5 text-3xl 2xl:px-32 font-bold sm:text-4xl">Top Question’s</h2>
                        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 2xl:px-32">
                            <div>
                                <h3 className="font-semibold">What is FirstLook app?</h3>
                                <p className="mt-1 text-gray-600">Launched ‘Firstlook’ a social netwrok for singles to find life partner. The web version is now introduced in India in the domain called www.firstlok.pro <span onClick={() => setIsOpen((prev) => (prev === "Q1" ? "" : "Q1"))} className="text-[#FC3657] font-bold cursor-pointer">[ More ]</span></p>
                                {isOpen === 'Q1' ?
                                    <div className="overflow-x-hidden overflow-y-auto mt-8 sm:mt-0 sm:fixed md:h-full top-4 left-0 right-0 md:inset-0 z-50 flex justify-center items-center">
                                        <div className="relative w-full max-w-4xl px-4 h-full md:h-auto">

                                            <div className="bg-gray-200 rounded-lg shadow relative">

                                                <div className="flex items-start justify-between p-5 rounded-t border-gray-600">
                                                    <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold">
                                                        What about the security of my personal data?
                                                    </h3>
                                                    <button onClick={() => setIsOpen("")} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="default-modal">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                    </button>
                                                </div>

                                                <div className="p-6 space-y-6">
                                                    <p className="text-gray-600 text-base leading-relaxed">
                                                        You must have an active mobile number. You may need to verify your number via OTP. Fill in your personal info, such as educational qualifications, professional details, family etc… Add atleast three of your recent photos. You can also add a video profile, which is a new feature. This will help your profile to standout and get more views. Upload any proof of identification approved by the government of India, and you are ready to go! You must have an active mobile number. You may need to verify your number via OTP. Fill in your personal info, such as educational qualifications, professional details, family etc…
                                                    </p>
                                                    <p className="text-gray-600 text-base leading-relaxed">
                                                        Add atleast three of your recent photos. You can also add a video profile, which is a new feature. This will help your profile to standout and get more views. Upload any proof of identification approved by the government of India, and you are ready to go!
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
                                <h3 className="font-semibold">What about the security of my personal data?</h3>
                                <p className="mt-1 text-gray-600">Launched ‘Firstlook’ a social netwrok for singles to find life partner. The web version is now introduced in India in the domain called www.firstlok.pro <span className="text-[#FC3657] font-bold">[ More ]</span></p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Who can enlist?</h3>
                                <p className="mt-1 text-gray-600">Launched ‘Firstlook’ a social netwrok for singles to find life partner. The web version is now introduced in India in the domain called www.firstlok.pro <span className="text-[#FC3657] font-bold">[ More ]</span></p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Is this service free?</h3>
                                <p className="mt-1 text-gray-600">Launched ‘Firstlook’ a social netwrok for singles to find life partner. The web version is now introduced in India in the domain called www.firstlok.pro <span className="text-[#FC3657] font-bold">[ More ]</span></p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container flex flex-col justify-center sm:px-4 md:px-8 2xl:px-40 mx-auto">
                    <hr className='border-gray-300 border-1 w-full mx-auto' />
                </div>

                <section className=" text-gray-800">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <div className="grid gap-10 lg:gap-96 sm:p-3 md:grid-cols-2 2xl:px-32">
                            <div>
                                <p className="mb-5 text-2xl font-bold sm:text-4xl">
                                    Frequently asked Q’s
                                </p>
                                <div className="lg:w-[42rem] w-full mt-10">
                                    <div>
                                        <button onClick={() => setIsOpen((prev) => (prev === "q1" ? "" : "q1"))} className="flex items-center focus:outline-none">
                                            {isOpen === 'q1' ?
                                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                </svg>
                                            }

                                            <h1 className="mx-4 text-[18px] text-gray-700 text-start">How can I pay for my appointment ?</h1>
                                        </button>

                                        {isOpen === 'q1'
                                            ?
                                            <div className="flex mt-8 md:mx-10">
                                                <span className="border border-blue-500"></span>

                                                <p className="max-w-3xl px-4 text-gray-500">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                                                </p>
                                            </div>
                                            :
                                            ""
                                        }
                                    </div>

                                    <hr className="my-8 border-gray-200" />

                                    <div>
                                        <button onClick={() => setIsOpen((prev) => (prev === "q2" ? "" : "q2"))} className="flex items-center focus:outline-none">
                                            {isOpen === 'q2' ?
                                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                </svg>
                                            }

                                            <h1 className="mx-4 text-[18px] text-gray-700 text-start">What can I expect at my first consultation ?</h1>
                                        </button>

                                        {isOpen === 'q2'
                                            ?
                                            <div className="flex mt-8 md:mx-10">
                                                <span className="border border-blue-500"></span>

                                                <p className="max-w-3xl px-4 text-gray-500">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                                                </p>
                                            </div>
                                            :
                                            ""
                                        }
                                    </div>

                                    <hr className="my-8 border-gray-200" />

                                    <div>
                                        <button onClick={() => setIsOpen((prev) => (prev === "q3" ? "" : "q3"))} className="flex items-center focus:outline-none">
                                            {isOpen === 'q3' ?
                                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                </svg>
                                            }

                                            <h1 className="mx-4 text-[18px] text-gray-700 text-start">What are your opening hours ?</h1>
                                        </button>

                                        {isOpen === 'q3'
                                            ?
                                            <div className="flex mt-8 md:mx-10">
                                                <span className="border border-blue-500"></span>

                                                <p className="max-w-3xl px-4 text-gray-500">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                                                </p>
                                            </div>
                                            :
                                            ""
                                        }
                                    </div>

                                    <hr className="my-8 border-gray-200" />

                                    <div>
                                        <button onClick={() => setIsOpen((prev) => (prev === "q4" ? "" : "q4"))} className="flex items-center focus:outline-none">
                                            {isOpen === 'q4' ?
                                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                </svg>
                                            }

                                            <h1 className="mx-4 text-[18px] text-gray-700 text-start">Do I need a referral ?</h1>
                                        </button>

                                        {isOpen === 'q4'
                                            ?
                                            <div className="flex mt-8 md:mx-10">
                                                <span className="border border-blue-500"></span>

                                                <p className="max-w-3xl px-4 text-gray-500">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                                                </p>
                                            </div>
                                            :
                                            ""
                                        }
                                    </div>

                                    <hr className="my-8 border-gray-200" />

                                    <div>
                                        <button onClick={() => setIsOpen((prev) => (prev === "q5" ? "" : "q5"))} className="flex items-center focus:outline-none">
                                            {isOpen === 'q5' ?
                                                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                </svg>
                                            }

                                            <h1 className="mx-4 text-[18px] text-gray-700 text-start">Is the cost of the appointment covered by private health insurance ?</h1>
                                        </button>

                                        {isOpen === 'q5'
                                            ?
                                            <div className="flex mt-8 md:mx-10">
                                                <span className="border border-blue-500"></span>

                                                <p className="max-w-3xl px-4 text-gray-500">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                                                </p>
                                            </div>
                                            :
                                            ""
                                        }
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="inline-flex items-center py-2 mt-8 sm:mt-2 space-x-2 bg-[#FC3657] text-[12px] px-6 rounded-md text-white cursor-default">
                                    TOP ARTICLES
                                </button>
                                <div className="rounded w-full flex flex-col mb-3 md:mb-10 items-start">
                                    <div className="text-gray-800 font-semibold text-[21px] mt-10 mb-5">
                                        Android version of ‘Firstlook’ released today.
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md sm:h-44 sm:m-4 md:m-0" />
                                    <div className="bg-white rounded mt-5">
                                        <p className=" p-2 pl-0 pt-1 text-[14px] text-gray-600 text-justify">
                                            Launched ‘Firstlook’ a social netwrok for singles to find life partner. The web version is now introduced in India in the domain called www.firstlok.pro
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded w-full flex flex-col mb-3 md:mb-10 items-start sm:mt-0 mt-10">
                                    <div className="md:mt-0 text-gray-800 font-semibold text-[21px] mb-5">
                                        ‘Firstlook’ introduce ‘Booster Plan’ to target particular user’s.
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md sm:h-44 sm:m-4 md:m-0" />
                                    <div className="bg-white rounded mt-5">
                                        <p className="p-2 pl-0 pt-1 text-[14px] text-gray-600 text-justify">
                                            Launched ‘Firstlook’ a social netwrok for singles to find life partner. The web version is now introduced in India in the domain called www.firstlok.pro
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default HelpCenter