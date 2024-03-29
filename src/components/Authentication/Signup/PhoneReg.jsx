import { useState, useEffect } from "react";
import axios from "axios";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { auth } from "../../../config/Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import { registerUser, sendOtpIndia } from "../../../api";
import { Link } from "react-router-dom";
import firstLook from '../../../assets/firstLook.png'
import CryptoJS from 'crypto-js';
import { useRef } from "react";

const PhoneReg = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [fetchOtp, setFetchOtp] = useState("");
    const [sendingOtp, setSendingOtp] = useState(false);
    const [verifyOtp, setVerifyOtp] = useState(false);
    const [countryState, setCountryState] = useState({
        loading: false,
        countries: [],
        errorMessage: "",
    });
    const [selectedCountry, setSelectedCountry] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [phone, setPhone] = useState("")
    const [showOTP, setShowOTP] = useState(false);
    const [search, setSearch] = useState("");

    const tempCountry = []

    const searchData = (tempProduct) => {
        return search === ""
            ? tempProduct
            : tempProduct?.name?.common?.toLowerCase().includes(search)
    };

    const navigate = useNavigate()

    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;

        if (!isNaN(value) && value.length <= 1) {

            setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);
            if (value !== "") {
                if (index < inputRefs.current.length - 1) {
                    inputRefs.current[index + 1].focus();
                }
            } else {
                if (index > 0) {
                    inputRefs.current[index - 1].focus();
                }
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "") {
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch spinner
                setCountryState({
                    ...countryState,
                    loading: true,
                });

                //  fetch data
                const dataUrl = `https://restcountries.com/v3.1/all`;
                const response = await axios.get(dataUrl);
                setCountryState({
                    ...countryState,
                    countries: response?.data,
                    loading: false,
                });
            } catch (error) {
                setCountryState({
                    ...countryState,
                    loading: false,
                    errorMessage: "Sorry Something went wrong",
                });
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // eslint-disable-next-line no-unused-vars
    const { loading, errorMessage, countries } = countryState;

    countries?.map((country) => {
        tempCountry.push(country)
    })

    const countryData = tempCountry?.filter(searchData)

    //   find selected country data
    //search selected country
    const searchSelectedCountry = countries.find((obj) => {
        if (obj?.name?.common === selectedCountry) {
            return true;
        }
        return false;
    });

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value) => {
        setSelectedCountry(value);
        setIsOpen(false);
    };

    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: () => {
                        onSignup();
                    },
                    "expired-callback": () => { },
                },
                auth
            );
        }
    }

    const onSignup = (e) => {
        e.preventDefault()

        if (selectedCountry === undefined) {
            toast.error("Select your Country code")
        }

        else if (phone === '') {
            toast.error("Enter your Phone Number")
        }

        else {

            setSendingOtp(true);

            if (`${searchSelectedCountry?.idd?.root + searchSelectedCountry?.idd?.suffixes}` === '+91') {
                sendOtpIndia(phone).then((result) => {
                    setFetchOtp(result?.data?.otp?.otp)
                    setShowOTP(true);
                    toast.success("OTP send successfully!");
                })
            }

            else {
                onCaptchVerify();
                const appVerifier = window.recaptchaVerifier;
                const number = `+${searchSelectedCountry?.idd?.root + searchSelectedCountry?.idd?.suffixes}` + phone
                signInWithPhoneNumber(auth, number, appVerifier)
                    .then((confirmationResult) => {
                        window.confirmationResult = confirmationResult;
                        setShowOTP(true);
                        toast.success("OTP send successfully!");
                    })
                    .catch((error) => {
                        toast.error(error?.message)
                    });
            }
        }

    }

    const onOTPVerify = () => {

        if (otp === '') {
            toast.error("Enter a valid OTP")
        }

        else {

            const countryCode = `+${searchSelectedCountry?.idd?.root + searchSelectedCountry?.idd?.suffixes}`
            const country = selectedCountry
            const finalOtp = otp.join("")
            setVerifyOtp(true)

            if (`${searchSelectedCountry?.idd?.root + searchSelectedCountry?.idd?.suffixes}` === '+91') {
                if (finalOtp == fetchOtp) {

                    toast.success("OTP Successfully Verified!");
                    const encryptedPhoneNumber = CryptoJS.AES.encrypt(phone, import.meta.env.VITE_CRYPTO_SECRET_KEY).toString();

                    registerUser(encryptedPhoneNumber, countryCode, country).then((result) => {

                        localStorage.setItem("userId", result?.data?.data?.user?._id)
                        localStorage.setItem("token", result?.data?.token)
                        localStorage.setItem("phone", phone)
                        localStorage.setItem("$target*", encryptedPhoneNumber)

                        const signupStatus = result?.data?.data?.user?.signupStatus

                        localStorage.setItem("signupStatus", signupStatus)

                        if (signupStatus === 'Completed') {
                            navigate('/home')
                        } else {
                            navigate('/register/signup')
                        }

                    })
                } else {
                    setVerifyOtp(false)
                    toast.error("Invalid OTP")
                }
            }

            else {
                window.confirmationResult
                    .confirm(finalOtp)
                    .then(async () => {

                        toast.success("OTP Successfully Verified!");
                        const encryptedPhoneNumber = CryptoJS.AES.encrypt(phone, import.meta.env.VITE_CRYPTO_SECRET_KEY).toString();

                        await registerUser(encryptedPhoneNumber, countryCode, country).then((result) => {

                            localStorage.setItem("userId", result?.data?.data?.user?._id)
                            localStorage.setItem("token", result?.data?.token)
                            localStorage.setItem("phone", phone)
                            localStorage.setItem("$target*", encryptedPhoneNumber)

                            const signupStatus = result?.data?.data?.user?.signupStatus

                            localStorage.setItem("signupStatus", signupStatus)

                            if (signupStatus === 'Completed') {
                                navigate('/home')
                            } else {
                                navigate('/register/signup')
                            }

                        })
                    })
                    .catch(() => {
                        setVerifyOtp(false)
                        toast.error("Invalid OTP")
                    });
            }

        }
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
                <Toaster />

                <div className="w-full h-screen sm:h-[45rem] sm:max-w-sm border-2 sm:rounded-2xl -mt-2">
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
                    {showOTP ? (
                        <>
                            <div className="flex justify-center mt-16 sm:mt-32">
                                <div>
                                    <div className="relative right-6">
                                        <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
                                            <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
                                        </svg>
                                        <div className="absolute top-0 left-4 w-44 -ml-14">
                                            <p className="text-[21px] font-semibold text-center">Enter <br />
                                                The OTP Received</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-8">
                                <p className="text-[12px]">
                                    OTP Valid only for 60 Second’s
                                </p>
                            </div>

                            <div className="mt-3 w-full">
                                <div className="mx-auto p-5">
                                    <div className="flex">
                                        {otp.map((data, index) => (
                                            <input
                                                className="otp-field rounded-lg w-10 h-10 text-center border border-gray-400 mx-auto"
                                                type="text"
                                                name="otp"
                                                maxLength="1"
                                                key={index}
                                                value={data}
                                                ref={el => (inputRefs.current[index] = el)}
                                                onChange={e => handleChange(e, index)}
                                                onKeyDown={e => handleKeyDown(e, index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="mx-auto w-[90vw] sm:w-[85%] sm:mx-7">
                                    <div
                                        onClick={onOTPVerify}
                                        className={verifyOtp ? "pointer-events-none bg-[#FE1940] w-full cursor-pointer flex gap-1 items-center justify-center py-3 text-white rounded-xl mt-5" : "bg-[#FE1940] w-full cursor-pointer flex gap-1 items-center justify-center py-3 text-white rounded-xl mt-5"}
                                    >
                                        {verifyOtp ? (
                                            <>
                                                <div className="flex items-center justify-center">
                                                    <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-2"></div>
                                                    <div className="ml-2"> Verifying OTP</div>
                                                </div>
                                            </>
                                        ) : (
                                            'Verify OTP'
                                        )}
                                    </div>
                                </div>
                                <p className="text-center text-[#4D4D4D] text-[12px] mt-8">
                                    Not received OTP? <span onClick={() => {
                                        setShowOTP(false)
                                        setSendingOtp(false)
                                    }} className="cursor-pointer text-[#FE1940] font-bold">Resend</span>
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex justify-center mt-16 sm:mt-32">
                                <div>
                                    <div className="relative right-6">
                                        <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
                                            <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
                                        </svg>
                                        <div className="absolute top-0 left-4 w-44 -ml-14">
                                            <p className="text-[21px] font-semibold text-center">Add <br />
                                                Mobile Number</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-8">
                                <p className="text-[12px]">
                                    Ensure the mobile number is active
                                </p>
                            </div>

                            <div className="grid justify-center mt-7 rounded-2xl mx-10">

                                <div className="relative w-80">
                                    {searchSelectedCountry &&
                                        <img src={
                                            searchSelectedCountry &&
                                            searchSelectedCountry?.flags?.png
                                        } alt="Image" className="absolute w-8 h-5 mt-3.5 ml-[15.3rem] pointer-events-none" />}
                                    <p className="absolute ml-48 mt-3 pointer-events-none">
                                        {searchSelectedCountry &&
                                            "" + searchSelectedCountry?.idd?.root + searchSelectedCountry?.idd?.suffixes}

                                    </p>
                                    <div className="absolute mt-2.5 ml-72 text-gray-500 pointer-events-none">
                                        <KeyboardArrowDownIcon />
                                    </div>
                                    <button
                                        type="button"
                                        className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
                                        onClick={handleToggle}
                                    >
                                        <p className="w-44 truncate text-sm">{selectedCountry ? selectedCountry : "Select Your Country"}</p>
                                    </button>
                                    {isOpen && (
                                        <>
                                            <input type="text"
                                                onChange={(e) => {
                                                    let searchValue = e.target.value.toLocaleLowerCase();
                                                    setSearch(searchValue);
                                                }}
                                                placeholder="Search Your Country" className="text-sm w-full h-12 text-left mt-1 border border-[#B8B8B8] rounded-t-xl px-6 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
                                            <ul className="absolute z-10 w-full h-64 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-b-xl shadow-lg">
                                                {countryData.map((item) => (
                                                    <li
                                                        key={item?.name?.common}
                                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                                                        onClick={() => handleOptionClick(item?.name?.common)}
                                                    >
                                                        <img src={item?.flags?.png} className="w-8 h-5 mr-2" alt="" />
                                                        <p className="mr-2">{item?.idd?.root}{item?.idd?.suffixes}</p>
                                                        <p className="truncate">{item?.name?.common}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                                <div className="relative mt-5">
                                    <input
                                        type="number"
                                        name="first-name"
                                        id="first-name"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Enter Your Number"
                                        autoComplete="given-name"
                                        className=" w-80 rounded-xl py-3 px-5 text-gray-900 shadow-sm border border-[#B8B8B8] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    ></input>
                                </div>

                            </div>

                            <div onClick={onSignup} className={sendingOtp ? 'pointer-events-none bg-[#FE1940] w-80 p-3 rounded-xl mt-8 mb-20 mx-auto text-center cursor-pointer text-white px-20' : 'bg-[#FE1940] w-80 p-3 rounded-xl mt-8 mb-20 mx-auto text-center cursor-pointer text-white px-20'}>
                                {sendingOtp ? (
                                    <>
                                        <div className="flex items-center justify-center">
                                            <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-2"></div>
                                            <div className="ml-2"> Sending OTP</div>
                                        </div>
                                    </>
                                ) : (
                                    'Send OTP'
                                )}
                            </div>
                            <div id="recaptcha-container"></div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default PhoneReg;