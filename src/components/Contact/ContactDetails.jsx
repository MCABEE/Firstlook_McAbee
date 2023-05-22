import Navbar from '../Home/Navbar';
import bgContact from '../../assets/contactBg.png'

const ContactDetails = () => {
    return (
        <>

            <div className="flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
                <div className="absolute inset-0">
                    <Navbar />
                </div>
                <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-20 xl:px-0 lg:py-20 lg:max-w-screen-xl">
                    <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6 mt-24">
                        <h2 className="mb-5 font-sans text-[24px] font-semibold tracking-tight text-gray-900 sm:text-[24px] md:text-start">
                            Have something you want to share with us?
                        </h2>
                        <p className='text-base text-gray-700 md:text-[16px] md:text-start'>
                            Don’t be shy; feel free to contact us.
                        </p>
                        <p className="mb-14 text-base text-gray-700 md:text-[16px] md:text-start">
                            You have the power to make us better, and of course, we consider the words of encouragement as well. Our customer support team is always available to attend you.
                        </p>
                        <h2 className="mb-12 font-sans text-[24px] font-semibold tracking-tight text-gray-900 sm:text-[24px] md:text-start">
                            Say hello to us !
                        </h2>
                        <div className='flex mb-10'>
                            <div className="p-4 rounded-2xl border border-[#DDDCDC] w-56 md:p-7">
                                <h2 className="text-base font-medium text-[16px] text-[#FC3657]">Address</h2>
                                <p className="mt-3 text-sm text-[14px] text-black">7th Floor, Spencer Plaza</p>
                                <p className="mt-1 text-sm text-[14px] text-black">Mount Road, Anna Salai</p>
                                <p className="mt-1 text-sm text-[14px] text-black">Chennai - 600 002</p>
                                <p className="mt-1 text-sm text-[14px] text-black">Tamil Nadu, India</p>
                            </div>
                            <div className="p-4 rounded-2xl border border-[#DDDCDC] md:p-7 w-56 ml-10">
                                <h2 className="text-base font-medium text-[16px] text-[#FC3657]">Customer Care</h2>
                                <p className="mt-3 text-sm font-semibold text-[14px] text-black">Phone</p>
                                <p className="mt-0 text-sm text-[14px] text-black">1800 270 1431</p>
                                <p className="mt-3 text-sm font-semibold text-[14px] text-black">Email</p>
                                <p className="mt-0 text-sm text-[14px] text-black">support@firstlook.pro</p>
                            </div>
                        </div>
                        <h2 className="ml-5 mb-2 font-sans text-[16px] font-semibold tracking-tight text-gray-900 sm:text-[16px] sm:leading-none md:text-start">
                            For Business
                        </h2>
                        <p className="ml-5 mb-5 text-sm text-gray-700 md:text-[14px] md:text-start w-[350px] md:w-[600px]">
                            Please connect us through - Email [ mail@firstlook.pro ], Tel [ 91 - 9946 - 250 - 333 ]
                        </p>

                        <div
                            className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-y-16 rounded-xl bg-[#D8E8FE] bg-opacity-40 p-4 border border-[#DDDCDC] shadow-sm sm:p-6 lg:p-8 md:mt-14 lg:w-[900px]"
                        >
                            <div className="col-span-3">
                                <div>
                                    <h2 className="text-2xl font-semibold text-black sm:text-[18px]">
                                        Subscribe FIRSTLOOK !
                                    </h2>

                                    <p className="mt-1 text-[14px] text-black">
                                        I agreed to receive newsletter’s, promotions to my e-mail
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-2 lg:col-span-2 lg:flex lg:items-end">
                                <form className="w-full">
                                    <label htmlFor="UserEmail"></label>
                                    <div
                                        className="border border-[#DDDCDC] bg-white rounded-xl flex items-center sm:gap-4"
                                    >
                                        <input
                                            type="email"
                                            id="UserEmail"
                                            placeholder="Email ID"
                                            className="w-full text-sm px-3 py-2 rounded-xl"
                                        />

                                        <button
                                            className=" w-2/4 bg-[#FC4055] cursor-pointer rounded-br-xl rounded-tr-xl px-6 py-2 text-[14px] text-white transition-none sm:mt-0"
                                        >
                                            Ready
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0 pointer-events-none">
                    <img
                        className="relative w-[45rem] -mt-20 ml-4 lg:ml-[2.85rem] lg:mt-0 h-full lg:h-[56.5rem]"
                        src={bgContact}
                        alt=""
                    />
                </div>
            </div>

        </>
    )
}

export default ContactDetails