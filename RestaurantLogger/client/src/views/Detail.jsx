import React, { useEffect, useState } from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';
import { Button } from '@material-ui/core';
import '../style/DetailStyle.css'

import BarBackgroundImage from '../image/BarBackgroundImage.jpeg';
import MexicanFoodBackgroundImage from '../image/MexicanFoodBackgroundImage.jpeg';
import AmericanFoodBackgroundImage from '../image/AmericanFoodBackgroundImage.jpeg'
import ChineseFoodBackgroundImage from '../image/ChineseFoodBackgroundImage.jpeg'
import FusionFoodBackgroundImage from '../image/FusionFoodBackgroundImage.jpeg'
import IndianFoodBackgroundImage from '../image/IndianFoodBackgroundImage.jpeg'
import ItalianFoodBackgroundImage from '../image/ItalianFoodBackgroundImage.jpeg'
import SeafoodBackgroundImage from '../image/SeafoodBackgroundImage.jpeg'
import ThaiFoodBackgroundImage from '../image/ThaiFoodBackgroundImage.jpeg'
import TunTavernBackgroundImage from '../image/TunTavernBackgroundImage.jpeg'
import Map from '../components/Map'

export default props => {
    const[restaurant, setRestaurant] = useState({});

    useEffect( () => {
        axios.get("http://localhost:8000/api/restaurant/" + props.id)
        .then(res => setRestaurant(res.data));
    });
    
    const onClickHandler = e => {
        e.preventDefault();
        navigate("/restaurant");
    }

    const renderSwitch = (backgroundImage) => {
        switch(restaurant.foodType){
            case "Bar":
                backgroundImage = `url(${BarBackgroundImage})`;
                break;
            case "Mexican":
                backgroundImage = `url(${MexicanFoodBackgroundImage})`;
                break;
            case "American":
                backgroundImage = `url(${AmericanFoodBackgroundImage})`;
                break;
            case "Chinese":
                backgroundImage = `url(${ChineseFoodBackgroundImage})`;
                break;
            case "Fusion":
                backgroundImage = `url(${FusionFoodBackgroundImage})`;
                break;
            case "Indian":
                backgroundImage = `url(${IndianFoodBackgroundImage})`;
                break;
            case "Italian":
                backgroundImage = `url(${ItalianFoodBackgroundImage})`;
                break;
            case "Seafood":
                backgroundImage = `url(${SeafoodBackgroundImage})`;
                break;
            case "Thai":
                backgroundImage = `url(${ThaiFoodBackgroundImage})`;
                break;
            case "Tun Tavern":
                backgroundImage = `url(${TunTavernBackgroundImage})`;
                break;
            default:
                break;
        }
        return backgroundImage;
    }

    const styles = {
        detailContainerStyle: {
            backgroundSize: "cover",
            minWidth: 1024,
            minHeight: "100%",
            width: "100%",
            height: "auto",
            position: "fixed",
        }
    }

    return(
        <>
        <div style={{backgroundImage: renderSwitch()}}
        className="detailContainer">
        <div className="details">
                <h2>{restaurant.name}</h2>
                <p>Location: {restaurant.location}</p>
                <p>Description: {restaurant.description}</p>
                <p>Food Type: {restaurant.foodType}</p>
                <p>Price Range: {restaurant.priceRange}</p>
            <Button variant="contained" color="primary" onClick={onClickHandler}>Back to main page</Button><br/><br/>
        </div>
            <div className="mapContainer">
                <Map />
            </div>
        </div>
        </>
    )
}