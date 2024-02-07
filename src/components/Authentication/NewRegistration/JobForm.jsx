import { useContext } from "react";
import { registrationContext } from "../../../context/formContext";
import { saveCareer } from "../../../api";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import toast, { Toaster } from "react-hot-toast";

const JobForm = () => {
  const { page, setPage } = useContext(registrationContext)

  const handleData = async (career) => {

    if (career === '') {
      toast.error("Please Provide Your Occupation Details")
    }
    else {
      await saveCareer(career)
        .then(() => {
          if (career === 'Business' || career === 'SelfEmployed' || career === 'Private' || career === 'Government' || career === 'CurrentNotWorking') {
            setPage(page === 10 ? 0 : page + 1);
          } else {
            setPage(page === 10 ? 0 : page + 2);
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <>
      <div className="px-4 mt-5 flex">
        <Toaster />
        <button type="button" onClick={() => setPage(page - 1)}>
          <KeyboardBackspaceOutlinedIcon />
        </button>
        <div className="font-bold ml-auto">
          3/7
        </div>
      </div>
      <div className="flex justify-center mt-8 sm:mt-20">
        <div>
          <div className="relative right-6">
            <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
              <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
            </svg>
            <div className="absolute top-0 left-5 w-44 -ml-14">
              <p className="text-[21px] font-semibold text-center">Tell us <br />
                about your job</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <p className="text-[12px]">
          Provide your occupation details here
        </p>
      </div>
      <div className='flex justify-center mt-8'>
        <button
          type="button"
          onClick={() => handleData("Business")}
          className="bg-[#D7D7D7] rounded-xl py-2.5 w-72 px-6"
        >
          <div className="flex flex-row space-x-[164px]">
            <p>Business</p>
            <div className="mt-1.5">
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6441 1L16 6.35586L10.6441 11.7117" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.999645 6.35547H15.8496" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div className='flex justify-center mt-5'>
        <button
          type="button"
          onClick={() => handleData("SelfEmployed")}
          className="bg-[#D7D7D7] rounded-xl py-2.5 w-72 px-6"
        >
          <div className="flex flex-row space-x-[122px]">
            <p>Self Employed</p>
            <div className="mt-1.5">
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6441 1L16 6.35586L10.6441 11.7117" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.999645 6.35547H15.8496" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div className='flex justify-center mt-5'>
        <button
          type="button"
          onClick={() => handleData("Private")}
          className="bg-[#D7D7D7] rounded-xl py-2.5 w-72 px-6"
        >
          <div className="flex flex-row space-x-[146px]">
            <p>Private Job</p>
            <div className="mt-1.5">
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6441 1L16 6.35586L10.6441 11.7117" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.999645 6.35547H15.8496" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div className='flex justify-center mt-5'>
        <button
          type="button"
          onClick={() => handleData("Government")}
          className="bg-[#D7D7D7] rounded-xl py-2.5 w-72 px-6"
        >
          <div className="flex flex-row space-x-[106px]">
            <p>Government Job</p>
            <div className="mt-1.5">
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6441 1L16 6.35586L10.6441 11.7117" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.999645 6.35547H15.8496" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div className='flex justify-center mt-5'>
        <button
          type="button"
          onClick={() => handleData("StillStudying")}
          className="bg-[#D7D7D7] rounded-xl py-2.5 w-72 px-6"
        >
          <div className="flex flex-row space-x-[105px]">
            <p>Am still studying</p>
            <div className="mt-1.5">
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6441 1L16 6.35586L10.6441 11.7117" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.999645 6.35547H15.8496" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div className='flex justify-center mt-5'>
        <button
          type="button"
          onClick={() => handleData("CurrentNotWorking")}
          className="bg-[#D7D7D7] rounded-xl py-2.5 w-72 px-6"
        >
          <div className="flex flex-row space-x-[69px]">
            <p>Currently not working</p>
            <div className="mt-1.5">
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6441 1L16 6.35586L10.6441 11.7117" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.999645 6.35547H15.8496" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div className='flex justify-center mt-[150px]'>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4635 0H5.48785C2.19514 0 0 2.19514 0 5.48785V12.0733C0 15.366 2.19514 17.5611 5.48785 17.5611V19.8989C5.48785 20.777 6.46468 21.3038 7.18908 20.8099L12.0733 17.5611H16.4635C19.7563 17.5611 21.9514 15.366 21.9514 12.0733V5.48785C21.9514 2.19514 19.7563 0 16.4635 0ZM10.9757 13.3574C10.5147 13.3574 10.1525 12.9843 10.1525 12.5343C10.1525 12.0843 10.5147 11.7111 10.9757 11.7111C11.4367 11.7111 11.7989 12.0843 11.7989 12.5343C11.7989 12.9843 11.4367 13.3574 10.9757 13.3574ZM12.3586 8.80252C11.9306 9.08789 11.7989 9.27447 11.7989 9.58179V9.81228C11.7989 10.2623 11.4257 10.6355 10.9757 10.6355C10.5257 10.6355 10.1525 10.2623 10.1525 9.81228V9.58179C10.1525 8.3086 11.0855 7.68299 11.4367 7.44152C11.8428 7.16713 11.9745 6.98054 11.9745 6.69517C11.9745 6.14639 11.5245 5.69639 10.9757 5.69639C10.4269 5.69639 9.97691 6.14639 9.97691 6.69517C9.97691 7.14518 9.60373 7.51835 9.15373 7.51835C8.70373 7.51835 8.33055 7.14518 8.33055 6.69517C8.33055 5.23541 9.51593 4.05003 10.9757 4.05003C12.4355 4.05003 13.6208 5.23541 13.6208 6.69517C13.6208 7.9464 12.6989 8.57203 12.3586 8.80252Z" fill="#3E3E3E" />
        </svg>
      </div>
      <div className='flex justify-center text-center'>
        <p className="text-[13px] text-[#4D4D4D]">
          Choose your job type to find <br />
          matches from similar career
        </p>
      </div>
    </>
  )
}

export default JobForm