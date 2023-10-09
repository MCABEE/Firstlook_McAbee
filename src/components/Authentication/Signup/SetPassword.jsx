import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import firstLook from '../../../assets/firstLook.png'
import { Toaster } from "react-hot-toast";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { setNewPassword } from "../../../api";

const SetPassword = () => {

    const navigate = useNavigate()

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordTyped, setIsPasswordTyped] = useState(false);

    const encryptedPhoneNumber = localStorage.getItem("$target*")

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const updatePassword = async () => {

        await setNewPassword(password, encryptedPhoneNumber)
            .then(() => {
                localStorage.removeItem('$target*')
                navigate('/register/signupOption')
            })

    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="sm:block hidden bg-white pt-4 pb-4 sm:px-6 border-2 shadow-sm rounded-2xl w-11/12 mx-auto mt-5">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <Link to="/" className="">
                                <span className="sr-only">Your Company</span>
                                <img className="h-10" src={firstLook} alt="Alt" />
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="flex justify-center items-center sm:mb-10 mt-2 sm:mt-10">
                <Toaster toastOptions={{ duration: 4000 }} />

                <div className="w-full h-screen sm:h-[45rem] sm:max-w-sm sm:bg-[#F2F2F2] sm:rounded-2xl sm:shadow-md -mt-2">
                    <div className="sm:hidden block bg-white pt-4 pb-4 sm:px-6 border-2 shadow-sm rounded-2xl w-11/12 mx-auto mt-5">
                        <div>
                            <nav className="flex h-9 items-center justify-between" aria-label="Global">
                                <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                                    <Link to="/" className="">
                                        <span className="sr-only">Your Company</span>
                                        <img className="h-10" src={firstLook} alt="Alt" />
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>


                    <p className='font-oxygen font-bold text-center text-2xl mt-16'>
                        Registration
                    </p>

                    <p className='ml-10 mt-16 font-medium'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.0132 15.1224C18.51 15.1224 18.9132 14.7192 18.9132 14.2224V12C18.9132 11.5032 18.51 11.1 18.0132 11.1H11.1828C10.794 9.81962 9.61563 8.87878 8.20918 8.87878C6.48839 8.87878 5.08799 10.2792 5.08799 12C5.08799 13.722 6.48839 15.1224 8.20918 15.1224C9.61563 15.1224 10.794 14.1816 11.1828 12.9H13.7172V14.2224C13.7172 14.7192 14.1204 15.1224 14.6172 15.1224C15.114 15.1224 15.5172 14.7192 15.5172 14.2224V12.9H17.1132V14.2224C17.1132 14.7192 17.5164 15.1224 18.0132 15.1224ZM6.79919 0H17.202C21.2676 0 24 2.85359 24 7.10039V16.9008C24 21.1476 21.2676 24 17.2008 24H6.79919C2.73239 24 0 21.1476 0 16.9008V7.10039C0 2.85359 2.73239 0 6.79919 0ZM6.88691 12.0011C6.88691 11.2715 7.48091 10.6787 8.2093 10.6787C8.9377 10.6787 9.5317 11.2715 9.5317 12.0011C9.5317 12.7295 8.9377 13.3223 8.2093 13.3223C7.48091 13.3223 6.88691 12.7295 6.88691 12.0011Z" fill="#FE1940" />
                        </svg>
                    </p>

                    <p className='ml-10 mt-3 font-medium text-[20px]'>
                        Create Password
                    </p>

                    <p className='ml-10 mt-3 font-normal text-sm'>
                        Use your mobile number <span className="font-semibold">984xxxx070</span> <br />
                        as username. Create a password now.
                    </p>

                    <div className="grid justify-center mt-7 rounded-2xl mx-10">

                        <div className="flex relative mt-5">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="first-name"
                                id="first-name"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                autoComplete="given-name"
                                className=" w-80 rounded-xl py-3 px-5 text-gray-900 shadow-sm border border-[#B8B8B8] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            ></input>
                            <div className="absolute ml-72 mt-2.5 text-gray-500">
                                <button onClick={handleTogglePassword}>
                                    {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                </button>
                            </div>
                        </div>
                        <div className="flex relative mt-5">
                            <input
                                type='text'
                                name="first-name"
                                id="first-name"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                                autoComplete="given-name"
                                className=" w-80 rounded-xl py-3 px-5 text-gray-900 shadow-sm border border-[#B8B8B8] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            ></input>
                        </div>

                    </div>

                    <div
                        onClick={() => {
                            updatePassword()
                            setIsPasswordTyped(true)
                        }} className={ isPasswordTyped ? 'pointer-events-none bg-red-500 w-80 p-3 rounded-xl mt-8 mb-20 mx-auto text-center cursor-pointer text-white px-20' : 'bg-red-500 w-80 p-3 rounded-xl mt-8 mb-20 mx-auto text-center cursor-pointer text-white px-20' }>

                        {isPasswordTyped ? (
                            <>
                                <div className="flex items-center justify-center">
                                    <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-2"></div>
                                    <div className="ml-2"> Creating Password</div>
                                </div>
                            </>
                        ) : (
                            'Create Password'
                        )}

                    </div>

                </div>
            </div>
        </>
    );
};

export default SetPassword;