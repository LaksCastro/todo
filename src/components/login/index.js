import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Types } from "../../store/ducks/user";

import { toast } from "react-toastify";

import {
    handleSignByGoogle,
    handleSignByGithub,
    handleSignByMicrosoft,
    handleLoginByEmail
} from "../../utils/auth";

import Logo from "../../assets/logo.svg";
import Google from "../../assets/google.svg";
import Github from "../../assets/github.svg";
import Microsoft from "../../assets/microsoft.svg";
import Loading from "../../assets/loading.svg";

import * as S from "./styled";

const Login = ({ history }) => {
    const isLoading = useSelector(state => state.user.loading);

    const dispatch = useDispatch();

    function showErrors(error) {
        toast.error(error.message);
        dispatch({
            type: Types.FAILED_USER,
            payload: {
                error: error.message
            }
        });
    }
    return (
        <S.AuthWrapper>
            <S.FormUnform
                onSubmit={({ ...all }) => {
                    dispatch({
                        type: Types.REQUEST_USER
                    });
                    handleLoginByEmail({ ...all }, showErrors);
                }}
            >
                <S.AppLogo src={Logo} alt="To Do List" width="120" />

                <S.LabelAction>Login</S.LabelAction>

                <S.ProvidersContainer>
                    <S.ButtonProvider
                        type="button"
                        onClick={() => {
                            dispatch({
                                type: Types.REQUEST_USER
                            });
                            handleSignByGoogle(showErrors);
                        }}
                    >
                        <img height="30" src={Google} alt="Google Logo" />
                    </S.ButtonProvider>
                    <S.ButtonProvider
                        type="button"
                        onClick={() => {
                            dispatch({
                                type: Types.REQUEST_USER
                            });
                            handleSignByGithub(showErrors);
                        }}
                    >
                        <img height="30" src={Github} alt="Github Logo" />
                    </S.ButtonProvider>
                    <S.ButtonProvider
                        type="button"
                        onClick={() => {
                            dispatch({
                                type: Types.REQUEST_USER
                            });
                            handleSignByMicrosoft(showErrors);
                        }}
                    >
                        <img height="30" src={Microsoft} alt="Microsoft Logo" />
                    </S.ButtonProvider>
                </S.ProvidersContainer>

                <S.EmailInputContainer>
                    <S.Label htmlFor="email">E-mail</S.Label>
                    <S.InputUnform
                        id="email"
                        placeholder="E-mail"
                        name="email"
                        type="email"
                    />

                    <S.Label htmlFor="password">Password</S.Label>
                    <S.InputUnform
                        id="password"
                        placeholder="Password"
                        name="password"
                        type="password"
                    />

                    <S.SubmitContainer>
                        <S.ButtonForm disabled={isLoading} type="submit">
                            {isLoading ? (
                                <img
                                    height="30"
                                    src={Loading}
                                    alt="Loading Icon"
                                />
                            ) : (
                                "Login"
                            )}
                        </S.ButtonForm>
                        <S.LinkForm to="/register">Register</S.LinkForm>
                    </S.SubmitContainer>
                </S.EmailInputContainer>
            </S.FormUnform>
        </S.AuthWrapper>
    );
};

export default Login;
