import { useContext } from "react";
import { registrationContext } from "../../../../context/formContext";

const SixthForm2 = () => {
  const { page, setPage } = useContext(registrationContext)

  const handleNext = () => {
    setPage(page === 10 ? 0 : page + 1);
  };
  return (
    <>
      <form className="w-72 ml-12">

        <p className="mb-3 text-sm font-medium">
          Your Residential Address
        </p>

        <div className="mb-6">
          <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Your Family / House Name"
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Your Home Town"
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Pincode"
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Your Contact Number"
          ></input>
        </div>

        <div className="mb-6">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Home Contact Number"
          ></input>
        </div>

        <div className="mb-10">
          <input
            className=" appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 placeholder:text-[#4D4D4D] text-sm"
            type="text"
            placeholder="Diocese Name (for Christian’s)"
          ></input>
        </div>

        <button
          onClick={handleNext}
          className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-36"
        >
          Continue
        </button>

        <div className="flex items-center justify-between"></div>
      </form>
    </>
  );
};

export default SixthForm2;

