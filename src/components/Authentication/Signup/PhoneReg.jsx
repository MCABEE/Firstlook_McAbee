import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Home/Navbar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";

const PhoneReg = () => {
    const [countryState, setCountryState] = useState({
        loading: false,
        countries: [],
        errorMessage: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch spinner
                setCountryState({
                    ...countryState,
                    loading: true,
                });

                //  fetch data
                const dataUrl = `https://restcountries.com/v2/all`;
                const response = await axios.get(dataUrl);
                console.log(response);
                setCountryState({
                    ...countryState,
                    countries: response.data,
                    loading: false,
                });
            } catch (error) {
                setCountryState({
                    ...countryState,
                    loading: false,
                    errorMessage: "Sorry Something went wrong",
                });
            }
        };

        fetchData();
    }, []);
    const { loading, errorMessage, countries } = countryState;
    console.log("loading", loading);
    console.log("countries", countries);
    console.log("errorMessage", errorMessage);

    const [selectedCountry, setSelectedCountry] = useState();
    console.log("selectedCountry", selectedCountry);

    //   find selected country data
    //search selected country
    const searchSelectedCountry = countries.find((obj) => {
        if (obj.name === selectedCountry) {
            return true;
        }
        return false;
    });
    console.log("searchSelectedCountry", searchSelectedCountry);

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value) => {
        setSelectedCountry(value);
        setIsOpen(false);
    };

    return (
        <>
            <Navbar />
            <div className="flex h-screen justify-center items-center mb-36">

                <div className="w-full h-[45rem] mt-44 max-w-sm bg-[#F2F2F2] rounded-2xl shadow-2xl">

                    <p className='font-oxygen font-bold text-center text-2xl mt-16'>
                        Registration
                    </p>

                    <p className='ml-10 mt-16 font-medium'>
                        Select Country Code
                    </p>

                    <div className="grid justify-center mt-7 rounded-2xl mx-10 space-y-10">

                        <div className="relative w-80">
                            {searchSelectedCountry &&
                                <img src={
                                    searchSelectedCountry &&
                                    searchSelectedCountry?.flags?.png
                                } alt="Image" class="absolute w-8 h-5 mt-3.5 ml-[15.3rem] pointer-events-none" />}
                            <p className="absolute ml-48 mt-3 pointer-events-none">
                                {searchSelectedCountry &&
                                    "+" + searchSelectedCountry.callingCodes}

                            </p>
                            <div className="absolute mt-2.5 ml-72 text-gray-500 pointer-events-none">
                                <KeyboardArrowDownIcon />
                            </div>
                            <button
                                type="button"
                                className="w-full h-12 text-left border border-[#B8B8B8] rounded-xl px-4 text-gray-600 bg-white"
                                onClick={handleToggle}
                            >
                                <p className="w-44 truncate text-sm">{selectedCountry ? selectedCountry : "Select Your Country"}</p>
                            </button>
                            {isOpen && (
                                <ul className="absolute z-10 w-full mt-1 h-64 overflow-y-scroll bg-white border border-[#B8B8B8] rounded-lg shadow-lg">
                                    {countries.map((item) => (
                                        <li
                                            key={item.name.common}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex"
                                            onClick={() => handleOptionClick(item.name)}
                                        >
                                            <img src={item.flags.png} className="w-8 h-5 mr-2" alt="" />
                                            <p className="mr-2">{item.callingCodes}</p>
                                            <p className="truncate">{item.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div class="relative">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                placeholder="Enter Your Number"
                                autoComplete="given-name"
                                className=" w-80 rounded-xl py-3 px-5 text-gray-900 shadow-sm border border-[#B8B8B8] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            ></input>
                        </div>

                    </div>

                    <button className='bg-red-500 w-80 p-3 rounded-xl mt-12 mb-20 ml-8 text-white px-20'>
                        <Link to='/register/signup'>
                            Verify Mobile
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default PhoneReg;