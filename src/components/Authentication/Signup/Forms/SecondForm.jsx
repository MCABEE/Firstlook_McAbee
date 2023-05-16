import React from "react";

const SecondForm = ({ formValues, onChange }) => {
  return (
    <>
      <form className="w-72 ml-12">

        <div className="mb-6">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="name"
            name="name"
            type="text"
            placeholder="Country"
            onChange={onChange}
            value={formValues.name}
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="lastname"
            name="lastname"
            onChange={onChange}
            value={formValues.lastname}
            type="text"
            placeholder="State"
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="lastname"
            name="lastname"
            onChange={onChange}
            value={formValues.lastname}
            type="text"
            placeholder="District"
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="lastname"
            name="lastname"
            onChange={onChange}
            value={formValues.lastname}
            type="text"
            placeholder="Panchayath"
          ></input>
        </div>

        <div className="mb-10">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="lastname"
            name="lastname"
            onChange={onChange}
            value={formValues.lastname}
            type="text"
            placeholder="Mother Toungue"
          ></input>
        </div>
        
        <div className="flex items-center justify-between"></div>
      </form>
    </>
  );
};

export default SecondForm;
