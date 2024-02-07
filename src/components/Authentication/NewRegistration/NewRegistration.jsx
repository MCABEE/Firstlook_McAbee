import firstLook from '../../../assets/firstLook.png'
import { useContext, useEffect, useState } from "react";
import { registrationContext } from "../../../context/formContext";
import { getUserDetails } from "../../../api";
import { setUserData } from "../../../Redux/Reducer/getUserData";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AboutForm from './AboutForm';
import SetDisplayNameForm from './SetDisplayNameForm';
import JobForm from './JobForm';
import AcademicForm from './AcademicForm';
import LocationForm from './LocationForm';
import AcademicForm2 from './AcademicForm2';
import UploadPhotoForm from './UploadPhotoForm';
import SetPasswordForm from './SetPasswordForm';

const NewRegistration = () => {
    const navigate = useNavigate()
    const [status, setStatus] = useState("")

    const { page, setPage } = useContext(registrationContext)
    const dispatch = useDispatch()

    const getUserDetail = async () => {
        await getUserDetails().then((result) => {
            setStatus(result?.data?.userData?.signupStatus)
            dispatch(setUserData(result?.data?.userData))
        })
    }

    const handleForms = () => {
        switch (page) {
            case 0: {
                return (
                    <AboutForm></AboutForm>
                );
            }
            case 1: {
                return (
                    <SetDisplayNameForm></SetDisplayNameForm>
                );
            }
            case 2: {
                return <JobForm></JobForm>;
            }
            case 3: {
                return <AcademicForm></AcademicForm>
            }
            case 4: {
                return (
                    <AcademicForm2></AcademicForm2>
                );
            }
            case 5: {
                return (
                    <LocationForm></LocationForm>
                );
            }
            case 6: {
                return (
                    <UploadPhotoForm></UploadPhotoForm>
                );
            }
            case 7: {
                return (
                    <SetPasswordForm></SetPasswordForm>
                );
            }
            default:
                return null;
        }
    };

    const setForm = (e) => {
        const name = e?.target?.innerText || e;
        switch (name) {
            case "About": {
                return setPage(1);
            }
            case "DisplayName": {
                return setPage(2);
            }
            case "Career": {
                return setPage(3);
            }
            case "Education": {
                return setPage(4);
            }
            case "CurrentLocation": {
                return setPage(6);
            }
            case "Photos": {
                return setPage(7);
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

    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.clear();
        navigate("/")
        window.location.reload()
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="bg-white pt-4 pb-4 px-2 sm:px-6 border-2 shadow-sm rounded-2xl w-11/12 mx-auto mt-5">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <Link to="/" className="">
                                <span className="sr-only">Your Company</span>
                                <img className="sm:h-10 h-8" src={firstLook} alt="Alt" />
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
            <div className="flex justify-center items-center sm:mb-10 mb-3 mt-10">
                <div className="w-full sm:h-[55rem] max-w-xs sm:max-w-sm bg-white sm:rounded-2xl sm:border-2">
                    <div className="flex-1">{handleForms()}</div>
                </div>
            </div>
        </>
    );
};

export default NewRegistration;