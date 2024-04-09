import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Marker from "./Marker";
import { useState } from "react";

export default function GoogleMaps() {
    const position = { lat: 57.74494299413902, lng: 12.057094987938887 };

    const [selectedMarker, setSelectedMarker] = useState("")

    const markers = [
        {
            id: "1",
            title: "La Bousse Blocket",
            position: {
                lat: 57.745164259687314,
                lng: 12.05678674544462,
            },
            link: "",
        },
        {
            id: "2",
            title: "Voodoo blocket",
            position: {
                lat: 57.7450511,
                lng: 12.0589301,
            },
            link: "",
        },
        {
            id: "3",
            title: "Köksväggen",
            position: {
                lat: 57.745642,
                lng: 12.057577,
            },
            link: "",
        },
        {
            id: "4",
            title: "Björnberget",
            position: {
                lat: 57.748318,
                lng: 12.050203,
            },
            link: "",
        },
        {
            id: "5",
            title: "Fjällbo Dammen",
            position: {
                lat: 57.7448,
                lng: 12.0709,
            },
            link: "",
        },
        {
            id: "6",
            title: "Fjällbo, Plan 8",
            position: {
                lat: 57.7430,
                lng: 12.0693,
            },
            link: "",
        },
        {
            id: "7",
            title: "Fjällbo Plan 9, Hollywood",
            position: {
                lat: 57.7444,
                lng: 12.0694,
            },
            link: "",
        },
        {
            id: "8",
            title: "Tornväktaregatan",
            position: {
                lat: 57.7445,
                lng: 12.0524,
            },
            link: "",
        },
        {
            id: "9",
            title: "TrollBlocket",
            position: {
                lat: 57.7467,
                lng: 12.0563,
            },
            link: "",
        },
        {
            id: "10",
            title: "Ekhyllan (Plan 5)",
            position: {
                lat: 57.7434,
                lng: 12.0632,
            },
            link: "",
        },
        {
            id: "11",
            title: "Nordväst om ängen",
            position: {
                lat: 57.7457,
                lng: 12.0561,
            },
            link: "",
        },
        {
            id: "12",
            title: "Lilla Ängsväggen",
            position: {
                lat: 57.7455704,
                lng: 12.0569600,
            },
            link: "",
        },
        {
            id: "13",
            title: "Ängsareten, Jazzbyxa",
            position: {
                lat: 57.7450908,
                lng: 12.0579561,
            },
            link: "",
        },
        {
            id: "14",
            title: "Det Andra Taket",
            position: {
                lat: 57.7453608,
                lng: 12.0587621,
            },
            link: "",
        },
        {
            id: "15",
            title: "Grodan",
            position: {
                lat: 57.7451030,
                lng: 12.0596499,
            },
            link: "",
        },
        {
            id: "16",
            title: "MPFC",
            position: {
                lat: 57.7448586,
                lng: 12.0605605,
            },
            link: "",
        },
        {
            id: "17",
            title: "Dödsdöden",
            position: {
                lat: 57.7448459,
                lng: 12.0614759,
            },
            link: "",
        },
    ]

    return (
        <APIProvider apiKey={`AIzaSyCq4fyZ-i30IzQMvDL5q1L4Tv5z9Zxiveo`}>
            <Map defaultCenter={{ lat: 57.74494299413902, lng: 12.057094987938887 }} defaultZoom={16} mapTypeId="satellite" mapId={"53c8799fec4a052c"}>
                {markers.map((marker, i) => {
                    return <Marker key={i} markerInfo={marker} selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker} />
                })}
            </Map>
        </APIProvider>
    )
}