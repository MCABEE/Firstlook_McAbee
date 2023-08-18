import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import firstLook from '../../../assets/firstLook.png'

const SignupOption = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.clear();
        navigate("/")
        window.location.reload()
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="sm:block hidden bg-white pt-4 pb-4 sm:px-6 border border-gray-200 rounded-2xl w-11/12 mx-auto mt-5">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <Link to="/" className="">
                                <span className="sr-only">Your Company</span>
                                <img className="h-10" src={firstLook} alt="Alt" />
                            </Link>
                        </div>
                        {token && <div className="lg:flex lg:min-w-0 lg:flex-1 mr-5 sm:mr-0 lg:justify-end">
                            <Link
                                onClick={logout}
                                className="inline-block rounded-lg px-6 py-1.5 text-sm font-semibold leading-6 bg-[#FC3657] shadow-sm text-white transform transition hover:scale-95 duration-300 ease-in-out"
                            >
                                Logout
                            </Link>
                        </div>}
                    </nav>
                </div>
            </div>
            <div className="flex justify-center items-center sm:mb-10 sm:mt-10">

                <div className="w-full h-fit sm:max-w-sm sm:rounded-2xl sm:shadow-md bg-bg_signup bg-no-repeat sm:bg-contain bg-[length:450px_450px]">
                    <div className="sm:hidden block bg-white pt-4 pb-4 sm:px-6 border border-gray-200 rounded-2xl w-11/12 mx-auto mt-5">
                        <div>
                            <nav className="flex h-9 items-center justify-between" aria-label="Global">
                                <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                                    <Link to="/" className="">
                                        <span className="sr-only">Your Company</span>
                                        <img className="h-10" src={firstLook} alt="Alt" />
                                    </Link>
                                </div>
                                {token && <div className="lg:flex lg:min-w-0 lg:flex-1 mr-5 sm:mr-0 lg:justify-end">
                                    <Link
                                        onClick={logout}
                                        className="inline-block rounded-lg px-6 py-1.5 text-sm font-semibold leading-6 bg-[#FC3657] shadow-sm text-white transform transition hover:scale-95 duration-300 ease-in-out"
                                    >
                                        Logout
                                    </Link>
                                </div>}
                            </nav>
                        </div>
                    </div>
                    <div className="sm:block hidden">
                        <p className=" font-oxygen font-bold flex justify-center text-white sm:mt-16 mt-4 text-[16px]">
                            Signup
                        </p>
                    </div>
                    <div className="grid gap-4 mt-16 sm:mt-10">
                        <div className="flex-1">
                            <p className="text-white text-[24px] ml-10">
                                Go for a <br />
                                <span className="font-semibold">Quick Signup</span>
                            </p>
                            <p className="text-white text-[12px] ml-10 w-3/4 text-justify mt-5">
                                While choosing this option, you can easily launch profile. But will have to provide complete information about yourself before doing any activity on your profile.
                            </p>
                            <Link to="/register/quickSignup">
                                <div className="text-[14px] font-semibold bg-white mx-auto text-center w-56 mt-6 py-3 rounded-xl">
                                    Let’s Start
                                </div>
                            </Link>
                            <div className="ml-10 text-[14px] font-semibold sm:mt-32 mt-28">
                            </div>
                            <p className="font-semibold text-[24px] ml-10 mt-5">
                                Standard Signup
                            </p>
                            <p className="ml-10 text-[12px] mt-4 w-3/4 text-justify">
                                If you choose the <span className="font-semibold">’Standard Signup’</span> option, enter the complete information now and start search without any hassles further.
                            </p>
                            <Link to="/register/signup">
                                <div className="text-[14px] font-semibold bg-[#F92739] text-white border border-[#F92739] mx-auto text-center w-56 mt-9 py-3 rounded-xl mb-28">
                                    I Select this
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupOption;