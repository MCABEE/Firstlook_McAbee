import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const HomeRoute = ({ children }) => {
    const signupStatus = localStorage.getItem("signupStatus")

    if(signupStatus === 'Completed') {
        return <Navigate to = {"/home"} replace = {true}></Navigate>
    }
    return children
}

export default HomeRoute