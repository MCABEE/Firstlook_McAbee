import firstLook from '../../assets/firstLook.png'
import mcabee from '../../assets/mcblogo.png'
import { Link } from 'react-router-dom'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useState } from 'react';
import { regions } from '../../lib/constants';

const Footer = () => {

    const [country, setCountry] = useState("")
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <footer aria-label="Site Footer" className="bg-white">
                <div

                    className="mx-auto w-10/12 px-4 sm:py-6 mt-10 sm:px-6 lg:px-10">

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
                        <div className="text-center sm:text-left">
                            <p className="text-[21px] lg:mt-20 font-oxygen font-bold text-gray-900">Region</p>

                            <nav aria-label="Footer About Nav" className="mt-8 sm:mt-16 lg:mt-6">

                                <div className="sm:mb-6 mb-2 sm:mt-4 mt-6 flex">
                                    <div
                                        className="w-full h-10 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                                        onClick={() => handleDropdown()}
                                        onBlur={() => setIsOpen(false)}
                                    >
                                        <p className="w-44 mt-2 truncate text-sm">{country ? country : "Region"}</p>
                                    </div>
                                    <div className="-ml-8 mt-1.5 text-[#B8B8B8] pointer-events-none">
                                        <KeyboardArrowDownRoundedIcon />
                                    </div>
                                    {isOpen ? (
                                        <ul className="absolute z-10 lg:w-[14%] sm:w-[37.5%] w-[75%] mt-12 h-40 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg">
                                            <>
                                                {regions.map((region) => (
                                                    <>
                                                        <li
                                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                                                            onClick={() => {
                                                                setCountry(region?.name)
                                                                localStorage.setItem("region", region?.name)
                                                                setIsOpen("")
                                                                window.scrollTo(0, 0)
                                                            }}
                                                        >
                                                            <p className="mr-2" >{region?.name}</p>
                                                        </li>
                                                    </>
                                                ))}
                                            </>
                                        </ul>
                                    ) : " "}
                                </div>
                            </nav>
                        </div>

                        <div className="text-center lg:ml-auto sm:text-left">
                            <p className="text-base font-oxygen font-extrabold text-gray-900">Helpful Links</p>

                            <nav aria-label="Footer Services Nav" className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            to="/membershippolicy"
                                        >
                                            Membership Policy
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            to="/termsofuse"
                                        >
                                            Terms of Use
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            to="/privacypolicy"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            to="/refundpolicy"
                                        >
                                            Refund Policy
                                        </Link>
                                    </li>

                                </ul>
                            </nav>
                        </div>

                        <div className="text-center lg:ml-24 sm:text-left lg:text-start">
                            <p className="text-lg font-medium text-white">.</p>

                            <nav aria-label="Footer Resources Nav" className="-mt-10 sm:mt-8">
                                <ul className="space-y-4 text-sm">

                                    <li>
                                        <Link
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            to="/allnews"
                                        >
                                            News
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            to="/helpcenter"
                                        >
                                            Help Centre
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            to="/firstlookFeatures"
                                        >
                                            Features
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            to="/pricing"
                                        >
                                            Pricing
                                        </Link>
                                    </li>

                                </ul>
                            </nav>
                        </div>

                        <div className="text-center lg:ml-auto sm:text-left lg:text-start">
                            <p className="text-base font-oxygen font-extrabold text-gray-900 mt-5 sm:mt-0">Connect Us</p>

                            <nav aria-label="Footer Helpful Nav" className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <span className="text-gray-500 transition">
                                            Support ( Toll Free - India )
                                        </span>
                                    </li>

                                    <li>
                                        <span className="text-rose-600">
                                            1800 270 1431
                                        </span>
                                    </li>

                                    <li>
                                        <span
                                            className="text-gray-500 transition"
                                        >
                                            Write to us
                                        </span>
                                    </li>

                                    <li>
                                        <span className="text-rose-600">
                                            support@firstlook.pro
                                        </span>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div className="text-center lg:ml-auto sm:text-start">
                            <p className="text-lg font-medium text-white">.</p>

                            <nav aria-label="Footer Resources Nav" className="-mt-10 sm:mt-8">
                                <ul className="space-y-4 text-sm">

                                    <li>
                                        <Link
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            to="/mediaCentre"
                                        >
                                            Media Centre
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            to="/about"
                                        >
                                            About Us
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            to="/contact"
                                        >
                                            Contact
                                        </Link>
                                    </li>

                                    <ul className="flex justify-center gap-4 md:justify-start lg:justify-start">
                                        <li>
                                            <Link
                                                to="https://www.facebook.com/firstlookappofficial"
                                                rel="noreferrer"
                                                target="_blank"
                                                className="text-rose-600 transition hover:text-rose-600/75"
                                            >
                                                <span className="sr-only">Facebook</span>
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to="https://instagram.com/firstlook_app"
                                                rel="noreferrer"
                                                target="_blank"
                                                className="text-rose-600 transition hover:text-rose-600/75"
                                            >
                                                <span className="sr-only">Instagram</span>
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to="https://twitter.com/firstlook_app"
                                                rel="noreferrer"
                                                target="_blank"
                                                className="text-rose-600 transition hover:text-rose-600/75"
                                            >
                                                <span className="sr-only">Twitter</span>
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                                    />
                                                </svg>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to="https://www.youtube.com/@firstlook_app"
                                                rel="noreferrer"
                                                target="_blank"
                                                className="text-rose-600 transition hover:text-rose-600/75"
                                            >
                                                <span className="sr-only">Youtube</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
                                                    <path d="M18.8697 0.581543H6.60892C2.93068 0.581543 0.478516 3.0337 0.478516 6.71195V14.0684C0.478516 17.7467 2.93068 20.1988 6.60892 20.1988H18.8697C22.548 20.1988 25.0001 17.7467 25.0001 14.0684V6.71195C25.0001 3.0337 22.548 0.581543 18.8697 0.581543ZM15.0566 11.653L12.0282 13.4676C10.8021 14.2033 9.7967 13.6393 9.7967 12.2048V8.56333C9.7967 7.12883 10.8021 6.56483 12.0282 7.30048L15.0566 9.11506C16.2214 9.82619 16.2214 10.9542 15.0566 11.653Z" fill="#FC3657" />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>

                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div>


                        <div>
                            <p className='text-gray-700 sm:mt-20 mt-14 font-thin text-center'>
                                Firstlook is a social network app that connects bachelors from all around the world and
                                solely intended to be used by unmarried users with a plan to get married soon. This is a
                                freemium application. Before using this website or mobile application, you must read and agree with our
                                <Link to='/membershippolicy' className='text-rose-600 font-normal'> Membership Policy</Link>,
                                <Link to='/termsofuse' className='text-rose-600 font-normal'> Terms of Use</Link>,
                                <Link to='/privacypolicy' className='text-rose-600 font-normal'> Privacy Policy</Link> and
                                <Link to='/refundpolicy' className='text-rose-600 font-normal'> Refund and Cancellation Policy.</Link> Please visit
                                <Link to='/about' className='text-rose-600 font-normal'> About </Link> page to know more about the ownership and management of Firstlook.
                            </p>
                        </div>

                        <div className="mt-10 sm:flex sm:justify-between">
                            <div className="flex justify-center sm:justify-start sm:-ml-4">
                                <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                                    <img src={firstLook} className='h-10' alt="" />
                                </Link>
                            </div>

                            <p className='text-center text-gray-500 flex mt-6 sm:mt-2 justify-center items-center'>
                                from &nbsp;
                                <Link to='https://mcabee.in/'>
                                    <img src={mcabee} className='h-6 w-20' alt="" />
                                </Link>
                            </p>

                            <p className="mt-6 mb-10 sm:mb-0 text-center text-sm text-gray-500 sm:mt-3 sm:text-right">
                                Copyright 2023 &copy; <span className='font-semibold text-black'>FIRSTLOOK</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer