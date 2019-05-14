import actionsFunction from "./generated/ProductsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ProductsApi from "../../api/ProductsApi";
 
 actionsFunction.loadProductsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ProductsApi
     .getProductsList()
     .then(list => {
       dispatch(actionsFunction.loadProductsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
