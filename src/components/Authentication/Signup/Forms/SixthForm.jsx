import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext, useState } from "react";
import { registrationContext } from "../../../../context/formContext";
import { fatherOccupations, motherOccupations, parentEducations } from '../../../../lib/constants';
import { registerFamily } from '../../../../api';
import { useSelector } from "react-redux";
import CircleIcon from '@mui/icons-material/Circle';
import { Toaster, toast } from 'react-hot-toast';
import { useEffect } from 'react';

const SixthForm = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)

  const [isOpen, setIsOpen] = useState("");
  const [fatherName, setFatherName] = useState(userData?.family?.fatherName || "")
  const [motherName, setMotherName] = useState(userData?.family?.motherName || "")
  const [fatherEducation, setFatherEducation] = useState(userData?.family?.fatherEducation || "");
  const [fatherOccupation, setFatherOccupation] = useState(userData?.family?.fatherOccupation || "");
  const [motherEducation, setMotherEducation] = useState(userData?.family?.motherEducation || "");
  const [motherOccupation, setMotherOccupation] = useState(userData?.family?.motherOccupation || "");
  const [siblings, setSiblings] = useState(userData?.family?.siblings || null);

  const { page, setPage } = useContext(registrationContext)

  const handleData = async (e) => {
    e.preventDefault()

    if (fatherEducation === '') {
      toast.error("select Father's Education")
    }

    else if (motherEducation === '') {
      toast.error("select Mother's Education")
    }

    else if (fatherOccupation === '') {
      toast.error("select Father's Occupation")
    }

    else if (motherOccupation === '') {
      toast.error("select Mother's Occupation")
    }

    else if (siblings === '') {
      toast.error("select no. of Siblings")
    }

    else if (siblings > 12) {
      toast.error("Siblings limited to a maximum of 12")
    }

    else if (siblings < 0) {
      toast.error("Siblings must be a non-negative number")
    }

    else {
      await registerFamily(fatherName, motherName, fatherEducation, motherEducation, fatherOccupation, motherOccupation, siblings)
        .then(() => {
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
      <form className="w-72 ml-3.5 sm:ml-12">
        <Toaster />
        <div className="mb-6">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            required
            pattern="[A-Za-z]+"
            title="Father Name is not valid"
            placeholder="Father Name"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          ></input>
        </div>

        <div className="mb-6 flex">
          <button type='button'
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Fathers Education" ? "" : "Fathers Education"))}
            
          >
            <p className="w-44 truncate text-sm">{fatherEducation ? fatherEducation : "Father's Education"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Fathers Education' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Father’s Education</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
              {parentEducations.map((education) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setFatherEducation(education.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >{education.name}</p>

                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <button type='button'
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Father’s Occupation" ? "" : "Father’s Occupation"))}
            
          >
            <p className="w-44 truncate text-sm">{fatherOccupation ? fatherOccupation : "Father’s Occupation"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Father’s Occupation' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Father’s Occupation</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
              {fatherOccupations.map((occupation) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setFatherOccupation(occupation.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >{occupation.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            required
            pattern="[A-Za-z]+"
            title="Mother Name is not valid"
            placeholder="Mother Name"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
          ></input>
        </div>

        <div className="mb-6 flex">
          <button type='button'
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Mother Education" ? "" : "Mother Education"))}
          >
            <p className="w-44 truncate text-sm">{motherEducation ? motherEducation : "Mother's Education"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Mother Education' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Mother’s Education</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
              {parentEducations.map((education) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setMotherEducation(education.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >{education.name}</p>

                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <button type='button'
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Mother Occupation" ? "" : "Mother Occupation"))}
          >
            <p className="w-44 truncate text-sm">{motherOccupation ? motherOccupation : "Mother's Occupation"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Mother Occupation' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Mother’s Occupation</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
              {motherOccupations.map((occupation) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setMotherOccupation(occupation.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >{occupation.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-10 flex">
          {/* <div className="relative w-full">
            <input
              className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
              type="number"
              value={siblings}
              readOnly
            />
            <div
              className="absolute right-0 top-1 bottom-0 px-4 text-gray-400"
              onClick={handleIncrement}
            >
              <KeyboardArrowUpRoundedIcon/>
            </div>
            <div
              className="absolute right-0 bottom-1 px-4 text-gray-400"
              onClick={handleDecrement}
              disabled={siblings === 0}
            >
              <KeyboardArrowDownRoundedIcon />
            </div>
          </div> */}
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm"
            type="number"
            required
            placeholder="How Many Siblings ?"
            value={siblings}
            onChange={(e) => setSiblings(e.target.value)}
          ></input>
        </div>

        <button
          onClick={handleData}
          className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-36"
        >
          Continue
        </button>

        <div className="flex items-center justify-between"></div>
      </form>
      <div className="flex justify-center mt-[2.8rem] mb-3 sm:mb-10">
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

export default SixthForm;

