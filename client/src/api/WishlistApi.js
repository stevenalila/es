import WishlistApiGenerated from "./generated/WishlistApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class WishlistApi extends WishlistApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Wishlist List
  static getWishlistList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/wishlists")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default WishlistApi;