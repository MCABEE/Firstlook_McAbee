import { useState } from "react";
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
import FifthForm2 from "./Forms/FifthForm2";
import SixthForm2 from "./Forms/SixthForm2";

const RegistrationMain = () => {
    const formList = ["FirstForm", "SecondForm", "ThirdForm", "ThirdForm2", "FourthForm", "FifthForm", "FifthForm2", "SixthForm", "SixthForm2", "SeventhForm", "EighthForm"];

    const formLength = formList.length;

    const [page, setPage] = useState(0);

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
                return (
                    <FourthForm
                        formValues={values}
                        onChange={onChange}
                    ></FourthForm>
                );
            }
            case 5: {
                return (
                    <FifthForm
                        formValues={values}
                        onChange={onChange}
                    ></FifthForm>
                );
            }
            case 6: {
                return (
                    <FifthForm2
                        formValues={values}
                        onChange={onChange}
                    ></FifthForm2>
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
                    <SixthForm2
                        formValues={values}
                        onChange={onChange}
                    ></SixthForm2>
                );
            }
            case 9: {
                return (
                    <SeventhForm
                        formValues={values}
                        onChange={onChange}
                    ></SeventhForm>
                );
            }
            case 10: {
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
                return setPage(4);
            }
            case "Occupation": {
                return setPage(5);
            }
            case "Family": {
                return setPage(7);
            }
            case "Upload": {
                return setPage(9);
            }
            case "Verification": {
                return setPage(10);
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
            <div className="flex h-screen justify-center items-center mt-20">
                <div className="w-full h-[55rem] max-w-sm bg-[#F2F2F2] rounded-2xl shadow-2xl mt-44">
                    <p className="font-oxygen font-bold flex justify-center mt-16 text-2xl">
                        Registration
                    </p>
                    <div className="grid gap-4 mt-10">
                        <ul className="gap-16 ml-8 mb-16 flex justify-between w-full whitespace-nowrap overflow-x-scroll hide-scroll-bar px-3 py-3 bg-white border border-[#B8B8B8] rounded-2xl clip-right">
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
                                    page === 2 || page === 3 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 2 || page === 3
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
                                    page === 4 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 4
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
                                    page === 5 || page === 6 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 5 || page === 6
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
                                    page === 7 || page === 8 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 7 || page === 8
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
                                        Upload
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
                                        Verification
                                    </span>
                                </div>
                            </li>

                            <li
                                onClick={setForm}
                                className={
                                    page === 11 ? " w-2/6 rounded-lg  " : "bg: transparent"
                                }
                            >
                                <div className="flex items-center ">
                                    <span
                                        className={
                                            page === 11
                                                ? "ml-2 text-[#F92739] font-medium"
                                                : "ml-2 text-[#807D7D] cursor-pointer"
                                        }
                                    >

                                    </span>
                                </div>
                            </li>

                        </ul>
                        <div className="flex-1">{handleForms()}</div>
                    </div>
                    <div className="flex">
                        {page === 4 || page === 5 || page === 6 || page === 9 ? (
                            <button
                                onClick={handleNext}
                                className="rounded-xl text-[#A0A0A0] ml-12 px-4 bg-white w-16 h-8 mt-1 text-sm border border-[#D8D8D8]"
                            >
                                Skip
                            </button>
                        ) : ""}
                        {page === 4 || page === 5 || page === 6 || page === 9 ? (
                            <button
                                onClick={handleNext}
                                className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-20"
                            >
                                Continue
                            </button>
                        ) : ""}

                        {page === 0 || page === 1 || page === 2 || page === 3 || page === 7 || page === 8 ? (
                            <button
                                onClick={handleNext}
                                className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-48"
                            >
                                Continue
                            </button>
                        ) : ""}

                        {page === 11 ? (
                            <button
                                onClick={handleSubmit}
                                className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-20"
                            >
                                Submit
                            </button>
                        ) : ""}
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-20 sm:mt-32 mb-20">
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
                    page === 2 || page === 3
                        ? "text-[#F92739] font-medium"
                        : "text-gray-300 cursor-pointer"
                } >
                    <CircleIcon sx={{ height: "10px" }} />
                </div>
                <div className={
                    page === 4
                        ? "text-[#F92739] font-medium"
                        : "text-gray-300 cursor-pointer"
                } >
                    <CircleIcon sx={{ height: "10px" }} />
                </div>
                <div className={
                    page === 5 || page === 6
                        ? "text-[#F92739] font-medium"
                        : "text-gray-300 cursor-pointer"
                } >
                    <CircleIcon sx={{ height: "10px" }} />
                </div>
                <div className={
                    page === 7 || page === 8
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
                <div className={
                    page === 10
                        ? "text-[#F92739] font-medium"
                        : "text-gray-300 cursor-pointer"
                } >
                    <CircleIcon sx={{ height: "10px" }} />
                </div>
            </div>
        </>
    );
};

export default RegistrationMain;
