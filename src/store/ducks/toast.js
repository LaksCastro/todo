import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
    requestMessage: ["message"],
    endMessage: []
});

const INITIAL_STATE = {
    message: null,
    isVisible: false
};

const request = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isVisible: true,
        message: action.payload.message
    };
};
const endMessage = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isVisible: false,
    };
};
export default createReducer(INITIAL_STATE, {
    [Types.REQUEST_MESSAGE]: request,
    [Types.END_MESSAGE]: endMessage,
});
