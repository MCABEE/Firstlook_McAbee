import axios from "axios";
import { useContext, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import OtpInput from "otp-input-react";
import CircleIcon from '@mui/icons-material/Circle';
import { registrationContext } from "../../../../context/formContext";

const EighthForm = () => {
  const { page } = useContext(registrationContext)

  const [aadhar, setAadhar] = useState("")
  const [otp, setOtp] = useState("")
  const [shareCode, setShareCode] = useState("")
  const [transactionId, setTransactionId] = useState("")
  const [showOTP, setShowOTP] = useState(false);

  const sendOtp = async (e) => {
    e.preventDefault()

    const headers = {
      'X-Auth-Type': 'API-Key',
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-API-Key': 'xUUtz7gQMpPZrdXVlcgPQVgmM0amF8kR'
    };
    const data = { aadhaar_number: aadhar, consent: 'Y' };

    await axios.post(`https://api.gridlines.io/aadhaar-api/boson/generate-otp`, data, { headers })
      .then((response) => {
        toast.success("OTP sended successfully!");
        setShowOTP(true)
        setTransactionId(response?.data?.data?.transaction_id)
        setShareCode(response?.data?.data?.code)
        console.log(response.data);
      })
      .catch((err) => {
        toast.error(err)
      })
  }

  const onOTPVerify = async (e) => {
    e.preventDefault()


    const headers = {
      'X-Auth-Type': 'API-Key',
      'X-Transaction-ID': transactionId,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-API-Key': 'xUUtz7gQMpPZrdXVlcgPQVgmM0amF8kR'
    }
    const data = { otp: otp, include_xml: true, share_code: shareCode }

    await axios.post(`https://api.gridlines.io/aadhaar-api/boson/submit-otp`, data, { headers })
      .then((response) => {
        toast.success("OTP verified successfully!");
        console.log(response);
      })
      .catch((err) => {
        toast.error(err)
      })
  }

  return (
    <>
      <Toaster toastOptions={{ duration: 4000 }} />
      {showOTP ? (
        <>
          <form onSubmit={onOTPVerify} className="w-72 ml-3.5 sm:ml-12">
            
            <p className=' mt-10 mb-14 text-justify text-sm font-medium'>
              An OTP send to your Aadhar linked mobile number.
              Please enter the OTP below to verify your account.
            </p>

            <div className="grid justify-center mt-7 rounded-2xl mx-10 space-y-10">

              <OtpInput
                value={otp}
                onChange={setOtp}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="opt-container ml-6 mb-8 mt-7"
              ></OtpInput>
              <button
                type="submit"
                className="bg-[#F92739] w-full flex gap-1 items-center justify-center py-3 text-white rounded-xl"
              >
                <span>Verify OTP</span>
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={sendOtp} className="w-72 ml-3.5 sm:ml-12">
            <p className="text-sm font-medium mb-6">
              Verify your Account with Aadhar
            </p>

            <div className="mb-6">
              <input
                className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
                name="Aadhar"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                type="text"
                placeholder="Aadhar Number"
              ></input>
            </div>

            <button type="submit" className="bg-[#F92739] text-white w-full py-3 rounded-xl mb-6 text-sm">
              Request OTP
            </button>

            <button className="bg-[#B5B5B5] text-white w-full py-3 rounded-xl mb-20 text-sm">
              Do it Later
            </button>

            <button className="bg-white text-black w-full py-3 border border-[#B8B8B8] rounded-xl mb-10 text-[10px]">
              I don’t have Aadhar linked mobile with me
            </button>
          </form>
          <div className="flex justify-center mt-[13.1rem] mb-10">
        <div className={
          page === 0
            ? " text-[#F92739] font-medium"
            : "text-gray-300 cursor-pointer"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 1
            ? "text-[#F92739] font-medium"
            : "text-gray-300 cursor-pointer"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 2 || page === 3
            ? "text-[#F92739] font-medium"
            : "text-gray-300 cursor-pointer"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 4
            ? "text-[#F92739] font-medium"
            : "text-gray-300 cursor-pointer"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 5 || page === 6
            ? "text-[#F92739] font-medium"
            : "text-gray-300 cursor-pointer"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 7 || page === 8
            ? "text-[#F92739] font-medium"
            : "text-gray-300 cursor-pointer"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 9
            ? "text-[#F92739] font-medium"
            : "text-gray-300 cursor-pointer"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 10
            ? "text-[#F92739] font-medium"
            : "text-gray-300 cursor-pointer"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
      </div>
        </>
      )}
    </>
  );
};

export default EighthForm;