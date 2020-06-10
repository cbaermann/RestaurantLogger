import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
import EditIcon from '@material-ui/icons/Edit';

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
        backgroundColor: "#eee",
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
    },

    tableCellStyle: {
        opacity: "85%",
        overflow: "auto",
        height: "27rem"
        
    },
    
}

export default props => {
    const [ restaurant, setRestaurant] = useState([]);
    const classes = useStyles();

    useEffect( () => {
        axios.get('http://localhost:8000/api/restaurant')
            .then(res => setRestaurant(res.data));
    }, []);

    const removeFromDom = restaurantId => {
        setRestaurant(restaurant.filter(restaurant => restaurant._id !== restaurantId))
    }

    const comparatorSort = ({sortKey}) => {
        const restaurantSort = restaurant.sort((first, second) => {
            if (first[sortKey].toUpperCase() < second[sortKey].toUpperCase()) {
                return -1;
            }
            else if (first[sortKey].toUpperCase() > second[sortKey].toUpperCase()) {
                return 1;
            }
            else {
                return 0;
            }
        });
        setRestaurant([...restaurantSort]);
    }

    return(
        <div>
            <TableContainer style={styles.tableCellStyle} component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell onClick={ () => comparatorSort({sortKey: 'name'}) }>Name</StyledTableCell>
                        <StyledTableCell onClick={ () => comparatorSort({sortKey: 'location'}) } >Location</StyledTableCell>
                        <StyledTableCell onClick={ () => comparatorSort({sortKey: 'foodType'}) }>Food Type</StyledTableCell>
                        <StyledTableCell onClick={ () => comparatorSort({sortKey: 'priceRange'}) }>Price Range</StyledTableCell>
                        <StyledTableCell>Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurant.map((restaurant, idx )=> {
                        return(
                            <StyledTableRow>
                                <>
                                <StyledTableCell key={idx+1}><Link to={"/restaurant/" + restaurant._id}>{restaurant.name}</Link></StyledTableCell>

                                <StyledTableCell key={idx+2}>{restaurant.location}</StyledTableCell>

                                <StyledTableCell key={idx+3}>{restaurant.foodType}</StyledTableCell>

                                <StyledTableCell key={idx+4}>{restaurant.priceRange}</StyledTableCell>

                                <StyledTableCell key={idx + 4}>
                                    <Button style={styles.buttonMargin}
                                    startIcon={<EditIcon />}
                                            color="primary" variant="contained"
                                            size="small" href={"/restaurant/" + restaurant._id + "/edit"}>Edit</Button>
                                            
                                <DeleteButton restaurantId={restaurant._id} successCallback={() => removeFromDom(restaurant._id)}/></StyledTableCell>
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