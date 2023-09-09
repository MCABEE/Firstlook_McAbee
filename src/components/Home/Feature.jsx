import feed from '../../assets/feed.png'
import photos from '../../assets/photos.png'
import propose from '../../assets/propose.png'
import reels from '../../assets/reels.png'
import verify from '../../assets/verify.png'
import chat from '../../assets/chatImg.png'
import { motion } from 'framer-motion'

const Feature = () => {
    return (
        <>
            <section className="sm:max-w-screen-xl px-2.5 max-w-sm mx-auto text-gray-800">
                <motion.div initial={{ y: "-10vw", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                    viewport={{ once: true, amount: 0.8 }} className="container mx-auto p-4 my-6 text-center mt-5 sm:mt-10">
                    <h2 className="text-3xl sm:text-5xl font-bold">Unique Firstlook features</h2>
                    <p className="text-gray-60 text-sm sm:text-base text-center mt-7 sm:mt-5">Get rid of the boring traditional means and find a life partner through a platform </p>
                    <p className="text-gray-600 text-sm sm:text-base text-center">Which is as easy to use as a social media application.</p>
                </motion.div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <motion.div initial={{ y: "-10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.5 } }}
                        viewport={{ once: true, amount: 0.8 }} className="flex flex-col items-center p-4">
                        <img src={feed} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Feed</h3>
                        <div className="space-y-1 text-justify">
                            <p className='text-[14px]'>Feed is a feature that brings you matching profiles that are sorted as per your interests and preferences</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ y: "-10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.6 } }}
                        viewport={{ once: true, amount: 0.8 }} className="flex flex-col items-center p-4">
                        <img src={photos} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Photos</h3>
                        <div className="space-y-1 text-justify">
                            <p className='text-[14px]'>An album with versatile photos helps create a lasting impression of a person.</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ y: "-10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.7 } }}
                        viewport={{ once: true, amount: 0.8 }} className="flex flex-col items-center p-4">
                        <img src={reels} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Reels</h3>
                        <div className="space-y-1 text-justify">
                            <p className='text-[14px]'>Video reels define and capture one’s personality and provide a feel of actually meeting someone by capturing their facial expressions and movements.</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ y: "-10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.8 } }}
                        viewport={{ once: true, amount: 0.8 }} className="flex flex-col items-center p-4 mt-4">
                        <img src={propose} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Proposals</h3>
                        <div className="space-y-1 text-justify">
                            <p className='text-[14px]'>Proposal feature lets you share your interest to someone with a single click.</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ y: "-10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.9 } }}
                        viewport={{ once: true, amount: 0.8 }} className="flex flex-col items-center p-4 mt-4">
                        <img src={chat} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Chat</h3>
                        <div className="space-y-1 text-justify">
                            <p className='text-[14px]'>Chat messenger gives you unlimited access within this network, to chat with anyone you like from anywhere in the world.</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ y: "-10vw", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 1 } }}
                        viewport={{ once: true, amount: 0.8 }} className="flex flex-col items-center p-4 mt-4">
                        <img src={verify} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Verified Data</h3>
                        <div className="space-y-1 text-justify">
                            <p className='text-[14px]'>We efficiently filter out fake and duplicate accounts using automated activity check and governmental ID verification.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Feature