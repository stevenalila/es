import actionsFunction from "./generated/WishlistActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import wishlistApi from "../../api/wishlistApi";
 
 actionsFunction.loadwishlistList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return wishlistApi
     .getwishlistList()
     .then(list => {
       dispatch(actionsFunction.loadwishlistSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
