import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import Image from "next/image";
import bousse from '../../../public/images/bousse.jpg'

interface Props {
    markerInfo: {
        id: string,
        title: string,
        position: {
            lat: number
            lng: number
        },
        boulders: [{
            name: string,
            grad: string,
        }]
        links: [],
        images: [any],
    }
    selectedMarker: any,
    setSelectedMarker: any,
}

export default function Marker({ markerInfo, selectedMarker, setSelectedMarker }: Props) {
    const [markerRef, marker] = useAdvancedMarkerRef();

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
                    onCloseClick={() => setSelectedMarker("")}>
                    <div className="flex flex-col max-w-[250px]">
                        <h1>{markerInfo.title}</h1>
                        {markerInfo.images.map((image: any, i: number) => {
                            return <Image key={i} className="w-full" src={image} alt="" />
                        })}
                    </div>
                </InfoWindow>
            )}
        </>
    )
}

