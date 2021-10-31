import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { loadingReducer } from "./loadingReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { alertReducer } from "./alertReducer";
import { modalsReducer } from "./modalsReducer";

export const rootReducer = combineReducers({
	user: userReducer,
	products: productReducer,
	loading: loadingReducer,
	basket: basketReducer,
	alert: alertReducer,
	modal: modalsReducer
});
