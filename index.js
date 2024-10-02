// /api/v1/cars
//    -> POST body: {brand, model, year}
//    -> GET query(page&limit=5) opt => brand & model & year --> return {count, pages, data} 
//
// /api/v1/cars/:id
//    -> GET
//    -> PATCH body: {brand, model, year, items}
//    -> DELETE
//
// erro -> {"error": "message"}


const serverError = Response => Response.status(500).json({error: "internal server error"});

// Imports
const express = require('express');
const conn = require('./db/conn');
const cars = require('./models/cars');
const cars_items = require('./models/cars_items');

// App
const app = express();

// Sync Database
conn.sync({force: true}).then(() => {
   console.log('Database connected');
   app.listen(3000, () => {
      console.log('Server running on localhost:3000');
   });
}).catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Routes
