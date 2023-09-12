import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import { registrationContext } from '../../../context/formContext';
import { getAllCountries, getAllDesignations, getAllDistricts, getAllJobStreams, getAllMotherToungues, getAllStates, getEmployerDetails, quickSignupNative } from '../../../api';
import { jobCategories } from '../../../lib/constants';
import { useSelector } from "react-redux";
import CircleIcon from '@mui/icons-material/Circle';
import { Toaster, toast } from 'react-hot-toast';

const SecondForm = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)

  const [isOpen, setIsOpen] = useState("");
  const [country, setCountry] = useState(userData?.native?.country || "")
  const [state, setState] = useState(userData?.native?.state || "")
  const [district, setDistrict] = useState(userData?.native?.district || "")
  const [motherToungue, setMotherToungue] = useState(userData?.native?.motherTongue || "")
  const [jobCategory, setJobCategory] = useState(userData?.occupation?.jobCategory || "")
  const [jobType, setJobType] = useState(userData?.occupation?.jobType || "")
  const [designation, setDesignation] = useState(userData?.occupation?.designation || "")
  const [stream, setStream] = useState(userData?.occupation?.jobStream || "")
  const [companyName, setCompanyName] = useState(userData?.occupation?.companyName || "")
  const [employerName, setEmployerName] = useState(userData?.occupation?.employerName || "")
  const [search, setSearch] = useState("");
  const [option, setOption] = useState(userData?.occupation?.hasJob || "No")
  const [selectedOption, setSelectedOption] = useState(false);

  const [nCountries, setNCountries] = useState([])
  const [nStates, setNStates] = useState([])
  const [nDistricts, setNDistricts] = useState([])
  const [nMotherToungue, setNMotherToungue] = useState([])
  const [nDesignation, setNDesignation] = useState([])
  const [nStream, setNStream] = useState([])
  const [nEmployerName, setNEmployerName] = useState([])

  const tempDesignation = []
  const tempEmployers = []
  const tempCountry = []

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

  nCountries.map((data) => {
    tempCountry.push(data?.name)
  })

  const designationData = tempDesignation.filter(searchData)
  const employerData = tempEmployers.filter(searchData)
  const countryData = tempCountry.filter(searchData)

  const getCountry = async () => {
    await getAllCountries()
      .then((result) => {
        console.log(result);
        setNCountries(result.data.countries)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getStates = async () => {
    await getAllStates(country)
      .then((result) => {
        console.log(result);
        setNStates(result.data.states)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getDistricts = async () => {
    await getAllDistricts(state, country)
      .then((result) => {
        console.log(result);
        setNDistricts(result.data.districts)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getMotherToungue = async () => {
    await getAllMotherToungues(state, country)
      .then((result) => {
        console.log(result);
        setNMotherToungue(result.data.motherToungue)
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

  const handleToggle = () => {
    setSelectedOption(!selectedOption);
    if (!selectedOption) {
      setOption("Yes")
    } else {
      setOption("No")
    }
  };

  const handleData = async (e) => {
    e.preventDefault()

    if (country === "") {
      toast.error("select country")
    }

    else if (state === "") {
      toast.error("select State")
    }

    else if (district === "") {
      toast.error("select District")
    }

    else if (motherToungue === "") {
      toast.error("select Mother Toungue")
    }

    else if (option === 'Yes' && jobCategory === '') {
      toast.error("Select Job Category")
    }

    else if (option === 'Yes' && jobCategory === 'Business' && designation === '') {
      toast.error("Select Designation")
    }

    else if (option === 'Yes' && jobCategory === 'Business' && companyName.length < 6) {
      toast.error("Company Name requires a minimum of 6 characters")
    }

    else if (option === 'Yes' && jobCategory === 'Government' && designation === '') {
      toast.error("Select Designation")
    }

    else if (option === 'Yes' && jobCategory === 'Government' && jobType === '') {
      toast.error("Select Job Type")
    }

    else if (option === 'Yes' && jobCategory === 'Government' && employerName === '') {
      toast.error("Select Designation")
    }

    else if (option === 'Yes' && jobCategory === 'Private' && stream === '') {
      toast.error("Select Stream")
    }

    else if (option === 'Yes' && jobCategory === 'Private' && designation === '') {
      toast.error("Select Designation")
    }

    else if (option === 'Yes' && jobCategory === 'Private' && companyName === '') {
      toast.error("Select Designation")
    }

    else if (option === 'Yes' && jobCategory === 'Self Employed' && stream === '') {
      toast.error("Select Stream")
    }

    else if (option === 'Yes' && jobCategory === 'Self Employed' && designation === '') {
      toast.error("Select Designation")
    }

    else {
      await quickSignupNative(country, state, district, motherToungue, jobCategory, jobType, designation, stream, companyName, employerName)
        .then(() => {
          setPage(page === 10 ? 0 : page + 1);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  const getDesignations = async () => {
    await getAllDesignations(jobCategory)
      .then((result) => {
        console.log(result);
        setNDesignation(result.data.designation)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getJobStreams = async () => {
    await getAllJobStreams(jobCategory)
      .then((result) => {
        console.log(result);
        setNStream(result.data.occupationStream)
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
    getCountry()
    getStates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country])

  useEffect(() => {
    getMotherToungue()
    getDistricts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <form className="w-72 ml-3.5 sm:ml-12">
        <Toaster />
        <p className='text-sm text-[#4D4D4D]'>
          I am a Citizen of
        </p>
        <div className="mb-6 mt-5 flex">
          <input type="text"
            value={country}
            onChange={(e) => {
              let searchValue = e.target.value.toLocaleLowerCase();
              setSearch(searchValue);
              setCountry(e.target.value);
            }}
            onClick={() => setIsOpen((prev) => (prev === "Country" ? "" : "Country"))}
            placeholder="Enter Country" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-6 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Country' ? (
            <>
              <ul className="absolute z-10 w-72 mt-14 max-h-48 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                <li
                  className="px-4 py-2 cursor-pointer flex"
                >
                  <p className="mr-2 font-semibold">Select Your Country</p>
                </li>
                <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                {countryData.map((data) => (
                  <>
                    <li
                      className="px-4 py-2 cursor-pointer flex"
                      onClick={() => {
                        setCountry(data);
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

        <div className="mb-6 flex">
          <div
            className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "State" ? "" : "State"))}
          >
            <p className="w-44 mt-3 ml-2 truncate text-sm">{state ? state : "State"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'State' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              {nStates?.map((state) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setState(state?.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2">{state?.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <div
            className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "District" ? "" : "District"))}
          >
            <p className="w-44 mt-3 ml-2 truncate text-sm">{district ? district : "District"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'District' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              {nDistricts?.map((district) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setDistrict(district?.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2">{district?.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <div
            className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Mother Toungue" ? "" : "Mother Toungue"))}
          >
            <p className="w-44 mt-3 ml-2 truncate text-sm">{motherToungue ? motherToungue : "Mother Toungue"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Mother Toungue' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              {nMotherToungue?.map((lang) => (
                lang?.languages?.map((langs) => (
                  <>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                      onClick={() => {
                        setMotherToungue(langs)
                        setIsOpen("")
                      }}
                    >
                      <p className="mr-2">{langs}</p>
                    </li>
                  </>
                ))
              ))}

            </ul>
          ) : " "}
        </div>

        <div className='flex mt-10 ml-1.5'>
          <label className=" relative w-max cursor-pointer select-none mb-7">
            <span className="text-sm font-oxygen">Are you working now ? </span>
          </label>
          <input type="checkbox" className="ml-[5.5rem] appearance-none transition-colors cursor-pointer w-14 h-7 rounded-xl bg-red-500" checked={selectedOption}
            onChange={handleToggle} />
          <span className="pointer-events-none absolute font-medium text-xs uppercase ml-[16rem] mt-1.5 text-white"> {selectedOption ? '' : 'No'} </span>
          <span className="pointer-events-none absolute font-medium text-xs uppercase ml-[14.6rem] mt-1.5 text-white"> {selectedOption ? 'Yes' : ''} </span>
          <span className="pointer-events-none w-5 h-5 ml-[14.4rem] mt-1 absolute rounded-full transform transition-transform bg-gray-200" />
        </div>

        <style>{`
        input:checked {
          background-color: #22c55e;
        }

        input:checked ~ span:last-child {
          --tw-translate-x: 1.75rem;
        }
      `}</style>

        {option === 'Yes' ?
          <>
            <div className="mb-6 mt-4 flex">
              <button type="button"
                className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen((prev) => (prev === "Job Category" ? "" : "Job Category"))}

              >

                <p className="w-44 truncate text-sm">{jobCategory ? jobCategory : "Job Category ?"}</p>
              </button>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
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
                    className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm text-[#4D4D4D]"
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
                  <button type="button"
                    className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                    onClick={() => setIsOpen((prev) => (prev === "Job Type" ? "" : "Job Type"))}
                  >

                    <p className="w-44 truncate text-sm">{jobType ? jobType : "Job Type"}</p>
                  </button>
                  <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
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
          </>
          : null}

        <button
          onClick={handleData}
          className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-36"
        >
          Continue
        </button>

        <div className="flex items-center justify-between"></div>
      </form>
      {option === 'No' ?
        <div className="flex justify-center mb-3 sm:mb-10 mt-[18.5rem]">
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
            page === 2
              ? "text-[#F92739] font-medium"
              : "text-gray-300 cursor-pointer"
          } >
            <CircleIcon sx={{ height: "8px" }} />
          </div>
        </div>
        : ""
      }
      {
        <div className={
          jobCategory === 'Business' && option === "Yes" ? "flex justify-center mt-[4.4rem] mb-3" :
            jobCategory === "Government" && option === "Yes" ? "flex justify-center mb-3"
              : jobCategory === "Private" && option === "Yes" ? "flex justify-center mb-3"
                : jobCategory === "Self Employed" && option === "Yes" ? "flex justify-center mt-[4.4rem] mb-3"
                  : "hidden"
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
            page === 2
              ? "text-[#F92739] font-medium"
              : "text-gray-300 cursor-pointer"
          } >
            <CircleIcon sx={{ height: "8px" }} />
          </div>
        </div>
      }
    </>
  );
};

export default SecondForm;
