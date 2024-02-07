import { useContext, useState } from 'react';
import boyImage from '../../../assets/man.png';
import girlImage from '../../../assets/woman.png';
import { useSelector } from 'react-redux';
import { differenceInYears, format } from 'date-fns';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { registrationContext } from '../../../context/formContext';
import toast, { Toaster } from 'react-hot-toast';
import { Calendar } from 'react-date-range';
import { marriedStatus } from '../../../lib/constants';
import { saveAboutYou } from '../../../api';

const AboutForm = () => {
  const userData = useSelector((state) => state.getUserFilledData?.data)

  const [selectedGender, setSelectedGender] = useState(userData?.gender || null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [fullName, setFullName] = useState(userData?.fullName || "")
  const [maritalStatus, setMaritalStatus] = useState(userData?.personalInfo?.maritalStatus || "")
  const [isOpen, setIsOpen] = useState("");
  const { page, setPage } = useContext(registrationContext)

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsOpen("Calendar")
    setShowCalendar(false);
  };

  const handleInputClick = () => {
    setShowCalendar(!showCalendar);
  };

  const formattedDate = selectedDate ? format(selectedDate, 'dd/MM/yyyy') : '';

  const currentDate = new Date();
  const age = differenceInYears(currentDate, selectedDate);

  const handleData = async (e) => {
    e.preventDefault()

    const fullNameRegex = /^(?!.*\s\s)[A-Za-z][A-Za-z\s]{1,}[A-Za-z]$/.test(fullName);
    const ageLimitFemale = 18;
    const ageLimitMale = 21;

    if (selectedGender === null) {
      toast.error("Select your Gender")
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

    else if (maritalStatus === '') {
      toast.error("select Marital Status")
    }

    else {
      await saveAboutYou(fullName, selectedDate, selectedGender, maritalStatus)
        .then(() => {
          setPage(page === 10 ? 0 : page + 1);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <>
      <div className="px-4 mt-5 flex">
        <div className="font-bold ml-auto">
          1/7
        </div>
      </div>
      <div className="flex justify-center mt-10 sm:mt-20">
        <div>
          <div className="relative right-14">
            <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
              <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
            </svg>
            <div className="absolute top-0 left-5 w-36">
              <p className="text-[21px] font-semibold text-center">Tell us about yourself</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <p className="text-[12px]">
          Input data matching your ID, please !
        </p>
      </div>
      <form onSubmit={handleData}>
        <Toaster />
        <div className="flex justify-center space-x-20 mt-10">
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
        <div className="flex justify-center space-x-24 mt-1.5 text-[#4D4D4D]">
          <p>
            I am a boy
          </p>

          <p>
            I am a girl
          </p>
        </div>

        <div className="mb-6 mt-14">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-72 ml-3.5 sm:ml-12 py-3 px-6 placeholder:text-[#4D4D4D] text-sm text-[#4D4D4D]"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          ></input>
        </div>

        <div className="relative inline-block mb-6">
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

        <div className="mb-8 flex">
          <button
            type="button"
            className="w-72 ml-3.5 sm:ml-12 h-12 text-left border border-[#B8B8B8] rounded-xl px-6 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Marital Status" ? "" : "Marital Status"))}
          >
            <p className="w-44 truncate text-sm">{maritalStatus ? maritalStatus : "Marital Status"}</p>
          </button>
          <div className="-ml-8 mt-[18px] text-[#B8B8B8] pointer-events-none">
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5.64412L6.35586 11L11.7117 5.64412" stroke="#292D32" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.35547 0.849609V10.8496" stroke="#292D32" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {isOpen == 'Marital Status' ? (
            <ul className="absolute z-10 w-72 ml-3.5 sm:ml-12 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Marital Status</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
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

        <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-[#FE1940] rounded-xl text-white py-2.5 px-32"
          >
            Next
          </button>
        </div>
      </form>

      <div className='flex justify-center mt-14'>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4635 0H5.48785C2.19514 0 0 2.19514 0 5.48785V12.0733C0 15.366 2.19514 17.5611 5.48785 17.5611V19.8989C5.48785 20.777 6.46468 21.3038 7.18908 20.8099L12.0733 17.5611H16.4635C19.7563 17.5611 21.9514 15.366 21.9514 12.0733V5.48785C21.9514 2.19514 19.7563 0 16.4635 0ZM10.9757 13.3574C10.5147 13.3574 10.1525 12.9843 10.1525 12.5343C10.1525 12.0843 10.5147 11.7111 10.9757 11.7111C11.4367 11.7111 11.7989 12.0843 11.7989 12.5343C11.7989 12.9843 11.4367 13.3574 10.9757 13.3574ZM12.3586 8.80252C11.9306 9.08789 11.7989 9.27447 11.7989 9.58179V9.81228C11.7989 10.2623 11.4257 10.6355 10.9757 10.6355C10.5257 10.6355 10.1525 10.2623 10.1525 9.81228V9.58179C10.1525 8.3086 11.0855 7.68299 11.4367 7.44152C11.8428 7.16713 11.9745 6.98054 11.9745 6.69517C11.9745 6.14639 11.5245 5.69639 10.9757 5.69639C10.4269 5.69639 9.97691 6.14639 9.97691 6.69517C9.97691 7.14518 9.60373 7.51835 9.15373 7.51835C8.70373 7.51835 8.33055 7.14518 8.33055 6.69517C8.33055 5.23541 9.51593 4.05003 10.9757 4.05003C12.4355 4.05003 13.6208 5.23541 13.6208 6.69517C13.6208 7.9464 12.6989 8.57203 12.3586 8.80252Z" fill="#3E3E3E" />
        </svg>
      </div>
      <div className='flex justify-center text-center'>
        <p className='text-[13px] text-[#4D4D4D]'>
          Enter details matching your ID, <br />
          no edits later.
        </p>
      </div>

      {isOpen === "Calendar" ?
        <>
          <div className='-mt-[282px] -ml-0.5 sm:block hidden'>
            <div className='absolute w-96 py-3 rounded-xl border border-[#D8D8D8] bg-white h-80 mt-6'>
              <div className="flex justify-center">
                <div>
                  <div className="relative right-14">
                    <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
                      <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
                    </svg>
                    <div className="absolute top-0 left-8 w-64 -ml-20">
                      <p className="text-[21px] font-semibold text-center">As per your <br />
                        date of birth, you have</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className='mt-8 text-[36px] font-bold text-center'>
                {age}
              </p>
              <p className='text-[14px] text-[#4D4D4D] text-center -mt-2'>
                YEARS OLD
              </p>
              <p className='text-[14px] text-[#4D4D4D] text-center mt-4'>
                please confirm, this cannot be edit later
              </p>
              <div className='flex justify-center mt-4'>
                <button onClick={() => setIsOpen("")} className='text-[14px] text-center px-20 py-3 text-white rounded-2xl bg-[#FE1940]'>
                  Confirm
                </button>
              </div>
              <div className='flex justify-center mt-4'>
                <button onClick={() => {
                  setSelectedDate(null)
                  setIsOpen("")
                }} className='text-[14px] text-center px-[83px] py-3 rounded-2xl bg-[#D7D7D7]'>
                  Cancel
                </button>
              </div>
            </div>
          </div>

          <div className="sm:hidden block -mt-[282px]">
            <div className='absolute w-80 py-3 rounded-xl border border-[#D8D8D8] bg-white h-80 mt-6'>
              <div className="flex justify-center">
                <div>
                  <div className="relative right-14">
                    <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
                      <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
                    </svg>
                    <div className="absolute top-0 left-8 w-64 -ml-20">
                      <p className="text-[21px] font-semibold text-center">As per your <br />
                        date of birth, you have</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className='mt-8 text-[36px] font-bold text-center'>
                {age}
              </p>
              <p className='text-[14px] text-[#4D4D4D] text-center -mt-2'>
                YEARS OLD
              </p>
              <p className='text-[14px] text-[#4D4D4D] text-center mt-4'>
                please confirm, this cannot be edit later
              </p>
              <div className='flex justify-center mt-4'>
                <button onClick={() => setIsOpen("")} className='text-[14px] text-center px-20 py-3 text-white rounded-2xl bg-[#FE1940]'>
                  Confirm
                </button>
              </div>
              <div className='flex justify-center mt-4'>
                <button onClick={() => {
                  setSelectedDate(null)
                  setIsOpen("")
                }} className='text-[14px] text-center px-[83px] py-3 rounded-2xl bg-[#D7D7D7]'>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
        : " "}
    </>
  )
}

export default AboutForm