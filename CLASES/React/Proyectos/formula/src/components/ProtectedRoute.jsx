
import { Navigate } from "react-router-dom"
import { UserContext } from "../context/userContext"
import { useContext } from "react"
const ProtectedRoute = ({children}) => {

    const {user} = useContext(UserContext);

    if(!user) {
        return <Navigate to="/login" />
    }

    return children
}

export default ProtectedRoute;