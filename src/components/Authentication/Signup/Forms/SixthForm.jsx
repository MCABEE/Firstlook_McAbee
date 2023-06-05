import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext, useState } from "react";
import { registrationContext } from "../../../../context/formContext";
import { fatherOccupations, motherOccupations, parentEducations } from '../../../../lib/constants';
import { registerFamily } from '../../../../api';

const SixthForm = () => {

  const [isOpen, setIsOpen] = useState("");
  const [fatherName, setFatherName] = useState("")
  const [motherName, setMotherName] = useState("")
  const [fatherEducation, setFatherEducation] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [motherEducation, setMotherEducation] = useState("");
  const [motherOccupation, setMotherOccupation] = useState("");
  const [siblings, setSiblings] = useState("How Many Siblings ?");

  const { page, setPage } = useContext(registrationContext)

  const handleData = async (e) => {
    e.preventDefault()
    await registerFamily(fatherName, motherName, fatherEducation, motherEducation, fatherOccupation, motherOccupation, siblings)
      .then(() => {
        setPage(page === 10 ? 0 : page + 1);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <form className="w-72 ml-12">

        <div className="mb-6">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Father Name"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          ></input>
        </div>

        <div className="mb-6 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Fathers Education")}
          >
            <p className="w-44 truncate text-sm">{fatherEducation ? fatherEducation : "Father's Education"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Fathers Education' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
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
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Father’s Occupation")}
          >
            <p className="w-44 truncate text-sm">{fatherOccupation ? fatherOccupation : "Father’s Occupation"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Father’s Occupation' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
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
            placeholder="Mother Name"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
          ></input>
        </div>

        <div className="mb-6 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Mother Education")}
          >
            <p className="w-44 truncate text-sm">{motherEducation ? motherEducation : "Mother's Education"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Mother Education' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
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
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Mother Occupation")}
          >
            <p className="w-44 truncate text-sm">{motherOccupation ? motherOccupation : "Mother's Occupation"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Mother Occupation' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
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
    </>
  );
};

export default SixthForm;

