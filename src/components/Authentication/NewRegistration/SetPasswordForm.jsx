import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { setNewPassword } from "../../../api";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useContext } from "react";
import { registrationContext } from "../../../context/formContext";

const SetPasswordForm = () => {

    const navigate = useNavigate()
    const { page, setPage } = useContext(registrationContext)

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordTyped, setIsPasswordTyped] = useState(false);
    const [isOpen, setIsOpen] = useState("");

    const encryptedPhoneNumber = localStorage.getItem("$target*")

    const handleTogglePassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword);
    };

    const updatePassword = async () => {

        if (password === '') {
            toast.error("Enter password")
        }

        else if (password.length < 8) {
            toast.error("Password must be at least 8 characters")
        }

        else if (confirmPassword === '') {
            toast.error("Enter confirmPassword")
        }

        else if (password != confirmPassword) {
            toast.error("Passwords do not match. Please try again")
        }

        else {
            await setNewPassword(password, encryptedPhoneNumber)
                .then((result) => {
                    localStorage.removeItem('$target*')
                    localStorage.setItem("signupStatus", result?.data?.signupStatus)
                    navigate('/home')
                })
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="px-4 mt-5 flex">
                <button type="button" onClick={() => setPage(page - 1)}>
                    <KeyboardBackspaceOutlinedIcon />
                </button>
                <div className="font-bold ml-auto">
                    7/7
                </div>
            </div>
            <div className="flex justify-center mt-10 sm:mt-20">
                <Toaster />
                <div>
                    <div className="relative right-10">
                        <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
                            <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
                        </svg>
                        <div className="absolute top-0 left-5 w-64 -ml-20">
                            <p className="text-[21px] font-semibold text-center">All Set ! <br />
                                create a password now</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <p className="text-[12px]">
                    Create a unique key to access your account further.
                </p>
            </div>
            <form className="w-72 ml-3.5 sm:ml-12" onSubmit={updatePassword}>

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
                            className="w-[295px] mx-auto rounded-2xl py-3 px-5 text-gray-900 shadow-sm border border-[#B8B8B8] placeholder:text-[#4D4D4D] placeholder:text-xs sm:text-sm sm:leading-6"
                        ></input>
                        <div className="absolute ml-64 mt-2.5 text-gray-500">
                            <button onClick={handleTogglePassword}>
                                {showPassword ? <VisibilityOutlinedIcon sx={{ height: "20px" }} /> : <VisibilityOffOutlinedIcon sx={{ height: "20px" }} />}
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
                            className="w-[295px] mx-auto rounded-2xl py-3 px-5 text-gray-900 shadow-sm border border-[#B8B8B8] placeholder:text-[#4D4D4D] placeholder:text-xs sm:text-sm sm:leading-6"
                        ></input>
                    </div>

                </div>

                <div className='flex justify-center mt-8'>
                    <button
                        type="submit"
                        onClick={() => {
                            setIsPasswordTyped(true)
                        }}
                        className="bg-[#FE1940] rounded-xl text-white py-2.5 px-32"
                    >
                        {isPasswordTyped ? (
                            <>
                                <div className="flex items-center justify-center">
                                    <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-2"></div>
                                    <div className="ml-2"> Creating Password</div>
                                </div>
                            </>
                        ) : (
                            'Finish'
                        )}
                    </button>
                </div>

                <p className="flex justify-center text-[12px] mt-10">Follow the <span onClick={() => setIsOpen("Guidelines")} className="text-[#FE1940] font-bold cursor-pointer">&nbsp;guidelines&nbsp;</span> to add photo’s</p>
            </form>

            <div className='flex justify-center mt-[250px]'>
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4635 0H5.48785C2.19514 0 0 2.19514 0 5.48785V12.0733C0 15.366 2.19514 17.5611 5.48785 17.5611V19.8989C5.48785 20.777 6.46468 21.3038 7.18908 20.8099L12.0733 17.5611H16.4635C19.7563 17.5611 21.9514 15.366 21.9514 12.0733V5.48785C21.9514 2.19514 19.7563 0 16.4635 0ZM10.9757 13.3574C10.5147 13.3574 10.1525 12.9843 10.1525 12.5343C10.1525 12.0843 10.5147 11.7111 10.9757 11.7111C11.4367 11.7111 11.7989 12.0843 11.7989 12.5343C11.7989 12.9843 11.4367 13.3574 10.9757 13.3574ZM12.3586 8.80252C11.9306 9.08789 11.7989 9.27447 11.7989 9.58179V9.81228C11.7989 10.2623 11.4257 10.6355 10.9757 10.6355C10.5257 10.6355 10.1525 10.2623 10.1525 9.81228V9.58179C10.1525 8.3086 11.0855 7.68299 11.4367 7.44152C11.8428 7.16713 11.9745 6.98054 11.9745 6.69517C11.9745 6.14639 11.5245 5.69639 10.9757 5.69639C10.4269 5.69639 9.97691 6.14639 9.97691 6.69517C9.97691 7.14518 9.60373 7.51835 9.15373 7.51835C8.70373 7.51835 8.33055 7.14518 8.33055 6.69517C8.33055 5.23541 9.51593 4.05003 10.9757 4.05003C12.4355 4.05003 13.6208 5.23541 13.6208 6.69517C13.6208 7.9464 12.6989 8.57203 12.3586 8.80252Z" fill="#3E3E3E" />
                </svg>
            </div>
            <div className='flex justify-center text-center'>
                <p className="text-[13px] text-[#4D4D4D]">
                    After logging out, these credentials will <br />
                    be your access key
                </p>
            </div>

            {isOpen === "Guidelines" ?
                <>
                    <div className='-mt-[722px] -ml-0.5 sm:block hidden'>
                        <div className='absolute w-96 py-3 rounded-xl border border-[#D8D8D8] bg-white h-[750px] mt-6'>
                            <div className="flex justify-center mt-10">
                                <div>
                                    <div className="relative right-10">
                                        <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
                                            <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
                                        </svg>
                                        <div className="absolute top-0 left-0 w-80 -ml-24">
                                            <p className="text-[21px] font-semibold text-center">Remind <br />
                                                before setting a password</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[14px] font-semibold text-center text-[#FE1940] mt-14'>
                                Length
                            </p>
                            <p className='text-[14px] text-center px-9'>
                                Aim for a minimum of 08 characters.
                            </p>
                            <p className='text-[14px] font-semibold text-center text-[#FE1940] mt-5'>
                                Complexity
                            </p>
                            <p className='text-[14px] text-center px-9'>
                                Include a mix of the following:

                                <p className="mt-3">
                                    At least one uppercase letter.
                                </p>
                                <p>
                                    At least one lowercase letter.
                                </p>
                                <p>
                                    At least one digit (0-9).
                                </p>
                                <p>
                                    At least one special character (!, @, #, $).
                                </p>
                            </p>
                            <p className='text-[14px] font-semibold text-center text-[#FE1940] mt-5'>
                                Avoid Personal Information
                            </p>
                            <p className='text-[14px] text-center px-9'>
                                Do not use easily guessable information like your name, birthdate, or common words.
                            </p>
                            <p className='text-[14px] font-semibold text-center text-[#FE1940] mt-5'>
                                Unpredictability
                            </p>
                            <p className='text-[14px] text-center px-9'>
                                Create a password that is not easily predictable. Avoid common patterns or sequences.
                            </p>
                            <p className='text-[14px] font-semibold text-center text-[#FE1940] mt-5'>
                                Avoid Dictionary Words
                            </p>
                            <p className='text-[14px] text-center px-9'>
                                Avoid using complete words found in dictionaries, as these are more susceptible to dictionary attacks.
                            </p>
                            <div className='flex justify-center mt-10'>
                                <button onClick={() => {
                                    setIsOpen("")
                                }} className='text-[14px] text-center px-[83px] py-3 rounded-2xl bg-[#D7D7D7]'>
                                    Got it !
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="sm:hidden block -mt-[730px]">
                        <div className='absolute w-80 py-3 rounded-xl border border-[#D8D8D8] bg-white h-[810px] mt-6'>
                            <div className="flex justify-center mt-10">
                                <div>
                                    <div className="relative right-10">
                                        <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
                                            <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
                                        </svg>
                                        <div className="absolute top-0 left-0 w-80 -ml-24">
                                            <p className="text-[21px] font-semibold text-center">Remind <br />
                                                before setting a password</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[14px] font-semibold text-center text-[#FE1940] mt-14'>
                                Length
                            </p>
                            <p className='text-[14px] text-center px-9'>
                                Aim for a minimum of 08 characters.
                            </p>
                            <p className='text-[14px] font-semibold text-center text-[#FE1940] mt-5'>
                                Complexity
                            </p>
                            <p className='text-[14px] text-center px-8'>
                                Include a mix of the following:

                                <p className="mt-3">
                                    At least one uppercase letter.
                                </p>
                                <p>
                                    At least one lowercase letter.
                                </p>
                                <p>
                                    At least one digit (0-9).
                                </p>
                                <p>
                                    At least one special character (!, @, #, $).
                                </p>
                            </p>
                            <p className='text-[14px] font-semibold text-center text-[#FE1940] mt-5'>
                                Avoid Personal Information
                            </p>
                            <p className='text-[14px] text-center px-9'>
                                Do not use easily guessable information like your name, birthdate, or common words.
                            </p>
                            <p className='text-[14px] font-semibold text-center text-[#FE1940] mt-5'>
                                Unpredictability
                            </p>
                            <p className='text-[14px] text-center px-9'>
                                Create a password that is not easily predictable. Avoid common patterns or sequences.
                            </p>
                            <p className='text-[14px] font-semibold text-center text-[#FE1940] mt-5'>
                                Avoid Dictionary Words
                            </p>
                            <p className='text-[14px] text-center px-9'>
                                Avoid using complete words found in dictionaries, as these are more susceptible to dictionary attacks.
                            </p>
                            <div className='flex justify-center mt-10'>
                                <button onClick={() => {
                                    setIsOpen("")
                                }} className='text-[14px] text-center px-[83px] py-3 rounded-2xl bg-[#D7D7D7]'>
                                    Got it !
                                </button>
                            </div>
                        </div>
                    </div>
                </>
                : " "}

        </>
    );
};

export default SetPasswordForm;