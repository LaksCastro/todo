import React, { useEffect } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Types } from "./store/ducks/user";
import { Types as TypesTodo } from "./store/ducks/todo";

import { toast } from "react-toastify";

import Index from "./pages/index";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import NotFound from "./pages/notFound";
import MobileToast from "./components/mobileToast";

import GlobalStyled from "./reset/index";
import { ToastContainer } from "react-toastify";

import LoadingUser from "./components/loadingUser/index";
import Loading from "./assets/loadingUser.svg";

import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

import firebase from "./firebase";

const Routes = () => {
    const user = useSelector(state => state.user);
    const isAuth = user.isAuth;

    const dispatch = useDispatch();

    useEffect(() => {
        function getUserState() {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    if (!localStorage.getItem("toast")) {
                        toast.success(`Hi, ${user.displayName}!`);
                        localStorage.setItem("toast", "true");
                    }

                    dispatch({
                        type: Types.SUCCESS_USER,
                        payload: {
                            data: {
                                uid: user.uid,
                                name: user.displayName,
                                email: user.email,
                                photoURL: user.photoURL
                            }
                        }
                    });
                    return;
                }
                localStorage.removeItem("toast");
                dispatch({
                    type: TypesTodo.LOGOUT
                });
                dispatch({
                    type: Types.LOGOUT_USER
                });
            });
        }
        getUserState();
        // eslint-disable-next-line
    }, []);

    if (isAuth === null)
        return (
            <>
                <GlobalStyled />
                <LoadingUser img={Loading} />
            </>
        );

    return (
        <BrowserRouter basename="/todo"/>
            <>
                <GlobalStyled />
                <ToastContainer />
                <MobileToast />
                <Switch>
                    <Route path="/" exact component={Index} />
                    <PrivateRoute
                        path="/dashboard"
                        exact
                        component={Dashboard}
                    />
                    <PublicRoute path="/login" exact component={Login} />
                    <PublicRoute path="/register" exact component={Register} />
                    <PrivateRoute path="/profile" exact component={Profile} />

                    <Route path="/*" component={NotFound} />
                </Switch>
            </>
        </BrowserRouter>
    );
};

export default Routes;
