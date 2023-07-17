import Navbar from "../../Home/Navbar";
import { useContext } from "react";
import { registrationContext } from "../../../context/formContext";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import SeventhForm from "./SeventhForm";
import { Link } from "react-router-dom";
import firstLook from '../../../assets/firstLook.png'

const QuickSignup = () => {

    const { page } = useContext(registrationContext)

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
                return (
                    <SeventhForm></SeventhForm>
                );
            }
            default:
                return null;
        }
    };

    return (
        <>
            <div className="sm:block hidden">
                <Navbar />
            </div>
            <div className="sm:hidden block bg-white pt-4 pb-4 sm:px-6 border-2 shadow-sm rounded-2xl w-11/12 mx-auto mt-5">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <Link to="/" className="">
                                <span className="sr-only">Your Company</span>
                                <img className="h-10" src={firstLook} alt="Alt" />
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="flex justify-center items-center sm:mb-20">
                <div className="w-full sm:h-[55rem] max-w-xs sm:max-w-sm bg-white sm:bg-[#F2F2F2] sm:rounded-2xl sm:shadow-lg">
                    <p className="font-oxygen font-bold flex justify-center mt-8 sm:mt-16 text-[16px]">
                        Quick Signup
                    </p>
                    <div className="grid gap-4 mt-10">
                        <div className="flex-1">{handleForms()}</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default QuickSignup;