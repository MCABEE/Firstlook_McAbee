import React from "react";
import PhotoSizeSelectActualRoundedIcon from '@mui/icons-material/PhotoSizeSelectActualRounded';

const SeventhForm = ({ formValues, onChange }) => {
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
            <input type="file" class="hidden" />
          </button>
        </div>

        <p className="text-xs font-medium ml-3.5 mb-10">
          Add 3 photos minimum, It will boost your reach
        </p>

        <div className="flex items-center justify-between"></div>
      </form>
    </>
  );
};

export default SeventhForm;


