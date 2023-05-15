import React from "react";

const ThirdForm3 = ({ formValues, onChange }) => {
  return (
    <>
      <form className="w-72">
        <div className="mb-6 mt-4">

          <textarea
            id="about"
            name="about"
            rows={3}
            value={formValues.name}
            onChange={onChange}
            className="ppearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            placeholder="Brief description for your profile."
            defaultValue={''}
          />
          
        </div>
        <div className="flex items-center justify-between"></div>
      </form>
    </>
  );
};

export default ThirdForm3;
