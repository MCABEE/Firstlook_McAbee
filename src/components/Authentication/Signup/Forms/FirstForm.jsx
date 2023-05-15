import React, { useRef, useState } from "react";
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme CSS file
import { format } from 'date-fns';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import boyImage from '../../../../assets/man.png';
import girlImage from '../../../../assets/woman.png';
import { color } from "framer-motion";

const FirstForm = ({ formValues, onChange }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleInputClick = () => {
    setShowCalendar(!showCalendar);
  };

  const formattedDate = selectedDate ? format(selectedDate, 'dd/MM/yyyy') : '';
  return (
    <>
      <form className="-mt-8">
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
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="name"
            name="name"
            type="text"
            placeholder="First Name"
            onChange={onChange}
            value={formValues.name}
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="lastname"
            name="lastname"
            onChange={onChange}
            value={formValues.lastname}
            type="text"
            placeholder="Last Name"
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="lastname"
            name="lastname"
            onChange={onChange}
            value={formValues.lastname}
            type="text"
            placeholder="Username"
          ></input>
        </div>

        <div className="relative inline-block">
          <input
            type="text"
            value={formattedDate}
            placeholder="DOB"
            readOnly
            onClick={handleInputClick}
            className="w-72 px-5 py-3 text-sm text-gray-700 bg-white border border-[#B8B8B8] rounded-xl shadow-sm focus:outline-none focus:border-blue-500 cursor-pointer"
          />
          <span
            onClick={handleInputClick}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            <CalendarMonthIcon sx={{color: "#F93445"}}/>
          </span>
          {showCalendar && (
            <div className="absolute z-10">
              <Calendar
                date={selectedDate}
                onChange={handleDateChange}
                className="mb-10 border border-gray-400 rounded-xl shadow-sm"
              />
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between"></div>
      </form>
    </>
  );
};

export default FirstForm;
