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
    },

    tableCellStyle: {
        opacity: "85%"
    }
}

export default props => {
    const [ restaurant, setRestaurant] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/restaurant')
            .then(res => setRestaurant(res.data));
    }, []);

    const removeFromDom = restaurantId => {
        setRestaurant(restaurant.filter(restaurant => restaurant._id !== restaurantId))
    }

    const classes = useStyles();

    const sortProperty = ({property}) => {
        const sortedRestaurant = restaurant.sort((a, b) => {
            if(a[property] < b[property]) { return -1; }
            if(a[property] > b[property]) { return 1; }
            return 0;
        });
        setRestaurant([...sortedRestaurant]);
    }

    return(
        <div>
            <TableContainer style={styles.tableCellStyle} component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell onClick={() => sortProperty({property: 'name'})}>Name</StyledTableCell>
                            <StyledTableCell onClick={() => sortProperty({property: 'location'})}>Location</StyledTableCell>
                            <StyledTableCell onClick={() => sortProperty({property: 'foodType'})}>Food Type</StyledTableCell>
                            <StyledTableCell onClick={() => sortProperty({property: 'priceRange'})}>Price Range</StyledTableCell>
                            <StyledTableCell>Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {restaurant.map((restaurant)=> {
                            const {_id: restaurantId, name, location, foodType, priceRange} = restaurant;
                            return(
                                <StyledTableRow>
                                    <>
                                        <StyledTableCell key={`${restaurantId}${name}`}><Link to={`/restaurant/${restaurantId}`}>{name}</Link></StyledTableCell>
                                        <StyledTableCell key={`${restaurantId}${location}`}>{location}</StyledTableCell>
                                        <StyledTableCell key={`${restaurantId}${foodType}`}>{foodType}</StyledTableCell>
                                        <StyledTableCell key={`${restaurantId}${priceRange}`}>{priceRange}</StyledTableCell>
                                        <StyledTableCell>
                                            <Button style={styles.buttonMargin} color="primary" variant="contained" size="small"
                                                href={`/restaurant/${restaurantId}/edit`}>Edit</Button>
                                            <DeleteButton restaurantId={restaurantId} successCallback={()=>removeFromDom(restaurantId)} />
                                        </StyledTableCell>
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