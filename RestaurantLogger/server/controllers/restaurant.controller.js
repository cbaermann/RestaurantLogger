const { Restaurant } = require('../models/restaurant.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createRestaurant = (request, response) => {
    const { name, location, description, foodType, priceRange}  = request.body;
    Restaurant.create({
        name, 
        location,
        description,
        foodType,
        priceRange,
    })
    .then(restaurant=>response.json(restaurant))
    .catch(err=>response.json(err));
}

module.exports.getAllRestaurants = (request, response) => {
    Restaurant.find({})
        .then(restaurant=> response.json(restaurant))
        .catch(err=> response.json(err));
}

module.exports.getRestaurant = (request, response) => {
    Restaurant.findOne({_id:request.params.id})
        .then(restaurant => response.json(restaurant))
        .catch(err => response.json(err));
}

module.exports.updateRestaurant = (request, response) => {
    Restaurant.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedRestaurant => response.json(updatedRestaurant))
        .catch(err => response.json(err));
}

module.exports.deleteRestaurant = (request, response) => {
    Restaurant.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err=> response.json(err));
}