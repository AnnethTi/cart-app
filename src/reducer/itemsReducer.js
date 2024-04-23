import { itemsActions } from "./itemsActions";

export const itemsReducer = ( state = [], action) => {
    switch (action.type) {
        
        case itemsActions.AddProductCart:
            return [
                ...state,
                {
                    product : action.payload,
                    quantity : 1,
                }
            ];
        case itemsActions.UpdateQuantityProductCard:
            return state.map( (i) => {
                if (i.product.id === action.payload.id){
                    return {
                        ...i,
                        quantity : i.quantity + 1
                    }
                }
                return i
            }
        );
        case itemsActions.DeleteProductCard:
            return state.filter( (i) => i.product.id !== action.payload);
    
        default:
            return state;
    }
}

