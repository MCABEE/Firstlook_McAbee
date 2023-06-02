import { useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";
import { annualIncomes } from "../../../../lib/constants";

const FifthForm = () => {

  const [isOpen, setIsOpen] = useState("");
  const [annualIncome, setAnnualIncome] = useState("")

  const [selectedOption, setSelectedOption] = useState(false);

  const handleToggle = () => {
    setSelectedOption(!selectedOption);
  };

  const { page, setPage } = useContext(registrationContext)

  const handleNext = () => {
    setPage(page === 10 ? 0 : page + 1);
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

        <style>{`
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
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Select Country"
          ></input>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
        </div>

        <div className="mb-6 mt-5">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="State / Province"
          ></input>
        </div>

        <div className="mb-6 mt-5">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="District / Area"
          ></input>
        </div>

        <div className="mb-6 mt-5">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="City / Town"
          ></input>
        </div>

        <div className="mb-10 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Annual Income")}
          >
            <p className="w-44 truncate text-sm">{annualIncome ? annualIncome : "Annual Income (Approx.)"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Annual Income' ? (

            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              {annualIncomes.map((income) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setAnnualIncome(income.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >{income.name}</p>
                  </li>
                </>
              ))
              }
            </ul>

          ) : " "}
        </div>

        <div className="flex">
          <button
            onClick={handleNext}
            className="rounded-xl text-[#A0A0A0] px-4 bg-white w-16 h-8 mt-1 text-sm border border-[#D8D8D8]"
          >
            Skip
          </button>

          <button
            onClick={handleNext}
            className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-20"
          >
            Continue
          </button>
        </div>

        <div className="flex items-center justify-between"></div>
      </form >
    </>
  );
};

export default FifthForm;