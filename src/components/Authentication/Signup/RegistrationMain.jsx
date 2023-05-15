import React, { useState } from "react";
import Navbar from "../../Home/Navbar";
import './RegistrationMain.css'
import FirstForm from "./Forms/FirstForm";
import SecondForm from "./Forms/SecondForm";
import CircleIcon from '@mui/icons-material/Circle';
import ThirdForm from "./Forms/ThirdForm";
import EighthForm from "./Forms/EighthForm";
import SeventhForm from "./Forms/SeventhForm";
import SixthForm from "./Forms/SixthForm";
import FifthForm from "./Forms/FifthForm";
import FourthForm from "./Forms/FourthForm";
import ThirdForm2 from "./Forms/ThirdForm2";
import ThirdForm3 from "./Forms/ThirdForm3";

const RegistrationMain = () => {
    const formList = ["FirstForm", "SecondForm", "ThirdForm", "FourthForm", "FifthForm", "SixthForm", "SeventhForm", "EighthForm"];

    const formLength = formList.length;

    const [page, setPage] = useState(0);

    const handlePrev = () => {
        setPage(page === 0 ? formLength - 1 : page - 1);
    };
    const handleNext = () => {
        setPage(page === formLength - 1 ? 0 : page + 1);
    };

    const initialValues = {
        name: "",
        lastname: "",
        password: "",
        confirmPassword: "",
        username: "",
        city: "1",
        address: "",
        zip: "",
        terms: "",
    };
    const [values, setValues] = useState(initialValues);

    const handleForms = () => {
        switch (page) {
            case 0: {
                return (
                    <div>
                        <FirstForm formValues={values} onChange={onChange}></FirstForm>
                    </div>
                );
            }
            case 1: {
                return (
                    <SecondForm
                        formValues={values}
                        onChange={onChange}
                    ></SecondForm>
                );
            }
            case 2: {
                return <ThirdForm formValues={values} onChange={onChange}></ThirdForm>;
            }
            case 3: {
                return <ThirdForm2 formValues={values} onChange={onChange}></ThirdForm2>;
            }
            case 4: {
                return <ThirdForm3 formValues={values} onChange={onChange}></ThirdForm3>;
            }
            case 5: {
                return (
                    <FourthForm
                        formValues={values}
                        onChange={onChange}
                    ></FourthForm>
                );
            }
            case 6: {
                return (
                    <FifthForm
                        formValues={values}
                        onChange={onChange}
                    ></FifthForm>
                );
            }
            case 7: {
                return (
                    <SixthForm
                        formValues={values}
                        onChange={onChange}
                    ></SixthForm>
                );
            }
            case 8: {
                return (
                    <SeventhForm
                        formValues={values}
                        onChange={onChange}
                    ></SeventhForm>
                );
            }
            case 9: {
                return (
                    <EighthForm
                        formValues={values}
                        onChange={onChange}
                    ></EighthForm>
                );
            }
            default:
                return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await setTimeout(() => {
            console.log("form", values);
        }, 2000);
        return response;
    };

    const setForm = (e) => {
        const name = e.target.innerText;
        switch (name) {
            case "About You": {
                return setPage(0);
            }
            case "Native": {
                return setPage(1);
            }
            case "Personal Info": {
                return setPage(2);
            }
            case "Academic": {
                return setPage(5);
            }
            case "Occupation": {
                return setPage(6);
            }
            case "Family": {
                return setPage(7);
            }
            case "Upload": {
                return setPage(8);
            }
            case "Verification": {
                return setPage(9);
            }
            default:
                setPage(0);
        }
    };

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues({ ...values, [name]: type === "checkbox" ? checked : value });
    };

    return (
        <>

            <Navbar />
            <div className="flex h-screen justify-center items-center mt-20 mb-56">
                <div className="w-full h-[55rem] max-w-sm bg-[#F2F2F2] rounded-2xl shadow-2xl mt-44">
                    <p className="font-oxygen font-bold flex justify-center mt-16 text-2xl">
                        Registration
                    </p>
                    <div className="grid gap-4 h-screen place-items-center mt-5">
                        <ul className="gap-16 ml-16 flex justify-between w-full whitespace-nowrap overflow-x-scroll hide-scroll-bar px-3 py-3 bg-white border border-[#B8B8B8] rounded-2xl clip-right">
                            <li
                                onClick={setForm}
                                className={
                                    page === 0 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 0
                                                ? "ml-2 text-[#F92739] font-medium"
                                                : "ml-2 text-[#807D7D] cursor-pointer"
                                        }
                                    >
                                        About You
                                    </span>
                                </div>
                            </li>

                            <li
                                onClick={setForm}
                                className={
                                    page === 1 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 1
                                                ? "ml-2 text-[#F92739] font-medium"
                                                : "ml-2 text-[#807D7D] cursor-pointer"
                                        }
                                    >
                                        Native
                                    </span>
                                </div>
                            </li>

                            <li
                                onClick={setForm}
                                className={
                                    page === 2 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 2 || page ===  3 || page === 4
                                                ? "ml-2 text-[#F92739] font-medium"
                                                : "ml-2 text-[#807D7D] cursor-pointer"
                                        }
                                    >
                                        Personal Info
                                    </span>
                                </div>
                            </li>

                            <li
                                onClick={setForm}
                                className={
                                    page === 5 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 5
                                                ? "ml-2 text-[#F92739] font-medium"
                                                : "ml-2 text-[#807D7D] cursor-pointer"
                                        }
                                    >
                                        Academic
                                    </span>
                                </div>
                            </li>

                            <li
                                onClick={setForm}
                                className={
                                    page === 6 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 6
                                                ? "ml-2 text-[#F92739] font-medium"
                                                : "ml-2 text-[#807D7D] cursor-pointer"
                                        }
                                    >
                                        Occupation
                                    </span>
                                </div>
                            </li>

                            <li
                                onClick={setForm}
                                className={
                                    page === 7 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 7
                                                ? "ml-2 text-[#F92739] font-medium"
                                                : "ml-2 text-[#807D7D] cursor-pointer"
                                        }
                                    >
                                        Family
                                    </span>
                                </div>
                            </li>

                            <li
                                onClick={setForm}
                                className={
                                    page === 8 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 8
                                                ? "ml-2 text-[#F92739] font-medium"
                                                : "ml-2 text-[#807D7D] cursor-pointer"
                                        }
                                    >
                                        Upload
                                    </span>
                                </div>
                            </li>

                            <li
                                onClick={setForm}
                                className={
                                    page === 9 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 9
                                                ? "ml-2 text-[#F92739] font-medium"
                                                : "ml-2 text-[#807D7D] cursor-pointer"
                                        }
                                    >
                                        Verification
                                    </span>
                                </div>
                            </li>

                            <li
                                onClick={setForm}
                                className={
                                    page === 10 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 10
                                                ? "ml-2 text-[#F92739] font-medium"
                                                : "ml-2 text-[#807D7D] cursor-pointer"
                                        }
                                    >

                                    </span>
                                </div>
                            </li>

                        </ul>
                        <div className="flex-1">{handleForms()}</div>
                        <div className="">
                            {/* <button
                                onClick={handlePrev}
                                className="bg-blue-200  hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 disabled:bg-gray-400 "
                                disabled={page === 0}
                            >
                                Prev
                            </button> */}
                            {page === 7 ? (
                                <button
                                    onClick={handleSubmit}
                                    className="bg-red-600 rounded-xl text-white py-2 px-10 ml-36"
                                >
                                    Submit
                                </button>
                            ) : (
                                <button
                                    onClick={handleNext}
                                    className="bg-red-600 rounded-xl text-white py-2 px-10 ml-36"
                                >
                                    Continue
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className={
                            page === 0
                                ? " text-[#F92739] font-medium"
                                : "text-gray-300 cursor-pointer"
                        } >
                            <CircleIcon sx={{ height: "10px" }} />
                        </div>
                        <div className={
                            page === 1
                                ? "text-[#F92739] font-medium"
                                : "text-gray-300 cursor-pointer"
                        } >
                            <CircleIcon sx={{ height: "10px" }} />
                        </div>
                        <div className={
                            page === 2 || page ===  3 || page === 4
                                ? "text-[#F92739] font-medium"
                                : "text-gray-300 cursor-pointer"
                        } >
                            <CircleIcon sx={{ height: "10px" }} />
                        </div>
                        <div className={
                            page === 5
                                ? "text-[#F92739] font-medium"
                                : "text-gray-300 cursor-pointer"
                        } >
                            <CircleIcon sx={{ height: "10px" }} />
                        </div>
                        <div className={
                            page === 6
                                ? "text-[#F92739] font-medium"
                                : "text-gray-300 cursor-pointer"
                        } >
                            <CircleIcon sx={{ height: "10px" }} />
                        </div>
                        <div className={
                            page === 7
                                ? "text-[#F92739] font-medium"
                                : "text-gray-300 cursor-pointer"
                        } >
                            <CircleIcon sx={{ height: "10px" }} />
                        </div>
                        <div className={
                            page === 8
                                ? "text-[#F92739] font-medium"
                                : "text-gray-300 cursor-pointer"
                        } >
                            <CircleIcon sx={{ height: "10px" }} />
                        </div>
                        <div className={
                            page === 9
                                ? "text-[#F92739] font-medium"
                                : "text-gray-300 cursor-pointer"
                        } >
                            <CircleIcon sx={{ height: "10px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationMain;
