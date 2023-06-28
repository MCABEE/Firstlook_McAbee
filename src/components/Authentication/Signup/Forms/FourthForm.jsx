import { useEffect, useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";
import { getAllAcademicStream, getAllColleges, getAllCountries, getAllCourse, getAllInstitutes, getAllUniversities, registerAcademic } from "../../../../api";
import { useSelector } from "react-redux";

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

  const searchData = (tempProduct) => {
    return search === ""
      ? tempProduct
      : tempProduct?.toLowerCase().includes(search)
  };

  const universityData = tempUniversity.filter(searchData)
  const instituteData = tempInstitute.filter(searchData)
  const collegeData = tempCollege.filter(searchData)


  const handleToggle = () => {
    setSelectedOption(!selectedOption);
    if (!selectedOption) {
      setOption("Yes")
    } else {
      setOption("No")
    }
  };

  const handleNext = () => {
    setPage(page === 10 ? 0 : page + 1);
  };

  const startYear = 1990;
  const endYear = 2023;
  const passOutYear = [];

  for (let year = startYear; year <= endYear; year++) {
    passOutYear.push(year);
  }

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

  const getAcademicStream = async () => {
    await getAllAcademicStream()
      .then((result) => {
        console.log(result);
        setNAcademicStream(result.data.academicStream)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getCourseName = async () => {
    await getAllCourse(academicStream)
      .then((result) => {
        console.log(result);
        setNCourseName(result.data.courseName)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getUniversity = async () => {
    await getAllUniversities(country)
      .then((result) => {
        console.log(result);
        setNUniversity(result.data.institutions)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getInstitute = async () => {
    await getAllInstitutes(country)
      .then((result) => {
        console.log(result);
        setNInstitute(result.data.institutions)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getCollege = async () => {
    await getAllColleges(country)
      .then((result) => {
        console.log(result);
        setNCollege(result.data.institutions)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleData = async (e) => {
    e.preventDefault()
    await registerAcademic(passYear, option, academicStream, courseName, country, university, institute, college)
      .then(() => {
        setPage(page === 10 ? 0 : page + 1);
      })
      .catch((err) => {
        console.log(err);
      })
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

  return (
    <>
      <form className="w-72 ml-12">

        <label className="flex items-center relative w-max cursor-pointer select-none">
          <span className="text-sm font-oxygen mr-24">Are you still studying ? </span>
          <input type="checkbox" className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-xl bg-red-500" checked={selectedOption}
            onChange={handleToggle} />
          <span className="absolute font-medium text-xs uppercase right-1 text-white"> {selectedOption ? '' : 'No'} </span>
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
          Add your Highest Qualification
        </p>

        <div className="mb-6 mt-4 flex">
          <div
            className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Academic Stream")}
          >
            <p className="w-44 mt-3 ml-2 truncate text-sm">{academicStream ? academicStream : "Select Academic Stream"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Academic Stream' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              {nAcademicStream?.map((stream) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setAcademicStream(stream?.name)
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
            onClick={() => setIsOpen("Course Name")}
          >
            <p className="w-44 mt-3 ml-2 truncate text-sm">{courseName ? courseName : "Enter Course Name"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Course Name' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              {nCourseName?.map((course) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setCourseName(course?.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2">{course?.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

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

        {academicStream === 'Certificate Courses' || academicStream === 'Plus Two / HSC / SSLC' || academicStream === 'Primary School' ?
          <div className="mb-6 mt-5 flex">
            <input type="text"
              value={institute}
              onChange={(e) => {
                let searchValue = e.target.value.toLocaleLowerCase();
                setSearch(searchValue);
                setInstitute(e.target.value)
              }}
              onClick={() => setIsOpen("Institute")}
              placeholder="Name of Institute / School" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-6 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
            <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
              <KeyboardArrowDownRoundedIcon />
            </div>
            {isOpen === 'Institute' ? (
              <>
                {instituteData.map((data) => (
                  <>
                    <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                        onClick={() => {
                          setInstitute(data)
                          setIsOpen("")
                        }}
                      >
                        <p className="mr-2">{data}</p>
                      </li>
                    </ul >
                  </>
                ))}
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
                onClick={() => setIsOpen("University")}
                placeholder="Enter University" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-6 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'University' ? (
                <>
                  {universityData.map((data) => (
                    <>
                      <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                          onClick={() => {
                            setUniversity(data);
                            setIsOpen("");
                          }}
                        >
                          <p className="mr-2">{data}</p>
                        </li>
                      </ul>
                    </>
                  ))}
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
                onClick={() => setIsOpen("College")}
                placeholder="Enter College" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-6 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'College' ? (
                <>
                  {collegeData.map((data) => (
                    <>
                      <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                          onClick={() => {
                            setCollege(data);
                            setIsOpen("");
                          }}
                        >
                          <p className="mr-2">{data}</p>
                        </li>
                      </ul>
                    </>
                  ))}
                </>
              ) : " "}
            </div>
          </>
        }

        <div className="mb-8 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-6 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Pass-out Year")}
          >
            <p className="w-44 truncate text-sm">{passYear ? passYear : "Pass-out Year"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Pass-out Year' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

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
        </div>
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

export default FourthForm;