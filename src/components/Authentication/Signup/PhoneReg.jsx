import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Home/Navbar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { auth } from "../../../config/Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
import OtpInput from "otp-input-react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import { registerUser } from "../../../api";

const PhoneReg = () => {
    const [countryState, setCountryState] = useState({
        loading: false,
        countries: [],
        errorMessage: "",
    });
    const [selectedCountry, setSelectedCountry] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [otp, setOtp] = useState("")
    const [phone, setPhone] = useState("")
    const [showOTP, setShowOTP] = useState(false);
    const [search, setSearch] = useState("");

    const tempCountry = []

    const searchData = (tempProduct) => {
        return search === ""
            ? tempProduct
            : tempProduct?.name.toLowerCase().includes(search)
    };

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch spinner
                setCountryState({
                    ...countryState,
                    loading: true,
                });

                //  fetch data
                const dataUrl = `https://restcountries.com/v2/all`;
                const response = await axios.get(dataUrl);
                setCountryState({
                    ...countryState,
                    countries: response.data,
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
        if (obj.name === selectedCountry) {
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

    function onSignup() {
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const number = `+${searchSelectedCountry.callingCodes}` + phone

        if (phone === " ") {
            toast.error("Enter your Phone Number")
        }

        else {
            signInWithPhoneNumber(auth, number, appVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                    setShowOTP(true);
                    toast.success("OTP send successfully!");
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }

    function onOTPVerify() {
        window.confirmationResult
            .confirm(otp)
            .then(async () => {
                await registerUser(phone).then((result) => {
                    localStorage.setItem("userId", result.data.data.user._id)
                    localStorage.setItem("token", result.data.token)
                    navigate('/register/signupOption')
                })
            })
            .catch(() => {
                toast.error("Invalid OTP")
            });
    }

    return (
        <>
            <Navbar />
            <div className="flex h-screen justify-center items-center mb-36">
                <Toaster toastOptions={{ duration: 4000 }} />

                <div className="w-full h-[45rem] mt-44 max-w-sm bg-[#F2F2F2] rounded-2xl shadow-md">
                    {showOTP ? (
                        <>
                            <p className='font-oxygen font-bold text-center text-2xl mt-16'>
                                Registration
                            </p>

                            <p className='ml-10 mt-14 text-sm font-medium'>
                                OTP Verfication
                            </p>

                            <p className='ml-10 text-sm font-medium'>
                                Please Enter the OTP received in your mobile
                            </p>

                            <div className="grid justify-center mt-7 rounded-2xl mx-10 space-y-10">

                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                    autoFocus
                                    className="opt-container ml-6 mb-3 mt-7"
                                ></OtpInput>
                                <div
                                    onClick={onOTPVerify}
                                    className="bg-[#F92739] w-full cursor-pointer flex gap-1 items-center justify-center py-3 text-white rounded-xl"
                                >
                                    <span>Verify OTP</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className='font-oxygen font-bold text-center text-2xl mt-16'>
                                Registration
                            </p>

                            <p className='ml-10 mt-16 font-medium'>
                                Select Country Code
                            </p>

                            <div className="grid justify-center mt-7 rounded-2xl mx-10 space-y-10">

                                <div className="relative w-80">
                                    {searchSelectedCountry &&
                                        <img src={
                                            searchSelectedCountry &&
                                            searchSelectedCountry?.flags?.png
                                        } alt="Image" className="absolute w-8 h-5 mt-3.5 ml-[15.3rem] pointer-events-none" />}
                                    <p className="absolute ml-48 mt-3 pointer-events-none">
                                        {searchSelectedCountry &&
                                            "+" + searchSelectedCountry.callingCodes}

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
                                                        key={item.name.common}
                                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                                                        onClick={() => handleOptionClick(item.name)}
                                                    >
                                                        <img src={item.flags.png} className="w-8 h-5 mr-2" alt="" />
                                                        <p className="mr-2">{item.callingCodes}</p>
                                                        <p className="truncate">{item.name}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                                <div className="relative">
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

                            <div onClick={onSignup} className='bg-red-500 w-80 p-3 rounded-xl mt-12 mb-20 ml-8 text-center cursor-pointer text-white px-20'>
                                Verify Mobile
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