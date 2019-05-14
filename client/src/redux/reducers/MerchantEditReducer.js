// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  merchant: {}
};

// Reducer
export default function MerchantEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_MERCHANT_SUCCESS:
      return { ...state, merchant: action.payload };
    case types.GET_MERCHANT_SUCCESS:
      return { ...state, merchant: action.payload };
    case types.UPDATE_MERCHANT_SUCCESS:
      return { ...state, merchant: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}