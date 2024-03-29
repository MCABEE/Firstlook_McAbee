import { useEffect, useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";
import { getAllAcademicStream, getAllColleges, getAllCountries, getAllCourse, getAllInstitutes, getAllUniversities, registerAcademic } from "../../../../api";
import { useSelector } from "react-redux";
import CircleIcon from '@mui/icons-material/Circle';
import { Toaster, toast } from "react-hot-toast";

const FourthForm = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)

  const [selectedOption, setSelectedOption] = useState(false);
  const [isOpen, setIsOpen] = useState("");
  const [passYear, setPassYear] = useState(userData?.academic?.passOut || "")
  const [option, setOption] = useState(userData?.academic?.pursueAny || "No")
  const [academicStream, setAcademicStream] = useState(userData?.academic?.academicStream || "")
  const [courseName, setCourseName] = useState(userData?.academic?.courseName || "")
  const [country, setCountry] = useState(userData?.academic?.country || "")
  const [university, setUniversity] = useState(userData?.academic?.university || "")
  const [institute, setInstitute] = useState(userData?.academic?.institute || "")
  const [college, setCollege] = useState(userData?.academic?.college || "")
  const [search, setSearch] = useState("");

  const [nAcademicStream, setNAcademicStream] = useState([])
  const [nCourseName, setNCourseName] = useState([])
  const [nCountries, setNCountries] = useState([])
  const [nUniversity, setNUniversity] = useState([])
  const [nInstitute, setNInstitute] = useState([])
  const [nCollege, setNCollege] = useState([])

  const { page, setPage } = useContext(registrationContext)
  const tempUniversity = []
  const tempCollege = []
  const tempInstitute = []
  const tempCourse = []
  const tempCountry = []

  nUniversity?.map((university) => (
    university?.institutions?.map((univ) => (
      tempUniversity.push(univ?.name)
    ))
  ))

  nInstitute?.map((institute) => (
    institute?.institutions?.map((institute) => (
      tempInstitute.push(institute?.name)
    ))
  ))

  nCollege?.map((college) => (
    college?.institutions?.map((college) => (
      tempCollege.push(college?.name)
    ))
  ))

  nCourseName?.map((course) => {
    tempCourse.push(course?.name)
  })

  nCountries.map((data) => {
    tempCountry.push(data?.name)
  })

  const searchData = (tempProduct) => {
    return search === ""
      ? tempProduct
      : tempProduct?.toLowerCase().includes(search)
  };

  const universityData = tempUniversity.filter(searchData)
  const instituteData = tempInstitute.filter(searchData)
  const collegeData = tempCollege.filter(searchData)
  const countryData = tempCountry.filter(searchData)
  const courseData = tempCourse.filter(searchData)

  const handleToggle = () => {
    setSelectedOption(!selectedOption);
    if (!selectedOption) {
      setOption("Yes")
    } else {
      setOption("No")
    }
  };

  // const handleNext = () => {
  //   setPage(page === 10 ? 0 : page + 1);
  // };

  const startYear = 1990;
  const endYear = 2023;
  const passOutYear = [];

  for (let year = startYear; year <= endYear; year++) {
    passOutYear.push(year);
  }

  const getCountry = async () => {
    await getAllCountries()
      .then((result) => {
        setNCountries(result.data.countries)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getAcademicStream = async () => {
    await getAllAcademicStream()
      .then((result) => {
        setNAcademicStream(result.data.academicStream)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getCourseName = async () => {
    await getAllCourse(academicStream)
      .then((result) => {
        setNCourseName(result.data.courseName)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getUniversity = async () => {
    await getAllUniversities(country)
      .then((result) => {
        setNUniversity(result.data.institutions)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getInstitute = async () => {
    await getAllInstitutes(country)
      .then((result) => {
        setNInstitute(result.data.institutions)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getCollege = async () => {
    await getAllColleges(country)
      .then((result) => {
        setNCollege(result.data.institutions)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleData = async (e) => {
    e.preventDefault()

    

    if (academicStream === '') {
      toast.error("select Academic Stream")
    }

    else if (courseName === '') {
      toast.error("select CourseName")
    }

    else if (country === '') {
      toast.error("select Country")
    }

    else if (university === '' && college === '' && institute === '') {
      toast.error("select any University, Institute or College")
    }

    else if (option === 'No' && passYear === '') {
      toast.error("select Pass Year")
    }

    else {
      await registerAcademic(passYear, option, academicStream, courseName, country, university, institute, college)
        .then(() => {
          setPage(page === 10 ? 0 : page + 1);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  useEffect(() => {
    getAcademicStream()
    getCourseName()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [academicStream])

  useEffect(() => {
    getCountry()
    getUniversity()
    getInstitute()
    getCollege()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country])

  useEffect(() => {

    if (option === 'Yes') {
      if (userData?.occupation?.hasJob === 'Yes') {
        setOption('Yes')
        setSelectedOption(!selectedOption)
      }
    } else {
      setOption("No")
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <form className="w-72 ml-3.5 sm:ml-12">
        <Toaster />

        <div className='flex'>
          <label className=" relative w-max select-none mb-7">
            <span className="text-sm font-oxygen">Are you still studying ? </span>
          </label>
          <input type="checkbox" className="ml-[5.8rem] appearance-none transition-colors cursor-pointer w-14 h-7 rounded-xl bg-red-500" checked={selectedOption}
            onChange={handleToggle} />
          <span className="pointer-events-none absolute font-medium text-xs uppercase ml-[16.2rem] mt-1.5 text-white"> {selectedOption ? '' : 'No'} </span>
          <span className="pointer-events-none absolute font-medium text-xs uppercase ml-[14.8rem] mt-1.5 text-white"> {selectedOption ? 'Yes' : ''} </span>
          <span className="pointer-events-none w-5 h-5 ml-[14.7rem] mt-1 absolute rounded-full transform transition-transform bg-gray-200" />
        </div>

        <style>{`
        input:checked {
          background-color: #22c55e;
        }

        input:checked ~ span:last-child {
          --tw-translate-x: 1.75rem;
        }
      `}</style>

        <p className="font-medium text-sm mt-8">
          {option === 'Yes' ? 'Add your Course Details' : 'Add your Highest Qualification'}
        </p>

        <div className="mb-6 mt-4 flex">
          <div
            className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Academic Stream" ? "" : "Academic Stream"))}
            
          >
            <p className="w-44 mt-3 ml-2 truncate text-sm">{academicStream ? academicStream : "Select Academic Stream"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Academic Stream' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Academic Stream</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />

              {nAcademicStream?.map((stream) => (

                <li
                  key={stream?._id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                  onClick={() => {
                    setAcademicStream(stream?.name)
                    setIsOpen("")
                  }}
                >
                  <p className="mr-2">{stream?.name}</p>
                </li>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 mt-5 flex">
          <input type="text"
            value={courseName}
            onChange={(e) => {
              let searchValue = e.target.value.toLocaleLowerCase();
              setSearch(searchValue);
              setCourseName(e.target.value);
            }}
            onClick={() => setIsOpen((prev) => (prev === "courseDetails" ? "" : "courseDetails"))}
            placeholder="Enter Course Name" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'courseDetails' && courseData && courseData.length > 0 ? (
            <>
              <ul className="absolute z-10 w-72 mt-14 max-h-56 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                <li
                  className="px-4 py-2 cursor-pointer flex"
                >
                  <p className="mr-2 font-semibold">Select Your Course Name</p>
                </li>
                <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                {courseData.map((data) => (
                  <li
                    key={data?._id}
                    className="px-4 py-2 cursor-pointer flex"
                    onClick={() => {
                      setCourseName(data);
                      setIsOpen("");
                    }}
                  >
                    <p className="mr-2">{data}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : " "}
        </div>

        <div className="mb-6 mt-5 flex">
          <input type="text"
            value={country}
            onChange={(e) => {
              let searchValue = e.target.value.toLocaleLowerCase();
              setSearch(searchValue);
              setCountry(e.target.value);
            }}
            onClick={() => setIsOpen((prev) => (prev === "Country" ? "" : "Country"))}
            placeholder="Where Did You Study" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Country' && countryData && countryData.length > 0 ? (
            <>
              <ul className="absolute z-10 w-72 mt-14 max-h-56 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                <li
                  className="px-4 py-2 cursor-pointer flex"
                >
                  <p className="mr-2 font-semibold">Where Did You Study</p>
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

        {academicStream === 'Certificate Courses' || academicStream === 'Plus Two / HSC / SSLC' || academicStream === 'Primary School' ?
          <div className="mb-6 mt-5 flex">
            <input type="text"
              value={institute}
              onChange={(e) => {
                let searchValue = e.target.value.toLocaleLowerCase();
                setSearch(searchValue);
                setInstitute(e.target.value)
              }}
              onClick={() => setIsOpen((prev) => (prev === "Institute" ? "" : "Institute"))}
              placeholder="Name of Institute / School" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
            <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
              <KeyboardArrowDownRoundedIcon />
            </div>
            {isOpen === 'Institute' && instituteData && instituteData.length > 0 ? (
              <>
                <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                  <li
                    className="px-4 py-2 cursor-pointer flex"
                  >
                    <p className="mr-2 font-semibold">Select Your Institute / School</p>
                  </li>
                  <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                  {instituteData.map((data) => (
                    <li
                      key={data?._id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                      onClick={() => {
                        setInstitute(data)
                        setIsOpen("")
                      }}
                    >
                      <p className="mr-2">{data}</p>
                    </li>
                  ))}
                </ul >
              </>
            ) : " "}
          </div>
          : academicStream &&
          <>
            <div className="mb-6 mt-5 flex">
              <input type="text"
                value={university}
                onChange={(e) => {
                  let searchValue = e.target.value.toLocaleLowerCase();
                  setSearch(searchValue);
                  setUniversity(e.target.value);
                }}
                onClick={() => setIsOpen((prev) => (prev === "University" ? "" : "University"))}
                placeholder="Enter University" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'University' && universityData && universityData.length > 0 ? (
                <>
                  <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                    <li
                      className="px-4 py-2 cursor-pointer flex"
                    >
                      <p className="mr-2 font-semibold">Select Your University</p>
                    </li>
                    <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                    {universityData.map((data) => (
                      <>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                          onClick={() => {
                            setUniversity(data);
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
                value={college}
                onChange={(e) => {
                  let searchValue = e.target.value.toLocaleLowerCase();
                  setSearch(searchValue);
                  setCollege(e.target.value);
                }}
                onClick={() => setIsOpen((prev) => (prev === "College" ? "" : "College"))}
                placeholder="Enter College" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'College' && collegeData && collegeData.length > 0 ? (
                <>
                  <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                    <li
                      className="px-4 py-2 cursor-pointer flex"
                    >
                      <p className="mr-2 font-semibold">Select Your College</p>
                    </li>
                    <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                    {collegeData.map((data) => (
                      <>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                          onClick={() => {
                            setCollege(data);
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
        }

        {option === 'No' ? <div className="mb-8 flex">
          <button type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Pass-out Year" ? "" : "Pass-out Year"))}
            
          >
            <p className="w-44 truncate text-sm">{passYear ? passYear : "Pass-out Year"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Pass-out Year' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Pass-out Year</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />

              {passOutYear.map((year) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setPassYear(year)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2">{year}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div> : " "}

        <div className="flex">
          {/* <button
            onClick={handleNext}
            className="rounded-xl text-[#A0A0A0] px-4 bg-white w-16 h-8 mt-1 text-sm border border-[#D8D8D8]"
          >
            Skip
          </button> */}

          <button
            onClick={handleData}
            className={option === 'No' ? "bg-[#F92739] rounded-xl text-white py-2 px-10 ml-20 mb-[0.1rem]" : " bg-[#F92739] rounded-xl text-white py-2 px-10 ml-20 mb-[4.9rem]"}
          >
            Continue
          </button>
        </div>


        <div className="flex items-center justify-between"></div>
      </form >
      <div className={
        academicStream === 'Certificate Courses' || academicStream === 'Plus Two / HSC / SSLC' || academicStream === 'Primary School' ? "flex justify-center mt-[16px] sm:mt-[70px] mb-1 sm:mb-10"
          : academicStream && " "
            ? "flex justify-center mt-[16px] sm:mt-[2px] mb-1 sm:mb-10" : "flex justify-center mt-[140px] sm:mb-10"}>
        <div className={
          page === 0
            ? " text-[#F92739] font-medium"
            : "text-gray-300 cursor-pointer"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 1
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 2 || page === 3
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 4
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 5 || page === 6
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 7 || page === 8
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 9
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 10
            ? "text-[#F92739] font-medium -ml-1"
            : "text-gray-300 cursor-pointer -ml-1"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
      </div>
    </>
  );
};

export default FourthForm;