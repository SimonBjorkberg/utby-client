import { useEffect, useState } from "react";
import { Circle } from "react-leaflet";

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

    return (
        <>
            {location && <Circle center={[location.latitude ?? 0, location.longitude ?? 0]} radius={3} />}
        </>
    )
}