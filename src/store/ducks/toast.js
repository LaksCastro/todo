import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
    requestMessage: ["message"],
    endMessage: []
});

const INITIAL_STATE = {
    message: null,
    isAnimating: false
};

const request = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isAnimating: true,
        message: action.payload.message
    };
};
const endMessage = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isAnimating: false,
        message: null
    };
};
export default createReducer(INITIAL_STATE, {
    [Types.REQUEST_MESSAGE]: request,
    [Types.END_MESSAGE]: endMessage,
});
