import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantList from '../components/RestaurantList';

export default() => {
    const [restaurant, setRestaurant] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8000/api/restaurant/')
            .then(res=> {
                setRestaurant(res.data);
                setLoaded(true);
            });
    }, [])

    const removeFromDom = restaurantId => {
        setRestaurant(restaurant.filter(restaurant=> restaurant._id != restaurantId));
    }

    return(
        <div>
            <h1>Your Favorite Restaurants</h1>
            <a href="/new">Add a new restaurant</a>
            {loaded && <RestaurantList restaurant={restaurant} removeFromDom={removeFromDom} />}
        </div>
    )
}