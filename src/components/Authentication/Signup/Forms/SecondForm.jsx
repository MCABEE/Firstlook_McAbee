import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllCountries, getAllDistricts, getAllMotherToungues, getAllStates, registerNative } from '../../../../api';
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
  const [search, setSearch] = useState("");

  const [nCountries, setNCountries] = useState([])
  const [nStates, setNStates] = useState([])
  const [nDistricts, setNDistricts] = useState([])
  const [nMotherToungue, setNMotherToungue] = useState([])

  const tempCountry = []

  const { page, setPage } = useContext(registrationContext)

  const searchData = (tempProduct) => {
    return search === ""
      ? tempProduct
      : tempProduct?.toLowerCase().includes(search)
  };

  nCountries.map((data) => {
    tempCountry.push(data?.name)
  })

  const countryData = tempCountry.filter(searchData)

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

  const getMotherToungue = async () => {
    await getAllMotherToungues(state, country)
      .then((result) => {
        setNMotherToungue(result.data.motherToungue)
      })
      .catch((err) => {
        console.log(err);
      })
  }

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
    else {
      await registerNative(country, state, district, motherToungue)
        .then(() => {
          setPage(page === 10 ? 0 : page + 1);
        })
        .catch((err) => {
          console.log(err);
        })
    }
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <form className="w-72 ml-3.5 sm:ml-12">
        <Toaster />

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
                        setState("")
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
            onBlur={() => setIsOpen(null)}
          >

            <p className="w-44 mt-3 ml-2 truncate text-sm">{state ? state : "State"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'State' ? (
            <ul className="absolute z-10 w-72 mt-14 max-h-48 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
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

        <div className="mb-6 flex">
          <div
            className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "District" ? "" : "District"))}
            onBlur={() => setIsOpen(null)}
          >

            <p className="w-44 mt-3 ml-2 truncate text-sm">{district ? district : "District"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'District' ? (
            <ul className="absolute z-10 w-72 mt-14 max-h-48 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
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

        <div className="mb-10 flex">
          <div
            className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Mother Toungue" ? "" : "Mother Toungue"))}
            onBlur={() => setIsOpen(null)}
          >

            <p className="w-44 mt-3 ml-2 truncate text-sm">{motherToungue ? motherToungue : "Mother Toungue"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Mother Toungue' ? (
            <ul className="absolute z-10 w-72 mt-14 max-h-48 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Mother Toungue</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
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
      <div className="flex justify-center mt-64 sm:mt-[14.5rem] mb-3 sm:mb-10">
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

export default SecondForm;
