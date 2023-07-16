import Navbar from "../../Home/Navbar";
import './RegistrationMain.css'
import FirstForm from "./Forms/FirstForm";
import SecondForm from "./Forms/SecondForm";
import ThirdForm from "./Forms/ThirdForm";
import EighthForm from "./Forms/EighthForm";
import SeventhForm from "./Forms/SeventhForm";
import SixthForm from "./Forms/SixthForm";
import FifthForm from "./Forms/FifthForm";
import FourthForm from "./Forms/FourthForm";
import ThirdForm2 from "./Forms/ThirdForm2";
import FifthForm2 from "./Forms/FifthForm2";
import SixthForm2 from "./Forms/SixthForm2";
import { useContext, useEffect, useState } from "react";
import { registrationContext } from "../../../context/formContext";
import { getUserDetails } from "../../../api";
import { setUserData } from "../../../Redux/Reducer/getUserData";
import { useDispatch } from "react-redux";
import AadharForm from "./Forms/AadharForm";
import { useRef } from "react";

const RegistrationMain = () => {
    const [status, setStatus] = useState([])

    const { page, setPage } = useContext(registrationContext)
    const dispatch = useDispatch()
    const listRef = useRef(null); // Reference to the list element
    const activePage = page; // Replace with your active page logic
    const [scrollEnabled, setScrollEnabled] = useState(true);

    const getUserDetail = async () => {
        await getUserDetails().then((result) => {
            setStatus(result?.data?.userData?.registartionStatus[0])
            dispatch(setUserData(result?.data?.userData))
        })
    }

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
            case 11: {
                return (
                    <AadharForm></AadharForm>
                );
            }
            default:
                return null;
        }
    };

    const setForm = (e) => {
        const name = e?.target?.innerText || e;
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
            case "Personal Info2": {
                return setPage(3);
            }
            case "Academic": {
                return setPage(4);
            }
            case "Occupation": {
                return setPage(5);
            }
            case "Occupation2": {
                return setPage(6);
            }
            case "Family": {
                return setPage(7);
            }
            case "Family2": {
                return setPage(8);
            }
            case "Upload": {
                return setPage(9);
            }
            case "Verification": {
                return setPage(10);
            }
            case "Verification2": {
                return setPage(11);
            }
            default:
                setPage(0);
        }
    };

    useEffect(() => {
        getUserDetail()
        setForm(status)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status])

    useEffect(() => {
        const listElement = listRef.current;
        const activeElement = listElement.children[activePage];

        if (activeElement && scrollEnabled) {
            activeElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }

        if (activePage === 3 || activePage === 6 || activePage === 8 || activePage === 11) {
            setScrollEnabled(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activePage, scrollEnabled]);

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center sm:mb-20">
                <div className="w-full sm:h-[55rem] max-w-xs sm:max-w-sm bg-white sm:bg-[#F2F2F2] sm:rounded-2xl sm:shadow-md">
                    <p className="font-oxygen font-bold flex justify-center sm:mt-16 text-2xl">
                        Registration
                    </p>
                    <div className="grid gap-4 mt-10">
                        <ul ref={listRef} className="gap-16 ml-4 sm:ml-[21px] mb-10 flex justify-between w-full whitespace-nowrap overflow-x-scroll hide-scroll-bar px-3 py-3 bg-white border border-[#B8B8B8] rounded-2xl clip-right-xs">
                            <li
                                className={
                                    page === 0 ? " w-2/6 rounded-lg flex items-center ml-2 text-[#F92739] font-medium cursor-pointer" : "bg: transparent ml-2 flex items-center text-[#807D7D] cursor-pointer"
                                }
                            >
                                About You
                            </li>

                            <li
                                className={
                                    page === 1 ? " w-2/6 rounded-lg flex items-center ml-2 text-[#F92739] font-medium cursor-pointer" : "bg: transparent flex items-center ml-2 text-[#807D7D] cursor-pointer"
                                }
                            >
                                Native
                            </li>

                            <li
                                className={
                                    page === 2 || page === 3 ? " w-2/6 rounded-lg flex items-center ml-2 text-[#F92739] font-medium cursor-pointer" : "bg: transparent flex items-center ml-2 text-[#807D7D] cursor-pointer"
                                }
                            >
                                Personal Info
                            </li>

                            <li
                                className={
                                    page === 4 ? " w-2/6 rounded-lg flex items-center ml-2 text-[#F92739] font-medium cursor-pointer" : "bg: transparent flex items-center ml-2 text-[#807D7D] cursor-pointer"
                                }
                            >
                                Academic
                            </li>

                            <li
                                className={
                                    page === 5 || page === 6 ? " w-2/6 rounded-lg flex items-center ml-2 text-[#F92739] font-medium cursor-pointer" : "bg: transparent flex items-center ml-2 text-[#807D7D] cursor-pointer"
                                }
                            >
                                Occupation
                            </li>

                            <li
                                className={
                                    page === 7 || page === 8 ? " w-2/6 rounded-lg flex items-center ml-2 text-[#F92739] font-medium cursor-pointer" : "bg: transparent flex items-center ml-2 text-[#807D7D] cursor-pointer"
                                }
                            >
                                Family
                            </li>

                            <li
                                className={
                                    page === 9 ? " w-2/6 rounded-lg flex items-center ml-2 text-[#F92739] font-medium cursor-pointer" : "bg: transparent flex items-center ml-2 text-[#807D7D] cursor-pointer"
                                }
                            >
                                Upload
                            </li>

                            <li
                                className={
                                    page === 10 || page === 11 ? " w-2/6 rounded-lg flex items-center ml-2 text-[#F92739] font-medium cursor-pointer" : "bg: transparent flex items-center ml-2 text-[#807D7D] cursor-pointer"
                                }
                            >
                                Verification
                            </li>

                            <li
                                className={
                                    page === 12 ? " w-2/6 rounded-lg flex items-center ml-2 text-[#F92739] font-medium cursor-pointer" : "bg: transparent flex items-center ml-2 text-[#807D7D] cursor-pointer"
                                }
                            >

                            </li>
                        </ul>
                        <div className="flex-1">{handleForms()}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationMain;