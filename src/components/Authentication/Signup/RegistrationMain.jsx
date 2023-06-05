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
import { useContext } from "react";
import { registrationContext } from "../../../context/formContext";

const RegistrationMain = () => {

    const { page, setPage } = useContext(registrationContext)

    const handleForms = () => {
        switch (page) {
            case 0: {

                return (
                    <FirstForm></FirstForm>
                );
            }
            case 1: {
                return (
                    <SecondForm></SecondForm>
                );
            }
            case 2: {
                return <ThirdForm></ThirdForm>;
            }
            case 3: {
                return <ThirdForm2></ThirdForm2>;
            }
            case 4: {
                return (
                    <FourthForm></FourthForm>
                );
            }
            case 5: {
                return (
                    <FifthForm></FifthForm>
                );
            }
            case 6: {
                return (
                    <FifthForm2></FifthForm2>
                );
            }
            case 7: {
                return (
                    <SixthForm></SixthForm>
                );
            }
            case 8: {
                return (
                    <SixthForm2></SixthForm2>
                );
            }
            case 9: {
                return (
                    <SeventhForm></SeventhForm>
                );
            }
            case 10: {
                return (
                    <EighthForm></EighthForm>
                );
            }
            default:
                return null;
        }
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

    return (
        <>
            <Navbar />
            <div className="flex h-screen justify-center items-center mt-20">
                <div className="w-full h-[55rem] max-w-sm bg-[#F2F2F2] rounded-2xl shadow-2xl mt-44">
                    <p className="font-oxygen font-bold flex justify-center mt-16 text-2xl">
                        Registration
                    </p>
                    <div className="grid gap-4 mt-10">
                        <ul className="gap-16 ml-8 mb-10 flex justify-between w-full whitespace-nowrap overflow-x-scroll hide-scroll-bar px-3 py-3 bg-white border border-[#B8B8B8] rounded-2xl clip-right">
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