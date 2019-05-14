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
      * Admin
      */
    const adminSchema = new mongoose.Schema({
      Log: {
        type: "String"
      },
      Name: {
        type: "String", 
        required : true
      },
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    });

    generatedModel.setModel(db.connection.model("Admin", adminSchema));
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
