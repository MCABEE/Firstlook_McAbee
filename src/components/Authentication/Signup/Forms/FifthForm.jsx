import { useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";
import { annualIncomes } from "../../../../lib/constants";
import { getAllCities, getAllCountries, getAllDistricts, getAllStates, registerOccupation } from "../../../../api";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CircleIcon from '@mui/icons-material/Circle';
import { Toaster, toast } from "react-hot-toast";

const FifthForm = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)

  const [isOpen, setIsOpen] = useState("");
  const [annualIncome, setAnnualIncome] = useState(userData?.occupation?.annualIncome || "")
  const [selectedOption, setSelectedOption] = useState(false);
  const [country, setCountry] = useState(userData?.occupation?.country || "")
  const [state, setState] = useState(userData?.occupation?.state || "")
  const [district, setDistrict] = useState(userData?.occupation?.district || "")
  const [city, setCity] = useState(userData?.occupation?.city || "")
  const [option, setOption] = useState(userData?.occupation?.hasJob || "No")
  const [search, setSearch] = useState("");

  const [nCountries, setNCountries] = useState([])
  const [nStates, setNStates] = useState([])
  const [nDistricts, setNDistricts] = useState([])
  const [nCity, setNCity] = useState([])

  const tempCity = []
  const tempCountry = []
  console.log(country)
  const { page, setPage } = useContext(registrationContext)

  const searchData = (tempProduct) => {
    return search === ""
      ? tempProduct
      : tempProduct?.toLowerCase().includes(search)
  };

  nCity.map((data) => {
    tempCity.push(data?.name)
  })

  nCountries.map((data) => {
    tempCountry.push(data?.name)
  })

  const countryData = tempCountry.filter(searchData)

  const cityData = tempCity.filter(searchData)

  const getCountry = async () => {
    await getAllCountries()
      .then((result) => {
        setNCountries(result.data.countries)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getStates = async () => {
    await getAllStates(country)
      .then((result) => {
        setNStates(result.data.states)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getDistricts = async () => {
    await getAllDistricts(state, country)
      .then((result) => {
        setNDistricts(result.data.districts)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getCity = async () => {
    await getAllCities(state, country)
      .then((result) => {
        setNCity(result.data.cities)
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

  const handleNext = () => {
    setPage(page === 10 ? 0 : page + 2);
  };

  const handleData = async (e) => {
    e.preventDefault()

    if (option === 'Yes') {
      if (country === '') {
        toast.error("select Country")
      }

      else if (state === '') {
        toast.error("select State")
      }

      else if (country === 'India' && district === '') {
        toast.error("select District")
      }

      else if (city === '') {
        toast.error("select City")
      }

      else if (annualIncome === '') {
        toast.error("select Annual Income")
      }

      else {
        await registerOccupation(annualIncome, option, country, state, district, city)
          .then(() => {
            setPage(page === 10 ? 0 : page + 1);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
    else {
      setPage(page === 10 ? 0 : page + 2);
    }
  }

  useEffect(() => {
    getCountry()
    getStates()
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
    getDistricts()
    getCity()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <form className="w-72 ml-3.5 sm:ml-12">
        <Toaster />

        <div className='flex'>
          <label className=" relative w-max cursor-pointer select-none mb-3 -mt-3">
            <span className="text-sm font-oxygen">Do you have a Job or Business or are you Self-Employed? </span>
          </label>
          <input type="checkbox" className="ml-[0.8rem] appearance-none transition-colors cursor-pointer w-24 h-7 rounded-xl bg-red-500" checked={selectedOption}
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

        {option === 'Yes' ?
          <>
            <p className="font-medium text-sm mt-8">
              Add your Work Location
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
                placeholder="Enter Country" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'Country' && countryData && countryData.length > 0 ? (
                <>
                  <ul className="absolute z-10 w-72 mt-14 max-h-56 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                    <li
                      className="px-4 py-2 cursor-pointer flex"
                    >
                      <p className="mr-2 font-semibold">Select Your Country</p>
                    </li>
                    <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                    {countryData.map((data, index) => (
                      <li key={index}
                        className="px-4 py-2 cursor-pointer flex"
                        onClick={() => {
                          console.log("data")
                          setCountry(data);
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
              <div
                className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen((prev) => (prev === "State" ? "" : "State"))}
                onBlur={() => setIsOpen(null)}
              >
                <p className="w-44 mt-3  truncate text-sm">{state ? state : "State / Province"}</p>
              </div>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'State' ? (
                <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                  <li
                    className="px-4 py-2 cursor-pointer flex"
                  >
                    <p className="mr-2 font-semibold">Select Your State</p>
                  </li>
                  <hr className='border-gray-400 border-1 w-11/12 mx-auto' />

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

            {country === 'India' ?
              <div className="mb-6 mt-5 flex">
                <div
                  className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                  onClick={() => setIsOpen((prev) => (prev === "District" ? "" : "District"))}
                  onBlur={() => setIsOpen(null)}
                >
                  <p className="w-44 mt-3  truncate text-sm">{district ? district : "District / Area"}</p>
                </div>
                <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                  <KeyboardArrowDownRoundedIcon />
                </div>
                {isOpen === 'District' ? (
                  <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                    <li
                      className="px-4 py-2 cursor-pointer flex"
                    >
                      <p className="mr-2 font-semibold">Select Your District</p>
                    </li>
                    <hr className='border-gray-400 border-1 w-11/12 mx-auto' />

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
              : " "
            }

            <div className="mb-6 mt-5 flex">
              <input type="text"
                value={city}
                onChange={(e) => {
                  let searchValue = e.target.value.toLocaleLowerCase();
                  setSearch(searchValue);
                  setCity(e.target.value);
                }}
                onClick={() => setIsOpen((prev) => (prev === "City" ? "" : "City"))}
                placeholder="Enter City" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'City' && cityData && cityData.length > 0 ? (
                <>
                  <ul className="absolute z-10 w-72 mt-14 max-h-56 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                    <li
                      className="px-4 py-2 cursor-pointer flex"
                    >
                      <p className="mr-2 font-semibold">Select Your City</p>
                    </li>
                    <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                    {cityData.map((data) => (
                      <>
                        <li
                          className="px-4 py-2 cursor-pointer flex"
                          onClick={() => {
                            setCity(data);
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

            <div className="mb-10 flex">
              <button type="button"
                className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen((prev) => (prev === "Annual Income" ? "" : "Annual Income"))}
              >
                <p className="w-44 truncate text-sm">{annualIncome ? annualIncome : "Annual Income (Approx.)"}</p>
              </button>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen == 'Annual Income' ? (

                <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                  <li
                    className="px-4 py-2 cursor-pointer flex"
                  >
                    <p className="mr-2 font-semibold">Select Your Annual Income</p>
                  </li>
                  <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
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
          </>
          : null}

        {option === 'No' ?
          <div className="flex flex-col">
            <button
              onClick={handleNext}
              className="bg-[#F92739] rounded-xl text-white py-2 px-10 mt-10"
            >
              I&apos;m not working
            </button>

            <button
              onClick={handleToggle}
              className="rounded-xl px-4 py-2.5 bg-white text-sm border mt-6 border-[#D8D8D8]"
            >
              Add Occupation Details
            </button>
          </div>
          : null}

        <div className="flex mt-10">

          {/* <button
            onClick={handleNext}
            className={option === 'No' ? "hidden" : "rounded-xl text-[#A0A0A0] px-4 bg-white w-16 h-8 mt-1 text-sm border border-[#D8D8D8]"}
          >
            Skip
          </button> */}

          {option === 'No' ? null :
            <button
              onClick={handleData}
              className={country === 'India' ? "bg-[#F92739] rounded-xl text-white py-2 px-10 ml-20" : "bg-[#F92739] rounded-xl text-white py-2 px-10 ml-auto mb-[4.4rem]"}
            >
              Continue
            </button>}
        </div>

        <div className="flex items-center justify-between"></div>
      </form >
      <div className={option === 'Yes' ? "flex justify-center mt-[64px] mb-3 sm:mb-10" : "flex justify-center mt-[22.8rem] mb-3 sm:mb-10"}>
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

export default FifthForm;