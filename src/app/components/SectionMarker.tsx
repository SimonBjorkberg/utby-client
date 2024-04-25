import { useRouter } from "next/navigation";
import { Circle, Marker, Popup } from "react-leaflet";
import L from 'leaflet'

interface Props {
    setSelSection: any,
    selSection: any,
    section: {
        name: string,
        boulders: {
            name: string,
            grade: string,
            description: string,
            path: string,
        }[],
        images: string[],
        position: {
            latitude: number,
            longitude: number,
        },
        _id: string,
    }
}

export default function SectionMarker({ section, setSelSection, selSection }: Props) {

    const customIcon = L.divIcon({
        className: "",
        html: `
        <div class="relative w-4 h-4">
            <div class="absolute transition-all duration-200 w-full border-2 h-full ${selSection?._id === section?._id ? "border-red-500 bg-red-500" : "border-blue-500 bg-blue-500"} bg-opacity-20 rounded-full"></div>
        </div>
    `,
        iconSize: [20, 20],
    });

    return (
        <>
            <Marker eventHandlers={{
                click: () => {
                    setSelSection(section)
                }
            }}
                position={[section.position.latitude, section.position.longitude]} icon={customIcon}>
            </Marker >
        </>
    )
}