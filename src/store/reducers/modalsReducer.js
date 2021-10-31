import { CLOSE_MODAL, OPEN_MODAL } from "../actions/types";

const initialState = {
	editModal: false,
	addProductModal: false
};

export function modalsReducer(state = initialState, action) {
	switch (action.type) {
		case OPEN_MODAL:
			return { ...state, [action.payload]: true };
		case CLOSE_MODAL:
			return { ...state, [action.payload]: false };
		default:
			return state;
	}
}
