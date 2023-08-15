import { useContext, useEffect, useState } from "react";
import { registrationContext } from "../../../../context/formContext";
import { getAllHomeTown, registerFamilyAddress } from "../../../../api";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useSelector } from "react-redux";
import CircleIcon from '@mui/icons-material/Circle';
import { Toaster, toast } from "react-hot-toast";
import './style.css'

const SixthForm2 = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)
  const district = userData?.native?.district

  const [isOpen, setIsOpen] = useState("");
  const [familyName, setFamilyName] = useState(userData?.familyAddress?.houseName || "")
  const [homeTown, setHomeTown] = useState(userData?.familyAddress?.homeTown || "")
  const [pincode, setPincode] = useState(userData?.familyAddress?.pincode || "")
  const [contactNumber, setContactNumber] = useState(userData?.familyAddress?.secondPhone || "")
  const [homeContactNumber, setHomeContactNumber] = useState(userData?.familyAddress?.homePhone || "")
  const [search, setSearch] = useState("");

  const [nHomeTown, setNHomeTown] = useState([])

  const tempHomeTown = []

  const { page, setPage } = useContext(registrationContext)

  const searchData = (tempProduct) => {
    return search === ""
      ? tempProduct
      : tempProduct.toLowerCase().includes(search)
  };

  nHomeTown?.map((data) => {
    tempHomeTown.push(data?.name)
  })

  const homeTownData = tempHomeTown.filter(searchData)

  const getHomeTown = async () => {
    await getAllHomeTown()
      .then((result) => {
        setNHomeTown(result.data?.homeTown)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleData = async (e) => {
    e.preventDefault()

    if (familyName === '') {
      toast.error("Enter Family Name")
    }

    else if (homeTown === '') {
      toast.error("select Home Town")
    }

    else if (pincode === '') {
      toast.error("select Pincode")
    }

    else if (contactNumber === '' || homeContactNumber === '') {
      toast.error("Enter Contact Number")
    }

    else if (homeContactNumber == contactNumber) {
      toast.error("Enter a different Home Contact Number")
    }

    else {
      await registerFamilyAddress(familyName, homeTown, pincode, contactNumber, homeContactNumber, district)
        .then(() => {
          setPage(page === 10 ? 0 : page + 1);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  useEffect(() => {
    getHomeTown()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <form onSubmit={handleData} className="w-72 ml-3.5 sm:ml-12">
        <Toaster />
        <p className="mb-3 text-sm font-medium">
          Your Residential Address
        </p>

        <div className="mb-6">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm text-[#4D4D4D]"
            type="text"
            placeholder="Your Family / House Name"
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
          ></input>
        </div>

        <div className="mb-6 mt-5 flex">
          <input type="text"
            value={homeTown}
            onChange={(e) => {
              let searchValue = e.target?.value?.toLocaleLowerCase();
              setSearch(searchValue);
              setHomeTown(e.target.value);
            }}
            onClick={() => setIsOpen((prev) => (prev === "Home Town" ? "" : "Home Town"))}
            placeholder="Enter Your Home Town" className="text-sm w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white placeholder:text-[#4D4D4D]" />
          <div className="-ml-8 mt-2.5 text-[#B8B8B8] pointer-events-none">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen === 'Home Town' && homeTownData && homeTownData.length > 0 ? (
            <>
              <ul className="absolute z-10 w-72 mt-14 max-h-56 h-fit overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                <li
                  className="px-4 py-2 cursor-pointer flex"
                >
                  <p className="mr-2 font-semibold">Enter Your Home Town</p>
                </li>
                <hr className='border-gray-400 border-1 w-11/12 mx-auto' />
                {homeTownData?.map((data, index) => (
                  <li key={index}
                    className="px-4 py-2 cursor-pointer flex"
                    onClick={() => {
                      setHomeTown(data);
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
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm text-[#4D4D4D]"
            type="number"
            placeholder="Enter Your Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm text-[#4D4D4D]"
            type="text"
            placeholder="Your Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          ></input>
        </div>

        <div className="mb-10">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-4 placeholder:text-[#4D4D4D] text-sm text-[#4D4D4D]"
            type="text"
            placeholder="Home Contact Number"
            value={homeContactNumber}
            onChange={(e) => setHomeContactNumber(e.target.value)}
          ></input>
        </div>

        <button type="submit"
          className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-36"
        >
          Continue
        </button>

        <div className="flex items-center justify-between"></div>
      </form>
      <div className="flex justify-center mt-[9.6rem] mb-3 sm:mb-10">
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

export default SixthForm2;

