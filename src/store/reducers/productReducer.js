import { RESET_CATEGORY, SELECT_CATEGORY, SET_CATEGORIES, SET_PRODUCTS, SET_SORT_ORDER, SET_SORT_TYPE } from "../actions/types"

const initialState = {
    products: [
        {id: 1, name: 'Стиральная машина', price: 23000, category: 'Бытовая техника', rate: 5, img: 'https://media.istockphoto.com/photos/washing-machine-with-clothes-in-modern-bathroom-interior-picture-id1154970679?b=1&k=20&m=1154970679&s=170667a&w=0&h=OVVCsVUWuoI5MiJuktnZSr9XjusO-K7aZdBSrnQOukA='},
        {id: 2, name: 'Холодильник', price: 25000, category: 'Бытовая техника', rate: 4.5, img: 'https://media.istockphoto.com/photos/modern-domestic-refrigerator-with-control-display-picture-id1086056164?b=1&k=20&m=1086056164&s=170667a&w=0&h=K5DSJsWDBnNl5UhQ99Sv3RRM87LbN5g3FL13ItIHbXQ='},
        {id: 3, name: 'Мышь', price: 1000, category: 'Перифирия', rate: 4.9, img: 'https://media.istockphoto.com/photos/green-gaming-mouse-on-stone-texture-table-picture-id1197265704?b=1&k=20&m=1197265704&s=170667a&w=0&h=SVAlwsKsBLgtHEBY7jOveT9C6gLaKX6RLJzqbzzmEwo='},
        {id: 4, name: 'IPhone 12 pro', price: 30000, category: 'Смартфоны', rate: 3.4, img: 'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: 5, name: 'Клавиатура', price: 4000, category: 'Перифирия', rate: 4, img: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2V5Ym9hcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {id: 6, name: 'Диван', price: 9000, category: 'Мебель', rate: 4.4, img: 'https://media.istockphoto.com/photos/three-seats-cozy-color-fabric-sofa-isolated-on-white-picture-id1226422248?b=1&k=20&m=1226422248&s=170667a&w=0&h=fvgbN8mVVTZhn_B4hY26LGDyoP3brk8Ik5i_5EdwX6I='},
        {id: 7, name: 'Шкаф', price: 16000, category: 'Мебель', rate: 3.9, img: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3VwYm9hcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    ],
    categories: [
        {id: 1, name: 'Перифирия'},
        {id: 2, name: 'Бытовая техника'},
        {id: 3, name: 'Смартфоны'},
        {id: 4, name: 'Мебель'}
    ],
    selectedCategory: null,
    sortBy: {type: "rate", order: "desc"}
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: return {...state, products: action.payload}
        case SET_CATEGORIES: return {...state, categories: action.payload}
        case SELECT_CATEGORY: return {...state, selectedCategory: action.payload}
        case RESET_CATEGORY: return {...state, selectedCategory: null}
        case SET_SORT_TYPE: return {...state, sortBy: {...state.sortBy, type: action.payload}}
        case SET_SORT_ORDER: return {...state, sortBy: {...state.sortBy, order: action.payload}}
        default: return state
    }
}