import { HIDE_ALERT, SHOW_ALERT } from "../actions/types";

const initialState = {
	isOpen: false,
	type: null,
	text: "",
};

export const alertReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			return {
				isOpen: true,
				type: action.payload.type,
				text: action.payload.text,
			};
		case HIDE_ALERT:
			return { ...state, isOpen: false };
		default:
			return state;
	}
};
