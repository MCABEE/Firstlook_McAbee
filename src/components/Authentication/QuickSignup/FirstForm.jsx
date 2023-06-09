import { useEffect, useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme CSS file
import { format } from 'date-fns';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import boyImage from '../../../assets/man.png';
import girlImage from '../../../assets/woman.png';
import { useContext } from "react";
import { getAllCaste, getAllReligion, quickSignupAboutYou } from "../../../api";
import { registrationContext } from "../../../context/formContext";
import { marriedStatus } from "../../../lib/constants";
import { useSelector } from "react-redux";
import CircleIcon from '@mui/icons-material/Circle';
import { Toaster, toast } from "react-hot-toast";

const FirstForm = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)

  const [selectedGender, setSelectedGender] = useState(userData?.gender || null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [firstName, setFirstName] = useState(userData?.firstName || "")
  const [lastName, setLastName] = useState(userData?.lastName || "")
  const [displayName, setDisplayName] = useState(userData?.displayName || "")
  const [isOpen, setIsOpen] = useState("");
  const [maritalStatus, setMaritalStatus] = useState(userData?.personalInfo?.maritalStatus || "")
  const [religion, setReligion] = useState(userData?.personalInfo?.religion || "")
  const [caste, setCaste] = useState(userData?.personalInfo?.caste || "")

  const [nReligion, setNReligion] = useState([])
  const [nCaste, setNCaste] = useState([])

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

    else if (firstName === "") {
      toast.error("Enter your First Name")
    }

    else if (lastName === "") {
      toast.error("Enter your Last Name")
    }

    else if (displayName === "") {
      toast.error("Enter your Display Name")
    }

    else if (selectedDate === null) {
      toast.error("Enter your DOB")
    }

    else if (religion === '') {
      toast.error("select Religion")
    }

    else if (caste === '') {
      toast.error("select Caste")
    }

    else if (maritalStatus === '') {
      toast.error("select Marital Status")
    }

    else {
      await quickSignupAboutYou(firstName, lastName, displayName, selectedDate, selectedGender, religion, caste, maritalStatus).then((result) => {
        console.log(result);
        setPage(page === 10 ? 0 : page + 1);
      })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const getReligion = async () => {
    await getAllReligion()
      .then((result) => {
        console.log(result);
        setNReligion(result.data.religion)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getCaste = async () => {
    await getAllCaste(religion)
      .then((result) => {
        console.log(result);
        setNCaste(result.data.caste)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getReligion()
    getCaste()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [religion])


  const formattedDate = selectedDate ? format(selectedDate, 'dd/MM/yyyy') : '';
  return (
    <>
      <form>
        <Toaster />
        <div className="flex justify-center space-x-20">
          <div
            className={`flex items-center justify-center rounded-full w-24 h-24 focus:outline-none ${selectedGender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}
            onClick={() => handleGenderClick('male')}
            disabled={selectedGender === 'male'}
          >
            <img src={boyImage} alt="Boy" className="w-24 h-24" />
          </div>
          <div
            className={`flex items-center justify-center rounded-full w-24 h-24 focus:outline-none ${selectedGender === 'female' ? 'bg-pink-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}
            onClick={() => handleGenderClick('female')}
            disabled={selectedGender === 'female'}
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
            title="First Name is not valid"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-72 ml-3.5 sm:ml-12 py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Last Name"
            value={lastName}
            required
            pattern="[A-Za-z]+"
            title="Last Name is not valid"
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

        <div className="relative inline-block mb-6">
          <input
            type="text"
            value={formattedDate}
            placeholder="DOB"
            readOnly
            required
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
                onChange={handleDateChange}
                className="mb-10 border border-gray-400 rounded-xl ml-7 shadow-sm"
              />
            </div>
          )}
        </div>

        <div className="mb-6 flex">
          <div
            className="w-72 ml-3.5 sm:ml-12 h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Religion")}
          >
            <p className="w-44 mt-3 ml-2 truncate text-sm">{religion ? religion : "Religion"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Religion' ? (
            <ul className="absolute z-10 w-72 ml-3.5 sm:ml-12 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              {nReligion?.map((religion) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setReligion(religion?.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2">{religion?.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <div
            className="w-72 ml-3.5 sm:ml-12 h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Caste")}
          >
            <p className="w-44 mt-3 ml-2 truncate text-sm">{caste ? caste : "Caste"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Caste' ? (
            <ul className="absolute z-10 w-72 ml-3.5 sm:ml-12 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              {nCaste?.map((caste) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setCaste(caste?.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2">{caste?.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-8 flex">
          <button
            type="button"
            className="w-72 ml-3.5 sm:ml-12 h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Marital Status")}
          >
            <p className="w-44 truncate text-sm">{maritalStatus ? maritalStatus : "Marital Status"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Marital Status' ? (
            <ul className="absolute z-10 w-72 ml-3.5 sm:ml-12 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              {marriedStatus.map((status) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setMaritalStatus(status.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >{status.name}</p>

                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <button
          onClick={handleData}
          className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-40 sm:ml-48"
        >
          Continue
        </button>

        <div className="flex items-center justify-between"></div>
      </form>
      <div className="flex justify-center mt-9 mb-10">
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
          page === 2
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
