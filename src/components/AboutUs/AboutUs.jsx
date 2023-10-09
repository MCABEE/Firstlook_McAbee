import { useEffect } from "react"
import { Link } from "react-router-dom"

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="w-[89%] mx-auto">
                <p className="flex justify-center mt-10 text-[14px] sm:text-[24px] text-[#727272] font-oxygen font-bold">
                    About Firstlook
                </p>
                <p className="flex justify-center mt-4 text-[20px] sm:text-[36px] font-oxygen font-bold text-center">
                    We are a bunch of people <br /> who carefully crafted Firstlook with all our hearts and soul.
                </p>

                <p className="flex justify-center mt-4 sm:text-[21px] text-center">
                    Firstlook fulfills the need of people who want to get married soon, by providing them
                    with matching profiles from all around the world. Using our network, anyone can
                    connect and communicate with people from anywhere in the world. Just like any social
                    media app, Firstlook is rather fun and easy to use.
                </p>

                <div className="flex justify-center mt-8 mb-6">
                    <img src="https://imagetolink.com/ib/LbMT7IeJ5h.png" className="sm:h-[28rem] w-[50rem]" alt="" />
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
                    <p className="max-w-5xl sm:text-[21px] text-justify">
                        The initial idea of such a platform was conceived during the first half of 2021. After a
                        brief period of mental exercise and incubation, we started developing Phase I in the
                        month of May. Within 7 months, around December 2021, an MVP of the Android version
                        was released. The app completed its 3 month trial run among selected individuals and
                        pulled back for further updates and improvements. Then, after 18 months, commercial
                        version of Firstlook app was released in September 2023.

                        Currently ‘Firstlook’ is only available for Indian’s across the globe. It will be accessible
                        for everyone after the next update.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link to='/pageunderconstruction'>
                        <button className="mt-10 px-[10vw] sm:px-28 py-3 rounded-lg font-semibold bg-[#C8E9A0] text-[10px] sm:text-[14px]">
                            DOWLOAD THE MEDIA KIT TO KNOW MORE
                        </button>
                    </Link>
                </div>

                <p className="flex justify-center text-[28px] sm:text-[36px] font-oxygen font-bold text-center mt-10 sm:mt-16">
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
                    <div className="sm:block hidden">
                        <div className="grid sm:grid-cols-5">
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
                    <div className="sm:hidden block">
                        <div className="grid grid-cols-2">
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
                        The match making social network Firstlook is owned by Mcabee, an IT company
                        registered in Chennai. Macabee is specialized in the development of SaaS related
                        service products. Apart from product development, Macabee also provides consultation
                        services in web application development, Android &amp; iOS mobile application
                        development, cloud hosting etc. Macabee started as a web design company in 2012
                        and recently rebranded in 2021 after a prosperous 9 year period.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link to='https://www.mcabee.in/' className="mt-10 px-[20vw] sm:px-28 py-2 rounded-lg font-semibold bg-[#77867F] text-white text-[14px]">
                        www.mcabee.in
                    </Link>
                </div>

                <p className="flex justify-center text-[20px] sm:text-[36px] font-oxygen font-bold text-center mt-16">
                    Media Say’s
                </p>
                <div className="flex justify-center mt-5">
                    <p className="max-w-6xl text-center sm:text-[21px]">
                        Get a summary of the important news articles about Firstlook from various Media, our
                        press releases and other important announcements regarding our service from here.
                    </p>
                </div>

                <hr className="mt-10 " />
                <div className="md:block hidden">
                    <div className="flex flex-wrap md:space-y-10 md:flex-row justify-center items-center md:space-x-20 mt-10">
                        <img src="https://imagetolink.com/ib/uZtFnLDC7S.png" className="sm:mt-0 mt-10 h-[69px] w-[92px]" alt="" />
                        <img src="https://imagetolink.com/ib/k7DL3M9UUl.png" className="sm:mt-5 mt-10 h-[25px] w-[105px]" alt="" />
                        <img src="https://imagetolink.com/ib/gsKHxgLKQ5.png" className="sm:mt-0 mt-10 h-[69px] w-[78px]" alt="" />
                        <img src="https://imagetolink.com/ib/WEayTYvVPt.png" className="sm:mt-5 mt-10 h-[29px] w-[105px]" alt="" />
                        <img src="https://imagetolink.com/ib/bGwaQ5EefU.png" className="sm:mt-0 mt-10 h-[69px] w-[92px]" alt="" />
                        <img src="https://imagetolink.com/ib/Kve1jiqMZo.png" className="sm:mt-0 mt-10 h-[62px] w-[70px]" alt="" />
                        <img src="https://imagetolink.com/ib/X3oXxIihq4.png" className="sm:mt-0 mt-10 h-[66px] w-[61px]" alt="" />
                        <img src="https://imagetolink.com/ib/L96F3ms432.png" className="sm:mt-0 mt-10 h-[52px] w-[86px]" alt="" />
                    </div>
                </div>

                <div className="md:hidden block">
                    <div className="flex flex-wrap justify-center items-center mt-3">
                        <img src="https://imagetolink.com/ib/uZtFnLDC7S.png" className="sm:mt-0 mt-10 h-[69px] w-[92px]" alt="" />
                        <img src="https://imagetolink.com/ib/k7DL3M9UUl.png" className="sm:mt-5 mt-10 h-[25px] w-[105px] ml-10" alt="" />
                    </div>
                    <div className="flex flex-wrap justify-center items-center mt-3">
                        <img src="https://imagetolink.com/ib/gsKHxgLKQ5.png" className="sm:mt-0 mt-10 h-[69px] w-[78px]" alt="" />
                        <img src="https://imagetolink.com/ib/WEayTYvVPt.png" className="sm:mt-5 mt-10 h-[29px] w-[105px] ml-12" alt="" />

                    </div>
                    <div className="flex flex-wrap justify-center items-center mt-3">
                        <img src="https://imagetolink.com/ib/bGwaQ5EefU.png" className="sm:mt-0 mt-10 h-[69px] w-[92px]" alt="" />
                        <img src="https://imagetolink.com/ib/Kve1jiqMZo.png" className="sm:mt-0 mt-10 h-[62px] w-[70px] ml-14" alt="" />

                    </div>
                    <div className="flex flex-wrap justify-center items-center mt-3">
                        <img src="https://imagetolink.com/ib/X3oXxIihq4.png" className="sm:mt-0 mt-10 h-[66px] w-[61px]" alt="" />
                        <img src="https://imagetolink.com/ib/L96F3ms432.png" className="sm:mt-0 mt-10 h-[52px] w-[86px] ml-16" alt="" />
                    </div>
                </div>
                <hr className="mt-6" />

                <p className="flex justify-center mt-16 mb-16 sm:text-[24px] text-center font-bold">
                    Thank you for your Interest in Us
                </p>
            </div>
        </>
    )
}

export default AboutUs