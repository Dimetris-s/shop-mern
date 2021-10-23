import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchBasketItems, setBadgeCount } from '../store/actions';
import { getBasketByUserId } from '../utils/axios';

const BasketState = ({children}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    useEffect(() => {
        async function effect() {
            const basket = await getBasketByUserId(user.id)
            dispatch(fetchBasketItems(basket.id))
        }   
        if(user.id) {
            effect()
        } else {
            dispatch(setBadgeCount(0))
        }
        // eslint-disable-next-line
    }, [user])
    return ( <>{children}</> );
}
 
export default BasketState;