import firstLook from '../../assets/firstLook.png'
import Mobileimage from '../../assets/Index_Model.png'
import { Link } from "react-router-dom"

const Banner = () => {
    const token = localStorage.getItem("token")
    return (
        <>
            <div className="relative z-10 bg-white px-6 pt-4 pb-4 lg:px-8 border-2 shadow-md rounded-2xl w-11/12 mx-auto mt-5">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-10" src={firstLook} alt="Alt" />
                            </a>
                        </div>
                        <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                        {!token && <Link
                                to='/Signup'
                                className="inline-block rounded-lg px-6 py-1.5 text-sm font-semibold leading-6 bg-[#FC3657] shadow-sm text-white transform transition hover:scale-95 duration-300 ease-in-out"
                            >
                                Signup
                            </Link>}
                        </div>
                    </nav>
                </div>
            </div>
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-24">
                            <h2 className="font-oxygen text-3xl font-bold tracking-tight text-gray-900 sm:text-[48px] sm:leading-none max-w-lg mb-6 mt-20">
                                You will never be
                                <br className="hidden md:block" />
                                Alone !
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg">Join the Social Network,</p>
                            <p className="text-gray-600 text-base md:text-lg">Exclusively for finding life partner’s !</p>

                        </div>
                        <div>
                            <p className='text-[18px] '>
                                Download
                            </p>
                            <div className='flex'>
                                <button className='mt-4 border border-gray-400 h-[75px] w-[75px] flex justify-center items-center rounded-lg'>
                                    <svg viewBox="0 0 384 512" width="30">
                                        <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                                        </path>
                                    </svg>
                                </button>
                                <button className='mt-4 border border-gray-400 h-[75px] w-[75px] flex justify-center items-center rounded-lg ml-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="35" viewBox="0 0 33 35" fill="none">
                                        <path d="M0 2.14784V32.8505C0.000204904 32.9172 0.0199962 32.9822 0.0568923 33.0376C0.0937884 33.0929 0.146147 33.1362 0.207402 33.1618C0.268657 33.1874 0.336082 33.1943 0.401222 33.1816C0.466362 33.1689 0.526317 33.1371 0.573569 33.0904L16.4989 17.5L0.573569 1.908C0.526317 1.86123 0.466362 1.82951 0.401222 1.81681C0.336082 1.80411 0.268657 1.811 0.207402 1.83661C0.146147 1.86223 0.0937884 1.90542 0.0568923 1.96079C0.0199962 2.01616 0.000204904 2.08122 0 2.14784Z" fill="#444444" />
                                        <path d="M23.1762 11.0938L3.20789 0.0502323L3.19544 0.0432011C2.85146 -0.144296 2.52459 0.322885 2.80632 0.594756L18.4592 15.6195L23.1762 11.0938Z" fill="#444444" />
                                        <path d="M2.80788 34.4052C2.52459 34.6771 2.85146 35.1443 3.197 34.9568L3.20945 34.9498L23.1762 23.9062L18.4592 19.3789L2.80788 34.4052Z" fill="#444444" />
                                        <path d="M31.2374 15.5469L25.6612 12.4641L20.4182 17.5L25.6612 22.5335L31.2374 19.4531C32.7542 18.6117 32.7542 16.3883 31.2374 15.5469Z" fill="#444444" />
                                    </svg>
                                </button>
                                <button className='mt-4 border border-gray-400 h-[75px] w-[75px] flex justify-center items-center rounded-lg ml-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                        <path opacity="0.58" d="M45 0H0V45H45V0Z" fill="white" />
                                        <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M39 4.20002L24 7.2C23.1188 7.36875 22.5 8.13752 22.5 9.03752V18.75C22.5 19.7813 23.3438 20.6251 24.375 20.6251H39.375C40.4063 20.6251 41.25 19.7813 41.25 18.75V6.03752C41.25 4.85627 40.1625 3.97502 39 4.20002Z" fill="#292D32" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M39 40.8L24 37.8C23.1188 37.6313 22.5 36.8625 22.5 35.9625V26.25C22.5 25.2188 23.3438 24.375 24.375 24.375H39.375C40.4063 24.375 41.25 25.2188 41.25 26.25V38.9625C41.25 40.1438 40.1625 41.025 39 40.8Z" fill="#292D32" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.4812 8.55021L5.23121 10.9502C4.36871 11.1377 3.75 11.9065 3.75 12.7877V18.7502C3.75 19.7815 4.59375 20.6252 5.625 20.6252H16.875C17.9063 20.6252 18.75 19.7815 18.75 18.7502V10.369C18.75 9.18771 17.6437 8.28771 16.4812 8.55021Z" fill="#292D32" />
                                        <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M16.4812 36.45L5.23121 34.05C4.36871 33.8625 3.75 33.0938 3.75 32.2125V26.25C3.75 25.2188 4.59375 24.375 5.625 24.375H16.875C17.9063 24.375 18.75 25.2188 18.75 26.25V34.6313C18.75 35.8125 17.6437 36.7125 16.4812 36.45Z" fill="#292D32" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-end justify-end'>
                        <img alt="..." src={Mobileimage} className="h-full w-full " />
                        {/* <div>
                            <img className="absolute h-[53px] w-[135px] -ml-[18rem] mt-28" src={cloud} alt="" />
                            <img className="absolute h-[38px] w-[96px] ml-80 mt-10" src={cloud} alt="" />
                            <img className="absolute h-[19px] w-[21px] ml-[375px] mt-[250px]" src={heart} alt="" />
                            <img className="absolute h-[28px] w-[32px] ml-[340px] mt-[370px]" src={heart} alt="" />
                            <img className="absolute h-[70px] w-[70px] ml-[260px] mt-[520px]" src={chat} alt="" />
                        </div>
                        <div className="mt-20">
                            <img alt="..." src={Mobileimage} className="h-full w-[590px] -ml-32" />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner