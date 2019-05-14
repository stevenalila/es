import actionsFunction from "./generated/OrdersActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import OrdersApi from "../../api/OrdersApi";
 
 actionsFunction.loadOrdersList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return OrdersApi
     .getOrdersList()
     .then(list => {
       dispatch(actionsFunction.loadOrdersSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
