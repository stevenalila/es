// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function MerchantListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_MERCHANT_SUCCESS:
      return { ...state, merchant: action.payload };
    case types.LIST_MERCHANT_SUCCESS:
      return { ...state, listMerchant: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}