import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ( props ) => {

    const user = null;

    return user ? (
        <Route {...props} />
    ) : (
        <Navigate state={{ from: props.path }} replace to="/login" />
    );
}