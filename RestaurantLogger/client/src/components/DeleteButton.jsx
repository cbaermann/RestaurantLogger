import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core'


export default props => {
    const { restaurantId, successCallback } = props;

    const deleteRestaurant = e => {
        axios.delete('http://localhost:8000/api/restaurant/' + restaurantId)
            .then(res => {
                successCallback();
            })
    }

    return(
        <Button color="secondary" variant="contained" size="small" onClick={deleteRestaurant}>
            Delete
        </Button>
    )
}