import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const FifthForm = ({ formValues, onChange }) => {

  const [isOpen, setIsOpen] = useState("");
  const [annualIncome, setAnnualIncome] = useState("")

  const [selectedOption, setSelectedOption] = useState(false);

  const handleToggle = () => {
    setSelectedOption(!selectedOption);
  };
  return (
    <>
      <form className="w-72 ml-12">

        <label className="flex items-center relative w-max cursor-pointer select-none">
          <span className="text-sm font-oxygen mr-24">Are you working now ? </span>
          <input type="checkbox" className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-xl bg-red-500" checked={selectedOption}
            onChange={handleToggle} />
          <span className="absolute font-medium text-xs uppercase right-1 text-white"> {selectedOption ? '' : 'NO'} </span>
          <span className="absolute font-medium text-xs uppercase right-8 text-white"> {selectedOption ? 'Yes' : ''} </span>
          <span className="w-5 h-5 right-8 absolute rounded-full transform transition-transform bg-gray-200" />
        </label>

        <style jsx>{`
        input:checked {
          background-color: #22c55e;
        }

        input:checked ~ span:last-child {
          --tw-translate-x: 1.75rem;
        }
      `}</style>

        <p className="font-medium text-sm mt-8">
          Add your Work Location
        </p>

        <div className="mb-6 mt-4 flex">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="name"
            name="name"
            type="text"
            placeholder="Select Country"
            onChange={onChange}
            value={formValues.name}
          ></input>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
        </div>

        <div className="mb-6 mt-5">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="name"
            name="name"
            type="text"
            placeholder="State / Province"
            onChange={onChange}
            value={formValues.name}
          ></input>
        </div>

        <div className="mb-6 mt-5">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="name"
            name="name"
            type="text"
            placeholder="District / Area"
            onChange={onChange}
            value={formValues.name}
          ></input>
        </div>

        <div className="mb-6 mt-5">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="name"
            name="name"
            type="text"
            placeholder="City / Town"
            onChange={onChange}
            value={formValues.name}
          ></input>
        </div>

        <div className="mb-10 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
            onClick={() => setIsOpen("Annual Income")}
          >
            <p className="w-44 truncate text-sm">{annualIncome ? annualIncome : "Annual Income (Approx.)"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Annual Income' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setAnnualIncome("Less than 01 Lakh")
                  setIsOpen("")
                }}
              >
                <p className="mr-2" >Less than 01 Lakh</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setAnnualIncome("01 -03 Lakh")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">01 -03 Lakh</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setAnnualIncome("03 – 06 Lakh")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">03 – 06 Lakh</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setAnnualIncome("06 – 12 Lakh")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">06 – 12 Lakh</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setAnnualIncome("12 – 24 Lakh")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">12 – 24 Lakh</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setAnnualIncome("24 – 36 Lakh")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">24 – 36 Lakh</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setAnnualIncome("36 – 48 Lakh")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">36 – 48 Lakh</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setAnnualIncome("48 – 60 Lakh")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">48 – 60 Lakh</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setAnnualIncome("60 – 84 Lakh")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">60 – 84 Lakh</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setAnnualIncome("84 – 120 Lakh")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">84 – 120 Lakh</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setAnnualIncome("1.2 – 3 Cr")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">1.2 – 3 Cr</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setAnnualIncome("3 – 6 Cr")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">3 – 6 Cr</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setAnnualIncome("6 Cr Above")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">6 Cr Above</p>
              </li>

            </ul>
          ) : " "}
        </div>

        <div className="flex items-center justify-between"></div>
      </form >
    </>
  );
};

export default FifthForm;

