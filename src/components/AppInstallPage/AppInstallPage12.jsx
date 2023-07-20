import { Link } from "react-router-dom"
import firstLook from '../../assets/firstLook.png'
import { useState } from "react";

const AppInstallPage12 = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

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
    return (
        <>
            <div className="flex flex-wrap bg-bg_eclipse h-screen bg-no-repeat bg-contain">
                <div className="bg-white h-16 pt-4 pb-4 sm:px-3 border-2 shadow-sm rounded-2xl w-11/12 mx-auto mt-5">
                    <div>
                        <nav className="flex h-9 items-center justify-between" aria-label="Global">
                            <div className="flex lg:min-w-0 lg:flex-1 mb-2" aria-label="Global">
                                <Link to="/" className="">
                                    <span className="sr-only">Your Company</span>
                                    <img className="h-10" src={firstLook} alt="Alt" />
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
                <p className="text-[24px] font-oxygen font-bold mt-40">
                    App Install
                </p>
                <div className="px-36">
                    <p className="text-white text-[24px] font-oxygen">
                        Install
                    </p>
                    <p className="text-white text-[24px] font-oxygen font-bold">
                        ‘Firstlook’ Now !
                    </p>
                    <p className="text-white w-[420px] text-justify mt-5">
                        While choosing this option, you will redirect to Playstore / Appstore page and you can install app directly from there. Then go for a signup to access you profile hassle free.
                    </p>

                    <div className="flex flex-wrap mt-6">
                        <Link
                            className={
                                "group relative inline-block overflow-hiddenx` px-8 py-3 focus:outline-none focus:ring bg-white" +
                                (isHovered1 ? " mt-4 h-[75px] w-[75px] flex justify-center items-center rounded-lg" : " mt-4 h-[75px] w-[75px] flex justify-center items-center rounded-lg")
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
                                "group relative inline-block overflow-hiddenx` px-8 py-3 focus:outline-none focus:ring bg-white ml-4" +
                                (isHovered2 ? " mt-4 h-[75px] w-[75px] flex justify-center items-center rounded-lg" : " mt-4 h-[75px] w-[75px] flex justify-center items-center rounded-lg")
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
                    </div>
                </div>
                <div className="ml-44">
                    <p className="text-[24px] font-oxygen font-bold">
                        SignUp
                    </p>
                    <p className=" w-[420px] text-justify mt-5">
                        If you choose the ’Signup’ option, you will redirected to our website registration page. After complete your registration, you should install the app to access your profile and search matches.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AppInstallPage12