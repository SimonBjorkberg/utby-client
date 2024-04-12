import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Marker from "./Marker";
import { data } from "../../../public/data/data";
import { useState } from "react";

export default function GoogleMaps() {
    const [selectedMarker, setSelectedMarker] = useState("")


    return (
        <APIProvider apiKey={`AIzaSyCq4fyZ-i30IzQMvDL5q1L4Tv5z9Zxiveo`}>
            <Map defaultCenter={{ lat: 57.74494299413902, lng: 12.057094987938887 }} defaultZoom={16} mapTypeId="satellite" mapId={"53c8799fec4a052c"}>
                {data.map((marker, i) => {
                    return <Marker key={i} markerInfo={marker} selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker} />
                })}
            </Map>
        </APIProvider>
    )
}