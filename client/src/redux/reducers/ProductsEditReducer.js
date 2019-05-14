// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  products: {}
};

// Reducer
export default function ProductsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case types.UPDATE_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}