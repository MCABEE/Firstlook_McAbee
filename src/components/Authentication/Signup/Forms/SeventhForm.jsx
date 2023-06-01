import PhotoSizeSelectActualRoundedIcon from '@mui/icons-material/PhotoSizeSelectActualRounded';
import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";

const SeventhForm = () => {
  const { page, setPage } = useContext(registrationContext)

  const handleNext = () => {
    setPage(page === 10 ? 0 : page + 1);
  };
  return (
    <>
      <form className="w-72 ml-12">

        <button className="bg-[#F92739] text-white w-full py-3 rounded-xl mb-6">
          Upload Photos
        </button>

        <button className="bg-[#F92739] text-white w-full py-3 rounded-xl mb-6">
          Upload Videos
        </button>

        <div className="w-full py-3 rounded-xl mb-6 border border-[#D8D8D8] bg-white h-36">
          <button type="button" className="border border-[#D8D8D8] rounded-2xl w-52 py-3 mt-8 ml-[2.4rem]">
            <PhotoSizeSelectActualRoundedIcon />
            <span className="text-sm ml-3">Upload from Gallery</span>
            <input type="file" className="hidden" />
          </button>
        </div>

        <p className="text-xs font-medium ml-3.5 mb-10">
          Add 3 photos minimum, It will boost your reach
        </p>

        <div className="flex">
          <button
            onClick={handleNext}
            className="rounded-xl text-[#A0A0A0] px-4 bg-white w-16 h-8 mt-1 text-sm border border-[#D8D8D8]"
          >
            Skip
          </button>

          <button
            onClick={handleNext}
            className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-20"
          >
            Continue
          </button>
        </div>


        <div className="flex items-center justify-between"></div>
      </form>
    </>
  );
};

export default SeventhForm;


