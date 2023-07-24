import { Link } from "react-router-dom"

const AboutUs = () => {
    return (
        <>
            <div className="w-[89%] mx-auto">
                <p className="flex justify-center mt-10 text-[14px] sm:text-[24px] text-[#727272] font-oxygen font-bold">
                    About Firstlook
                </p>
                <p className="flex justify-center mt-4 text-[20px] sm:text-[36px] font-oxygen font-bold text-center">
                    a group of people <br />
                    who love’s ‘Firstlook’ the most.
                </p>
                
                <p className="flex justify-center mt-4 sm:text-[21px] text-center">
                    Our mission is to connect people who are planning to marry or wish to find life partner. <br className="lg:block hidden" />
                    And make this network as a space for mingle with each other, chat, share pics, videos and propose.
                </p>

                <div className="flex justify-center mt-8 mb-6">
                    <img src="https://imagetolink.com/ib/G5XfwmytBS.png" className="sm:h-[28rem] w-[50rem]" alt="" />
                </div>

                {/* <div className="grid w-full mt-20 mb-[25rem]">
                <div className="absolute left-1/2 top-[38.5rem] h-96 w-[760px] -translate-x-1/2 -translate-y-1/2 -rotate-6 rounded-2xl bg-[#472C4C]"></div>
                <div className="absolute left-1/2 top-[38rem] h-96 w-[800px] -translate-x-1/2 -translate-y-1/2 space-y-6 rounded-2xl p-6 transition duration-300 rotate-0">
                    <img src="https://imagetolink.com/ib/ZJNkHM64Eo.png" className="h-96 w-[800px]" alt="" />
                </div>
            </div> */}

                <p className="flex justify-center text-[20px] sm:text-[36px] font-oxygen font-bold text-center">
                    Our Story
                </p>
                <div className="flex justify-center mt-5">
                    <p className="max-w-6xl text-center sm:text-[21px]">
                        The ‘Firstlook’ journey begins in May 2021. Then it took about six months to complete the first prototype and went live on trial basis in December 2021.
                        After live test which took about three months it was withdrawn for further updates.
                        After sixteen months, the commercial version of ‘Firstlook’ was released in July 2023.
                        In the first phase, the service available only to Indian citizen’s worldwide.
                        ‘Firstlook’ will be available to citizens of other countries soon.
                    </p>
                </div>
                <div className="flex justify-center">
                    <button className="mt-10 px-28 py-2 rounded-lg font-semibold bg-[#C8E9A0] text-[10px] sm:text-[14px]">
                        DOWLOAD MEDIA KIT FOR MORE DETAILS
                    </button>
                </div>

                <p className="flex justify-center text-[28px] sm:text-[36px] font-oxygen font-bold text-center mt-16">
                    Our Community
                </p>
                <div className="flex flex-col justify-center items-center h-full py-8 duration-300 sm:items-stretch sm:space-x-8 sm:flex-row">
                    <div className="px-10 py-5 text-center rounded-lg bg-[#472C4C] text-white">
                        <h6 className="font-bold text-[20px] sm:text-[36px]">
                            2021
                        </h6>
                        <p className="text-center sm:text-[21px]">
                            Born in
                        </p>
                    </div>
                    <div className="sm:px-[2.8rem] px-[1.9rem] mt-10 sm:mt-0 py-5 text-center rounded-lg bg-[#C8E9A0] text-[#472C4C]">
                        <h6 className="font-bold text-[20px] sm:text-[36px]">
                            18
                        </h6>
                        <p className="text-center sm:text-[21px]">
                            Team Size

                        </p>
                    </div>
                    <div className="sm:px-12 px-[2.2rem] py-5 mt-10 sm:mt-0 text-center rounded-lg bg-[#77867F] text-white">
                        <h6 className="font-bold text-[20px] sm:text-[36px]">
                            $0
                        </h6>
                        <p className="text-center sm:text-[21px]">
                            Funding
                        </p>
                    </div>
                </div>

                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
                    <div className="grid grid-cols-2 sm:grid-cols-5">
                        <div className="text-center">
                            <h6 className="text-[20px] sm:text-[36px] mt-6 sm:mt-0 font-bold">18</h6>
                            <p className="text-[#525252] sm:text-[21px]">COUNTRIES</p>
                        </div>
                        <div className="text-center">
                            <h6 className="text-[20px] sm:text-[36px] mt-6 sm:mt-0 font-bold">24k</h6>
                            <p className="text-[#525252] sm:text-[21px]">USERS</p>
                        </div>
                        <div className="text-center">
                            <h6 className="text-[20px] sm:text-[36px] mt-6 sm:mt-0 font-bold">72k</h6>
                            <p className="text-[#525252] sm:text-[21px]">PHOTO’S</p>
                        </div>
                        <div className="text-center">
                            <h6 className="text-[20px] sm:text-[36px] mt-6 sm:mt-0 font-bold">18k</h6>
                            <p className="text-[#525252] sm:text-[21px]">VIDEO’S</p>
                        </div>
                        <div className="text-center">
                            <h6 className="text-[20px] sm:text-[36px] mt-6 sm:mt-0 font-bold">100K</h6>
                            <p className="text-[#525252] sm:text-[21px]">PROPOSAL’S</p>
                        </div>
                    </div>
                </div>

                <p className="flex justify-center text-[20px] sm:text-[36px] font-oxygen font-bold text-center mt-16">
                    The Team
                </p>
                <div className="flex justify-center mt-5">
                    <p className="max-w-6xl text-center sm:text-[21px]">
                        The social network ‘Firstlook’ owned by ‘MCABEE’ a Chennai based company and it was the trade name of ‘Sebastian and Sons Digital Pvt Ltd’. It is an IT company registered under the companies act, under Govt. of India in 2021. The company is familiar in its trade name ‘MCABEE’.
                        It’s a technology company in the SaaS category.
                        The founder of the social network ‘Firstlook’ is Mr. Shibin Sebastian, who is also the CEO of MCABEE.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link className="mt-10 px-28 py-2 rounded-lg font-semibold bg-[#77867F] text-white text-[14px]">
                        www.mcabee.in
                    </Link>
                </div>

                <p className="flex justify-center text-[20px] sm:text-[36px] font-oxygen font-bold text-center mt-16">
                    Media Say’s
                </p>
                <div className="flex justify-center mt-5">
                    <p className="max-w-6xl text-center sm:text-[21px]">
                        Here is a summary of what we tell the world through the media about the ‘Firstlook’
                        - Social Network, and what the media generally report about us.
                        You can see that news in detail through the link.
                    </p>
                </div>

                <hr className="mt-10 " />
                <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-20 mt-10">
                    <img src="https://imagetolink.com/ib/uZtFnLDC7S.png" className="sm:mt-0 mt-10 h-[69px] w-[92px]" alt="" />
                    <img src="https://imagetolink.com/ib/k7DL3M9UUl.png" className="sm:mt-5 mt-10 h-[25px] w-[105px]" alt="" />
                    <img src="https://imagetolink.com/ib/gsKHxgLKQ5.png" className="sm:mt-0 mt-10 h-[69px] w-[78px]" alt="" />
                    <img src="https://imagetolink.com/ib/WEayTYvVPt.png" className="sm:mt-5 mt-10 h-[29px] w-[105px]" alt="" />
                    <img src="https://imagetolink.com/ib/bGwaQ5EefU.png" className="sm:mt-0 mt-10 h-[69px] w-[92px]" alt="" />
                    <img src="https://imagetolink.com/ib/Kve1jiqMZo.png" className="sm:mt-0 mt-10 h-[62px] w-[70px]" alt="" />
                    <img src="https://imagetolink.com/ib/X3oXxIihq4.png" className="sm:mt-0 mt-10 h-[66px] w-[61px]" alt="" />
                    <img src="https://imagetolink.com/ib/L96F3ms432.png" className="sm:mt-0 mt-10 h-[52px] w-[86px]" alt="" />
                </div>
                <hr className="mt-6" />

                <p className="flex justify-center mt-16 mb-16 sm:text-[24px] text-center font-bold">
                    Thank you for being here. Keep in touch !
                </p>
            </div>
        </>
    )
}

export default AboutUs