import axios from "axios";
import { useContext, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import CircleIcon from '@mui/icons-material/Circle';
import { registrationContext } from "../../../../context/formContext";
import { Link, useNavigate } from "react-router-dom";
import { updateSignupStatus, uploadAadharDetails } from "../../../../api";
import { useEffect } from "react";
import { useRef } from "react";

const EighthForm = () => {
  const { page, setPage } = useContext(registrationContext)
  const navigate = useNavigate()

  const [verifyOtp, setVerifyOtp] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [sendingOtp, setSendingOtp] = useState(false);
  const [aadhar, setAadhar] = useState("")
  const [shareCode, setShareCode] = useState("")
  const [transactionId, setTransactionId] = useState("")
  const [showOTP, setShowOTP] = useState(false);

  const sendOtp = async (e) => {
    e.preventDefault()


    if (aadhar === '') {
      toast.error("Enter Your Aadhar Number")
    }

    else {
      setSendingOtp(true)

      const headers = {
        'X-Auth-Type': 'API-Key',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-API-Key': import.meta.env.VITE_AADHAR_API
      };
      const data = { aadhaar_number: aadhar, consent: 'Y' };

      await axios.post(`https://api.gridlines.io/aadhaar-api/boson/generate-otp`, data, { headers })
        .then((response) => {
          toast.success("OTP send successfully!");
          setShowOTP(true)
          setTransactionId(response?.data?.data?.transaction_id)
          setShareCode(response?.data?.data?.code)
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message)
        })
    }

  }

  const onOTPVerify = async (e) => {
    e.preventDefault()

    if (otp === '') {
      toast.error("Enter received OTP on Aadhar-linked mobile")
    }

    else {
      setVerifyOtp(true)
      const finalOtp = otp.join("")
      const headers = {
        'X-Auth-Type': 'API-Key',
        'X-Transaction-ID': transactionId,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-API-Key': import.meta.env.VITE_AADHAR_API
      }
      const data = { otp: finalOtp, include_xml: true, share_code: shareCode }

      await axios.post(`https://api.gridlines.io/aadhaar-api/boson/submit-otp`, data, { headers })
        .then(async (response) => {
          toast.success("OTP verified successfully!");

          await uploadAadharDetails(
            response?.data?.data?.aadhaar_data?.care_of,
            response?.data?.data?.aadhaar_data?.name,
            aadhar,
            response?.data?.data?.aadhaar_data?.date_of_birth,
            response?.data?.data?.aadhaar_data?.pincode,
            response?.data?.data?.aadhaar_data?.house
          ).then((result) => {
            localStorage.setItem("signupStatus", result?.data?.signupStatus)
            navigate('/home')
          })
        })
        .catch(() => {
          toast.error("Invalid OTP")
        })
    }
  }

  const handleDoItLater = async (e) => {
    e.preventDefault()

    await updateSignupStatus()
      .then((result) => {
        localStorage.setItem("signupStatus", result?.data?.signupStatus)
        navigate('/home')
      })
  }

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

  const handleNext = () => {
    setPage(page === 11 ? 0 : page + 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {showOTP ? (
        <>
          <form onSubmit={onOTPVerify} className="w-72 ml-3.5 sm:ml-12">
            <Toaster />
            <p className=' mt-10 mb-14 text-justify text-sm font-medium'>
              An OTP has been sent to your Aadhar-linked mobile number. Please enter the OTP below to verify your account
            </p>

            <div className="mt-8 w-full">
              <div className="mx-auto">
                <div className="flex">
                  {otp?.map((data, index) => (
                    <input
                      className="otp-field rounded-lg w-10 h-10 text-center border border-gray-400 mx-auto text-[#4D4D4D]"
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

            {verifyOtp ? (
              <>
                <div className="bg-[#F92739] w-full gap-1 py-3 text-white rounded-xl mt-10 flex items-center justify-center">
                  <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-2"></div>
                  <div className="ml-2"> Verifying OTP</div>
                </div>
              </>
            ) : (
              <button
                type="submit"
                className="bg-[#F92739] w-full flex gap-1 items-center justify-center py-3 text-white rounded-xl mt-10"
              >
                <span>Verify OTP</span>
              </button>
            )}

          </form>
        </>
      ) : (
        <>
          <form onSubmit={sendOtp} className="w-72 ml-3.5 sm:ml-12">
            <Toaster />
            <p className="text-sm font-medium mb-6">
              Verify your Account with Aadhar
            </p>

            <div className="mb-6">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm text-[#4D4D4D]"
                name="Aadhar"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                type="text"
                placeholder="Aadhar Number"
              ></input>
            </div>

            {sendingOtp ? (
              <>
                <div className="bg-[#F92739] text-white w-full py-3 rounded-xl mb-6 text-sm flex items-center justify-center">
                  <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-2"></div>
                  <div className="ml-2"> Requesting OTP</div>
                </div>
              </>
            ) : (
              <button type="submit" className="bg-[#F92739] text-white w-full py-3 rounded-xl mb-6 text-sm">
                Request OTP
              </button>
            )}

            <Link onClick={handleDoItLater} className="bg-[#B5B5B5] text-white px-[111.5px] py-3 rounded-xl text-sm">
              Do it Later
            </Link>

            <div onClick={handleNext} className="bg-white cursor-pointer mt-28 text-black w-full text-center py-3 border border-[#B8B8B8] rounded-xl mb-10 text-[13px]">
              I don’t have Aadhar linked mobile. ?
            </div>

            <div className="p-4 border border-[#F92739] rounded-2xl mt-2">
              <p className="text-center text-[12px]">
                Requesting ID is only for account verification, and also to avoid fake profiles. We do not show your ID or address details to any other users.  Its 100% Assured !

              </p>
              <p className="text-center text-[12px]">
                Read our <Link to='/privacypolicy' className="text-[#0949C4] font-medium">Privacy Policy</Link> before Proceed.
              </p>
            </div>
          </form>
        </>
      )}
      <div className={showOTP ? "flex justify-center mt-[19.4rem] mb-3 sm:mb-10" : "flex justify-center mt-[4.35rem] mb-3 sm:mb-10"}>
        <div className={
          page === 0
            ? " text-[#F92739] font-medium"
            : "text-gray-300 cursor-pointer"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 1
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 2 || page === 3
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 4
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 5 || page === 6
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 7 || page === 8
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 9
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 10
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
      </div>
    </>
  );
};

export default EighthForm;