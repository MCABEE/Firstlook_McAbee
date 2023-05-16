import React, { useState } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const FourthForm = ({ formValues, onChange }) => {

  const [selectedOption, setSelectedOption] = useState(false);

  const handleToggle = () => {
    setSelectedOption(!selectedOption);
  };
  return (
    <>
      <form className="w-72 ml-12">

        <label className="flex items-center relative w-max cursor-pointer select-none">
          <span className="text-sm font-oxygen mr-24">Are you still studying ? </span>
          <input type="checkbox" className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-xl bg-red-500" checked={selectedOption}
            onChange={handleToggle} />
          <span className="absolute font-medium text-xs uppercase right-1 text-white"> {selectedOption ? '' : 'NO'} </span>
          <span className="absolute font-medium text-xs uppercase right-8 text-white"> {selectedOption ? 'Yes' : ''} </span>
          <span className="w-5 h-5 right-8 absolute rounded-full transform transition-transform bg-gray-200" />
        </label>

        <style jsx>{`
        input:checked {
          background-color: #22c55e;
        }

        input:checked ~ span:last-child {
          --tw-translate-x: 1.75rem;
        }
      `}</style>

        <p className="font-medium text-sm mt-8">
          Add your Highest Qualification
        </p>

        <div className="mb-6 mt-4">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="name"
            name="name"
            type="text"
            placeholder="First Name"
            onChange={onChange}
            value={formValues.name}
          ></input>
        </div>

        <div className="mb-6 mt-5">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="name"
            name="name"
            type="text"
            placeholder="First Name"
            onChange={onChange}
            value={formValues.name}
          ></input>
        </div>

        <div className="mb-6 mt-5">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="name"
            name="name"
            type="text"
            placeholder="First Name"
            onChange={onChange}
            value={formValues.name}
          ></input>
        </div>

        <div className="mb-6 mt-5">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="name"
            name="name"
            type="text"
            placeholder="First Name"
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
            placeholder="Last Name"
          ></input>
        </div>

        <button className="bg-[#D7D5D5] flex text-black text-sm w-full px-6 py-3 rounded-xl mb-6">
          <div className="text-red-500 -mt-0.5 ml-6">
            <AddOutlinedIcon />
          </div>
          Add another Qualification
        </button>

        <div className="flex items-center justify-between"></div>
      </form >
    </>
  );
};

export default FourthForm;
