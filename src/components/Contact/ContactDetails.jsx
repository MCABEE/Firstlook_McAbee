import React from 'react'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import CenterFocusWeakOutlinedIcon from '@mui/icons-material/CenterFocusWeakOutlined'
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined'

const ContactDetails = () => {
    return (
        <>

            <section className="relative z-20 overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
                <div className="container max-w-7xl mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                                <span className="mb-2 block text-lg font-semibold text-primary">

                                </span>
                                <h2
                                    className="mb-4 text-3xl font-oxygen font-bold text-dark sm:text-4xl md:text-[60px]"
                                >
                                    Contact Firstlook
                                </h2>
                                <p className="text-base mt-44 text-body-color">

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-1/2">
                            <div
                                className="single-faq mb-8 w-full shadow-sm rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8"
                            >
                                <button
                                    className="faq-btn flex w-full text-left"

                                >
                                    <div
                                        className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                                    >
                                        <PublicOutlinedIcon sx={{ color: "red" }} />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="text-lg font-semibold font-oxygen text-black">
                                            Public User's
                                        </h4>
                                    </div>
                                </button>
                                <div x-show="openFaq1" className="faq-content pl-[62px]">
                                    <p className="py-3 text-base leading-relaxed text-body-color">
                                        <ul className="space-y-4 text-sm">
                                            <li>
                                                <p
                                                    className="text-gray-700 font-oxygen transition hover:text-gray-700/75"

                                                >
                                                    For any assistance regarding profile registration, payment and technical glitches, please contact us using any of the following methods.
                                                </p>
                                            </li>

                                            <li>
                                                <a
                                                    className="text-gray-700 font-oxygen transition font-semibold hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    Customer Care ( All India ) <br /> <span className='text-rose-600'>1800 270 1431</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="text-gray-700 font-oxygen transition font-semibold hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    Service Helpline <br /> <span className='text-rose-600'>+91 9072209444</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="text-gray-700 font-oxygen transition font-semibold hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    Email <br /> <span className='text-rose-600'>support@firstlook.pro</span>
                                                </a>
                                            </li>

                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div
                                className="single-faq mb-8 w-full rounded-lg shadow-sm border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8"
                            >
                                <button
                                    className="faq-btn flex w-full text-left"

                                >
                                    <div
                                        className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                                    >
                                        <ApartmentOutlinedIcon sx={{ color: "red" }} />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="text-lg font-semibold font-oxygen text-black">
                                            Corporate Office
                                        </h4>
                                    </div>
                                </button>
                                <div x-show="openFaq3" className="faq-content pl-[62px]">
                                    <p className="py-3 text-base leading-relaxed text-body-color">
                                        <ul className="space-y-[1.69rem] text-sm">

                                            <li>
                                                <a
                                                    className="text-gray-700 font-oxygen transition hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    715 A, 7th Floor
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="text-gray-700 font-oxygen transition hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    Spencer Plaza, Mount Road
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="text-gray-700 font-oxygen transition hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    Anna Salai
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="text-gray-700 font-oxygen transition hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    Chennai - 600 002
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="text-gray-700 font-oxygen font-semibold transition hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    Also at : <br /> <span className='font-normal'>Kochi . bangalore . Coimbatore . Hyderabad . Mumbai . Delhi . Kolkata . Jaipur</span>
                                                </a>
                                            </li>

                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <div
                                className="single-faq mb-8 w-full rounded-lg shadow-sm border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8"
                            >
                                <button
                                    className="faq-btn flex w-full text-left"

                                >
                                    <div
                                        className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                                    >
                                        <BusinessOutlinedIcon sx={{ color: "red" }} />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="text-lg font-semibold font-oxygen text-black">
                                            Business
                                        </h4>
                                    </div>
                                </button>
                                <div x-show="openFaq4" className="faq-content pl-[62px]">
                                    <p className="py-3 text-base leading-relaxed text-body-color">
                                        <ul className="space-y-[0.9rem] text-sm">
                                            <li>
                                                <p
                                                    className="text-gray-700 transition font-oxygen hover:text-gray-700/75"

                                                >
                                                    Any kind of business related enquiries, general informations about company,<br /> products and services, please contact us.
                                                </p>
                                            </li>

                                            <li>
                                                <a
                                                    className="text-gray-700 transition font-oxygen font-semibold hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    Corp. Office<br /> <span className='text-rose-600'>+91 9946250333</span> <span className='text-rose-600 ml-4'>+91 9946280333</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="text-gray-700 transition font-oxygen font-semibold hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    Email <br /> <span className='text-rose-600'>official@firstlook.pro</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="text-gray-700 transition font-semibold font-oxygen hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    Find us on <br /> <span className='text-rose-600 mt-3'><FacebookOutlinedIcon /></span> <span className='text-rose-600 ml-4'><CenterFocusWeakOutlinedIcon /></span> <span className='text-rose-600 ml-4'> <SmartDisplayOutlinedIcon /></span>
                                                </a>
                                            </li>

                                        </ul>
                                    </p>
                                </div>
                            </div>

                            <div
                                className="single-faq mb-8 w-full rounded-lg shadow-sm border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8"
                            >
                                <button
                                    className="faq-btn flex w-full text-left"

                                >
                                    <div
                                        className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                                    >
                                        <FacebookOutlinedIcon sx={{ color: "red" }} />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="text-lg font-semibold font-oxygen text-black">
                                            Firstlook
                                        </h4>
                                    </div>
                                </button>
                                <div x-show="openFaq6" className="faq-content pl-[62px]">
                                    <p className="py-3 text-base leading-relaxed text-body-color">
                                        <ul className="space-y-4 text-sm">
                                            <li>
                                                <p
                                                    className="text-gray-700 transition font-semibold text-base font-oxygen hover:text-gray-700/75"

                                                >
                                                    A brief about our company and service policy's
                                                </p>
                                            </li>

                                            <li>
                                                <a
                                                    className="text-gray-700 transition font-oxygen hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    Firstlook.pro website and it's mobile application 'Firstlook' is strictly a social network  to find life partners.
                                                    It's not any kind of dating site. We engage persons those who are  legally eligible for marriage under the law of Govt. of India.
                                                    A valid mobile number, Govt. authorized identity proof, own photographs are mandatory for joining in this application,  Please read our Terms of use, Membership Policy before signup.
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="text-gray-700 transition font-oxygen hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    Click below to know more about us
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="text-gray-700 transition font-oxygen hover:text-gray-700/75"
                                                    href="/"
                                                >
                                                    Learn More
                                                </a>
                                            </li>

                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 z-[-1]">
                    <svg
                        width="1440"
                        height="886"
                        viewBox="0 0 1440 886"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="100"
                            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                            fill="url(#paint0_linear)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear"
                                x1="1308.65"
                                y1="1142.58"
                                x2="602.827"
                                y2="-418.681"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#F60C20" stop-opacity="8.36" />
                                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>

        </>
    )
}

export default ContactDetails