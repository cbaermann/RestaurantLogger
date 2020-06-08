import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import RestaurantForm from '../components/RestaurantForm';
import '../style/UpdateStyle.css'

export default props => {
    const { id } = props;
    const [restaurant, setRestaurant] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8000/api/restaurant/' + id)
            .then(res => {
                setRestaurant(res.data);
                setLoaded(true);
            })
    }, [])

    const updateRestaurant = restaurant => {
        axios.put('http://localhost:8000/api/restaurant/' + id, restaurant)
            // .then(res => console.log(res))
            .then(navigate("/restaurant/"));
    }
    return(
        <div className="UpdateContainer">
            <h3>Update a Restaurant</h3>
            {loaded && (
                <>
                    <RestaurantForm
                        onSubmitProp={updateRestaurant}
                        initialName={restaurant.name}
                        initialLocation={restaurant.location}
                        initialDescription={restaurant.description}
                        initialFoodType={restaurant.foodType}
                        initialPriceRange={restaurant.priceRange}
                    />
                </>
            )}
        </div>
    )
}