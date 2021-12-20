/**
 * inyection dependencies container
 */
const { createContainer, asClass, asValue, asFunction } = require("awilix");

/** container that inject dependencies with his register method */
const container = createContainer();

/** Our server class to init app */
const Server = require(".");

/** config file where set and get variables to process env  */
const config = require("../config");
/**
 * Service layer
 */
const { HomeService } = require("../services");
/**
 * Controllers layer
 */
const { HomeController } = require("../controllers");
/**
 * Routes layer
 */
const { HomeRoutes } = require("../routes/index.routes");
/** Router */
const Router = require("../routes");

container
  .register({ Server: asClass(Server).singleton() })
  .register({ Config: asValue(config) })
  .register({
    Router: asFunction(Router).singleton(),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({ HomeRoutes: asFunction(HomeRoutes).singleton() });

module.exports = container;
