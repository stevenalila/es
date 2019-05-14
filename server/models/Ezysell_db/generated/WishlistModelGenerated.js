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
      * wishlist
      */
    const wishlistSchema = new mongoose.Schema({
      //RELATIONS
      wishprdcts: [{
        type: Schema.ObjectId,
        ref : "Products"
      }],
      
      
      //EXTERNAL RELATIONS
      /*
      */
    });

    generatedModel.setModel(db.connection.model("Wishlist", wishlistSchema));
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
