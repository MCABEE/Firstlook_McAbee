import React from 'react'
import { Link } from 'react-router-dom'
import firstLook from '../../assets/firstLook.png'

const Navbar = () => {
    return (
        <>
            <div className="relative z-10 bg-white px-6 pt-4 pb-4 lg:px-8 border-0 shadow-2xl rounded-lg w-11/12 mx-auto mt-5">
                {/* <Toaster/> */}
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-10" src={firstLook} alt="Alt" />
                            </a>
                        </div>
                        {/* <div className="flex">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div> */}
                        {/* <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                            <Link to="/" className="font-semibold text-gray-800 hover:text-gray-600">
                                Home
                            </Link>
                            <Link to="/allGigs" className="font-semibold text-gray-800 hover:text-gray-600">
                                Marketplace
                            </Link>
                            <Link to="/chat" className="font-semibold text-gray-800 hover:text-gray-600">
                                Message
                            </Link>
                            <Link to="/profile" className="font-semibold text-gray-800 hover:text-gray-600">
                                Profile
                            </Link>
                        </div> */}

                        <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                         
                                
                      
                                <Link
                                    to='/login'
                                    className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 bg-gradient-to-b from-orange-500 to-rose-600 shadow-sm text-white transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    Join Now
                                </Link>
                     
                        </div>
                    </nav>
                    {/* <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6">
                            <div className="flex h-9 items-center justify-between">
                                <div className="flex">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            className="h-8"
                                            src={logo}
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="flex">
                                    <button
                                        type="button"
                                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <Link to="/" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                            Home
                                        </Link>
                                        <Link to="/allGigs" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                            Marketplace
                                        </Link>
                                        <Link to="/chat" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                            Message
                                        </Link>
                                        <Link to="/profile" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                                            Profile
                                        </Link>
                                    </div>
                                    <div className="py-6">
                                        {token &&
                                            <Link
                                                to='/login'
                                                onClick={logout}
                                                className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                                            >
                                                Logout
                                            </Link>}
                                        {!token &&
                                            <Link
                                                to='/login'
                                                className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                                            >
                                                Login
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog> */}
                </div>
            </div>
        </>
    )
}

export default Navbar