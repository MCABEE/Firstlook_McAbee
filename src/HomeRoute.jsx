import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const HomeRoute = ({ children }) => {
    const regStatus = localStorage.getItem("regStatus")

    if(regStatus === 0) {
        return <Navigate to = {"/home"} replace = {true}></Navigate>
    }
    return children
}

export default HomeRoute