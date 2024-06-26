import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Media = () => {
    return (
        <>
            <div className="max-w-screen-xl lg:px-6 mx-auto sm:mt-16 sm:mb-16">
                <div className="container m-auto">

                    <div className="md:flex justify-between items-center">

                        <div className="lg:w-6/12 lg:p-0 p-7">
                            <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                                viewport={{ once: true, amount: 0.8 }} className="sm:pt-6 pb-4 space-y-2">
                                <h1 className="text-4xl sm:text-5xl font-bold text-[#3A3737] font-oxygen">What Media Say</h1>
                                <h1 className="text-4xl sm:text-5xl font-bold text-[#3A3737] font-oxygen">About Us !</h1>
                                <p className="text-base text-[#545454] pt-6">Learn about the latest updates,<br />
                                    And news about Firstlook
                                </p>
                            </motion.div>
                            <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.8 } }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="md:w-6/12 order-2 xl:ml-20 sm:hidden block sm:pt-0 pt-8">
                                <img src='https://imagetolink.com/ib/8O0J0CzsRX.png' alt="" />
                            </motion.div>

                            <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.6 } }}
                                viewport={{ once: true, amount: 0.8 }} className="pt-10 sm:pt-20 space-y-2 flex justify-center sm:justify-normal">
                                <Link to='/pageunderconstruction' className="inline-flex items-center py-3 px-14 sm:py-4 space-x-2 border border-[#DDDCDC] text-[16px] sm:px-14 rounded-lg">
                                    Get Media Kit
                                </Link>
                            </motion.div>
                        </div>
                        <motion.div initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.8 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="md:w-6/12 order-2 xl:ml-20 sm:block hidden">
                            <img src='https://imagetolink.com/ib/8O0J0CzsRX.png' alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Media