// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import AdminModel from "../models/Ezysell_db/AdminModel";
import MerchantModel from "../models/Ezysell_db/MerchantModel";
import OrdersModel from "../models/Ezysell_db/OrdersModel";
import ProductsModel from "../models/Ezysell_db/ProductsModel";
import UserModel from "../models/Ezysell_db/UserModel";
import WishlistModel from "../models/Ezysell_db/WishlistModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.Ezysell_db_dbUrl);

    // Start Init Models

		AdminModel.init();
		MerchantModel.init();
		OrdersModel.init();
		ProductsModel.init();
		UserModel.init();
		WishlistModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_Ezysell_db = await mongoose.connect(
        "mongodb://" + properties.Ezysell_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_Ezysell_db;
  }
}

export default new Database();
