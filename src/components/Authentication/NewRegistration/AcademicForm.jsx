import { useContext, useEffect } from "react";
import { registrationContext } from "../../../context/formContext";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllAcademicStream, saveEducation } from "../../../api";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import toast, { Toaster } from "react-hot-toast";

const AcademicForm = () => {
  const userData = useSelector((state) => state.getUserFilledData.data)

  const [isOpen, setIsOpen] = useState("");
  const [academicStream, setAcademicStream] = useState(userData?.academic?.academicStream || "")
  const [passYear, setPassYear] = useState(userData?.academic?.passOut || "")
  const { page, setPage } = useContext(registrationContext)

  const [nAcademicStream, setNAcademicStream] = useState([])

  const startYear = 1990;
  const endYear = 2024;
  const passOutYear = [];

  for (let year = startYear; year <= endYear; year++) {
    passOutYear.push(year);
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

  const handleData = async (e) => {
    e.preventDefault()

    if (academicStream === '') {
      toast.error("Select Academic Level")
    }

    else if (passOutYear === '') {
      toast.error("select Pass-out Year")
    }

    else {
      await saveEducation(academicStream, passOutYear)
        .then(() => {
          setPage(page === 10 ? 0 : page + 2);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  useEffect(() => {
    getAcademicStream()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [academicStream])

  return (
    <>
      <div className="px-4 mt-5 flex">
        <Toaster/>
        <button type="button" onClick={() => setPage(page - 1)}>
          <KeyboardBackspaceOutlinedIcon />
        </button>
        <div className="font-bold ml-auto">
          4/7
        </div>
      </div>
      <div className="flex justify-center mt-10 sm:mt-20">
        <div>
          <div className="relative right-10">
            <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
              <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
            </svg>
            <div className="absolute top-0 left-5 w-64 -ml-20">
              <p className="text-[21px] font-semibold text-center">What level <br />
                of education you have ?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <p className="text-[12px]">
          Provide your highest academic qualification
        </p>
      </div>
      <form className="w-72 ml-3.5 sm:ml-12" onSubmit={handleData}>
        <div className="mb-6 mt-8 flex">
          <div
            className="w-full h-12 text-left border cursor-pointer border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Academic Stream" ? "" : "Academic Stream"))}

          >
            <p className="w-44 mt-3 ml-2 truncate text-sm">{academicStream ? academicStream : "Select Academic Level"}</p>
          </div>
          <div className="-ml-8 mt-[18px] text-[#B8B8B8] pointer-events-none">
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5.64412L6.35586 11L11.7117 5.64412" stroke="#292D32" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.35547 0.849609V10.8496" stroke="#292D32" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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

        <div className="mb-8 flex mt-5">
          <button type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-[#4D4D4D] bg-white"
            onClick={() => setIsOpen((prev) => (prev === "Pass-out Year" ? "" : "Pass-out Year"))}

          >
            <p className="w-44 truncate text-sm">{passYear ? passYear : "Pass-out Year"}</p>
          </button>
          <div className="-ml-8 mt-[18px] text-[#B8B8B8] pointer-events-none">
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5.64412L6.35586 11L11.7117 5.64412" stroke="#292D32" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.35547 0.849609V10.8496" stroke="#292D32" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
        </div>

        <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-[#FE1940] rounded-xl text-white py-2.5 px-32"
          >
            Next
          </button>
        </div>
      </form>

      <div className='flex justify-center mt-[310px]'>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4635 0H5.48785C2.19514 0 0 2.19514 0 5.48785V12.0733C0 15.366 2.19514 17.5611 5.48785 17.5611V19.8989C5.48785 20.777 6.46468 21.3038 7.18908 20.8099L12.0733 17.5611H16.4635C19.7563 17.5611 21.9514 15.366 21.9514 12.0733V5.48785C21.9514 2.19514 19.7563 0 16.4635 0ZM10.9757 13.3574C10.5147 13.3574 10.1525 12.9843 10.1525 12.5343C10.1525 12.0843 10.5147 11.7111 10.9757 11.7111C11.4367 11.7111 11.7989 12.0843 11.7989 12.5343C11.7989 12.9843 11.4367 13.3574 10.9757 13.3574ZM12.3586 8.80252C11.9306 9.08789 11.7989 9.27447 11.7989 9.58179V9.81228C11.7989 10.2623 11.4257 10.6355 10.9757 10.6355C10.5257 10.6355 10.1525 10.2623 10.1525 9.81228V9.58179C10.1525 8.3086 11.0855 7.68299 11.4367 7.44152C11.8428 7.16713 11.9745 6.98054 11.9745 6.69517C11.9745 6.14639 11.5245 5.69639 10.9757 5.69639C10.4269 5.69639 9.97691 6.14639 9.97691 6.69517C9.97691 7.14518 9.60373 7.51835 9.15373 7.51835C8.70373 7.51835 8.33055 7.14518 8.33055 6.69517C8.33055 5.23541 9.51593 4.05003 10.9757 4.05003C12.4355 4.05003 13.6208 5.23541 13.6208 6.69517C13.6208 7.9464 12.6989 8.57203 12.3586 8.80252Z" fill="#3E3E3E" />
        </svg>
      </div>
      <div className='flex justify-center text-center'>
        <p className="text-[13px] text-[#4D4D4D]">
          It assists others to evaluating you, <br />
          and you‘ll receive matches at a similar level.
        </p>
      </div>
    </>
  )
}

export default AcademicForm