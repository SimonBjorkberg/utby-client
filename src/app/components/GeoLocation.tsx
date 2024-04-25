import { useEffect, useState } from "react";
import { Marker } from "react-leaflet";
import L from 'leaflet'

interface LocationState {
    latitude: number | null;
    longitude: number | null;
    error: string | null;
}


export default function GeoLocation() {

    const [location, setLocation] = useState<LocationState | undefined>(undefined);

    useEffect(() => {
        const handleLocationChange = (position: GeolocationPosition) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null,
            });
        };

        const handleLocationError = (error: GeolocationPositionError) => {
            setLocation({
                latitude: null,
                longitude: null,
                error: error.message,
            });
        };

        if (!navigator.geolocation) {
            setLocation({
                latitude: null,
                longitude: null,
                error: 'Geolocation is not supported by your browser.',
            });
        } else {
            const watcher = navigator.geolocation.watchPosition(
                handleLocationChange,
                handleLocationError,
                { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 }
            );

            return () => navigator.geolocation.clearWatch(watcher);
        }
    }, []);

    const customIcon = L.divIcon({
        className: "",
        html: `
        <div class="relative w-4 h-4">
            <div class="absolute w-full h-full inset-0 animate-ping bg-blue-500 rounded-full"></div>
            <div class="absolute h-1/2 w-1/2 my-auto mx-auto inset-0 bg-blue-500 rounded-full"></div>
        </div>
    `,
        iconSize: [20, 20],
    });

    return (
        <>
            {location && <Marker position={[location.latitude ?? 0, location.longitude ?? 0]} icon={customIcon}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#3182ce"
                >
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </Marker>}
        </>
    )
}