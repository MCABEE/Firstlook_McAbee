import { useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const FifthForm2 = ({ formValues, onChange }) => {
  const [isOpen, setIsOpen] = useState("");
  const [jobCategory, setJobCategory] = useState("")
  const [jobType, setJobType] = useState("")

  return (
    <>
      <form className="w-72 ml-12">

        <div className="mb-6 mt-4 flex">

          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
            onClick={() => setIsOpen("Job Category")}
          >
            <p className="w-44 truncate text-sm">{jobCategory ? jobCategory : "Job Category ?"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Job Category' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setJobCategory("Business")
                  setIsOpen("")
                }}
              >
                <p className="mr-2" >Business</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setJobCategory("Government")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Government</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setJobCategory("Private")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Private</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setJobCategory("Self Employed")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Self Employed</p>
              </li>

            </ul>
          ) : " "}
        </div>

        {jobCategory === 'Business' ? (
          <><div className="mb-6 mt-5 flex">
            <input
              className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
              id="name"
              name="name"
              type="text"
              placeholder="Your Designation"
              onChange={onChange}
              value={formValues.name}
            ></input>
            <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
              <KeyboardArrowDownRoundedIcon />
            </div>
          </div><div className="mb-6 mt-5">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
                id="name"
                name="name"
                type="text"
                placeholder="Company Name"
                onChange={onChange}
                value={formValues.name}
              ></input>
            </div></>
        ) : jobCategory === "Government" ? (
          <>
            <div className="mb-6 mt-5 flex">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
                id="name"
                name="name"
                type="text"
                placeholder="Your Designation / Post"
                onChange={onChange}
                value={formValues.name}
              ></input>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
                <KeyboardArrowDownRoundedIcon />
              </div>
            </div>
            <div className="mb-6 mt-5 flex">
              <button
                type="button"
                className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
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
                    key=" "
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setJobType("Permanent")
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >Permanent</p>
                  </li>
                  <li
                    key=" "
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
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
                id="name"
                name="name"
                type="text"
                placeholder="Department / Authority"
                onChange={onChange}
                value={formValues.name}
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
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
                id="name"
                name="name"
                type="text"
                placeholder="Job Stream"
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
                placeholder="Your Designation"
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
                placeholder="Company Name"
                onChange={onChange}
                value={formValues.name}
              ></input>
            </div>
          </>
        ) : jobCategory === "Self Employed" ? (
          <>
            <div className="mb-6 mt-5 flex">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
                id="name"
                name="name"
                type="text"
                placeholder="Job Stream"
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
                placeholder="Your Designation"
                onChange={onChange}
                value={formValues.name}
              ></input>
            </div>
          </>
        ) : ""
        }


        <div className="flex items-center justify-between"></div>
      </form >
    </>
  );
};

export default FifthForm2;

