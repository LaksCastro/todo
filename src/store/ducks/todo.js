import { createActions, createReducer } from "reduxsauce";

// Criando action types e creatores
export const { Types, Creatores } = createActions({
  updateTodo: ["newData"],
  requestTodoList: [],
  successTodoList: ["data"],
  failureTodoList: [],
  logout: []
});

// Criando os reducer handlers
const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null
};

const update = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    data: state.data.map(item =>
      item.id === action.payload.newTodo.id ? action.payload.newTodo : item
    )
  };
};

const request = (state = INITIAL_STATE, action) => {
  return { ...state, loading: true };
};

const success = (state = INITIAL_STATE, action) => {
  return { data: action.payload.data, loading: false, error: null };
};

const failure = (state = INITIAL_STATE, action) => {
  return { data: null, loading: false, error: "An error ocurred, try again" };
};
const logout = (state = INITIAL_STATE, action) => {
  return { data: null, loading: false, error: null };
};

// Rest of action reducer.....
export default createReducer(INITIAL_STATE, {
  [Types.UPDATE_TODO]: update,
  [Types.REQUEST_TODO_LIST]: request,
  [Types.SUCCESS_TODO_LIST]: success,
  [Types.FAILURE_TODO_LIST]: failure,
  [Types.LOGOUT]: logout
});
