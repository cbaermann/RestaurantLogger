import React from 'react';
import { Button } from '@material-ui/core';

import '../style/Landing.css'

export default () => {
    return(
        <>
        <div className="container">
            <img className="landingImage" src={require('../image/logo.png')} alt={'application logo'}/><br/>
            <Button className="siteButton" href="/restaurant"
            color="default"
            variant="contained">Go To Site</Button>
        </div>
        </>
    )
}