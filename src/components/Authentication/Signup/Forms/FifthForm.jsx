import { useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";
import { annualIncomes } from "../../../../lib/constants";
import { getAllCities, getAllCountries, getAllDistricts, getAllStates, registerOccupation } from "../../../../api";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const FifthForm = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)

  const [isOpen, setIsOpen] = useState("");
  const [annualIncome, setAnnualIncome] = useState(userData?.occupation?.annualIncome || "")
  const [selectedOption, setSelectedOption] = useState(false);
  const [country, setCountry] = useState(userData?.occupation?.country || "")
  const [state, setState] = useState(userData?.occupation?.state || "")
  const [stateID, setStateID] = useState(null)
  const [district, setDistrict] = useState(userData?.occupation?.district || "")
  const [city, setCity] = useState(userData?.occupation?.city || "")
  const [option, setOption] = useState(userData?.occupation?.hasJob || "No")

  const [nCountries, setNCountries] = useState([])
  const [nStates, setNStates] = useState([])
  const [nDistricts, setNDistricts] = useState([])
  const [nCity, setNCity] = useState([])

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

  const getCity = async () => {
    await getAllCities(stateID)
      .then((result) => {
        console.log(result);
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
    setPage(page === 10 ? 0 : page + 1);
  };

  const handleData = async (e) => {
    e.preventDefault()
    await registerOccupation(annualIncome, option, country, state, district, city)
      .then(() => {
        if (option === 'No') {
          setPage(page === 10 ? 0 : page + 2);
        } else {
          setPage(page === 10 ? 0 : page + 1);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getCountry()
    getStates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country])

  useEffect(() => {
    getDistricts()
    getCity()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])
  return (
    <>
      <form className="w-72 ml-12">

        <label className="flex items-center relative w-max cursor-pointer select-none">
          <span className="text-sm font-oxygen mr-24">Are you working now ? </span>
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

        {option === 'Yes' ?
          <>
            <p className="font-medium text-sm mt-8">
              Add your Work Location
            </p>

            <div className="mb-6 mt-4 flex">
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

            <div className="mb-6 mt-5 flex">
              <div
                className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen("State")}
              >
                <p className="w-44 mt-3 ml-2 truncate text-sm">{state ? state : "State / Province"}</p>
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

            <div className="mb-6 mt-5 flex">
              <div
                className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen("District")}
              >
                <p className="w-44 mt-3 ml-2 truncate text-sm">{district ? district : "District / Area"}</p>
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

            <div className="mb-6 mt-5 flex">
              <div
                className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
                onClick={() => setIsOpen("City")}
              >
                <p className="w-44 mt-3 ml-2 truncate text-sm">{city ? city : "City"}</p>
              </div>
              <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
                <KeyboardArrowDownRoundedIcon />
              </div>
              {isOpen === 'City' ? (
                <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

                  {nCity?.map((city) => (
                    <>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                        onClick={() => {
                          setCity(city?.name)
                          setIsOpen("")
                        }}
                      >
                        <p className="mr-2">{city?.name}</p>
                      </li>
                    </>
                  ))}

                </ul>
              ) : " "}
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
          </>
          : null}

        <div className="flex mt-10">
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

export default FifthForm;