
import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { itemsActions } from "../reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []

export const useItemsCart = () => {
    const [ cartItems, dispatch] = useReducer(itemsReducer, initialCartItems)

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    const handlerAddProductCart = ( product ) => {
        const hasItem = cartItems.find( (i) => i.product.id === product.id)

        if (hasItem){
            dispatch({
                type : itemsActions.UpdateQuantityProductCard,
                payload : product
            })
        }else{
            dispatch({
                type : itemsActions.AddProductCart,
                payload : product
            })
        }
    }

    const handlerDeleteProductCart = (id) => {
        dispatch({
            type : itemsActions.DeleteProductCard,
            payload : id
        })
    }


    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,
    }
}