import ProductsApiGenerated from "./generated/ProductsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ProductsApi extends ProductsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Products List
  static getProductsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/productss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ProductsApi;