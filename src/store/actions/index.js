import axios from "../../utils/axios";
import {
    ADD_ITEM,
    CLEAR_SEARCH,
    CREATE_USER,
    DECR_ITEM,
    HIDE_ALERT,
    INCR_ITEM,
    REMOVE_ITEM,
    REMOVE_USER,
    RESET_CATEGORY,
    SELECT_CATEGORY,
    SET_BASKET_ITEMS,
    SET_CATEGORIES,
    SET_ITEMS,
    SET_LOADING,
    SET_PRODUCTS,
    SET_SAERCH_VALUE,
    SET_SORT_ORDER,
    SET_SORT_TYPE,
    SET_TOTAL_COUNT,
    SET_TOTAL_PRICE,
    SET_USER,
    SHOW_ALERT,
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
export const createUser = user => ({
    type: CREATE_USER,
    payload: user
})

export const showAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})
export const hideAlert = () => ({
    type: HIDE_ALERT
})

export const setBasketItems = items => ({
    type: SET_BASKET_ITEMS,
    payload: items
})
export const setTotalPrice = price => ({
    type: SET_TOTAL_PRICE,
    payload: price
})
export const setTotalCount = count => ({
    type: SET_TOTAL_COUNT,
    payload: count
})


export const fetchBasketItems = basketId => {
    return async dispatch => {
        dispatch(setLoading("basket"))
        const {data} = await axios.get(`/basket_items?basket_id=${basketId}`)
        dispatch(setBasketItems(data))
        dispatch(setTotalCount(data.length))
        dispatch(stopLoading("basket"))
    }
}

export const fetchProducts = () => {
    return async dispatch => {
        dispatch(setLoading("products"))
        const response = await axios.get('/products')
        dispatch(setProducts(response.data))
        dispatch(stopLoading("products"))
    }
}

export const fetchCategories = () => {
    return async dispatch => {
        dispatch(setLoading("categories"))
        const response = await axios.get('/categories')
        dispatch(setCategories(response.data))
        dispatch(stopLoading("categories"))
    }
}
