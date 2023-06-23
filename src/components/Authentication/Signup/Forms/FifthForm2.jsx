import { useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";
import { businessDesignations, jobCategories } from "../../../../lib/constants";
import { useEffect } from "react";
import { getAllDesignations, getAllJobStreams, registerOccupationCategory } from "../../../../api";
import { useSelector } from "react-redux";

const FifthForm2 = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)

  const [isOpen, setIsOpen] = useState("");
  const [jobCategory, setJobCategory] = useState(userData?.occupation?.jobCategory || "")
  const [jobType, setJobType] = useState(userData?.occupation?.jobType || "")
  const [designation, setDesignation] = useState(userData?.occupation?.designation || "")
  const [stream, setStream] = useState(userData?.occupation?.jobStream || "")
  const [companyName, setCompanyName] = useState(userData?.occupation?.companyName || "")
  const [department, setDepartment] = useState(userData?.occupation?.department || "")

  const [nDesignation, setNDesignation] = useState([])
  const [nStream, setNStream] = useState([])

  const { page, setPage } = useContext(registrationContext)

  const handleNext = () => {
    setPage(page === 10 ? 0 : page + 1);
  };

  const getDesignations = async () => {
    await getAllDesignations(stream)
      .then((result) => {
        console.log(result);
        setNDesignation(result.data.designation)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getJobStreams = async () => {
    await getAllJobStreams()
      .then((result) => {
        console.log(result);
        setNStream(result.data.occupationStream)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleData = async (e) => {
    e.preventDefault()
    await registerOccupationCategory(jobCategory, jobType, designation, stream, companyName, department)
      .then(() => {
        setPage(page === 10 ? 0 : page + 1);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getJobStreams()
    getDesignations()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stream])


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
          <>
            <div className="mb-6 mt-5 flex">
              <div
                className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen("Designation")}
              >
                <p className="w-44 mt-3 truncate text-sm">{designation ? designation : "Your Designation"}</p>
              </div>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Designation' ? (
                <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

                  {businessDesignations?.map((designation) => (
                    <>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                        onClick={() => {
                          setDesignation(designation?.name)
                          setIsOpen("")
                        }}
                      >
                        <p className="mr-2">{designation?.name}</p>
                      </li>
                    </>
                  ))}

                </ul>
              ) : " "}
            </div>
            <div className="mb-6 mt-5">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm"
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              ></input>
            </div>
          </>
        ) : jobCategory === "Government" ? (
          <>
            <div className="mb-6 mt-5 flex">
              <div
                className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen("Designation")}
              >
                <p className="w-44 mt-3 truncate text-sm">{designation ? designation : "Your Designation / Post"}</p>
              </div>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Designation' ? (
                <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

                  {nDesignation?.map((designation) => (
                    <>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                        onClick={() => {
                          setDesignation(designation?.name)
                          setIsOpen("")
                        }}
                      >
                        <p className="mr-2">{designation?.name}</p>
                      </li>
                    </>
                  ))}

                </ul>
              ) : " "}
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
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm"
                type="text"
                placeholder="Department / Authority"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              ></input>
            </div>
          </>
        ) : jobCategory === "Private" ? (
          <>
            <div className="mb-6 mt-5 flex">
              <div
                className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen("Job Stream")}
              >
                <p className="w-44 mt-3 truncate text-sm">{stream ? stream : "Job Stream"}</p>
              </div>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Job Stream' ? (
                <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

                  {nStream?.map((stream) => (
                    <>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                        onClick={() => {
                          setStream(stream?.name)
                          setIsOpen("")
                        }}
                      >
                        <p className="mr-2">{stream?.name}</p>
                      </li>
                    </>
                  ))}
                </ul>
              ) : " "}
            </div>
            <div className="mb-6 mt-5 flex">
              <div
                className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen("Designation")}
              >
                <p className="w-44 mt-3 truncate text-sm">{designation ? designation : "Your Designation / Post"}</p>
              </div>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Designation' ? (
                <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

                  {nDesignation?.map((designation) => (
                    <>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                        onClick={() => {
                          setDesignation(designation?.name)
                          setIsOpen("")
                        }}
                      >
                        <p className="mr-2">{designation?.name}</p>
                      </li>
                    </>
                  ))}

                </ul>
              ) : " "}
            </div>
            <div className="mb-6 mt-5">
              <input
                className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm"
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              ></input>
            </div>
          </>
        ) : jobCategory === "Self Employed" ? (
          <>
            <div className="mb-6 mt-5 flex">
              <div
                className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen("Job Stream")}
              >
                <p className="w-44 mt-3 truncate text-sm">{stream ? stream : "Job Stream"}</p>
              </div>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Job Stream' ? (
                <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

                  {nStream?.map((stream) => (
                    <>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                        onClick={() => {
                          setStream(stream?.name)
                          setIsOpen("")
                        }}
                      >
                        <p className="mr-2">{stream?.name}</p>
                      </li>
                    </>
                  ))}
                </ul>
              ) : " "}
            </div>
            <div className="mb-6 mt-5 flex">
              <div
                className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen("Designation")}
              >
                <p className="w-44 mt-3 truncate text-sm">{designation ? designation : "Your Designation / Post"}</p>
              </div>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Designation' ? (
                <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

                  {nDesignation?.map((designation) => (
                    <>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                        onClick={() => {
                          setDesignation(designation?.name)
                          setIsOpen("")
                        }}
                      >
                        <p className="mr-2">{designation?.name}</p>
                      </li>
                    </>
                  ))}

                </ul>
              ) : " "}
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
            onClick={handleData}
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

