import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBiPegG4FfGshWYSBA4niaxJm9HbBJytro" }}
                defaultCenter={{lat:21.4394636,lng:92.00773159999994}}
                defaultZoom={15}
            >
                {/* <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                /> */}
            </GoogleMapReact>
        </div>
    );
};

export default GoogleMap;