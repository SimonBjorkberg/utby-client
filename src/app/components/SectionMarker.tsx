import Image from "next/image";
import { useRouter } from "next/navigation";
import { Circle, Popup } from "react-leaflet";

interface Props {
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

export default function SectionMarker({ section }: Props) {

    const router = useRouter()

    return (
        <>
            <Circle center={[section.position.latitude, section.position.longitude]} radius={10}>
                <Popup>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-center text-[15px] mb-1">{section.name}</h1>
                        <div className="bg-neutral-900 overflow-hidden justify-center flex h-[200px] w-[200px]">
                            <img className="object-contain w-full" src={section.images[0]} alt="" />
                        </div>
                        <button className='w-full border border-blue-500 mt-2 text-white bg-blue-500 text-lg py-1' onClick={() => router.push(`/sector?id=${section._id}`)}>Till Boulders</button>
                    </div>
                </Popup>
            </Circle>
        </>
    )
}