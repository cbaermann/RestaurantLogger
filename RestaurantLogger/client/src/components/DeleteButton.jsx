import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

export default props => {
    const { restaurantId, successCallback } = props;

    const deleteRestaurant = () => {
        axios.delete('http://localhost:8000/api/restaurant/' + restaurantId)
            .then(res => { successCallback(); })
    }

    return(
        <Button color="secondary" variant="contained" size="small" startIcon={<DeleteIcon/>} onClick={deleteRestaurant}>
            Delete
        </Button>
    )
}