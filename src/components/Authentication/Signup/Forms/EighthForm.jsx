import React from "react";

const EighthForm = ({ formValues, onChange }) => {
  return (
    <>
      <form className="w-72 ml-12">

        <p className="text-sm font-medium mb-6">
          Verify your Account with Aadhar
        </p>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="lastname"
            name="lastname"
            onChange={onChange}
            value={formValues.lastname}
            type="text"
            placeholder="Aadhar Number"
          ></input>
        </div>

        <button className="bg-[#F92739] text-white w-full py-3 rounded-xl mb-6 text-sm">
          Request OTP
        </button>

        <button className="bg-[#B5B5B5] text-white w-full py-3 rounded-xl mb-10 text-sm">
          Do it Later
        </button>

      </form>
    </>
  );
};

export default EighthForm;
