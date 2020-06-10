import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
    center: {
        lat: 47.6062,
        lng: -122.3321
    },
    zoom: 11
};

export default props => {

    return (
      // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: ''}}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
        <AnyReactComponent
            lat={47.6062}
            lng={-122.3321}
            text="My Marker"
        />
        </GoogleMapReact>
    </div>
    );
}