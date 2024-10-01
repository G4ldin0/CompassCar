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

