import { useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";

const ThirdForm = () => {
  const [isOpen, setIsOpen] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("")
  const [bodyType, setBodyType] = useState("")
  const [physicalStatus, setPhysicalStatus] = useState("")

  const { page, setPage } = useContext(registrationContext)

  const handleNext = () => {
    setPage(page === 10 ? 0 : page + 1);
  };

  return (
    <>
      <form className="w-72 ml-12">

        <div className="mb-6 flex">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            type="text"
            placeholder="Religion"
          ></input>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
        </div>

        <div className="mb-6 flex">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            type="text"
            placeholder="Caste"
          ></input>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
          </div>
        </div>

        <div className="mb-6 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
            onClick={() => setIsOpen("Marital Status")}
          >
            <p className="w-44 truncate text-sm">{maritalStatus ? maritalStatus : "Marital Status"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Marital Status' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setMaritalStatus("Unmarried")
                  setIsOpen("")
                }}
              >
                <p className="mr-2" >Unmarried</p>

              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setMaritalStatus("Divorced")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Divorced</p>

              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setMaritalStatus("Widow / Widower")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Widow / Widower</p>

              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setMaritalStatus("Separated")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Separated</p>

              </li>

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            type="text"
            placeholder="Height"
          ></input>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
        </div>

        <div className="mb-6 flex">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            type="text"
            placeholder="Weight"
          ></input>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
        </div>

        <div className="mb-6 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
            onClick={() => setIsOpen("Body Type")}
          >
            <p className="w-44 truncate text-sm">{bodyType ? bodyType : "Body Type"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Body Type' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setBodyType("Slim")
                  setIsOpen("")
                }}
              >
                <p className="mr-2" >Slim</p>

              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setBodyType("Average")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Average</p>

              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setBodyType("Athletic")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Athletic</p>

              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setBodyType("Plus Size")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Plus Size</p>

              </li>

            </ul>
          ) : " "}
        </div>

        <div className="mb-10 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
            onClick={() => setIsOpen("Physical Status")}
          >
            <p className="w-44 truncate text-sm">{physicalStatus ? physicalStatus : "Physical Status"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Physical Status' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setPhysicalStatus("Normal")
                  setIsOpen("")
                }}
              >
                <p className="mr-2" >Normal</p>

              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setPhysicalStatus("Disabled")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Disabled</p>

              </li>

            </ul>
          ) : " "}
        </div>

        <button
          onClick={handleNext}
          className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-36"
        >
          Continue
        </button>

        <div className="flex items-center justify-between"></div>
      </form >
    </>
  );
};

export default ThirdForm;
