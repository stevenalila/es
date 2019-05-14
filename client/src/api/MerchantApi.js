import MerchantApiGenerated from "./generated/MerchantApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class MerchantApi extends MerchantApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Merchant List
  static getMerchantList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/merchants")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default MerchantApi;