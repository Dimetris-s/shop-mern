import { REMOVE_USER, SET_CATEGORIES, SET_LOADING, SET_PRODUCTS, SET_USER, STOP_LOADING } from "./types";

export const setUser = user => ({type: SET_USER, payload: user})
export const removeUser = () => ({type: REMOVE_USER})
export const setProducts = products => ({type: SET_PRODUCTS, payload: products})
export const setCategories = categories => ({type: SET_CATEGORIES, payload: categories})
export const setLoading = loadingType => ({type: SET_LOADING, payload: loadingType})
export const stopLoading = loadingType => ({type: STOP_LOADING, payload: loadingType})