"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
  // Route.post("auth", "AuthController.login");

  Route.post('categories', 'CategoryController.create');
  Route.get('categories', 'CategoryController.getAll');

  Route.get('categories/:id/procedures', 'ProcedureController.getAll');
  Route.post('categories/:id/procedures', 'ProcedureController.create');

}).middleware(["guest"]).prefix('api');

// Route.group(() => {
//   Route.get("users/:id", "UserController.show");

//   Route.get("logout", "AuthController.logout");
// })
//   .middleware(["auth"])
//   .prefix("api/v1");
