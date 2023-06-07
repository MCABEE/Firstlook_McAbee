import Navbar from "../../Home/Navbar";

const SignupOption = () => {
    return (
        <>
            <Navbar />
            <div className="flex h-screen justify-center items-center mt-20">
                <div className="w-full h-fit max-w-sm bg-[#F2F2F2] rounded-2xl mt-20 shadow-2xl bg-bg_signup bg-no-repeat bg-contain">
                    <p className="font-oxygen font-bold flex justify-center text-white mt-16 text-[16px]">
                        Signup
                    </p>
                    <div className="grid gap-4 mt-10">
                        <div className="flex-1">
                            <p className="text-white text-[24px] ml-10">
                                Go for a <br />
                                <span className="font-semibold">Quick Signup</span>
                            </p>
                            <p className="text-white text-[12px] ml-10 w-3/4 text-justify mt-5">
                                While choosing this option, you can easily launch profile. But will have to provide complete information about yourself before doing any activity on your profile.
                            </p>
                            <button className="text-[14px] font-semibold bg-white ml-[4.35rem] w-56 mt-6 py-3 rounded-xl">
                                Let’s Start
                            </button>
                            <p className="ml-10 text-[14px] font-semibold mt-20">
                                Or
                            </p>
                            <p className="font-semibold text-[24px] ml-10 mt-5">
                                Standard Signup
                            </p>
                            <p className="ml-10 text-[12px] mt-4 w-3/4 text-justify">
                                If you choose the <span className="font-semibold">’Standard Signup’</span> option, enter the complete information now and start search without any hassles further.
                            </p>
                            <button className="text-[14px] font-semibold bg-white border border-[#F92739] ml-[4.35rem] w-56 mt-9 py-3 rounded-xl mb-28">
                                I Select this
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupOption;