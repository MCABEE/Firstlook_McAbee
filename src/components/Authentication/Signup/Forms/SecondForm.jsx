import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllCountries, getAllDistricts, getAllMotherToungues, getAllStates, registerNative } from '../../../../api';

const SecondForm = () => {

  const [isOpen, setIsOpen] = useState("");
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [stateID, setStateID] = useState(null)
  const [district, setDistrict] = useState("")
  const [motherToungue, setMotherToungue] = useState("")

  const [nCountries, setNCountries] = useState([])
  const [nStates, setNStates] = useState([])
  const [nDistricts, setNDistricts] = useState([])
  const [nMotherToungue, setNMotherToungue] = useState([])

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
    await registerNative(country, state, district, motherToungue)
      .then(() => {
        setPage(page === 10 ? 0 : page + 1);
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

        <div className="mb-10 flex">
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

        <button
          onClick={handleData}
          className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-36"
        >
          Continue
        </button>

        <div className="flex items-center justify-between"></div>
      </form>
    </>
  );
};

export default SecondForm;
