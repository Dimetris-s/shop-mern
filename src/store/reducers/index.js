import { combineReducers } from "redux";
import { loadingReducer } from "./loadingReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    loading: loadingReducer
})