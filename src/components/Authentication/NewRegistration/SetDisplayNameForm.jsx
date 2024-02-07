import { useContext, useState } from "react"
import { useSelector } from "react-redux"
import { checkDisplayName, saveDisplayName } from "../../../api"
import { useEffect } from "react"
import { registrationContext } from "../../../context/formContext"
import toast, { Toaster } from "react-hot-toast"
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const SetDisplayNameForm = () => {
  const userData = useSelector((state) => state.getUserFilledData?.data)
  const { page, setPage } = useContext(registrationContext)

  const [displayName, setDisplayName] = useState(userData?.displayName || "")
  const [displayNameStatus, setDisplayNameStatus] = useState(null)
  const [isOpen, setIsOpen] = useState("");

  const handleDisplayName = async () => {

    if (displayName.length > 5) {
      await checkDisplayName(displayName)
        .then((result) => {
          setDisplayNameStatus(result?.data?.status)
        })
    }

  }

  const handleData = async (e) => {
    e.preventDefault()

    const isValidDisplayName = /^[a-zA-Z_][a-zA-Z0-9_]{2,14}[a-zA-Z0-9_]$/.test(displayName);
    
    if (!isValidDisplayName) {
      toast.error("Please Follow display name guidelines.");
    }
    
    else {
      await saveDisplayName(displayName)
        .then(() => {
          setPage(page === 10 ? 0 : page + 1);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    handleDisplayName()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayName])

  return (
    <>
      <div className="px-4 mt-5 flex">
        <Toaster/>
        <button type="button" onClick={() => setPage(page - 1)}>
          <KeyboardBackspaceOutlinedIcon />
        </button>
        <div className="font-bold ml-auto">
          2/7
        </div>
      </div>
      <div className="flex justify-center mt-10 sm:mt-20">
        <div>
          <div className="relative right-6">
            <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
              <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
            </svg>
            <div className="absolute top-0 left-5 w-44 -ml-14">
              <p className="text-[21px] font-semibold text-center">Create <br />
                your <span className="text-[#FE1940]">‘firstlook_id‘</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <p className="text-[12px]">
          Craft a unique ID resembling your real name
        </p>
      </div>
      <form onSubmit={handleData}>
        <div className="mb-8 mt-8">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-72 ml-3.5 sm:ml-12 py-3 px-6 placeholder:text-[#4D4D4D] text-sm text-[#4D4D4D]"
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          ></input>
          {
            displayNameStatus === 200 || displayNameStatus === null ? ""
              : <p className="text-xs text-red-500 ml-5 sm:ml-14 py-1.5">
                This display name has already been taken
              </p>
          }
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
      <p className="flex justify-center text-[#4D4D4D] text-[12px] mt-6">
        Follow the <button onClick={() => setIsOpen("Guidelines")} className="text-[#FE1940] font-semibold">&nbsp; guidelines &nbsp;</button> to create display name
      </p>
      <div className='flex justify-center mt-[345px]'>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4635 0H5.48785C2.19514 0 0 2.19514 0 5.48785V12.0733C0 15.366 2.19514 17.5611 5.48785 17.5611V19.8989C5.48785 20.777 6.46468 21.3038 7.18908 20.8099L12.0733 17.5611H16.4635C19.7563 17.5611 21.9514 15.366 21.9514 12.0733V5.48785C21.9514 2.19514 19.7563 0 16.4635 0ZM10.9757 13.3574C10.5147 13.3574 10.1525 12.9843 10.1525 12.5343C10.1525 12.0843 10.5147 11.7111 10.9757 11.7111C11.4367 11.7111 11.7989 12.0843 11.7989 12.5343C11.7989 12.9843 11.4367 13.3574 10.9757 13.3574ZM12.3586 8.80252C11.9306 9.08789 11.7989 9.27447 11.7989 9.58179V9.81228C11.7989 10.2623 11.4257 10.6355 10.9757 10.6355C10.5257 10.6355 10.1525 10.2623 10.1525 9.81228V9.58179C10.1525 8.3086 11.0855 7.68299 11.4367 7.44152C11.8428 7.16713 11.9745 6.98054 11.9745 6.69517C11.9745 6.14639 11.5245 5.69639 10.9757 5.69639C10.4269 5.69639 9.97691 6.14639 9.97691 6.69517C9.97691 7.14518 9.60373 7.51835 9.15373 7.51835C8.70373 7.51835 8.33055 7.14518 8.33055 6.69517C8.33055 5.23541 9.51593 4.05003 10.9757 4.05003C12.4355 4.05003 13.6208 5.23541 13.6208 6.69517C13.6208 7.9464 12.6989 8.57203 12.3586 8.80252Z" fill="#3E3E3E" />
        </svg>
      </div>
      <div className='flex justify-center text-center'>
        <p className="text-[13px] text-[#4D4D4D]">
          Create a unique profile ID, <br />
          that visible to others
        </p>
      </div>

      {isOpen === "Guidelines" ?
        <>
          <div className='-mt-[760px] -ml-0.5 sm:block hidden'>
            <div className='absolute w-96 py-3 rounded-xl border border-[#D8D8D8] bg-white h-[800px] mt-6'>
              <div className="flex justify-center mt-10">
                <div>
                  <div className="relative right-10">
                    <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
                      <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
                    </svg>
                    <div className="absolute top-0 left-0 w-80 -ml-24">
                      <p className="text-[21px] font-semibold text-center">Remind <br />
                        before setting a display name</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-[14px] font-semibold text-center mt-14'>
                Resemble Your Name:
              </p>
              <p className='text-[14px] text-center px-9'>
                Ensure that the profile ID bears some resemblance to the user‘s name for personalization and recognition.
              </p>
              <p className='text-[14px] font-semibold text-center mt-5'>
                Avoid Starting or Ending with a Symbol:
              </p>
              <p className='text-[14px] text-center px-9'>
                The profile ID should not begin or end with any symbols. It should start and end with either a letter, a number, or an underscore.
              </p>
              <p className='text-[14px] font-semibold text-center mt-5'>
                Use Text, Numbers, and Underscore:
              </p>
              <p className='text-[14px] text-center px-9'>
                Combine letters, numbers, and underscores in the profile ID. This allows for flexibility and creativity while maintaining a consistent structure.
              </p>
              <p className='text-[14px] font-semibold text-center mt-5'>
                Avoid Numbers Only:
              </p>
              <p className='text-[14px] text-center px-9'>
                The profile ID should not consist of numbers only. It should include a combination of letters, numbers, and underscores for diversity.
              </p>
              <p className='text-[14px] font-semibold text-center mt-5'>
                Character Length:
              </p>
              <p className='text-[14px] text-center px-9'>
                The profile ID should be a minimum of 4 characters and a maximum of 15 characters. This range balances brevity with the need for distinct and recognizable IDs.
              </p>
              <div className='flex justify-center mt-10'>
                <button onClick={() => {
                  setIsOpen("")
                }} className='text-[14px] text-center px-[83px] py-3 rounded-2xl bg-[#D7D7D7]'>
                  Got it !
                </button>
              </div>
            </div>
          </div>

          <div className="sm:hidden block -mt-[720px]">
            <div className='absolute w-80 py-3 rounded-xl border border-[#D8D8D8] bg-white h-[880px] mt-6'>
              <div className="flex justify-center mt-10">
                <div>
                  <div className="relative right-10">
                    <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
                      <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
                    </svg>
                    <div className="absolute top-0 left-0 w-80 -ml-24">
                      <p className="text-[21px] font-semibold text-center">Remind <br />
                        before setting a display name</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-[14px] font-semibold text-center mt-14'>
                Resemble Your Name:
              </p>
              <p className='text-[14px] text-center px-9'>
                Ensure that the profile ID bears some resemblance to the user‘s name for personalization and recognition.
              </p>
              <p className='text-[14px] font-semibold text-center mt-5'>
                Avoid Starting or Ending with a Symbol:
              </p>
              <p className='text-[14px] text-center px-9'>
                The profile ID should not begin or end with any symbols. It should start and end with either a letter, a number, or an underscore.
              </p>
              <p className='text-[14px] font-semibold text-center mt-5'>
                Use Text, Numbers, and Underscore:
              </p>
              <p className='text-[14px] text-center px-9'>
                Combine letters, numbers, and underscores in the profile ID. This allows for flexibility and creativity while maintaining a consistent structure.
              </p>
              <p className='text-[14px] font-semibold text-center mt-5'>
                Avoid Numbers Only:
              </p>
              <p className='text-[14px] text-center px-9'>
                The profile ID should not consist of numbers only. It should include a combination of letters, numbers, and underscores for diversity.
              </p>
              <p className='text-[14px] font-semibold text-center mt-5'>
                Character Length:
              </p>
              <p className='text-[14px] text-center px-9'>
                The profile ID should be a minimum of 4 characters and a maximum of 15 characters. This range balances brevity with the need for distinct and recognizable IDs.
              </p>
              <div className='flex justify-center mt-10'>
                <button onClick={() => {
                  setIsOpen("")
                }} className='text-[14px] text-center px-[83px] py-3 rounded-2xl bg-[#D7D7D7]'>
                  Got it !
                </button>
              </div>
            </div>
          </div>
        </>
        : " "}
    </>
  )
}

export default SetDisplayNameForm