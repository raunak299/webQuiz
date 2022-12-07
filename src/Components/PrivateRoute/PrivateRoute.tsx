import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Store/AuthContext";
import React from "react";
import { Redirect } from "react-router-dom";

const PrivateRoute: React.FC<{children:React.ReactNode}> = (props) => {

    const location = useLocation();
    const login = useContext(AuthContext).token;
    const children = props.children;

    return (
        <React.Fragment>
            {login ? children :
                < Redirect to={{
                    pathname: '/authentication',
                    state: { from: location }
                }}
                />}
        </React.Fragment>
    );
}

export default PrivateRoute;