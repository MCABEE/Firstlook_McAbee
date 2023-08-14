import { useContext } from "react";
import { registrationContext } from "../../../context/formContext";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import SeventhForm from "./SeventhForm";
import { Link, useNavigate } from "react-router-dom";
import firstLook from '../../../assets/firstLook.png'

const QuickSignup = () => {

    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.clear();
        navigate("/register")
        window.location.reload()
    }

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
            <div className="bg-white pt-4 pb-4 sm:px-6 border border-gray-200 rounded-2xl w-11/12 mx-auto mt-5">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <Link className="">
                                <span className="sr-only">Your Company</span>
                                <img className="h-10" src={firstLook} alt="Alt" />
                            </Link>
                        </div>
                        {token && <div className="lg:flex lg:min-w-0 lg:flex-1 mr-5 sm:mr-0 lg:justify-end">
                            <Link
                                onClick={logout}
                                className="inline-block rounded-lg px-6 py-1.5 text-sm font-semibold leading-6 bg-[#FC3657] shadow-sm text-white transform transition hover:scale-95 duration-300 ease-in-out"
                            >
                                Logout
                            </Link>
                        </div>}
                    </nav>
                </div>
            </div>
            <div className="flex justify-center items-center sm:mb-10 sm:mt-10">
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