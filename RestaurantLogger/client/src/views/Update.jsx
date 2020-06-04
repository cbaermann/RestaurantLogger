import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import RestaurantForm from '../components/RestaurantForm';
import DeleteButton from '../components/DeleteButton';

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
            .then(navigate("/"));
    }
    return(
        <div>
            <h1>Update a Restaurant</h1>
            {loaded && (
                <>
                    <RestaurantForm
                        onSubmitProp={updateRestaurant}
                        initialName={restaurant.name}
                        initialLocation={restaurant.location}
                        initialDescription={restaurant.description}
                        initialFoodType={restaurant.foodType}
                    />
                    <DeleteButton restaurantId={restaurant._id} successCallback={()=> navigate("/")} />
                </>
            )}
        </div>
    )
}