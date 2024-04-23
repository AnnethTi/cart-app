import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "../components/CartView";
import { CatalogView } from "../components/CatalogView";

export const CartRoutes = ({ cartItems, handlerAddProductCart, handlerDeleteProductCart }) => {
    return (
        <Routes>
            <Route
                path="catalog"
                element={<CatalogView handlerAdd={handlerAddProductCart} />}
            />
            <Route
                path="cart"
                element={(cartItems?.length <= 0 ?
                    <div className="alert alert-warning">No hay productos en el carrito de compras</div>
                    :
                    (
                        <div className="my-4 w-50">
                            <CartView items={cartItems}
                                handlerDelete={handlerDeleteProductCart}
                            />
                        </div>))}
            />
            <Route
                path="/"
                element={<Navigate to={'catalog'} />}
            />
        </Routes>
    )
}