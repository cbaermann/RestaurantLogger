import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

import {
    Table,
    TableCell,
    TableRow,
    TableHead,
    TableBody,
    Button,
    Tab
} from '@material-ui/core';

export default props => {
    const [ restaurant, setRestaurant] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/restaurant')
            .then(res => setRestaurant(res.data));
    }, [])

    const removeFromDom = restaurantId => {
        setRestaurant(restaurant.filter(restaurant => restaurant._id != restaurantId))
    }

    return(
        <div>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Food Type</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurant.map((restaurant, idx)=> {
                        return(
                            <TableRow>
                                <>
                                <TableCell key={idx}>{restaurant.name}</TableCell>

                                <TableCell key={idx}>{restaurant.location}</TableCell>

                                <TableCell key={idx}>{restaurant.foodType}</TableCell>

                                <TableCell><Link to={"/restaurant/" + restaurant._id + "/edit"}><Button color="primary"
                                variant="contained"
                                size="small">Edit</Button></Link><DeleteButton restaurantId={restaurant._id} successCallback={()=>removeFromDom(restaurant._id)}></DeleteButton></TableCell>
                                </>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}