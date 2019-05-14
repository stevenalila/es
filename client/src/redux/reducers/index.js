import { combineReducers } from "redux";

// START IMPORT REDUCERS
import Contact UsReducer from "./Contact UsReducer";
import HomeReducer from "./HomeReducer";
import MerchantEditReducer from "./MerchantEditReducer";
import MerchantListReducer from "./MerchantListReducer";
import OrderReceivedReducer from "./OrderReceivedReducer";
import ProductsEditReducer from "./ProductsEditReducer";
import ProductsListReducer from "./ProductsListReducer";
import Staff LoginReducer from "./Staff LoginReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	Contact UsReducer,
	HomeReducer,
	MerchantEditReducer,
	MerchantListReducer,
	OrderReceivedReducer,
	ProductsEditReducer,
	ProductsListReducer,
	Staff LoginReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
