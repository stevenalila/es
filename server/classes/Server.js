// Express
import express from "express";
import http from "http";
import bodyParser from "body-parser";

// Swagger
import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";

// Logging
import Logger from "./Logger";

// Properties
import properties from "../properties.js";

// Security
import cors from "cors";
import helmet from "helmet";

// Controllers
import SecurityController from "../controllers/SecurityController";

// Start Import Controllers

// Database
import Database_Ezysell_db from "./Database_Ezysell_db.js";

// Controllers
import AdminController from "../controllers/Ezysell_db/AdminController";
import MerchantController from "../controllers/Ezysell_db/MerchantController";
import OrdersController from "../controllers/Ezysell_db/OrdersController";
import ProductsController from "../controllers/Ezysell_db/ProductsController";
import UserController from "../controllers/Ezysell_db/UserController";
import WishlistController from "../controllers/Ezysell_db/WishlistController";

// End Import Controllers


class Server {
  constructor() {
    this.app = express();
  }

  /**
   * Start the server
   * @returns {Promise<void>}
   */
  async init() {
    Logger.info(
      "\r\n\r\n-----------------------------------\r\n\r\nStarting MyCRM \r\nGenerated by\r\n\r\n   _____ _          __  __      _     _           \r\n  / ____| |        / _|/ _|    | |   | |          \r\n | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __ \r\n  \\___ \\| |/ / _` |  _|  _/ _ \\| |/ _` |/ _ \\ '__|\r\n  ____) |   < (_| | | | || (_) | | (_| |  __/ |   \r\n |_____/|_|\\_\\__,_|_| |_| \\___/|_|\\__,_|\\___|_|   \r\n\r\nFor more documentation please visit https://skaffolder.com/#/documentation\r\n\r\n-----------------------------------\r\n\r\n"
    );

    // Start Init Database
		Database_Ezysell_db.init();
 // End Init Database

    // Add parser
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(Logger.expressMiddleware);

    // Securitiy
    this.app.use(helmet());
    this.app.use(cors());

    // Swagger
    const swaggerDocument = yaml.load("./swagger.yaml");
    this.app.use(
      "/api/docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );

    // Start App Server
    const server = http.Server(this.app);
    this.app.use(express.static(properties.publicPath));

    await server.listen(properties.port);
    Logger.info("Server started on port " + properties.port);
    Logger.info(
      "Swagger docs at http://localhost:" + properties.port + "/api/docs"
    );

    // Import controllers
    const router = express.Router();
    SecurityController.init(router);

    // Start Init Controllers
		AdminController.init(router);
		MerchantController.init(router);
		OrdersController.init(router);
		ProductsController.init(router);
		UserController.init(router);
		WishlistController.init(router);
		 // End Init Controllers

    this.app.use("/", router);
  }
}

export default new Server();
