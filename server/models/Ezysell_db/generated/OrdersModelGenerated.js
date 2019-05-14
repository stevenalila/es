// Database
import Database from "../../../classes/Database_Ezysell_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * Orders
      */
    const ordersSchema = new mongoose.Schema({
      DateReceived: {
        type: "Date"
      },
      Quantity: {
        type: "Number"
      },
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    });

    generatedModel.setModel(db.connection.model("Orders", ordersSchema));
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS




};

export default generatedModel;
