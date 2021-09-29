import { SET_CATEGORIES, SET_PRODUCTS } from "../actions/types"

const initialState = {
    products: [
        {id: 1, name: 'Стиральная машина', price: 23000, rate: 5, img: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: 2, name: 'Холодильник', price: 25000, rate: 4.5, img: 'https://media.istockphoto.com/photos/modern-domestic-refrigerator-with-control-display-picture-id1086056164?b=1&k=20&m=1086056164&s=170667a&w=0&h=K5DSJsWDBnNl5UhQ99Sv3RRM87LbN5g3FL13ItIHbXQ='},
        {id: 3, name: 'Мышь', price: 1000, rate: 4.9, img: 'https://media.istockphoto.com/photos/green-gaming-mouse-on-stone-texture-table-picture-id1197265704?b=1&k=20&m=1197265704&s=170667a&w=0&h=SVAlwsKsBLgtHEBY7jOveT9C6gLaKX6RLJzqbzzmEwo='},
        {id: 4, name: 'IPhone 12 pro', price: 30000, rate: 3.4, img: 'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: 5, name: 'Клавиатура', price: 4000, rate: 4, img: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2V5Ym9hcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
    ],
    categories: [
        {id: 1, name: 'Перифирия'},
        {id: 2, name: 'Бытовая'},
        {id: 3, name: 'Смартфоны'}
    ]
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: return {...state, products: action.payload}
        case SET_CATEGORIES: return {...state, categories: action.payload}
        default: return state
    }
}