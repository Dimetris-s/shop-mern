import {
    CLEAR_SEARCH,
    REMOVE_USER,
    RESET_CATEGORY,
    SELECT_CATEGORY,
    SET_CATEGORIES,
    SET_LOADING,
    SET_PRODUCTS,
    SET_SAERCH_VALUE,
    SET_SORT_ORDER,
    SET_SORT_TYPE,
    SET_USER,
    STOP_LOADING
} from "./types";

export const setUser = user => ({
    type: SET_USER,
    payload: user
})
export const removeUser = () => ({
    type: REMOVE_USER
})
export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: products
})
export const setCategories = categories => ({
    type: SET_CATEGORIES,
    payload: categories
})
export const setLoading = loadingType => ({
    type: SET_LOADING,
    payload: loadingType
})
export const stopLoading = loadingType => ({
    type: STOP_LOADING,
    payload: loadingType
})
export const setCategory = category => ({
    type: SELECT_CATEGORY,
    payload: category
})
export const resetSelectedCategory = () => ({
    type: RESET_CATEGORY
})
export const setSortType = type => ({
    type: SET_SORT_TYPE,
    payload: type
})
export const setSortOrder = order => ({
    type: SET_SORT_ORDER,
    payload: order
})

export const setSearchValue = value => ({
    type: SET_SAERCH_VALUE,
    payload: value
})
export const clearSearch = () => ({
    type: CLEAR_SEARCH
})