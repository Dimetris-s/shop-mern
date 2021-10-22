import {
    RESET_CATEGORY,
    SELECT_CATEGORY,
    SET_CATEGORIES,
    SET_PRODUCTS,
    SET_SORT_ORDER,
    SET_SORT_TYPE,
    SET_SAERCH_VALUE,
    CLEAR_SEARCH
} from "../actions/types"

const initialState = {
    products: [],
    categories: [],
    selectedCategory: null,
    sortBy: {
        type: "rate",
        order: "desc"
    },
    searchValue: ''
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state, products: action.payload
            }
            case SET_CATEGORIES:
                return {
                    ...state, categories: action.payload
                }
                case SELECT_CATEGORY:
                    return {
                        ...state, selectedCategory: action.payload
                    }
                    case RESET_CATEGORY:
                        return {
                            ...state, selectedCategory: null
                        }
                        case SET_SORT_TYPE:
                            return {
                                ...state, sortBy: {
                                    ...state.sortBy,
                                    type: action.payload
                                }
                            }
                            case SET_SORT_ORDER:
                                return {
                                    ...state, sortBy: {
                                        ...state.sortBy,
                                        order: action.payload
                                    }
                                }
                                case CLEAR_SEARCH:
                                    return {
                                        ...state, searchValue: ''
                                    }
                                    case SET_SAERCH_VALUE:
                                        return {
                                            ...state, searchValue: action.payload
                                        }
                                        default:
                                            return state
    }
}