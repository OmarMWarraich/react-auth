import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ( props ) => {

    const user = null;

    /**
     * 
     * if user is not logged in, redirect to login page
     * We're using the Navigate component to redirect the user to the login page
     * and we're passing the current path as the state so that we can redirect the user
     * back to the current page after they log in
     * Navigate component is imported from react-router-dom
     * 
     */

    return user ? (
        <Route {...props} />
    ) : (
        <Navigate state={{ from: props.path }} replace to="/login" />
    );
}