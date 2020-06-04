const RestaurantController = require('../controllers/restaurant.controller');

module.exports = function(app){
    app.get('/api', RestaurantController.index);
    app.post('/api/restaurant', RestaurantController.createRestaurant);
    app.get('/api/restaurant', RestaurantController.getAllRestaurants);
    app.get('/api/restaurant/:id', RestaurantController.getRestaurant);
    app.put('/api/restaurant/:id', RestaurantController.updateRestaurant);
    app.delete('/api/restaurant/:id', RestaurantController.deleteRestaurant);
}