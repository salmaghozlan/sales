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
    Route.get("/:id", "CartsController.getById");
    Route.get("/", "CartsController.getAll");
    Route.post("/", "CartsController.create");
    Route.put("/", "CartsController.update");
    Route.delete("/:id", "CartsController.destroy");
  }).prefix("/carts");

  Route.group(() => {
    Route.get("/:id", "CategoriesController.getById");
    Route.get("/", "CategoriesController.getAll");
    Route.post("/", "CategoriesController.create");
    Route.put("/", "CategoriesController.update");
    Route.delete("/:id", "CategoriesController.destroy");
  }).prefix("/categories");


  Route.group(() => {
    Route.get("/:id", "CitiesController.getById");
    Route.get("/", "CitiesController.getAll");
    Route.post("/", "CitiesController.create");
    Route.put("/", "CitiesController.update");
    Route.delete("/:id", "CitiesController.destroy");
  }).prefix("/cities");

  Route.group(() => {
    Route.get("/:id", "CountriesController.getById");
    Route.get("/", "CountriesController.getAll");
    Route.post("/", "CountriesController.create");
    Route.put("/", "CountriesController.update");
    Route.delete("/:id", "CountriesController.destroy");
  }).prefix("/countries");

  Route.group(() => {
    Route.get("/:id", "CouponsController.getById");
    Route.get("/", "CouponsController.getAll");
    Route.post("/", "CouponsController.create");
    Route.put("/", "CouponsController.update");
    Route.delete("/:id", "CouponsController.destroy");
  }).prefix("/coupons");


  Route.group(() => {
    Route.get("/:id", "CustomersController.getById");
    Route.get("/", "CustomersController.getAll");
    Route.post("/", "CustomersController.create");
    Route.put("/", "CustomersController.update");
    Route.delete("/:id", "CustomersController.destroy");
  }).prefix("/customers");

  
  Route.group(() => {
    Route.get("/:id", "DeliveriesController.getById");
    Route.get("/", "DeliveriesController.getAll");
    Route.post("/", "DeliveriesController.create");
    Route.put("/", "DeliveriesController.update");
    Route.delete("/:id", "DeliveriesController.destroy");
  }).prefix("/deliveries");


  Route.group(() => {
    Route.get("/:id", "DriversController.getById");
    Route.get("/", "DriversController.getAll");
    Route.post("/", "DriversController.create");
    Route.put("/", "DriversController.update");
    Route.delete("/:id", "DriversController.destroy");
  }).prefix("/drivers");
  

  
  Route.group(() => {
    Route.get("/:id", "LoyalityProgramsController.getById");
    Route.get("/", "LoyalityProgramsController.getAll");
    Route.post("/", "LoyalityProgramsController.create");
    Route.put("/", "LoyalityProgramsController.update");
    Route.delete("/:id", "LoyalityProgramsController.destroy");
  }).prefix("/loyalityPrograms");


  Route.group(() => {
    Route.get("/:id", "OrderItemsController.getById");
    Route.get("/", "OrderItemsController.getAll");
    Route.post("/", "OrderItemsController.create");
    Route.put("/", "OrderItemsController.update");
    Route.delete("/:id", "OrderItemsController.destroy");
  }).prefix("/orderItems");
  
  Route.group(() => {
    Route.get("/order", "OrdersController.belongOrder");
    Route.get("/:id", "OrdersController.getById");
    Route.get("/", "OrdersController.getAll"); 
    Route.post("/", "OrdersController.create");
    Route.put("/", "OrdersController.update");
    Route.delete("/:id", "OrdersController.destroy");
  }).prefix("/orders");

  
  Route.group(() => {
    Route.get("/:id", "PaymentsController.getById");
    Route.get("/", "PaymentsController.getAll");
    Route.post("/", "PaymentsController.create");
    Route.put("/", "PaymentsController.update");
    Route.delete("/:id", "PaymentsController.destroy");
  }).prefix("/payments");
  
  Route.group(() => {
    Route.get("/:id", "ProductsController.getById");
    Route.get("/", "ProductsController.getAll");
    Route.post("/", "ProductsController.create");
    Route.put("/", "ProductsController.update");
    Route.delete("/:id", "ProductsController.destroy");  
}).prefix("/products");



Route.group(() => {
  Route.get("/:id", "TransactionsController.getById");
  Route.get("/", "TransactionsController.getAll");
  Route.post("/", "TransactionsController.create");
  Route.put("/", "TransactionsController.update");
  Route.delete("/:id", "TransactionsController.destroy");  
}).prefix("/transaction");


Route.group(() => {
  Route.get("/:id", "UsersController.getById");
  Route.get("/", "UsersController.getAll");
  Route.post("/", "UsersController.create");
  Route.put("/", "UsersController.update");
  Route.delete("/:id", "UsersController.destroy");
}).prefix("/users");

}).prefix('api');