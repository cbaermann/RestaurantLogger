import React from 'react';
import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

import '../style/Landing.css'

const styles = {
    githubButton: {
        position: "absolute",
        top: 0,
        right: 30,
    }
}

export default () => {
    return(
        <>
        <div className="container">
            <Button style={styles.githubButton} className="githubButton" href="https://github.com/cbaermann/RestaurantLogger"><GitHubIcon fontSize="large" style={{color: "white"}}/></Button><br/>
            <img className="landingImage" src={require('../image/logo.png')} alt={'application logo'}/><br/>
            <Button className="siteButton" href="/restaurant"
            color="default"
            variant="contained">Go To Site</Button>
        </div>
        </>
    )
}