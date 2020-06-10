import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import RestaurantList from '../components/RestaurantList';

import '../style/MainStyle.css'

const styles = {
    addButton: {
        backgroundColor: "#408a24",
        marginBottom: "1rem",
        marginTop: "1rem"
    }
}

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
        setRestaurant(restaurant.filter(restaurant=> restaurant._id !== restaurantId));
    }

    return(
        <div className="mainContainer">
            <h1>Your Favorite Restaurants</h1>
            <Button
                className="newRestaurantButton"
                style={styles.addButton}
                variant="contained"
                href='/new'>Add a new restaurant</Button>
            {loaded && <RestaurantList restaurant={restaurant} removeFromDom={removeFromDom} />}
        </div>
    )
}