import actionsFunction from "./generated/AdminActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import AdminApi from "../../api/AdminApi";
 
 actionsFunction.loadAdminList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return AdminApi
     .getAdminList()
     .then(list => {
       dispatch(actionsFunction.loadAdminSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
