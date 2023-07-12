import news from '../../assets/Working_remotely.png'

const News = () => {
    return (
        <>
            <div className="text-gray-900">
                <div className="grid grid-cols-12 mx-auto max-w-7xl">
                    <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-300">
                        <div className="pt-6 pb-4 space-y-2 mb-5">
                            <h1 className="text-5xl font-bold">News</h1>
                            <p className="text-base text-[#545454]">See, what’s new from Firstlook. <br />
                                News and updates from us.
                            </p>
                        </div>
                        <div className="pt-6 pb-4 space-y-2">
                            <span className="text-[12px]">13 JULY 2023</span>
                            <h1 className="text-[21px] font-bold">‘Firstlook’ introduced the web version in India</h1>
                            <p>Launched ‘Firstlook’ a social netwrok for singles to find life partner. The web version is now introduced in India in the domain called www.firstlok.pro</p>
                            <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-end col-span-12 lg:col-span-6 lg:h-auto">
                        <img src={news} className='w-[500px] h-[350px]' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default News