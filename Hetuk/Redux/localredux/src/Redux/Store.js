import { createStore, combineReducers } from "redux";

import { authReducer } from "./auth/reducer";
import { todosReducer } from "./todos/Reducer";

const rootTerminal = combineReducers({
  auth: authReducer,
  todo: todosReducer,
});

export const myStore = createStore(rootTerminal);
