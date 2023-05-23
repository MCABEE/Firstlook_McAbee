import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const ThirdForm2 = ({ formValues, onChange }) => {
  const [isOpen, setIsOpen] = useState("");
  const [drink, setDrink] = useState("")
  const [smoke, setSmoke] = useState("")
  const [diet, setDiet] = useState("")
  const [bloodGroup, setBloodGroup] = useState("")
  const [license, setLicense] = useState("")
  const [financialStatus, setFinancialStatus] = useState("")

  return (
    <>
      <form className="w-72 ml-12">

        <div className="mb-6 flex ">

          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
            onClick={() => setIsOpen("Drink")}
          >
            <p className="w-44 truncate text-sm">{drink ? drink : "Do You Drink ?"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Drink' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setDrink("Yes")
                  setIsOpen("")
                }}
              >
                <p className="mr-2" >Yes</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setDrink("Occasionally")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Occasionally</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setDrink("No")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">No</p>
              </li>

            </ul>
          ) : " "}

          {/* <input
            className="appearance-none border border-[#B8B8B8] rounded-xl w-full py-3 px-6 text-gray-700 text-sm"
            id="name"
            name="name"
            type="text"
            placeholder="Do you Drink ?"
            onChange={onChange}
            value={formValues.name}
          ></input>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div> */}
        </div>

        <div className="mb-6 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
            onClick={() => setIsOpen("Smoke")}
          >
            <p className="w-44 truncate text-sm">{smoke ? smoke : "Do You Smoke ?"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Smoke' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setSmoke("Yes")
                  setIsOpen("")
                }}
              >
                <p className="mr-2" >Yes</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setSmoke("Occasionally")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Occasionally</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setSmoke("No")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">No</p>
              </li>

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
            onClick={() => setIsOpen("Diet")}
          >
            <p className="w-44 truncate text-sm">{diet ? diet : "Do You Diet ?"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Diet' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setDiet("Non-Vegetarian")
                  setIsOpen("")
                }}
              >
                <p className="mr-2" >Non-Vegetarian</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setDiet("Eggetarian")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Eggetarian</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setDiet("Pure Vegetarian")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Pure Vegetarian</p>
              </li>

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
            onClick={() => setIsOpen("Blood Group")}
          >
            <p className="w-44 truncate text-sm">{bloodGroup ? bloodGroup : "Blood Group"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Blood Group' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setBloodGroup("A+")
                  setIsOpen("")
                }}
              >
                <p className="mr-2" >A+</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setBloodGroup("A-")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">A-</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setBloodGroup("B+")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">B+</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setBloodGroup("B+")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">B+</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setBloodGroup("B-")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">B-</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setBloodGroup("O+")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">O+</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setBloodGroup("O-")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">O-</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setBloodGroup("AB+")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">AB+</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setBloodGroup("AB-")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">AB-</p>
              </li>

            </ul>
          ) : " "}
        </div>

        <div className="mb-6 flex">
          <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
            onClick={() => setIsOpen("License")}
          >
            <p className="w-44 truncate text-sm">{license ? license : "Do you have a Driving License ?"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'License' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setLicense("Two-Wheeler Only")
                  setIsOpen("")
                }}
              >
                <p className="mr-2" >Two-Wheeler Only</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setLicense("Four-Wheeler Only")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Four-Wheeler Only</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setLicense("Two & Four-Wheeler")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Two &amp; Four-Wheeler</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setLicense("No License")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">No License</p>
              </li>

            </ul>
          ) : " "}
        </div>

        <div className="mb-10 flex">
        <button
            type="button"
            className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
            onClick={() => setIsOpen("Financial Status")}
          >
            <p className="w-44 truncate text-sm">{financialStatus ? financialStatus : "Financial Status"}</p>
          </button>
          <div className="-ml-8 mt-2.5 text-[#B8B8B8]">
            <KeyboardArrowDownRoundedIcon />
          </div>
          {isOpen == 'Financial Status' ? (
            <ul className="absolute z-10 w-72 mt-14 h-fit bg-white border border-[#B8B8B8] rounded-lg shadow-lg">

              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setFinancialStatus("Average")
                  setIsOpen("")
                }}
              >
                <p className="mr-2" >Average</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setFinancialStatus("Middle Class")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Middle Class</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setFinancialStatus("Middle Class")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Middle Class</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setFinancialStatus("Rich")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">Rich</p>
              </li>
              <li
                key=" "
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                onClick={() => {
                  setFinancialStatus("HNI (High Net-worth)")
                  setIsOpen("")
                }}
              >
                <p className="mr-2">HNI (High Net-worth)</p>
              </li>

            </ul>
          ) : " "}
        </div>

        <div className="flex items-center justify-between"></div>
      </form>
    </>
  );
};

export default ThirdForm2;
