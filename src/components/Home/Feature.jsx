import feed from '../../assets/feed.png'
import photos from '../../assets/photos.png'
import propose from '../../assets/propose.png'
import reels from '../../assets/reels.png'
import verify from '../../assets/verify.png'
import chat from '../../assets/chatImg.png'

const Feature = () => {
    return (
        <>
            <section className="max-w-7xl m-4 md:m-20 text-gray-800">
                <div className="container mx-auto p-4 my-6 text-center mt-20">
                    <h2 className="text-5xl font-bold">Highlights of Firstlook</h2>
                    <p className="text-gray-60  0 text-center mt-5">Find a partner here as easy as using a social app, bypassing the traditional formalities.</p>
                    <p className="text-gray-600 text-center">These features will make your search & communication easy and fun. </p>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-4">
                        <img src={feed} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Feed</h3>
                        <div className="space-y-1 text-justify w-9/12">
                            <p>A feed where you get profiles of people based on your interests and what we recommend for you.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <img src={photos} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Photos</h3>
                        <div className="space-y-1 text-justify w-9/12">
                            <p>Photos are mandatory and these photos will help you get interested in a profile at first glance.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <img src={reels} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Reels</h3>
                        <div className="space-y-1 text-justify w-9/12">
                            <p> Expressions are communicated through a video. So we believe that a video is a better than a still photo.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <img src={propose} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Proposals</h3>
                        <div className="space-y-1 text-justify w-9/12">
                            <p>Once you find someone you are interested in, you can add them to favorites. Then you will get all their updates. </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <img src={chat} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Chat</h3>
                        <div className="space-y-1 text-justify w-9/12">
                            <p>you can talk to anyone you loved via this chat feature. Images and smileys can also be used.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <img src={verify} className='h-[159px] w-[223px]' alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Verified Data</h3>
                        <div className="space-y-1 text-justify w-9/12">
                            <p>ID verification will help us provide only genuine profiles. It never publish and your privacy assured.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature