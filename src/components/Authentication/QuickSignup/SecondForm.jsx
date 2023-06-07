import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import { registrationContext } from '../../../context/formContext';
import { getAllCountries, getAllDesignations, getAllDistricts, getAllJobStreams, getAllMotherToungues, getAllStates, quickSignupNative } from '../../../api';
import { businessDesignations, jobCategories } from '../../../lib/constants';

const SecondForm = () => {

  const [isOpen, setIsOpen] = useState("");
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [stateID, setStateID] = useState(null)
  const [district, setDistrict] = useState("")
  const [motherToungue, setMotherToungue] = useState("")
  const [jobCategory, setJobCategory] = useState("")
  const [jobType, setJobType] = useState("")
  const [designation, setDesignation] = useState("")
  const [stream, setStream] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [department, setDepartment] = useState("")

  const [nCountries, setNCountries] = useState([])
  const [nStates, setNStates] = useState([])
  const [nDistricts, setNDistricts] = useState([])
  const [nMotherToungue, setNMotherToungue] = useState([])
  const [nDesignation, setNDesignation] = useState([])
  const [nStream, setNStream] = useState([])

  const { page, setPage } = useContext(registrationContext)

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
    await getAllDistricts(stateID)
      .then((result) => {
        console.log(result);
        setNDistricts(result.data.districts)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getMotherToungue = async () => {
    await getAllMotherToungues(stateID)
      .then((result) => {
        console.log(result);
        setNMotherToungue(result.data.motherToungue)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleData = async (e) => {
    e.preventDefault()
    await quickSignupNative(country, state, district, motherToungue, jobCategory, jobType, designation, stream, companyName, department)
      .then(() => {
        setPage(page === 10 ? 0 : page + 1);
      })
      .catch((err) => {
        console.log(err);
      })
  }

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

  useEffect(() => {
    getJobStreams()
    getDesignations()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stream])

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

  return (
    <>
      <form className="w-72 ml-12">

        <div className="mb-6 flex">
          <div
            className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Country")}
          >
            <p className="w-44 mt-3 ml-2 truncate text-sm">{country ? country : "Country"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Country' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              {nCountries.map((country) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setCountry(country?.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2">{country?.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <div
            className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("State")}
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
                      setStateID(state?._id)
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
            onClick={() => setIsOpen("District")}
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
            onClick={() => setIsOpen("Mother Toungue")}
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
            <ul className="absolute z-10 w-72 ml-12 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
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
                <ul className="absolute z-10 w-72 ml-12 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

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
                <ul className="absolute z-10 w-72 ml-12 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

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
                <ul className="absolute z-10 w-72 ml-12 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

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
                <ul className="absolute z-10 w-72 ml-12 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

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
                <ul className="absolute z-10 w-72 ml-12 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

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
                <ul className="absolute z-10 w-72 ml-12 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

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
                <ul className="absolute z-10 w-72 ml-12 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

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

        <button
          onClick={handleData}
          className="bg-[#F92739] rounded-xl text-white py-2 px-10 mt-4 ml-36"
        >
          Continue
        </button>

        <div className="flex items-center justify-between"></div>
      </form>
    </>
  );
};

export default SecondForm;
