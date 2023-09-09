import { motion } from 'framer-motion'

const BoostProfile = () => {
    return (
        <>
            <div className="max-w-screen-xl lg:px-6 mx-auto sm:mb-8">
                <div className="container m-auto">

                    <div className="md:flex justify-between items-center">

                        <div className="lg:w-6/12 lg:p-0 p-7">
                            <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.6 } }}
                                viewport={{ once: true, amount: 0.8 }} className="pt-5 sm:pt-5 space-y-2">
                                <h1 className="text-[25px] sm:text-[36px] font-bold pt-3 sm:pt-2"> <span className='text-[#FC3657]'> Limit </span> the visibility of your profile to a target Audience.</h1>
                                <p className='pt-3 text-[14px] text-justify pb-6 sm:pb-4'>Deliver your profile to a select group of people that you are interested in, and ensure
                                    that your profile will definitely be viewed by them. You can easily do this on your own;
                                    that too at an extremely low price.</p>
                                <motion.div initial={{ y: "-10vw", opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.8 } }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    className="md:w-6/12 order-2 xl:ml-20 p-7 lg:hidden block">
                                    <img src='https://imagetolink.com/ib/Vgva74d1um.png' className='sm:h-80 mx-auto' alt="" />
                                </motion.div>
                                <p className='pt-3 text-[18px] sm:text-[24px] font-bold sm:pb-4'>
                                    Stay tight. Coming Soon.
                                </p>
                            </motion.div>
                            <motion.hr initial={{ y: "-10vw", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.5 } }}
                                viewport={{ once: true, amount: 0.8 }} className='border-[#FC3657] border-[3px] sm:mt-2 mt-4 w-2/4 sm:w-1/4' />
                        </div>
                        <motion.div initial={{ y: "-10vw", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.8 } }}
                            viewport={{ once: true, amount: 0.8 }}
                            className="md:w-6/12 order-2 xl:ml-20 p-7 lg:block hidden">
                            <img src='https://imagetolink.com/ib/Vgva74d1um.png' className='sm:h-80 ml-auto' alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoostProfile