import { motion } from 'framer-motion'
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Pricing = () => {
    return (
        <>
            <div className="relative w-full h-full mt-10 sm:mt-0">
                <div className="absolute hidden w-full lg:block h-96" />
                <div className="relative px-4 sm:px-4 sm:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <motion.h2
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="max-w-lg mb-6 font-sans text-[30px] text-center font-bold leading-none tracking-tight text-gray-900 sm:text-[42px] md:mx-auto">
                            <span className="relative inline-block">
                                <span className="relative text-[#FC3657]">Affordable</span>
                            </span>{' '}
                            for Everyone
                        </motion.h2>
                        <motion.p
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="text-gray-700 text-[13px] sm:text-[15px] text-center">
                            We want you to support our effort’s to bring you the best features. Here are the most affordable prices you can’t turn down. Choose the one that suit’s you and confirm your participation.
                        </motion.p>
                    </div>
                    <div className="grid gap-10 lg:grid-cols-3 mt-10 sm:mt-20 sm:mx-auto">
                        <motion.div
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <div className="w-full h-12 bg-[#8B8F86] rounded-t-xl flex">
                                <p className="text-[22px] h-full flex justify-start ml-8 items-center font-oxygen font-semibold text-white">
                                    Basic
                                </p>
                                <p className="text-[22px] h-full flex items-center ml-auto mr-8 font-oxygen font-semibold text-white line-through">
                                    3599.00
                                </p>
                            </div>
                            <div className="p-8 bg-white shadow-gray-400 shadow-md rounded-b-xl border-2 border-gray-300">
                                <div className="text-start">
                                    <p className='font-bold text-[#747474] mt-2 mb-1'>
                                        LAUNCHING OFFER
                                    </p>
                                    <div className="flex items-start justify-start">
                                        <p className="mr-2 text-[30px] sm:text-[36px] font-bold text-black">
                                            ₹1490<span className='text-[14px]'>.00</span>
                                        </p>
                                        <p className="text-[14px] text-[#585858] font-semibold mt-4 sm:mt-6"> &nbsp;Annually</p>
                                    </div>
                                    <hr className='w-full mt-2 bg-black' />
                                </div>
                                <ul className="mb-8 mt-8 space-y-4">
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <SensorOccupiedOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">24 Connection’s</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <UpdateOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">One year validity</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <ChatOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">Chat with connection’s</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <FavoriteBorderOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">Unlimited favorites, proposals</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <AddOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">And many more</p>
                                    </li>
                                </ul>
                                <button
                                    type="submit"
                                    className="inline-flex mt-4 items-center bg-[#FC3657] justify-center w-full h-10 px-6 font-normal tracking-wide text-white rounded-xl shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    Purchase
                                </button>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full h-10 px-6 font-normal tracking-wide text-gray-500 mt-5 underline transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    more details
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <div className="w-full h-12 bg-[#8B8F86] rounded-t-xl flex">
                                <p className="text-[22px] h-full flex justify-start ml-8 items-center font-oxygen font-semibold text-white">
                                    Pro
                                </p>
                                <p className="text-[22px] h-full flex items-center ml-auto mr-8 font-oxygen font-semibold text-white line-through">
                                    5999.00
                                </p>
                            </div>
                            <div className="p-8 bg-white shadow-gray-400 shadow-md rounded-b-xl border-2 border-gray-300">
                                <div className="text-start">
                                    <p className='font-bold text-[#747474] mt-2 mb-1'>
                                        LAUNCHING OFFER
                                    </p>
                                    <div className="flex items-start justify-start">
                                        <p className="mr-2 text-[30px] sm:text-[36px] font-bold text-black">
                                            ₹2980<span className='text-[14px]'>.00</span>
                                        </p>
                                        <p className="text-[14px] text-[#585858] font-semibold mt-4 sm:mt-6"> &nbsp;Annually</p>
                                    </div>
                                    <hr className='w-full mt-2 bg-black' />
                                </div>
                                <ul className="mb-8 mt-8 space-y-4">
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <SensorOccupiedOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">Unlimited Connections</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <UpdateOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">One year validity</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <ChatOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">Chat with connection’s</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <FavoriteBorderOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">Unlimited favorites, proposals</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <AddOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">And many more</p>
                                    </li>
                                </ul>
                                <button
                                    type="submit"
                                    className="inline-flex mt-4 items-center bg-[#FC3657] justify-center w-full h-10 px-6 font-normal tracking-wide text-white rounded-xl shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    Purchase
                                </button>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full h-10 px-6 font-normal tracking-wide text-gray-500 mt-5 underline transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    more details
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <div className="w-full h-12 bg-[#8B8F86] rounded-t-xl flex">
                                <p className="text-[22px] h-full flex justify-start ml-8 items-center font-oxygen font-semibold text-white">
                                    Top Up
                                </p>
                                <p className="text-[22px] h-full flex items-center ml-auto mr-8 font-oxygen font-semibold text-white line-through">
                                    299.00
                                </p>
                            </div>
                            <div className="p-8 bg-white shadow-gray-400 shadow-md rounded-b-xl border-2 border-gray-300">
                                <p className='font-bold text-[#747474] mt-2 mb-1'>
                                    LAUNCHING OFFER
                                </p>
                                <div className="text-start">
                                    <div className="flex items-start justify-start">
                                        <p className="mr-2 text-[30px] sm:text-[36px] font-bold text-black">
                                            ₹149<span className='text-[14px]'>.00</span>
                                        </p>
                                        <p className="text-[14px] text-[#585858] font-semibold mt-4 sm:mt-6"> &nbsp;Per Connection</p>
                                    </div>
                                    <hr className='w-full mt-2 bg-black' />
                                </div>
                                <ul className="mb-8 mt-8 space-y-4">
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <SensorOccupiedOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">01 Connection</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <UpdateOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">Validity as per Basic Plan</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <ChatOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">Chat with connection’s</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <FavoriteBorderOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">Unlimited favorites, proposals</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-3 text-[#747474]">
                                            <AddOutlinedIcon />
                                        </div>
                                        <p className="font-medium text-[#585858]">And many more</p>
                                    </li>
                                </ul>
                                <button
                                    type="submit"
                                    className="inline-flex mt-4 items-center bg-[#8B8F86] justify-center w-full h-10 px-6 font-normal tracking-wide text-white rounded-xl shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    Add on
                                </button>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full h-10 px-6 font-normal tracking-wide text-gray-500 mt-5 underline transform transition hover:scale-95 duration-300 ease-in-out"
                                >
                                    more details
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Pricing