import React, { useState } from 'react';
import axios from 'axios';
import RestaurantForm from '../components/RestaurantForm';
import { navigate } from '@reach/router';
import '../style/NewStyle.css'


export default () => {
    const [restaurant, setRestaurant] = useState([]);

    const createRestaurant = resturants => {
        axios.post('http://localhost:8000/api/restaurant', resturants)
            .then(res=> {
                setRestaurant([...restaurant, res.data]);
                navigate("/restaurant");
            });
    }

    return(
        <div className="newContainer">
            <h3 className="newH3">Add a new restaurant</h3>
            <RestaurantForm onSubmitProp={createRestaurant}
            initialName=""
            initialLocation=""
            initialDescription=""
            initialFoodType=""
            initialPriceRange=""/>
        </div>
    )
}