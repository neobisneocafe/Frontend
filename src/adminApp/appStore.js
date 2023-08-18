import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducers";
const { configureStore } = require("@reduxjs/toolkit");

const initialState = {}

const middleware = [thunk]

export function makeStore() {

  const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware)); // Compose enhancer
  
  const store = configureStore({
    reducer: rootReducer,
    initialState,
    composedEnhancer,
  })

  return store
}


export const appAdminStore = makeStore();
