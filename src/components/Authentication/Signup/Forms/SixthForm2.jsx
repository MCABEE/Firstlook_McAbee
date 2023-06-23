import { useContext, useEffect, useState } from "react";
import { registrationContext } from "../../../../context/formContext";
import { getAllHomeTown, getAllPincode, registerFamilyAddress } from "../../../../api";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useSelector } from "react-redux";

const SixthForm2 = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)

  const [isOpen, setIsOpen] = useState("");
  const [familyName, setFamilyName] = useState(userData?.family?.houseName || "")
  const [homeTown, setHomeTown] = useState(userData?.family?.homeTown || "")
  const [pincode, setPincode] = useState(userData?.family?.pincode || "")
  const [contactNumber, setContactNumber] = useState(userData?.family?.secondPhone || "")
  const [homeContactNumber, setHomeContactNumber] = useState(userData?.family?.homePhone || "")
  const [diocese, setDiocese] = useState(userData?.family?.diocese || "")

  const [nPincode, setNPincode] = useState("")
  const [nHomeTown, setNHomeTown] = useState("")

  const { page, setPage } = useContext(registrationContext)

  const getPincode = async () => {
    await getAllPincode()
      .then((result) => {
        console.log(result);
        setNPincode(result.data.pincode)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getHomeTown = async () => {
    await getAllHomeTown()
      .then((result) => {
        console.log(result);
        setNHomeTown(result.data.homeTown)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleData = async (e) => {
    e.preventDefault()
    await registerFamilyAddress(familyName, homeTown, pincode, contactNumber, homeContactNumber, diocese)
      .then(() => {
        setPage(page === 10 ? 0 : page + 1);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getPincode()
    getHomeTown()
  }, [])


  return (
    <>
      <form className="w-72 ml-12">

        <p className="mb-3 text-sm font-medium">
          Your Residential Address
        </p>

        <div className="mb-6">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Your Family / House Name"
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
          ></input>
        </div>

        <div className="mb-6 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Home Town")}
          >
            <p className="w-44 truncate text-sm">{homeTown ? homeTown : "Home Town"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Home Town' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              {nHomeTown.map((town) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setHomeTown(town?.name)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >{town?.name}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen("Pincode")}
          >
            <p className="w-44 truncate text-sm">{pincode ? pincode : "Pincode"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Pincode' ? (
            <ul className="absolute z-10 w-72 mt-14 h-56 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
              {nPincode.map((pincode) => (
                <>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                    onClick={() => {
                      setPincode(pincode?.code)
                      setIsOpen("")
                    }}
                  >
                    <p className="mr-2" >{pincode?.code}</p>
                  </li>
                </>
              ))}

            </ul>
          ) : " "}
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Your Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Home Contact Number"
            value={homeContactNumber}
            onChange={(e) => setHomeContactNumber(e.target.value)}
          ></input>
        </div>

        <div className="mb-10">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Diocese Name (for Christian’s)"
            value={diocese}
            onChange={(e) => setDiocese(e.target.value)}
          ></input>
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

export default SixthForm2;

