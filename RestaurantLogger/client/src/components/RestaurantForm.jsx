import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Button,
        Paper,
        FormControl,
        InputLabel,
        OutlinedInput
} from '@material-ui/core';

const styles = {
    input: {
        marginBottom: "1rem"
    },
    paper: {
        padding: "1rem"
    },
    topInput: {
        marginTop: "1rem"
    }
}

export default props => {
    const {initialName, initialLocation, initialDescription, initialFoodType, onSubmitProp} = props;
    const[name, setName] = useState(initialName);
    const[location, setLocation] = useState(initialLocation);
    const[description, setDescription] = useState(initialDescription);
    const[foodType, setFoodType] = useState(initialFoodType);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, location, description, foodType});
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
                    <OutlinedInput
                        type="text"
                        name="foodType" value={foodType}
                        onChange={(e)=>{setFoodType(e.target.value) }}/>
                </FormControl><br/><br/>
                <Button color="secondary" variant="contained" onClick={onClickHandler}>Cancel</Button>
                <Button type="submit" variant="contained" color="primary">Submit</Button>

            </form>
        </Paper>
        {/* <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name:</label><br/>
                <input
                    type="text"
                    name="name" value={name}
                    onChange={(e)=>{setName(e.target.value) }}/>
            </p>
            <p>
                <label>Location:</label><br/>
                <input
                    type="text"
                    name="location" value={location}
                    onChange={(e)=>{setLocation(e.target.value) }}/>
            </p>
            <p>
                <label>Description:</label><br/>
                <input
                    type="text"
                    name="description" value={description}
                    onChange={(e)=>{setDescription(e.target.value) }}/>
            </p>
            <p>
                <label>Food Type:</label><br/>
                <input
                    type="text"
                    name="foodType" value={foodType}
                    onChange={(e)=>{setFoodType(e.target.value) }}/>
            </p>
            <input type="submit"/>
        </form>
        <Button variant="contained" color="default" onClick={onClickHandler}>Cancel</Button> */}
        </>
    )
}