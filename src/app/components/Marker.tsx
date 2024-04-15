import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
    markerInfo: {
        id: string,
        title: string,
        position: {
            lat: number
            lng: number
        },
        boulders: {
            id: string,
            name: string,
            grade: string,
            gboLink: string,
            cragLink: string,
            description: string,
            path: string,
            imageRef: number,
        }[],
        images: any[],
    },
    selectedMarker: any,
    setSelectedMarker: any,
}

export default function Marker({ markerInfo, selectedMarker, setSelectedMarker }: Props) {
    const [markerRef, marker] = useAdvancedMarkerRef();

    const router = useRouter()

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
                    onCloseClick={() => setSelectedMarker("")}>
                    <div className="flex flex-col max-w-[250px]">
                        <h1 className="font-bold text-center text-[15px] mb-1">{markerInfo.title}</h1>
                        <Image className="w-full" src={markerInfo.images[0]} alt="" />
                        <div className="w-full h-10 gap-2 flex justify-between items-center mt-1">
                            <button onClick={() => router.push(`/sector?id=${markerInfo.id}`)} >Test</button>
                        </div>
                    </div>
                </InfoWindow>
            )}
        </>
    )
}

