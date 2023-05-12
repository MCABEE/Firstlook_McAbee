import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../../Home/Navbar";

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
                const dataUrl = `https://restcountries.com/v3.1/all`;
                const response = await axios.get(dataUrl);
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
        if (obj.name.common === selectedCountry) {
            return true;
        }
        return false;
    });
    console.log("searchSelectedCountry", searchSelectedCountry);

    return (
        <>
            <Navbar />
            <div className="flex h-screen justify-center items-center ">

                <div className="w-full max-w-md  bg-white rounded-2xl shadow-2xl">

                    <p className='font-oxygen font-bold text-center text-2xl mt-12'>
                        Registration
                    </p>

                    <p className='ml-10 mt-10 font-medium'>
                        Select Country
                    </p>

                    <div className="grid justify-center mt-10 rounded-2xl mx-10 space-y-10">

                        <div>
                            <select
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                                className=" w-80 h-12 text-lg border border-gray-400 rounded-2xl px-4 md:text-lg "
                            >
                                {countries.map((item) => {
                                    return (
                                        <option key={uuidv4()} value={item.name.common}>
                                            {item.name.common}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div class="relative">
                            <img src={
                                searchSelectedCountry &&
                                searchSelectedCountry?.flags?.png
                            } alt="Image" class="absolute w-8 h-5 mt-3.5 ml-3" />
                            <p className="absolute ml-12 mt-3">
                                {searchSelectedCountry &&
                                    searchSelectedCountry.idd.root}
                                {searchSelectedCountry &&
                                    searchSelectedCountry.idd.suffixes}
                            </p>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                placeholder="Enter Your Number"
                                autoComplete="given-name"
                                className=" w-80 rounded-xl border-0 py-3 px-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            ></input>
                        </div>

                    </div>

                    <button className='bg-red-500 p-3 rounded-xl mt-10 mb-10 ml-24 text-white px-20'>
                        Verify Mobile
                    </button>
                </div>
            </div>
        </>
    );
};

export default PhoneReg;