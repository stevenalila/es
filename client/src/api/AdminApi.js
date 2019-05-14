import AdminApiGenerated from "./generated/AdminApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class AdminApi extends AdminApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Admin List
  static getAdminList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/admins")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default AdminApi;