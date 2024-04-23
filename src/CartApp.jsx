
import { useEffect, useReducer, useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { itemsReducer } from "./reducer/itemsReducer";
import { itemsActions } from "./reducer/itemsActions";


const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []

export const CartApp = () => {

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
    return (
        <div className="container my-4">
            <h3>Cart App</h3>
            <CatalogView 
            handlerAdd = {handlerAddProductCart}
            />

            { cartItems?.length <= 0 || (

            <div className="my-4 w-50">
                <CartView items={ cartItems } 
                handlerDelete = {handlerDeleteProductCart}
                />
            </div>
            )}

        </div>

    )
}
