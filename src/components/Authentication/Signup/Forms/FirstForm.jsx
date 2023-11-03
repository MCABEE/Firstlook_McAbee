import { useState } from "react";
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme CSS file
import CircleIcon from '@mui/icons-material/Circle';
import { format } from 'date-fns';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import boyImage from '../../../../assets/man.png';
import girlImage from '../../../../assets/woman.png';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";
import { checkDisplayName, registerAboutYou } from "../../../../api";
import { useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import { differenceInYears } from 'date-fns';

const FirstForm = () => {
  const userData = useSelector((state) => state.getUserFilledData?.data)

  const [selectedGender, setSelectedGender] = useState(userData?.gender || null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [fullName, setFullName] = useState(userData?.fullName || "")
  const [displayName, setDisplayName] = useState(userData?.displayName || "")
  const [displayNameStatus, setDisplayNameStatus] = useState(null)

  const { page, setPage } = useContext(registrationContext)

  const handleDisplayName = async () => {

    if (displayName.length > 5) {
      await checkDisplayName(displayName)
        .then((result) => {
          setDisplayNameStatus(result?.data?.status)
        })
    }

  }

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleInputClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleData = async (e) => {
    e.preventDefault()

    const isValidDisplayName = /^[a-zA-Z0-9_]{6,16}$/.test(displayName);
    const fullNameRegex = /^(?!.*\s\s)[A-Za-z][A-Za-z\s]{1,}[A-Za-z]$/.test(fullName);
    const currentDate = new Date();
    const ageLimitFemale = 18;
    const ageLimitMale = 21;

    const age = differenceInYears(currentDate, selectedDate);

    if (selectedGender === null) {
      toast.error("Select your Gender")
    }

    else if (!isValidDisplayName) {
      toast.error("Display name must be 6 to 16 characters long and should only contain letters, numbers, and underscores.");
    }

    else if (!fullNameRegex) {
      toast.error("Your Full Name should have at least 3 letters and no extra spaces.");
    }

    else if (selectedDate === null || selectedDate === 'DOB') {
      toast.error("Enter your DOB")
    }

    else if ((selectedGender === 'Male' && age < ageLimitMale) ||
      (selectedGender === 'Female' && age < ageLimitFemale)) {
      toast.error(`You must be ${selectedGender === 'Male' ? ageLimitMale : ageLimitFemale} years or older.`);
    }

    else {
      await registerAboutYou(fullName, displayName, selectedDate, selectedGender)
        .then(() => {
          setPage(page === 10 ? 0 : page + 1);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const formattedDate = selectedDate ? format(selectedDate, 'dd/MM/yyyy') : '';
  // const dateString = `${userData?.dob}`;
  // const date = new Date(dateString);
  // const dob = date.toLocaleDateString('en-GB');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    handleDisplayName()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayName])


  return (
    <>
      <form onSubmit={handleData} className="-mt-8">
        <Toaster />
        <div className="flex justify-center space-x-20">

          <div
            className={`flex items-center justify-center rounded-full w-24 h-24 focus:outline-none ${selectedGender === 'Male' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}
            onClick={() => handleGenderClick('Male')}
            disabled={selectedGender === 'Male'}
          >
            <img src={boyImage} alt="Boy" className="w-24 h-24" />
          </div>
          <div
            className={`flex items-center justify-center rounded-full w-24 h-24 focus:outline-none ${selectedGender === 'Female' ? 'bg-pink-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}
            onClick={() => handleGenderClick('Female')}
            disabled={selectedGender === 'Female'}
          >
            <img src={girlImage} alt="Girl" className="w-24 h-24" />
          </div>
        </div>

        <div className="mb-6 mt-10">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-72 ml-3.5 sm:ml-12 py-3 px-6 placeholder:text-[#4D4D4D] text-sm text-[#4D4D4D]"
            type="text"
            placeholder="Full Name"
            value={fullName}
            required
            onChange={(e) => setFullName(e.target.value)}
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-72 ml-3.5 sm:ml-12 py-3 px-6 placeholder:text-[#4D4D4D] text-sm text-[#4D4D4D]"
            type="text"
            placeholder="Display Name"
            value={displayName}
            required
            onChange={(e) => setDisplayName(e.target.value)}
          ></input>
          {
            displayNameStatus === 200 || displayNameStatus === null ? ""
              : <p className="text-xs text-red-500 ml-3.5 sm:ml-12 py-1.5">
                This display name has already been taken
              </p>
          }
        </div>

        <div className="relative inline-block mb-10">
          <input
            type="text"
            value={formattedDate || "DOB"}
            readOnly
            onClick={handleInputClick}
            className="w-72 ml-3.5 sm:ml-12 px-5 py-3 text-sm placeholder:text-[#4D4D4D] bg-white border border-[#B8B8B8] text-[#4D4D4D] rounded-xl shadow-sm focus:outline-none focus:border-blue-500 cursor-pointer"
          />
          <span
            onClick={handleInputClick}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 -mt-1 cursor-pointer"
          >
            <CalendarMonthIcon sx={{ color: "#F93445", height: "20px" }} />
          </span>
          {showCalendar && (
            <div className="absolute z-10">
              <Calendar
                date={selectedDate}
                required
                onChange={handleDateChange}
                className="mb-10 border border-gray-400 rounded-xl ml-auto sm:ml-7 shadow-sm"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-40 sm:ml-48"
        >
          Continue
        </button>

        <div className="flex items-center justify-between"></div>
      </form>
      <div className="flex justify-center mt-56 mb-3 sm:mb-10">
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

export default FirstForm;
