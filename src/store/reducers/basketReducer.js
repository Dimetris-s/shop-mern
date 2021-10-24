import { SET_BADGE_COUNT, SET_BASKET, SET_BASKET_ITEMS, SET_TOTAL_COUNT, SET_TOTAL_PRICE } from "../actions/types";

const initialState = {
	items: [],
	totalCount: 0,
	totalPrice: 0,
	badgeCount: 0,
	basket: null,
};

export const basketReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_BASKET_ITEMS:
			return { ...state, items: action.payload };
		case SET_TOTAL_PRICE:
			return { ...state, totalPrice: action.payload };
		case SET_TOTAL_COUNT:
			return { ...state, totalCount: action.payload };
		case SET_BADGE_COUNT:
			return { ...state, badgeCount: action.payload };
		case SET_BASKET:
			return { ...state, basket: action.payload };
		default:
			return state;
	}
};
