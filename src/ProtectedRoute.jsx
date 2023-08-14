import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token")

    if(token) {
        return <Navigate to = {"/register/signupOption"} replace = {true}></Navigate>
    }
    return children
}

export default ProtectedRoute