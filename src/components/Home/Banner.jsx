import { useState } from 'react'
import firstLook from '../../assets/firstLook.png'
import heart from '../../assets/heartIcon.png'
import cloud from '../../assets/cloud.png'
import chat from '../../assets/Chat.png'
import { motion } from 'framer-motion'
import MobileImage from '../../assets/Index_Model_New.png'
import { Link } from "react-router-dom"

const Banner = () => {
    const token = localStorage.getItem("token")
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHovered1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHovered1(false);
    };

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };

    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };
    return (
        <>
            <div className="relative z-10 bg-white px-6 pt-4 pb-4 lg:px-8 border-2 shadow-md rounded-2xl w-11/12 mx-auto mt-5">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <Link to="/" className="-ml-[1.75rem] p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-10" src={firstLook} alt="Alt" />
                            </Link>
                        </div>
                        <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                            {token && <Link
                                to='/Signup'
                                className="inline-block rounded-lg px-6 py-1.5 text-sm font-semibold leading-6 bg-[#FC3657] shadow-sm text-white transform transition hover:scale-95 duration-300 ease-in-out"
                            >
                                Signup
                            </Link>}
                        </div>
                    </nav>
                </div>
            </div>
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full md:px-24 min-[1072]:px-32 xl:px-[8rem]">
                <div className="grid grid-cols-12 items-center justify-between w-full mb-10">
                    <div className='block md:hidden  col-span-12 mt-4'>
                        <div>
                            <img className="absolute h-[5vw] w-[12.5vw] mt-[14vw] animate-wiggle" src={cloud} alt="" />
                            <img className="absolute h-[4vw] w-[11vw] ml-[79vw] mt-[5vw] animate-wiggle" src={cloud} alt="" />
                            <img className="absolute h-[2.8vw] w-[3.1vw] ml-[84vw] mt-[31vw] animate-moveToCloud_sm" src={heart} alt="" />
                            <img className="absolute h-[3.4vw] w-[3.5vw] ml-[82vw] mt-[53vw] animate-moveToCloud_heart" src={heart} alt="" />
                            <img className="absolute h-[8.8vw] w-[8.8vw] ml-[77vw] mt-[80vw] animate-bounce" src={chat} alt="" />
                        </div>
                        <div className="mt-[4vw]">
                            <img alt="..." src={MobileImage} className="h-full w-[80vw] ml-5" />
                        </div>
                    </div>
                    <div className=" lg:mb-0 lg:max-w-lg lg:pr-5 col-span-12 px-4 md:col-span-6">
                        <motion.div initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                            viewport={{ once: true, amount: 0.8 }} className="max-w-xl mb-8 lg:mb-16">
                            <h2 className="font-oxygen text-3xl font-bold tracking-tight text-gray-900 sm:text-[48px] sm:leading-none max-w-lg mb-6 mt-20">
                                You will never be
                                <br />
                                Alone!
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg">
                                Join the Social Network,
                            </p>
                            <p className="text-gray-600 text-base md:text-lg">
                                Exclusively for finding life partners!
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.8 } }}
                            viewport={{ once: true, amount: 0.8 }}>
                            <p className="text-lg">Download</p>
                            <div className="flex flex-wrap">
                                <Link
                                    className={
                                        "group relative inline-block overflow-hiddenx` px-8 py-3 focus:outline-none focus:ring" +
                                        (isHovered1 ? " mt-4 h-[75px] w-[75px] flex justify-center items-center rounded-lg" : " mt-4 border border-gray-400 h-[75px] w-[75px] flex justify-center items-center rounded-lg")
                                    }
                                    href="/download"
                                    onMouseEnter={handleMouseEnter1}
                                    onMouseLeave={handleMouseLeave1}
                                >
                                    <span
                                        className={
                                            "absolute inset-x-0 top-0 h-[2px] transition-all group-hover:h-full rounded-lg" +
                                            (isHovered1 ? " h-full bg-gradient-to-r from-[#FF944E] to-[#FC3158]" : "")
                                        }
                                    ></span>

                                    <span
                                        className={
                                            "relative text-sm font-medium  transition-colors group-hover:text-white"
                                        }
                                    >
                                        {isHovered1 ?
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="11"
                                                height="24"
                                                viewBox="0 0 11 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M1 10.6441L6.35586 15.9999L11.7117 10.6441M6.35593 1V15.85M1 17.9999H12"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            : <svg viewBox="0 0 384 512" width="30">
                                                <path
                                                    fill="currentColor"
                                                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                                ></path>
                                            </svg>}
                                    </span>
                                </Link>

                                <Link
                                    className={
                                        "group relative inline-block overflow-hiddenx` px-8 py-3 focus:outline-none focus:ring ml-4" +
                                        (isHovered2 ? " mt-4 h-[75px] w-[75px] flex justify-center items-center rounded-lg" : " mt-4 border border-gray-400 h-[75px] w-[75px] flex justify-center items-center rounded-lg")
                                    }
                                    href="/download"
                                    onMouseEnter={handleMouseEnter2}
                                    onMouseLeave={handleMouseLeave2}
                                >
                                    <span
                                        className={
                                            "absolute inset-x-0 top-0 h-[2px] transition-all group-hover:h-full rounded-lg" +
                                            (isHovered2 ? " h-full bg-gradient-to-r from-[#FF944E] to-[#FC3158]" : "")
                                        }
                                    ></span>

                                    <span
                                        className={
                                            "relative text-sm font-medium  transition-colors group-hover:text-white"
                                        }
                                    >
                                        {isHovered2 ?
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="11"
                                                height="24"
                                                viewBox="0 0 11 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M1 10.6441L6.35586 15.9999L11.7117 10.6441M6.35593 1V15.85M1 17.9999H12"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            : <svg xmlns="http://www.w3.org/2000/svg" width="33" height="35" viewBox="0 0 33 35" fill="none">
                                                <path
                                                    d="M0 2.14784V32.8505C0.000204904 32.9172 0.0199962 32.9822 0.0568923 33.0376C0.0937884 33.0929 0.146147 33.1362 0.207402 33.1618C0.268657 33.1874 0.336082 33.1943 0.401222 33.1816C0.466362 33.1689 0.526317 33.1371 0.573569 33.0904L16.4989 17.5L0.573569 1.908C0.526317 1.86123 0.466362 1.82951 0.401222 1.81681C0.336082 1.80411 0.268657 1.811 0.207402 1.83661C0.146147 1.86223 0.0937884 1.90542 0.0568923 1.96079C0.0199962 2.01616 0.000204904 2.08122 0 2.14784Z"
                                                    fill="#444444"
                                                />
                                                <path
                                                    d="M23.1762 11.0938L3.20789 0.0502323L3.19544 0.0432011C2.85146 -0.144296 2.52459 0.322885 2.80632 0.594756L18.4592 15.6195L23.1762 11.0938Z"
                                                    fill="#444444"
                                                />
                                                <path
                                                    d="M2.80788 34.4052C2.52459 34.6771 2.85146 35.1443 3.197 34.9568L3.20945 34.9498L23.1762 23.9062L18.4592 19.3789L2.80788 34.4052Z"
                                                    fill="#444444"
                                                />
                                                <path
                                                    d="M31.2374 15.5469L25.6612 12.4641L20.4182 17.5L25.6612 22.5335L31.2374 19.4531C32.7542 18.6117 32.7542 16.3883 31.2374 15.5469Z"
                                                    fill="#444444"
                                                />
                                            </svg>}
                                    </span>
                                </Link>

                                <Link
                                    className={
                                        "group relative inline-block overflow-hiddenx` px-8 py-3 focus:outline-none focus:ring ml-4" +
                                        (isHovered3 ? " mt-4 h-[75px] w-[75px] flex justify-center items-center rounded-lg" : " mt-4 border border-gray-400 h-[75px] w-[75px] flex justify-center items-center rounded-lg")
                                    }
                                    href="/download"
                                    onMouseEnter={handleMouseEnter3}
                                    onMouseLeave={handleMouseLeave3}
                                >
                                    <span
                                        className={
                                            "absolute inset-x-0 top-0 h-[2px] transition-all group-hover:h-full rounded-lg" +
                                            (isHovered3 ? " h-full bg-gradient-to-r from-[#FF944E] to-[#FC3158]" : "")
                                        }
                                    ></span>

                                    <span
                                        className={
                                            "relative text-sm font-medium  transition-colors group-hover:text-white"
                                        }
                                    >
                                        {isHovered3 ?
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="11"
                                                height="24"
                                                viewBox="0 0 11 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M1 10.6441L6.35586 15.9999L11.7117 10.6441M6.35593 1V15.85M1 17.9999H12"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            : <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                                <path opacity="0.58" d="M45 0H0V45H45V0Z" fill="white" />
                                                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M39 4.20002L24 7.2C23.1188 7.36875 22.5 8.13752 22.5 9.03752V18.75C22.5 19.7813 23.3438 20.6251 24.375 20.6251H39.375C40.4063 20.6251 41.25 19.7813 41.25 18.75V6.03752C41.25 4.85627 40.1625 3.97502 39 4.20002Z" fill="#292D32" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M39 40.8L24 37.8C23.1188 37.6313 22.5 36.8625 22.5 35.9625V26.25C22.5 25.2188 23.3438 24.375 24.375 24.375H39.375C40.4063 24.375 41.25 25.2188 41.25 26.25V38.9625C41.25 40.1438 40.1625 41.025 39 40.8Z" fill="#292D32" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M16.4812 8.55021L5.23121 10.9502C4.36871 11.1377 3.75 11.9065 3.75 12.7877V18.7502C3.75 19.7815 4.59375 20.6252 5.625 20.6252H16.875C17.9063 20.6252 18.75 19.7815 18.75 18.7502V10.369C18.75 9.18771 17.6437 8.28771 16.4812 8.55021Z" fill="#292D32" />
                                                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M16.4812 36.45L5.23121 34.05C4.36871 33.8625 3.75 33.0938 3.75 32.2125V26.25C3.75 25.2188 4.59375 24.375 5.625 24.375H16.875C17.9063 24.375 18.75 25.2188 18.75 26.25V34.6313C18.75 35.8125 17.6437 36.7125 16.4812 36.45Z" fill="#292D32" />
                                            </svg>}
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="md:block hidden md:col-span-6">
                        <div>
                            <img className="absolute h-[3vw] w-[7.5vw] mt-[7vw] animate-wiggle" src={cloud} alt="" />
                            <img className="absolute h-[2vw] w-[5vw] ml-[37vw] mt-[2vw] animate-wiggle" src={cloud} alt="" />
                            <img className="absolute h-[0.8vw] w-[0.9vw] ml-[38.5vw] mt-[14vw] animate-moveToCloud" src={heart} alt="" />
                            <img className="absolute h-[1vw] w-[1.1vw] ml-[37.5vw] mt-[21.5vw] animate-moveToCloud" src={heart} alt="" />
                            <img className="absolute h-[3.8vw] w-[3.8vw] ml-[35vw] mt-[32vw] animate-bounce" src={chat} alt="" />
                        </div>
                        <div className="mt-[4vw]">
                            <img alt="..." src={MobileImage} className="h-full w-[30vw] ml-[8vw]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner