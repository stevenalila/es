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
      * Products
      */
    const productsSchema = new mongoose.Schema({
      Description: {
        type: "String", 
        required : true
      },
      Name: {
        type: "String", 
        required : true
      },
      Pricing: {
        type: "Number", 
        required : true
      },
      Weight: {
        type: "Number", 
        required : true
      },
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      wishprdcts: [{
        type: Schema.ObjectId,
        ref : "wishlist"
      }],
      */
    });

    generatedModel.setModel(db.connection.model("Products", productsSchema));
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


  /**
  * ProductsModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * ProductsModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * ProductsModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({_id: id});
  },
  
  /**
  * ProductsModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * ProductsModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
