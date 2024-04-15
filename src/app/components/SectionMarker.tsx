import Image from "next/image";
import { useRouter } from "next/navigation";
import { Circle, Popup } from "react-leaflet";

interface Props {
    section: {
        id: string,
        title: string,
        position: {
            lat: number,
            lng: number,
        }
        images: any[]
    }
}

export default function SectionMarker({ section }: Props) {

    const router = useRouter()

    return ( 
        <Circle center={[section.position.lat, section.position.lng]} radius={10}>
            <Popup>
                <div className="flex flex-col w-[250px]">
                    <h1 className="font-bold text-center text-[15px] mb-1">{section.title}</h1>
                    <Image className="w-full" src={section.images[0]} alt="" />
                    <button className='w-full border border-blue-500 mt-2 text-white bg-blue-500 text-lg py-1' onClick={() => router.push(`/sector?id=${section.id}`)}>Till Boulders</button>
                </div>
            </Popup>
        </Circle>
    )
}