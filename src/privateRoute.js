import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuth = useSelector(state => state.user.isAuth);

    return (
        <Route
            {...rest}
            render={props =>
                isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
