import { Navigate } from "react-router-dom";
/* import { useUser } from "./useUser"; */
import { useToken } from "./useToken";

export const PrivateRoute = ({ children }) => {

    /* const user = useUser(); */

    const [token] = useToken();

    /**
     * 
     * if user is not logged in, redirect to login page
     * We're using the Navigate component to redirect the user to the login page
     * and we're passing the current path as the state so that we can redirect the user
     * back to the current page after they log in
     * Navigate component is imported from react-router-dom
     * 
     */

    if (!token) return <Navigate to="/login" />

    /**
     * 
     * if user is logged in, render the component
     * 
     */

    return children;
}