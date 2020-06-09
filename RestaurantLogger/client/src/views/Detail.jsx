import React, { useEffect, useState } from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import '../style/DetailStyle.css'


import Map from '../components/Map'

export default props => {
    const[restaurant, setRestaurant] = useState({})
    useEffect( () => {
        axios.get("http://localhost:8000/api/restaurant/" + props.id)
            .then(res => setRestaurant(res.data))
    }, [])

    const onClickHandler = e => {
        e.preventDefault();
        navigate("/restaurant");
    }

    return(
        <>
        <div className="detailContainer">
            <h2>{restaurant.name}</h2>
            <p>Location: {restaurant.location}</p>
            <p>Description: {restaurant.description}</p>
            <p>Food Type: {restaurant.foodType}</p>
            <p>Price Range: {restaurant.priceRange}</p>

            <button onClick={onClickHandler}>Back to main page</button><br/><br/>
            <div className="mapContainer">
                <Map />
            </div>
        </div>
        </>
    )
}