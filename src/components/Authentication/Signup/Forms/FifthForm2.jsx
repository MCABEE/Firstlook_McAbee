import { useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";
import { jobCategories } from "../../../../lib/constants";

const FifthForm2 = () => {
  const [isOpen, setIsOpen] = useState("");
  const [jobCategory, setJobCategory] = useState("")
  const [jobType, setJobType] = useState("")

  const { page, setPage } = useContext(registrationContext)

  const handleNext = () => {
    setPage(page === 10 ? 0 : page + 1);
  };

  return (
    <>
      <form className="w-72 ml-12">

        <div className="mb-6 mt-4 flex">

          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Job Category")}
          >
            <p className="w-44 truncate text-sm">{jobCategory ? jobCategory : "Job Category ?"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Job Category' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              {jobCategories.map((category) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setJobCategory(category.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >{category.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        {jobCategory === 'Business' ? (
          <><div className="mb-6 mt-5 flex">
            <input
              className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
              type="text"
              placeholder="Your Designation"
            ></input>
            <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
              <KeyboardArrowDownRoundedIcon />
            </div>
          </div><div className="mb-6 mt-5">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
                type="text"
                placeholder="Company Name"
              ></input>
            </div></>
        ) : jobCategory === "Government" ? (
          <>
            <div className="mb-6 mt-5 flex">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
                type="text"
                placeholder="Your Designation / Post"
              ></input>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
                <KeyboardArrowDownRoundedIcon />
              </div>
            </div>
            <div className="mb-6 mt-5 flex">
              <button
                type="button"
                className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen("Job Type")}
              >
                <p className="w-44 truncate text-sm">{jobType ? jobType : "Job Type"}</p>
              </button>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Job Type' ? (
                <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setJobType("Permanent")
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >Permanent</p>
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setJobType("Temporary")
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2">Temporary</p>
                  </li>

                </ul>
              ) : " "}
            </div>
            <div className="mb-6 mt-5 flex">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
                type="text"
                placeholder="Department / Authority"
              ></input>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
                <KeyboardArrowDownRoundedIcon />
              </div>
            </div>
          </>
        ) : jobCategory === "Private" ? (
          <>
            <div className="mb-6 mt-5 flex">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
                type="text"
                placeholder="Job Stream"
              ></input>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
                <KeyboardArrowDownRoundedIcon />
              </div>
            </div>
            <div className="mb-6 mt-5">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
                type="text"
                placeholder="Your Designation"
              ></input>
            </div>
            <div className="mb-6 mt-5">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
                type="text"
                placeholder="Company Name"
              ></input>
            </div>
          </>
        ) : jobCategory === "Self Employed" ? (
          <>
            <div className="mb-6 mt-5 flex">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
                type="text"
                placeholder="Job Stream"
              ></input>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
                <KeyboardArrowDownRoundedIcon />
              </div>
            </div>
            <div className="mb-6 mt-5">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
                type="text"
                placeholder="Your Designation"
              ></input>
            </div>
          </>
        ) : ""}

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

export default FifthForm2;

