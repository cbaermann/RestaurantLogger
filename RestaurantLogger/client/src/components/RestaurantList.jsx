import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableCell,
    TableRow,
    TableHead,
    TableBody,
    Button,
    Paper,
    TableContainer
} from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const styles = {
    buttonMargin: {
        marginRight: "1rem"
    }
}

export default props => {
    const [ restaurant, setRestaurant] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/restaurant')
            .then(res => setRestaurant(res.data));
    }, [])

    const removeFromDom = restaurantId => {
        setRestaurant(restaurant.filter(restaurant => restaurant._id != restaurantId))
    }

    const classes = useStyles();




    return(
        <div>
            <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Location</StyledTableCell>
                        <StyledTableCell>Food Type</StyledTableCell>
                        <StyledTableCell>Price Range</StyledTableCell>
                        <StyledTableCell>Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurant.map((restaurant, idx)=> {
                        return(
                            <StyledTableRow>
                                <>
                                <StyledTableCell key={idx}>{restaurant.name}</StyledTableCell>

                                <StyledTableCell key={idx}>{restaurant.location}</StyledTableCell>

                                <StyledTableCell key={idx}>{restaurant.foodType}</StyledTableCell>

                                <StyledTableCell key={idx}>{restaurant.priceRange}</StyledTableCell>

                                <StyledTableCell>
                                    <Button style={styles.buttonMargin}color="primary" variant="contained" size="small" href={"/restaurant/" + restaurant._id + "/edit"}>Edit</Button>
                                <DeleteButton restaurantId={restaurant._id} successCallback={()=>removeFromDom(restaurant._id)}></DeleteButton></StyledTableCell>
                                </>
                            </StyledTableRow>
                        )
                    })}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}