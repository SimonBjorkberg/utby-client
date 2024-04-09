import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import { useState } from "react";

interface Props {
    markerInfo: {
        id: string,
        title: string,
        position: {
            lat: number
            lng: number
        },
        link: string,
    }
    selectedMarker: any,
    setSelectedMarker: any,
}

export default function Marker({ markerInfo, selectedMarker, setSelectedMarker }: Props) {
    const [markerRef, marker] = useAdvancedMarkerRef();
    const [infowindowOpen, setInfowindowOpen] = useState(false);

    return (
        <>
            <AdvancedMarker
                ref={markerRef}
                onClick={() => setSelectedMarker(markerInfo.id)}
                position={markerInfo.position}
                title={'AdvancedMarker that opens an Infowindow when clicked.'}
            />
            {markerInfo.id === selectedMarker && (
                <InfoWindow
                    anchor={marker}
                    maxWidth={250}
                    onCloseClick={() => setInfowindowOpen(false)}>
                    <div className="flex flex-col">
                        <h1>{markerInfo.title}</h1>
                    </div>
                </InfoWindow>
            )}
        </>
    )
}