import React, { useEffect, useState } from 'react'
import { CardView } from './CardView'
import { getProducts } from '../services/productService'

export const CatalogView = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(getProducts)
    }, [])

    return (
        <div className="row">
            {products.map(prod => (
                <CardView key={prod.id} prod={prod}/>
            ))}
        </div>
    )
}
