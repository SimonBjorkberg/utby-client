import { useRouter } from "next/navigation";
import { Circle, Popup } from "react-leaflet";

interface Props {
    setSelSection: any,
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

export default function SectionMarker({ section, setSelSection }: Props) {
    return (
        <>
            <Circle eventHandlers={{
                click: () => {
                    setSelSection(section)
                }
            }}
                center={[section.position.latitude, section.position.longitude]} radius={10}>
            </Circle >
        </>
    )
}