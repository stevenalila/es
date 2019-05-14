// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function ProductsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case types.LIST_PRODUCTS_SUCCESS:
      return { ...state, listProducts: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}