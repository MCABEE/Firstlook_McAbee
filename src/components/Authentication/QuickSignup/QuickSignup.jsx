import Navbar from "../../Home/Navbar";
import { useContext } from "react";
import { registrationContext } from "../../../context/formContext";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import SeventhForm from "./SeventhForm";

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
            <Navbar />
            <div className="flex h-screen justify-center items-center mt-20">
                <div className="w-full h-[55rem] max-w-xs sm:max-w-sm bg-white sm:bg-[#F2F2F2] sm:rounded-2xl sm:shadow-lg mt-44">
                    <p className="font-oxygen font-bold flex justify-center mt-16 text-[16px]">
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