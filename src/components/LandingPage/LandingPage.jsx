import logo from '../../assets/FirstlookIcon.png'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import firstLook from '../../assets/firstLook.png'
import { Link, useNavigate } from "react-router-dom"
import { getUserDetails } from '../../api'
import { setUserData } from '../../Redux/Reducer/getUserData'

const LandingPage = () => {
    const userData = useSelector((state) => state.getUserFilledData.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getUserDetail = async () => {
        await getUserDetails().then((result) => {
            dispatch(setUserData(result?.data?.userData))
        })
    }

    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.clear();
        navigate("/")
        window.location.reload()
    }

    useEffect(() => {
        getUserDetail()
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="bg-white pt-4 pb-4 px-2 sm:px-6 border-2 shadow-sm rounded-2xl w-11/12 mx-auto mt-5">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <Link to="/" className="">
                                <span className="sr-only">Your Company</span>
                                <img className="sm:h-10 h-8" src={firstLook} alt="Alt" />
                            </Link>
                        </div>
                        { token && <div className="lg:flex lg:min-w-0 lg:flex-1 mr-5 sm:mr-0 lg:justify-end">
                            <Link
                                onClick={logout}
                                className="inline-block rounded-lg px-6 py-1.5 text-sm font-semibold leading-6 bg-[#FC3657] shadow-sm text-white transform transition hover:scale-95 duration-300 ease-in-out"
                            >
                                Logout
                            </Link>
                        </div> }
                    </nav>
                </div>
            </div>
            <div className="flex justify-center items-center mb-10">
                <div className="w-full sm:h-[50rem] max-w-xs sm:max-w-sm bg-white sm:bg-[#F2F2F2] sm:rounded-2xl sm:shadow-md mt-10">
                    <p className="font-oxygen font-bold flex justify-center sm:mt-16 text-[1rem]">
                        Welcome
                    </p>
                    <img src={logo} alt="" className="mt-10 h-28 mx-auto" />
                    <div className="font-oxygen font-medium mt-10 text-justify w-3/4 mx-auto">
                        <p>
                            FIRSTLOOK
                        </p>
                        <p className="mt-4 text-[1.5rem]">
                            Welcomes you
                        </p>
                        <p className="font-bold text-[1.5rem] text-start">
                            {userData?.gender === 'Male' ? `Mr. ${userData?.firstName} ${userData?.lastName}` : `Mrs. ${userData?.firstName} ${userData?.lastName}`}
                        </p>
                        <p className="mt-4 font-medium">
                            Your profile has been registered with us.
                            Install App to access your profile.
                        </p>

                        <Link to='https://play.google.com/store/apps/details?id=com.firstlookmatrimony.first_look&hl=en-IN'>
                            <button type="button" className="flex items-center justify-center w-full mx-auto md:mx-0 sm:h-[60px] border border-neutral-400 mt-8 text-black bg-white rounded-xl h-14 transform transition hover:scale-95 duration-300 ease-in-out">
                                <div className="mr-3">
                                    <svg viewBox="30 336.7 120.9 129.2" width="30">
                                        <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z">
                                        </path>
                                        <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z">
                                        </path>
                                        <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z">
                                        </path>
                                        <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z">
                                        </path>
                                    </svg>
                                </div>
                                <div>

                                    <div className="-mt-1 font-sans text-xl font-semibold">
                                        Google Play
                                    </div>
                                </div>
                            </button>
                        </Link>

                        <Link to='/pageunderconstruction'>
                            <button type="button" className="flex items-center justify-center w-full  mx-auto md:mx-0 border border-neutral-400 sm:h-[60px] mt-8 text-black bg-white h-14 rounded-xl transform transition hover:scale-95 duration-300 ease-in-out">
                                <div className="mr-3 -mt-1">
                                    <svg viewBox="0 0 384 512" width="30">
                                        <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <div className="-mt-1 font-sans text-xl font-semibold">
                                        App Store
                                    </div>
                                </div>
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage