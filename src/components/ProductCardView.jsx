import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductCardView = ( {id, name, description, price, handlerAdd} ) => {

    const navigate = useNavigate()


    const onAddProduct = ( product ) => {
        handlerAdd(product)
        navigate('/cart')
    }

    return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> {name} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <button 
                        className="btn btn-primary"
                        onClick={ () => onAddProduct({id, name, description, price})}    
                    >Agregar</button>
                </div>
            </div>
    )
}
