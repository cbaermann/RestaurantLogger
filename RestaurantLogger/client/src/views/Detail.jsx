import React, { useEffect, useState } from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import { Button } from '@material-ui/core';
import '../style/DetailStyle.css'

import BarBackgroundImage from '../image/BarBackgroundImage.jpeg';
import MexicanFoodBackgroundImage from '../image/MexicanFoodBackgroundImage.jpeg';
import AmericanFoodBackgroundImage from '../image/AmericanFoodBackgroundImage.jpeg'
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

    const renderSwitch = (backgroundImage) => {
        switch(restaurant.foodType){
            case "Bar":
                backgroundImage = `url(${BarBackgroundImage})`
                break;
            case "Mexican":
                backgroundImage = `url(${MexicanFoodBackgroundImage})`
                break;
            case "American":
                backgroundImage = `url(${AmericanFoodBackgroundImage})`
                break;
            case "Chinese":
                // Needs New Image
                backgroundImage = 'url(https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)';
                break;
            case "Fusion":
                // Needs New Image
                backgroundImage = 'url(https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)';
                break;
            case "Indian":
                // Needs New Image
                backgroundImage = 'url(https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)';
                break;
            case "Italian":
                // Needs New Image
                backgroundImage = 'url(https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)';
                break;
            case "Seafood":
                // Needs New Image
                backgroundImage = 'url(https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)';
                break;
            case "Thai":
                // Needs New Image
                backgroundImage = 'url(https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)';
                break;
            case "Tun Tavern":
                // Needs New Image
                backgroundImage = 'url(https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)';
                break;
            default:
                console.error("Something Broke");
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