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
app.post('/api/v1/cars', async (req, res) => {
   try {
      const { brand, model, year, items } = req.body;

      if (!brand || !model || !year || !items) {
         const missingFields = [];
         if (!brand) missingFields.push('brand');
         if (!model) missingFields.push('model');
         if (!year) missingFields.push('year');
         if (!items) missingFields.push('items');
          return res.status(400).json({error: `${missingFields.join(', ')} ${missingFields.length > 1 ? 'are' : 'is'} required`});
      }

      const currentYear = new Date().getFullYear();
      if (year < currentYear - 10 || year > currentYear) {
          return res.status(400).json({error: `year should be between ${currentYear - 10} and ${currentYear}`});
      }

      const existe = await cars.findOne({ where: { brand, model, year } });
      if (existe) {
         return res.status(409).json({ error: "there is already a car with this data" });
      }

      const car = await cars.create({ brand, model, year });

      const uniqueItems = items.reduce((acc, item) => {
         if (!acc.includes(item)) acc.push(item);
         return acc;
      }, []);
      uniqueItems.forEach(async item => {
         await cars_items.create({ name: item, carId: car.id });
      });

      res.status(201).json({id: car.id});
      
   } catch (err) {
      console.log(err);
      serverError(res);
   }
});