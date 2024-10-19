import React from "react";
import GoogleMapReact from 'google-map-react';
import Navbar from "../components/Navbar";



export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 24.8607,
            lng:  67.0011
        },
        zoom: 25
    };

    return (
        <div className=" bg-black h-[100vh]"> 
            <Navbar/>
            <div className="h-[80vh] w-11/12 mx-auto ">
                <GoogleMapReact
            
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >

                </GoogleMapReact>
            </div>
        </div>
    );
}