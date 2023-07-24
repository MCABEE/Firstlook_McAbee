import feed from '../../assets/feed.png'
import photos from '../../assets/photos.png'
import propose from '../../assets/propose.png'
import reels from '../../assets/reels.png'
import verify from '../../assets/verify.png'
import chat from '../../assets/chatImg.png'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const Feature = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className="sm:max-w-screen-xl px-2.5 max-w-sm mx-auto text-gray-800">
                <motion.div initial={{ y: "-10vw", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                    viewport={{ once: true, amount: 0.8 }} className="container mx-auto p-4 my-6 text-center mt-5 sm:mt-10">
                    <h2 className="text-3xl sm:text-5xl font-bold">Highlights of Firstlook</h2>
                    <p className="text-gray-60 text-sm sm:text-base text-center mt-7 sm:mt-5">Find a partner here as easy as using a social app, bypassing the traditional formalities.</p>
                    <p className="text-gray-600 text-sm sm:text-base text-center">These features will make your search & communication easy and fun. </p>
                </motion.div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <motion.div initial={{ y: "-10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.5 } }}
                        viewport={{ once: true, amount: 0.8 }} className="flex flex-col items-center p-4">
                        <img src={feed} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Feed</h3>
                        <div className="space-y-1 text-justify">
                            <p className='text-[14px]'>A feed where you get profiles of people based on your interests and what we recommend for you.</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ y: "-10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.6 } }}
                        viewport={{ once: true, amount: 0.8 }} className="flex flex-col items-center p-4">
                        <img src={photos} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Photos</h3>
                        <div className="space-y-1 text-justify">
                            <p className='text-[14px]'>Photos are mandatory and these photos will help you get interested in a profile at first glance.</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ y: "-10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.7 } }}
                        viewport={{ once: true, amount: 0.8 }} className="flex flex-col items-center p-4">
                        <img src={reels} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Reels</h3>
                        <div className="space-y-1 text-justify">
                            <p className='text-[14px]'> Expressions are communicated through a video. So we believe that a video is a better than a still photo.</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ y: "-10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.8 } }}
                        viewport={{ once: true, amount: 0.8 }} className="flex flex-col items-center p-4 mt-4">
                        <img src={propose} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Proposals</h3>
                        <div className="space-y-1 text-justify">
                            <p className='text-[14px]'>Once you find someone you are interested in, you can add them to favorites. Then you will get all their updates. </p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ y: "-10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.9 } }}
                        viewport={{ once: true, amount: 0.8 }} className="flex flex-col items-center p-4 mt-4">
                        <img src={chat} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Chat</h3>
                        <div className="space-y-1 text-justify">
                            <p className='text-[14px]'>you can talk to anyone you loved via this chat feature. Images and smileys can also be used.</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ y: "-10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 1 } }}
                        viewport={{ once: true, amount: 0.8 }} className="flex flex-col items-center p-4 mt-4">
                        <img src={verify} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Verified Data</h3>
                        <div className="space-y-1 text-justify">
                            <p className='text-[14px]'>ID verification will help us provide only genuine profiles. It never publish and your privacy assured.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Feature