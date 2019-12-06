import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
    requestUser: [],
    successUser: ["data"],
    failedUser: ["error"],
    logoutUser: []
});

const INITIAL_STATE = {
    data: null,
    loading: false,
    error: null,
    isAuth: null
};

const request = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        loading: true
    };
};
const success = (state = INITIAL_STATE, action) => {
    return {
        data: action.payload.data,
        loading: false,
        error: null,
        isAuth: true
    };
};
const error = (state = INITIAL_STATE, action) => {
    return {
        data: null,
        loading: false,
        error: action.payload.error,
        isAuth: false
    };
};
const logout = (state = INITIAL_STATE, action) => {
    return {
        data: null,
        loading: false,
        error: null,
        isAuth: false
    };
};
export default createReducer(INITIAL_STATE, {
    [Types.REQUEST_USER]: request,
    [Types.SUCCESS_USER]: success,
    [Types.FAILED_USER]: error,
    [Types.LOGOUT_USER]: logout
});
