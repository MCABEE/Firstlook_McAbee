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
import { registerAboutYou } from "../../../../api";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const FirstForm = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)

  const [selectedGender, setSelectedGender] = useState(userData?.gender || null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [firstName, setFirstName] = useState(userData?.firstName || "")
  const [lastName, setLastName] = useState(userData?.lastName || "")
  const [displayName, setDisplayName] = useState(userData?.displayName || "")

  const { page, setPage } = useContext(registrationContext)

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

    if (selectedGender === null) {
      toast.error("Select your Gender")
    }

    else if (selectedDate === null) {
      toast.error("Enter your DOB")
    }

    else {
      await registerAboutYou(firstName, lastName, displayName, selectedDate, selectedGender).then((result) => {
        console.log(result);
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
  return (
    <>
      <form onSubmit={handleData} className="-mt-8">
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
            className="appearance-none border border-[#B8B8B8] rounded-xl w-72 ml-3.5 sm:ml-12 py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="First Name"
            value={firstName}
            required
            pattern="[A-Za-z]+"
            title="Fist Name is not valid"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-72 ml-3.5 sm:ml-12 py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Last Name"
            required
            pattern="[A-Za-z]+"
            title="Last Name is not valid"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-72 ml-3.5 sm:ml-12 py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Display Name"
            value={displayName}
            required
            pattern="[A-Za-z]+"
            title="Display Name is not valid"
            onChange={(e) => setDisplayName(e.target.value)}
          ></input>
        </div>

        <div className="relative inline-block mb-10">
          <input
            type="text"
            value={formattedDate || "DOB"}
            readOnly
            onClick={handleInputClick}
            className="w-72 ml-3.5 sm:ml-12 px-5 py-3 text-sm placeholder:text-[#4D4D4D] bg-white border border-[#B8B8B8] rounded-xl shadow-sm focus:outline-none focus:border-blue-500 cursor-pointer"
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
      <div className="flex justify-center mt-40 mb-10">
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
  );
};

export default FirstForm;
