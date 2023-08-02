import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from 'react';
import { registrationContext } from '../../../../context/formContext';
import { registerAdditionalPersonalInfo } from '../../../../api';
import { bloodGroups, diets, doDrink, doSmoke, financeStatus, userLicense } from '../../../../lib/constants';
import { useSelector } from "react-redux";
import CircleIcon from '@mui/icons-material/Circle';
import { Toaster, toast } from 'react-hot-toast';
import { useEffect } from 'react';

const ThirdForm2 = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)

  const [isOpen, setIsOpen] = useState("");
  const [drink, setDrink] = useState(userData?.personalInfo?.drinkingHabits || "")
  const [smoke, setSmoke] = useState(userData?.personalInfo?.smokingHabits || "")
  const [diet, setDiet] = useState(userData?.personalInfo?.foodHabits || "")
  const [bloodGroup, setBloodGroup] = useState(userData?.personalInfo?.bloodGroup || "")
  const [license, setLicense] = useState(userData?.personalInfo?.license || "")
  const [financialStatus, setFinancialStatus] = useState(userData?.personalInfo?.financialStatus || "")

  const { page, setPage } = useContext(registrationContext)

  const handleData = async (e) => {
    e.preventDefault()

    if (drink === '') {
      toast.error("select Drink")
    }

    else if (smoke === '') {
      toast.error("select Smoke")
    }

    else if (diet === '') {
      toast.error("select Diet")
    }

    else if (bloodGroup === '') {
      toast.error("select Blood Group")
    }

    else if (license === '') {
      toast.error("select License")
    }

    else if (financialStatus === '') {
      toast.error("select Financial Status")
    }

    else {
      await registerAdditionalPersonalInfo(drink, smoke, diet, bloodGroup, license, financialStatus)
        .then((result) => {
          console.log(result)
          setPage(page === 10 ? 0 : page + 1);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <form onSubmit={handleData} className="w-72 ml-3.5 sm:ml-12">
        <Toaster />
        <div className="mb-6 flex ">
          <button type='button'
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Drink" ? "" : "Drink"))}
            
          >
            <p className="w-44 truncate text-sm">{drink ? drink : "Do You Drink ?"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Drink' ? (
            <ul className="absolute z-10 w-72 mt-14 max-h-48 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Drinking Habit</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
              {doDrink.map((status) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setDrink(status.name)
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

        <div className="mb-6 flex">
          <button type='button'
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Smoke" ? "" : "Smoke"))}
            
          >
            <p className="w-44 truncate text-sm">{smoke ? smoke : "Do You Smoke ?"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Smoke' ? (
            <ul className="absolute z-10 w-72 mt-14 max-h-48 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Smoking Habit</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
              {doSmoke.map((status) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setSmoke(status.name)
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

        <div className="mb-6 flex">
          <button type='button'
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Diet" ? "" : "Diet"))}
            
          >
            <p className="w-44 truncate text-sm">{diet ? diet : "Your Diet ?"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Diet' ? (
            <ul className="absolute z-10 w-72 mt-14 max-h-48 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Diet</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
              {diets.map((status) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setDiet(status.name)
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

        <div className="mb-6 flex">
          <button type='button'
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Blood Group" ? "" : "Blood Group"))}
            
          >
            <p className="w-44 truncate text-sm">{bloodGroup ? bloodGroup : "Blood Group"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Blood Group' ? (
            <ul className="absolute z-10 w-72 mt-14 max-h-48 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Blood Group</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
              {bloodGroups.map((group) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setBloodGroup(group.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >{group.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <button type='button'
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "License" ? "" : "License"))}
            
          >
            <p className="w-44 truncate text-sm">{license ? license : "Do you have a Driving License ?"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'License' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your License Category</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
              {userLicense.map((license) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setLicense(license.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >{license.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-10 flex">
          <button type='button'
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Financial Status" ? "" : "Financial Status"))}
            
          >
            <p className="w-44 truncate text-sm">{financialStatus ? financialStatus : "Financial Status"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Financial Status' ? (
            <ul className="absolute z-10 w-72 mt-14 max-h-48 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Financial Status</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
              {financeStatus.map((status) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setFinancialStatus(status.name)
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
          type='submit'
          className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-36 cursor-pointer"
        >
          Continue
        </button>

        <div className="flex items-center justify-between"></div>
      </form>
      <div className="flex justify-center mt-28 mb-3 sm:mb-10">
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

export default ThirdForm2;