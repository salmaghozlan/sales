/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
});

Route.group(() => {

  Route.group(() => {
    Route.post("/login", "UsersController.login");
    Route.post("/logout", "UsersController.logout");
    Route.post("/", "UsersController.create");
  }).prefix("/users");

  Route.group(() => {
    Route.get("/:id", "BrandsController.getById");
    Route.get("/", "BrandsController.getAll");
    Route.post("/", "BrandsController.create");
    Route.put("/", "BrandsController.update");
    Route.delete("/:id", "BrandsController.destroy");
  }).prefix("/brands");

  Route.group(() => {
    Route.get("/:id", "CategoriesController.getById");
    Route.get("/", "CategoriesController.getAll");
    Route.post("/", "CategoriesController.create");
    Route.put("/", "CategoriesController.update");
    Route.delete("/:id", "CategoriesController.destroy");
  }).prefix("/categories");


  Route.group(() => {
    Route.get("/order", "OrdersController.belongOrder");
    Route.get("/:id", "OrdersController.getById");
    Route.get("/", "OrdersController.getAll"); 
    Route.post("/", "OrdersController.create");
    Route.put("/", "OrdersController.update");
    Route.delete("/:id", "OrdersController.destroy");
  }).prefix("/orders");

  Route.group(() => {
  Route.post("/", "ProductsController.upload");
}).prefix("/products");

Route.group(() => {
  Route.get("/:id", "StaffsController.getById");
  Route.get("/", "staffsController.getAll");
  Route.post("/", "StaffsController.create");
  Route.put("/", "StaffsController.update");
  Route.delete("/:id", "StaffsController.destroy");
}).prefix("/staffs");

}).prefix('api');