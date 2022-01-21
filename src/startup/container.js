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
const {
  HomeService,
  UserService,
  IdeaService,
  CommentService,
  AuthService,
} = require("../services");
/**
 * Controllers layer
 */
const {
  HomeController,
  UserController,
  IdeaController,
  CommentController,
  AuthController,
} = require("../controllers");
/**
 * Routes layer
 */
const {
  HomeRoutes,
  UserRoutes,
  IdeaRoutes,
  CommentRoutes,
  AuthRoutes,
} = require("../routes/index.routes");

/** Router */
const Router = require("../routes");

/** Models */
const { User, Comment, Idea } = require("../models");

/** Repositories */
const {
  UserRepository,
  CommentRepository,
  IdeaRepository,
} = require("../repositories");

container
  .register({ Server: asClass(Server).singleton() })
  .register({ Config: asValue(config) })
  .register({
    Router: asFunction(Router).singleton(),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
  });

module.exports = container;
