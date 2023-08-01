import { useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";
import { jobCategories } from "../../../../lib/constants";
import { useEffect } from "react";
import { getAllDesignations, getAllJobStreams, getEmployerDetails, registerOccupationCategory } from "../../../../api";
import { useDispatch, useSelector } from "react-redux";
import CircleIcon from '@mui/icons-material/Circle';
import { setUserData } from "../../../../Redux/Reducer/getUserData";

const FifthForm2 = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState("");
  const [jobCategory, setJobCategory] = useState(userData?.occupation?.jobCategory || "")
  const [jobType, setJobType] = useState(userData?.occupation?.jobType || "")
  const [designation, setDesignation] = useState(userData?.occupation?.designation || "")
  const [stream, setStream] = useState(userData?.occupation?.jobStream || "")
  const [companyName, setCompanyName] = useState(userData?.occupation?.companyName || "")
  const [employerName, setEmployerName] = useState(userData?.occupation?.employerName || "")
  const [search, setSearch] = useState("");

  const [nDesignation, setNDesignation] = useState([])
  const [nStream, setNStream] = useState([])
  const [nEmployerName, setNEmployerName] = useState([])

  const tempDesignation = []
  const tempEmployers = []

  const { page, setPage } = useContext(registrationContext)

  const searchData = (tempProduct) => {
    return search === ""
      ? tempProduct
      : tempProduct?.toLowerCase().includes(search)
  };

  nDesignation.map((data) => {
    tempDesignation.push(data?.name)
  })

  nEmployerName?.map((employer) => {
    tempEmployers.push(employer?.name)
  })

  const designationData = tempDesignation.filter(searchData)
  const employerData = tempEmployers.filter(searchData)

  const handleNext = () => {
    setPage(page === 10 ? 0 : page + 1);
  };

  const getDesignations = async () => {
    await getAllDesignations(jobCategory)
      .then((result) => {
        console.log(result);
        setNDesignation(result.data?.designation)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getJobStreams = async () => {
    await getAllJobStreams(jobCategory)
      .then((result) => {
        console.log(result);
        setNStream(result.data?.occupationStream)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getEmployers = async () => {
    await getEmployerDetails(jobCategory)
      .then((result) => {
        console.log(result);
        setNEmployerName(result.data?.occupationStream)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleData = async (e) => {
    e.preventDefault()
    await registerOccupationCategory(jobCategory, jobType, designation, stream, companyName, employerName)
      .then((data) => {
        dispatch(setUserData(data?.data?.userData))
        setPage(page === 10 ? 0 : page + 1);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getJobStreams()
    getDesignations()
    getEmployers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobCategory])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <form className="w-72 ml-3.5 sm:ml-12">

        <div className="mb-6 mt-4 flex">
          <div
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Job Category" ? "" : "Job Category"))}
            onBlur={() => setIsOpen(null)}
          >

            <p className="w-44 truncate text-sm">{jobCategory ? jobCategory : "Job Category ?"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Job Category' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Job Category</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
              {jobCategories.map((category) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setJobCategory(category.name)
                      setIsOpen("")
                      setJobType("")
                      setDesignation("")
                      setStream("")
                      setCompanyName("")
                      setEmployerName("")
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
              <input type="text"
                value={designation}
                onChange={(e) => {
                  let searchValue = e.target.value.toLocaleLowerCase();
                  setSearch(searchValue);
                  setDesignation(e.target.value);
                }}
                onClick={() => setIsOpen((prev) => (prev === "Designation" ? "" : "Designation"))}
                onBlur={() => setIsOpen(null)}
                placeholder="Enter Your Designation" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Designation' && designationData && designationData.length > 0 ? (
                <>
                  <ul className="absolute z-10 w-72 mt-14 max-h-56 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                    <li
                      className="px-4 py-2 cursor-pointer flex"
                    >
                      <p className="mr-2 font-semibold">Select Your Designation</p>
                    </li>
                    <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                    {designationData.map((data) => (
                      <>
                        <li
                          className="px-4 py-2 cursor-pointer flex"
                          onClick={() => {
                            setDesignation(data);
                            setIsOpen("");
                          }}
                        >
                          <p className="mr-2">{data}</p>
                        </li>
                      </>
                    ))}
                  </ul>
                </>
              ) : " "}
            </div>

            <div className="mb-6 mt-5 flex">
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
              <input type="text"
                value={designation}
                onChange={(e) => {
                  let searchValue = e.target.value.toLocaleLowerCase();
                  setSearch(searchValue);
                  setDesignation(e.target.value);
                }}
                onClick={() => setIsOpen((prev) => (prev === "Designation" ? "" : "Designation"))}
                onBlur={() => setIsOpen(null)}
                placeholder="Enter Your Designation" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Designation' && designationData && designationData.length > 0 ? (
                <>
                  <ul className="absolute z-10 w-72 mt-14 max-h-56 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                    <li
                      className="px-4 py-2 cursor-pointer flex"
                    >
                      <p className="mr-2 font-semibold">Select Your Designation</p>
                    </li>
                    <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                    {designationData.map((data) => (
                      <>
                        <li
                          className="px-4 py-2 cursor-pointer flex"
                          onClick={() => {
                            setDesignation(data);
                            setIsOpen("");
                          }}
                        >
                          <p className="mr-2">{data}</p>
                        </li>
                      </>
                    ))}
                  </ul>
                </>
              ) : " "}
            </div>
            <div className="mb-6 mt-5 flex">
              <div
                className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen((prev) => (prev === "Job Type" ? "" : "Job Type"))}
                onBlur={() => setIsOpen(null)}
              >

                <p className="w-44 truncate text-sm">{jobType ? jobType : "Job Type"}</p>
              </div>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Job Type' ? (
                <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                  <li
                    className="px-4 py-2 cursor-pointer flex"
                  >
                    <p className="mr-2 font-semibold">Select Your Job Type</p>
                  </li>
                  <hr className='border-gray-400 border-1 w-11/12 mx-auto' />

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
              <input type="text"
                value={employerName}
                onChange={(e) => {
                  let searchValue = e.target.value.toLocaleLowerCase();
                  setSearch(searchValue);
                  setEmployerName(e.target.value);
                }}
                onClick={() => setIsOpen((prev) => (prev === "Employer" ? "" : "Employer"))}
                onBlur={() => setIsOpen(null)}
                placeholder="Department / Employer / Authority" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Employer' && employerData && employerData.length > 0 ? (
                <>
                  <ul className="absolute z-10 w-72 mt-14 max-h-56 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                    <li
                      className="px-4 py-2 cursor-pointer flex"
                    >
                      <p className="mr-2 font-semibold">Select Your Department</p>
                    </li>
                    <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                    {employerData.map((data) => (
                      <>
                        <li
                          className="px-4 py-2 cursor-pointer flex"
                          onClick={() => {
                            setEmployerName(data);
                            setIsOpen("");
                          }}
                        >
                          <p className="mr-2">{data}</p>
                        </li>
                      </>
                    ))}
                  </ul>
                </>
              ) : " "}
            </div>
          </>
        ) : jobCategory === "Private" ? (
          <>
            <div className="mb-6 mt-5 flex">
              <div
                className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen((prev) => (prev === "Job Stream" ? "" : "Job Stream"))}
                onBlur={() => setIsOpen(null)}
              >

                <p className="w-44 mt-3 truncate text-sm">{stream ? stream : "Job Stream"}</p>
              </div>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Job Stream' ? (
                <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                  <li
                    className="px-4 py-2 cursor-pointer flex"
                  >
                    <p className="mr-2 font-semibold">Select Your Job Stream</p>
                  </li>
                  <hr className='border-gray-400 border-1 w-11/12 mx-auto' />

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
              <input type="text"
                value={designation}
                onChange={(e) => {
                  let searchValue = e.target.value.toLocaleLowerCase();
                  setSearch(searchValue);
                  setDesignation(e.target.value);
                }}
                onClick={() => setIsOpen((prev) => (prev === "Designation" ? "" : "Designation"))}
                onBlur={() => setIsOpen(null)}
                placeholder="Enter Your Designation" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Designation' && designationData && designationData.length > 0 ? (
                <>
                  <ul className="absolute z-10 w-72 mt-14 max-h-56 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                    <li
                      className="px-4 py-2 cursor-pointer flex"
                    >
                      <p className="mr-2 font-semibold">Select Your Designation</p>
                    </li>
                    <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                    {designationData.map((data) => (
                      <>
                        <li
                          className="px-4 py-2 cursor-pointer flex"
                          onClick={() => {
                            setDesignation(data);
                            setIsOpen("");
                          }}
                        >
                          <p className="mr-2">{data}</p>
                        </li>
                      </>
                    ))}
                  </ul>
                </>
              ) : " "}
            </div>
            <div className="mb-6 mt-5 flex">
              <input type="text"
                value={companyName}
                onChange={(e) => {
                  let searchValue = e.target.value.toLocaleLowerCase();
                  setSearch(searchValue);
                  setCompanyName(e.target.value);
                }}
                onClick={() => setIsOpen((prev) => (prev === "Employer" ? "" : "Employer"))}
                onBlur={() => setIsOpen(null)}
                placeholder="Employer / Company  Name" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Employer' && employerData && employerData.length > 0 ? (
                <>
                  <ul className="absolute z-10 w-72 mt-14 max-h-56 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                    <li
                      className="px-4 py-2 cursor-pointer flex"
                    >
                      <p className="mr-2 font-semibold">Select Your Employer / Company  Name</p>
                    </li>
                    <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                    {employerData.map((data) => (
                      <>
                        <li
                          className="px-4 py-2 cursor-pointer flex"
                          onClick={() => {
                            setCompanyName(data);
                            setIsOpen("");
                          }}
                        >
                          <p className="mr-2">{data}</p>
                        </li>
                      </>
                    ))}
                  </ul>
                </>
              ) : " "}
            </div>
          </>
        ) : jobCategory === "Self Employed" ? (
          <>
            <div className="mb-6 mt-5 flex">
              <div
                className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen((prev) => (prev === "Job Stream" ? "" : "Job Stream"))}
                onBlur={() => setIsOpen(null)}
              >

                <p className="w-44 mt-3 truncate text-sm">{stream ? stream : "Job Stream"}</p>
              </div>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Job Stream' ? (
                <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                  <li
                    className="px-4 py-2 cursor-pointer flex"
                  >
                    <p className="mr-2 font-semibold">Select Your Job Stream</p>
                  </li>
                  <hr className='border-gray-400 border-1 w-11/12 mx-auto' />

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
              <input type="text"
                value={designation}
                onChange={(e) => {
                  let searchValue = e.target.value.toLocaleLowerCase();
                  setSearch(searchValue);
                  setDesignation(e.target.value);
                }}
                onClick={() => setIsOpen((prev) => (prev === "Designation" ? "" : "Designation"))}
                onBlur={() => setIsOpen(null)}
                placeholder="Enter Your Designation" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Designation' && designationData && designationData.length > 0 ? (
                <>
                  <ul className="absolute z-10 w-72 mt-14 max-h-56 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                    <li
                      className="px-4 py-2 cursor-pointer flex"
                    >
                      <p className="mr-2 font-semibold">Select Your Designation</p>
                    </li>
                    <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                    {designationData.map((data) => (
                      <>
                        <li
                          className="px-4 py-2 cursor-pointer flex"
                          onClick={() => {
                            setDesignation(data);
                            setIsOpen("");
                          }}
                        >
                          <p className="mr-2">{data}</p>
                        </li>
                      </>
                    ))}
                  </ul>
                </>
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
      <div className={
        jobCategory === 'Business' ? "flex justify-center mt-[20.4rem] mb-3 sm:mb-10" :
          jobCategory === "Government" ? "flex justify-center mt-[16rem] mb-3 sm:mb-10"
            : jobCategory === "Private" ? "flex justify-center mt-[16rem] mb-3 sm:mb-10"
              : jobCategory === "Self Employed" ? "flex justify-center mt-[20.4rem] mb-3 sm:mb-10"
                : "flex justify-center mt-[29.4rem] mb-3 sm:mb-10"
      }>
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

export default FifthForm2;

