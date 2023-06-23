import { useState } from "react";
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme CSS file
import { format } from 'date-fns';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import boyImage from '../../../../assets/man.png';
import girlImage from '../../../../assets/woman.png';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";
import { getUserDetails, registerAboutYou } from "../../../../api";
import { useEffect } from "react";

const FirstForm = () => {

  const [selectedGender, setSelectedGender] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [displayName, setDisplayName] = useState("")

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

    await registerAboutYou(firstName, lastName, displayName, selectedDate, selectedGender).then((result) => {
        console.log(result);
        setPage(page === 10 ? 0 : page + 1);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getUserDetails = async () => {
    await getUserDetails().then((result) => {
      console.log(result)
    })
  }

  useEffect(() => {
    getUserDetails()
  }, [])
  

  const formattedDate = selectedDate ? format(selectedDate, 'dd/MM/yyyy') : '';
  return (
    <>
      <form onSubmit={handleData} className="-mt-8">
        <div className="flex justify-center space-x-20">

          <button
            className={`flex items-center justify-center rounded-full w-24 h-24 focus:outline-none ${selectedGender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}
            onClick={() => handleGenderClick('male')}
            disabled={selectedGender === 'male'}
          >
            <img src={boyImage} alt="Boy" className="w-24 h-24" />
          </button>
          <button
            className={`flex items-center justify-center rounded-full w-24 h-24 focus:outline-none ${selectedGender === 'female' ? 'bg-pink-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}
            onClick={() => handleGenderClick('female')}
            disabled={selectedGender === 'female'}
          >
            <img src={girlImage} alt="Girl" className="w-24 h-24" />
          </button>
        </div>

        <div className="mb-6 mt-10">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-72 ml-12 py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-72 ml-12 py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-72 ml-12 py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          ></input>
        </div>

        <div className="relative inline-block mb-10">
          <input
            type="text"
            value={formattedDate}
            placeholder="DOB"
            readOnly
            onClick={handleInputClick}
            className="w-72 ml-12 px-5 py-3 text-sm placeholder:text-[#4D4D4D] bg-white border border-[#B8B8B8] rounded-xl shadow-sm focus:outline-none focus:border-blue-500 cursor-pointer"
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
                onChange={handleDateChange}
                className="mb-10 border border-gray-400 rounded-xl ml-7 shadow-sm"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-48"
        >
          Continue
        </button>

        <div className="flex items-center justify-between"></div>
      </form>
    </>
  );
};

export default FirstForm;
