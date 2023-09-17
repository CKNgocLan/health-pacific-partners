"use client"

const GoogleMap = require('react-google-maps').GoogleMap;
const Marker = require('react-google-maps').Marker;
import {
    withGoogleMap,
    withScriptjs,
} from "react-google-maps";

const HEAD_QUARTER_CENTER = {
    lat: Number(process.env.NEXT_PUBLIC_GOOGLE_HEAD_QUARTER_LAT),
    lng: Number(process.env.NEXT_PUBLIC_GOOGLE_HEAD_QUARTER_LNG)
}

const Map = withScriptjs(
    withGoogleMap(() => (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={HEAD_QUARTER_CENTER}
        >
            <Marker position={HEAD_QUARTER_CENTER} title="Health Pacific Partners" />
        </GoogleMap>
    ))
);

export default Map;
