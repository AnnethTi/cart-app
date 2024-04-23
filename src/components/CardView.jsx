import React from 'react'

export const CardView = ( {prod} ) => {
    return (
        <div key={prod.id} className="col-4 my-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> {prod.name} </h5>
                    <p className="card-text">{prod.description}</p>
                    <p className="card-text">{prod.price}</p>
                    <button className="btn btn-primary">Agregar</button>
                </div>
            </div>
        </div>
    )
}
