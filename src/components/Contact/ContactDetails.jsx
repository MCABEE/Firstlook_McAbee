import React from 'react'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import CenterFocusWeakOutlinedIcon from '@mui/icons-material/CenterFocusWeakOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';

const ContactDetails = () => {
    return (
        <>

            <div className='grid grid-cols-12'>
                <div class="relative group col-span-12 xl:col-span-6 mx-auto">
                    <div class="absolute -inset-1 bg-gradient-to-b from-orange-500 to-rose-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                        <PublicOutlinedIcon sx={{ color: "red" }} />
                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-gray-900">Public User's</p>

                            <nav aria-label="Footer Services Nav" class="mt-8">
                                <ul class="space-y-4 text-sm">
                                    <li>
                                        <p
                                            class="text-gray-700 transition hover:text-gray-700/75"

                                        >
                                            For any assistance regarding profile registration, payment and technical glitches,<br /> please contact us using any of the following methods.
                                        </p>
                                    </li>

                                    <li>
                                        <a
                                            class="text-gray-700 transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            Customer Care ( All India ) <br /> <span className='text-rose-600'>1800 270 1431</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-gray-700 transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            Service Helpline <br /> <span className='text-rose-600'>+91 9072209444</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-gray-700 transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            Email <br /> <span className='text-rose-600'>support@firstlook.pro</span>
                                        </a>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="relative group col-span-12 xl:col-span-6 mt-10 mx-auto">
                    <div class="absolute -inset-1 bg-gradient-to-b from-orange-500 to-rose-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                        <BusinessOutlinedIcon sx={{ color: "red" }} />
                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-gray-900">Business</p>

                            <nav aria-label="Footer Services Nav" class="mt-8">
                                <ul class="space-y-10 text-sm">
                                    <li>
                                        <p
                                            class="text-gray-700 transition hover:text-gray-700/75"

                                        >
                                            Any kind of business related enquiries, general informations about company,<br /> products and services, please contact us.
                                        </p>
                                    </li>

                                    <li>
                                        <a
                                            class="text-gray-700 transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            Corp. Office<br /> <span className='text-rose-600'>+91 9946250333</span> <span className='text-rose-600 ml-4'>+91 9946280333</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-gray-700 transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            Email <br /> <span className='text-rose-600'>official@firstlook.pro</span>
                                        </a>
                                    </li>

                                    {/* <li>
                                        <a
                                            class="text-gray-700 transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            Find us on <br /> <span className='text-rose-600'><FacebookOutlinedIcon/></span> <span className='text-rose-600'><CenterFocusWeakOutlinedIcon/></span> <span className='text-rose-600'> <SmartDisplayOutlinedIcon/></span>
                                        </a>
                                    </li> */}

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12'>
                <div class="relative group col-span-12 xl:col-span-6 mx-auto mt-10">
                    <div class="absolute -inset-1 bg-gradient-to-b from-orange-500 to-rose-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                        <ApartmentOutlinedIcon sx={{ color: "red" }} />
                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-gray-900">Corporate Office</p>

                            <nav aria-label="Footer Services Nav" class="mt-8">
                                <ul class="space-y-5 text-sm">

                                    <li>
                                        <a
                                            class="text-gray-700 transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            715 A, 7th Floor 
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-gray-700 transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            Spencer Plaza, Mount Road
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-gray-700 transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            Anna Salai
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-gray-700 transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            Chennai - 600 002
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-gray-700 font-semibold transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            Also at : <br /> <span className='font-normal'>Kochi . bangalore . Coimbatore . Hyderabad . Mumbai . Delhi . Kolkata . Jaipur</span>
                                        </a>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="relative group col-span-12 xl:col-span-6 mx-auto mt-10">
                    <div class="absolute -inset-1 bg-gradient-to-b from-orange-500 to-rose-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                        <FacebookOutlinedIcon sx={{ color: "red" }} />
                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-gray-900">Firstlook</p>

                            <nav aria-label="Footer Services Nav" class="mt-8">
                                <ul class="space-y-4 text-sm">
                                    <li>
                                        <p
                                            class="text-gray-700 transition hover:text-gray-700/75"

                                        >
                                            A brief about our company and service policy's
                                        </p>
                                    </li>

                                    <li>
                                        <a
                                            class="text-gray-700 transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            Firstlook.pro website and it's mobile application 'Firstlook' is strictly a social network <br /> to find life partners. 
                                            It's not any kind of dating site. We engage persons those who are <br /> legally eligible for marriage under the law of Govt. of India. 
                                            A valid mobile number, Govt. <br /> authorized identity proof, own photographs are mandatory for joining in this application, <br /> Please read our Terms of use, Membership Policy before signup.
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-gray-700 transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            Click below to know more about us
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-gray-700 transition hover:text-gray-700/75"
                                            href="/"
                                        >
                                            Learn More
                                        </a>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactDetails