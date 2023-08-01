import { useEffect, useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";
import { marriedStatus, typeBody } from "../../../../lib/constants";
import { getAllCaste, getAllReligion, registerPersonalInfo } from "../../../../api";
import { useSelector } from "react-redux";
import CircleIcon from '@mui/icons-material/Circle';
import { Toaster, toast } from "react-hot-toast";

const ThirdForm = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)

  const [isOpen, setIsOpen] = useState("");
  const [maritalStatus, setMaritalStatus] = useState(userData?.personalInfo?.maritalStatus || "")
  const [bodyType, setBodyType] = useState(userData?.personalInfo?.bodyType || "")
  const [physicalStatus, setPhysicalStatus] = useState(userData?.personalInfo?.physicalStatus || "")
  const [religion, setReligion] = useState(userData?.personalInfo?.religion || "")
  const [caste, setCaste] = useState(userData?.personalInfo?.caste || "")
  const [height, setHeight] = useState(userData?.personalInfo?.height || "")
  const [weight, setWeight] = useState(userData?.personalInfo?.weight || "")

  const [nReligion, setNReligion] = useState([])
  const [nCaste, setNCaste] = useState([])

  const { page, setPage } = useContext(registrationContext)

  const getReligion = async () => {
    await getAllReligion()
      .then((result) => {
        console.log(result);
        setNReligion(result.data.religion)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getCaste = async () => {
    await getAllCaste(religion)
      .then((result) => {
        console.log(result);
        setNCaste(result.data.caste)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleData = async (e) => {
    e.preventDefault()

    if (religion === '') {
      toast.error("select Religion")
    }

    else if (caste === '') {
      toast.error("select Caste")
    }

    else if (maritalStatus === '') {
      toast.error("select Marital Status")
    }

    else if (bodyType === '') {
      toast.error("select Body Type")
    }

    else if (physicalStatus === '') {
      toast.error("select Physical Status")
    }

    else if (height === '') {
      toast.error("select Height")
    }

    else if (weight === '') {
      toast.error("select Weight")
    }

    else {
      await registerPersonalInfo(maritalStatus, bodyType, physicalStatus, religion, caste, height, weight)
        .then(() => {
          setPage(page === 10 ? 0 : page + 1);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  useEffect(() => {
    getReligion()
    getCaste()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [religion])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <form className="w-72 ml-3.5 sm:ml-12">
        <Toaster />
        <div className="mb-6 flex">
          <div
            className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Religion" ? "" : "Religion"))}
            onBlur={() => setIsOpen(null)}
          >
            <p className="w-44 mt-3 truncate text-sm">{religion ? religion : "Religion"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Religion' ? (
            <ul className="absolute z-10 w-72 mt-14 max-h-48 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Religion</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />

              {nReligion?.map((religion) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setReligion(religion?.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2">{religion?.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <div
            className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Caste" ? "" : "Caste"))}
            onBlur={() => setIsOpen(null)}
          >
            <p className="w-44 mt-3 truncate text-sm">{caste ? caste : "Caste"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Caste' ? (
            <ul className="absolute z-10 w-72 mt-14 max-h-48 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Caste</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />

              {nCaste?.map((caste) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setCaste(caste?.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2">{caste?.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <div
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Marital Status" ? "" : "Marital Status"))}
            onBlur={() => setIsOpen(null)}
          >
            <p className="w-44 truncate text-sm">{maritalStatus ? maritalStatus : "Marital Status"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Marital Status' ? (
            <ul className="absolute z-10 w-72 mt-14 max-h-48 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Marital Status</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
              {marriedStatus.map((status) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setMaritalStatus(status.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >{status.name}</p>

                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm"
            type="number"
            placeholder="Height (in cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          ></input>
        </div>

        <div className="mb-6 flex">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm"
            type="number"
            placeholder="Weight (in kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></input>
        </div>

        <div className="mb-6 flex">
          <div
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Body Type" ? "" : "Body Type"))}
            onBlur={() => setIsOpen(null)}
          >
            <p className="w-44 truncate text-sm">{bodyType ? bodyType : "Body Type"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Body Type' ? (
            <ul className="absolute z-10 w-72 mt-14 max-h-48 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Body Type</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
              {typeBody.map((type) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setBodyType(type.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >{type.name}</p>

                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-10 flex">
          <div
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Physical Status" ? "" : "Physical Status"))}
            onBlur={() => setIsOpen(null)}
          >
            <p className="w-44 truncate text-sm">{physicalStatus ? physicalStatus : "Physical Status"}</p>
          </div>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Physical Status' ? (
            <ul className="absolute z-10 w-72 mt-14 max-h-48 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              <li
                className="px-4 py-2 cursor-pointer flex"
              >
                <p className="mr-2 font-semibold">Select Your Physical Status</p>
              </li>
              <hr className='border-gray-400 border-1 w-11/12 mx-auto' />

              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setPhysicalStatus("Normal")
                  setIsOpen("")
                }}
              >
                <p className="mr-2" >Normal</p>

              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setPhysicalStatus("Disabled")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Disabled</p>

              </li>

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
      </form >
      <div className="flex justify-center mt-12 mb-3 sm:mb-10">
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

export default ThirdForm;