import React, { useEffect, useState } from 'react'
import { ProductCardView } from './ProductCardView'
import { getProducts } from '../services/productService'

export const CatalogView = ( {handler}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(getProducts)
    }, [])

    return (
        <div className="row">
            {products.map(prod => (
                <div key={prod.id} className="col-4 my-2">
                    <ProductCardView
                    handler = {handler}
                    id = {prod.id}
                    name = {prod.name}
                    price = {prod.price}
                    description = {prod.description}
                    />
                </div>
            ))}
        </div>
    )
}
