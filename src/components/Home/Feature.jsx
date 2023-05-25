import DoneIcon from '@mui/icons-material/Done';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import Mobileimage from '../../assets/Index_Model_002.png'
import { motion } from 'framer-motion'

const Feature = () => {
    return (
        <>
            <section className="relative pt-16 bg-blueGray-50">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                            <motion.div
                                initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="relative flex flex-col min-w-0 break-words w-full mb-6">
                                <img alt="..." src={Mobileimage} className="w-full align-middle rounded-t-lg" />
                                {/* <svg width="876" height="764" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#4234F8" offset="0%"/><stop stop-color="#4234F8" stop-opacity="0" offset="100%"/></linearGradient><radialGradient cx="33.3%" cy="43.394%" fx="33.3%" fy="43.394%" r="58.676%" gradientTransform="scale(.81337 1) rotate(-72.484 .371 .382)" id="c"><stop stop-color="#FF6C50" stop-opacity="0" offset="0%"/><stop stop-color="#FF6C50" stop-opacity=".64" offset="51.712%"/><stop stop-color="#FF6C50" stop-opacity=".24" offset="100%"/></radialGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#4234F8" stop-opacity=".8" offset="0%"/><stop stop-color="#4234F8" stop-opacity="0" offset="100%"/></linearGradient><filter id="a"><feTurbulence type="fractalNoise" numOctaves="2" baseFrequency=".3" result="turb"/><feComposite in="turb" operator="arithmetic" k1=".1" k2=".1" k3=".1" k4=".1" result="result1"/><feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter"/><feBlend mode="multiply" in="finalFilter" in2="SourceGraphic"/></filter></defs><g fill="none" fill-rule="evenodd" filter="url(#a)"><path d="M173.286 346.278c37.75 237.363 436.799-108.302 173.285-173.139C83.058 108.302 268.99 0 173.286 0S0 77.517 0 173.14c0 95.621 135.536-64.225 173.286 173.138z" transform="translate(217 195)" fill="url(#b)"/><path d="M251 344c94.993 0 172-77.007 172-172S345.993 0 251 0s46.934 178.387-172 172c-218.934-6.387 77.007 172 172 172z" transform="translate(19)" fill="url(#c)"/><path d="M173.286 346.278c37.75 237.363 436.799-108.302 173.285-173.139C83.058 108.302 268.99 0 173.286 0S0 77.517 0 173.14c0 95.621 135.536-64.225 173.286 173.138z" transform="matrix(-1 0 0 1 653 195)" fill="url(#d)"/><path fill="#C1C3DA" d="M640.608 179l-3.624 1.667-.984 3.53 1.158 3.36 3.45 1.443 3.249-1.639 2.143-3.165-1.62-3.674z"/><path fill-opacity=".64" fill="#FF6C50" d="M642.304 218l-1.812.833-.492 1.765.579 1.68 1.725.722 1.624-.82 1.072-1.582-.81-1.837z"/><path fill-opacity=".64" fill="#268DF7" d="M614.686 200l-2.899 1.334-.787 2.823.926 2.688 2.76 1.155 2.6-1.31 1.714-2.533-1.295-2.94z"/></g></svg> */}
                            </motion.div>
                        </div>

                        <div className="w-full md:w-8/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <motion.div
                                        initial={{ y: "-10vw", opacity: 0 }}
                                        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                                        viewport={{ once: true, amount: 0.8 }}
                                        className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#FC3657]">
                                                <DoneIcon sx={{ color: "white" }} />
                                            </div>
                                            <h6
                                                className="text-xl mb-1 font-semibold">Verified Profiles</h6>
                                            <p
                                                className="mb-4 text-blueGray-500">
                                                Only profiles with validated government ID’s will be featured here. Additionally, each profile will undergo thorough screening to ensure the accuracy of the data.
                                            </p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ y: "-10vw", opacity: 0 }}
                                        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                                        viewport={{ once: true, amount: 0.8 }}
                                        className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#FC3657]">
                                                <Diversity1OutlinedIcon sx={{ color: "white" }} />
                                            </div>
                                            <h6
                                                className="text-xl mb-1 font-semibold">
                                                Pool of Matches
                                            </h6>
                                            <p
                                                className="mb-4 text-blueGray-500">
                                                You will get a global reach, a wide range of profiles from different sectors. Accurate filters helps to pick the right one for you.
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <motion.div
                                        initial={{ y: "-10vw", opacity: 0 }}
                                        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                                        viewport={{ once: true, amount: 0.8 }}
                                        className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#FC3657]">
                                                <SecurityOutlinedIcon sx={{ color: "white" }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Data Security</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                We committed to provide maximum possible security for your data, images and videos. Our features help you to keep your data safe and secure here.
                                            </p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ y: "-10vw", opacity: 0 }}
                                        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                                        viewport={{ once: true, amount: 0.8 }}
                                        className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#FC3657]">
                                                <ShoppingCartCheckoutOutlinedIcon sx={{ color: "white" }} />
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">Budget Plans</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                This is our biggest offer to you. Our packages are the best in class, in the present industry ranges.
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="w-full md:w-full px-4">
                                    <div className='relative flex flex-col min-w-0'>
                                        <button className='bg-[#FC3657] text-white hover:bg-black w-full lg:w-36 h-10 rounded-lg md:ml-3 transform transition hover:scale-95 duration-300 ease-in-out'>Let’s Start</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature