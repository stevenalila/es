import actionsFunction from "./generated/MerchantActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import MerchantApi from "../../api/MerchantApi";
 
 actionsFunction.loadMerchantList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return MerchantApi
     .getMerchantList()
     .then(list => {
       dispatch(actionsFunction.loadMerchantSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
