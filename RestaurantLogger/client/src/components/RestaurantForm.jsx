import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Button,
        Paper,
        FormControl,
        InputLabel,
        OutlinedInput,
        Select, 
        MenuItem
} from '@material-ui/core';

const styles = {
    input: {
        marginBottom: "1rem",
        width: "250px"
    },
    paper: {
        padding: "1rem"
    },
    topInput: {
        marginTop: "1rem"
    },
    foodTypeWidth: {
        // width: "200px",
    },
    priceRangeWidth: {
        marginTop: "1rem",
        // width: "200px"
    }
}

export default props => {
    const {initialName, initialLocation, initialDescription, initialFoodType, initialPriceRange, onSubmitProp} = props;
    const[name, setName] = useState(initialName);
    const[location, setLocation] = useState(initialLocation);
    const[description, setDescription] = useState(initialDescription);
    const[foodType, setFoodType] = useState(initialFoodType);
    const[priceRange, setPriceRange] = useState(initialPriceRange)

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, location, description, foodType, priceRange});
        navigate("/restaurant")
    }

    const onClickHandler = e =>{
        e.preventDefault();
        navigate("/restaurant")
    }

    return(
        <>
        <Paper elevation={3} style={styles.paper} style={styles.topInput}>
            <form onSubmit={onSubmitHandler} style={styles.topInput}>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Name:</InputLabel>
                    <OutlinedInput
                        type="text"
                        name="name" value={name}
                        onChange={(e)=>{setName(e.target.value) }}/>
                </FormControl><br/>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Location:</InputLabel><br/>
                    <OutlinedInput
                        type="text"
                        name="location" value={location}
                        onChange={(e)=>{setLocation(e.target.value) }}/>
                </FormControl><br/>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Description:</InputLabel><br/>
                    <OutlinedInput
                        type="text"
                        name="description" value={description}
                        onChange={(e)=>{setDescription(e.target.value) }}/>
                </FormControl><br/>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>FoodType:</InputLabel><br/>
                    <Select name="foodType" value={foodType}
                        onChange={(e)=>{setFoodType(e.target.value)}}>
                            <MenuItem value={"American"}>American</MenuItem>
                            <MenuItem value={"Bar"}>Bar</MenuItem>
                            <MenuItem value={"Chinese"}>Chinese</MenuItem>
                            <MenuItem value={"Fusion"}>Fusion</MenuItem>
                            <MenuItem value={"Indian"}>Indian</MenuItem>
                            <MenuItem value={"Italian"}>Italian</MenuItem>
                            <MenuItem value={"Mexican"}>Mexican</MenuItem>
                            <MenuItem value={"Seafood"}>Seafood</MenuItem>
                            <MenuItem value={"Thai"}>Thai</MenuItem>
                            <MenuItem value={"Tun Tavern"}>Tun Tavern</MenuItem>
                    </Select>
                    {/* <OutlinedInput
                        type="text"
                        name="foodType" value={foodType}
                        onChange={(e)=>{setFoodType(e.target.value) }}/> */}
                </FormControl><br/>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Price Range:</InputLabel><br/>
                    
                    <Select name="priceRange" value={priceRange}
                        onChange={(e)=>setPriceRange(e.target.value)}>
                        <MenuItem value={"Cheap"}>Cheap</MenuItem>
                        <MenuItem value={"Average"}>Average</MenuItem>
                        <MenuItem value={"Expensive"}>Expensive</MenuItem>
                    </Select>
                    {/* <OutlinedInput
                        type="text"
                        name="priceRange" value={priceRange}
                        onChange={(e)=>{setPriceRange(e.target.value) }}/> */}
                </FormControl><br/><br/>
                <Button color="secondary" variant="contained" onClick={onClickHandler}>Cancel</Button>
                <Button type="submit" variant="contained" color="primary">Submit</Button><br/><br/><br/>

            </form>
        </Paper>
        </>
    )
}