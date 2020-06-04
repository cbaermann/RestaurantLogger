const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: {type: String},
    location: {type: String},
    description: {type: String},
    foodType: {type: String},
}, {timestamps: true});

module.exports.Restaurant = mongoose.model("Restaurant", RestaurantSchema);