import React from "react";

const ThirdForm3 = ({ formValues, onChange }) => {
  return (
    <>
      <form className="w-72 ml-12">
        <div className="mb-6 mt-4">

          <textarea
            id="about"
            name="about"
            rows={8}
            value={formValues.name}
            onChange={onChange}
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            placeholder="Write about you and your family..."
            defaultValue={''}
          />

          <p className="text-sm text-[#4D4D4D] text-end mt-5">
            0 / 500 Characters
          </p>

        </div>
        <div className="flex items-center justify-between"></div>
      </form>
    </>
  );
};

export default ThirdForm3;
