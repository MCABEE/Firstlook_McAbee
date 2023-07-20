import { Link } from "react-router-dom";
import { useEffect } from "react";
import firstLook from '../../../assets/firstLook.png'
import Navbar from "../../Home/Navbar";

const SignupOption = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="sm:block hidden">
                <Navbar />
            </div>
            <div className="flex justify-center items-center sm:mb-20">
                <div className="w-full h-fit sm:max-w-sm sm:rounded-2xl sm:shadow-md bg-bg_signup bg-no-repeat bg-contain">
                    <div className="sm:hidden block bg-white pt-4 pb-4 sm:px-6 border border-gray-200 rounded-2xl w-11/12 mx-auto mt-5">
                        <div>
                            <nav className="flex h-9 items-center justify-between" aria-label="Global">
                                <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                                    <Link to="/" className="">
                                        <span className="sr-only">Your Company</span>
                                        <img className="h-10" src={firstLook} alt="Alt" />
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="sm:block hidden">
                        <p className=" font-oxygen font-bold flex justify-center text-white sm:mt-16 mt-4 text-[16px]">
                            Signup
                        </p>
                    </div>
                    <div className="grid gap-4 mt-10">
                        <div className="flex-1">
                            <p className="text-white text-[24px] ml-10">
                                Go for a <br />
                                <span className="font-semibold">Quick Signup</span>
                            </p>
                            <p className="text-white text-[12px] ml-10 w-3/4 text-justify mt-5">
                                While choosing this option, you can easily launch profile. But will have to provide complete information about yourself before doing any activity on your profile.
                            </p>
                            <Link to="/register/quickSignup">
                                <button className="text-[14px] font-semibold bg-white ml-[4.35rem] w-56 mt-6 py-3 rounded-xl">
                                    Let’s Start
                                </button>
                            </Link>
                            <p className="ml-10 text-[14px] font-semibold mt-20">
                                Or
                            </p>
                            <p className="font-semibold text-[24px] ml-10 mt-5">
                                Standard Signup
                            </p>
                            <p className="ml-10 text-[12px] mt-4 w-3/4 text-justify">
                                If you choose the <span className="font-semibold">’Standard Signup’</span> option, enter the complete information now and start search without any hassles further.
                            </p>
                            <Link to="/register/signup">
                                <button className="text-[14px] font-semibold bg-white border border-[#F92739] ml-[4.35rem] w-56 mt-9 py-3 rounded-xl mb-28">
                                    I Select this
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupOption;