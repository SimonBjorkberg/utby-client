'use client'
import 'leaflet/dist/leaflet.css'
import { data } from '../../../public/data/data'

import { MapContainer, TileLayer, Marker, Circle, Popup } from 'react-leaflet'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LeafletMap() {

    const router = useRouter()

    return (
        <MapContainer className='w-full h-full z-0' center={[57.74494299413902, 12.057094987938887]} zoom={16} scrollWheelZoom={true}>
            <TileLayer
                url="https://maps.infra.entryscape.com/maps/basic/{z}/{x}/{y}.png?key=srAw96F43apXJCHhfWnu"
            />
            {data.map((section) => {
                return <Circle center={[section.position.lat, section.position.lng]} radius={4}>
                    <Popup>
                        <div className="flex flex-col w-[250px]">
                            <h1 className="font-bold text-center text-[15px] mb-1">{section.title}</h1>
                            <Image className="w-full" src={section.images[0]} alt="" />
                            <button className='w-full border border-blue-500 mt-2 text-blue-500 text-lg py-2' onClick={() => router.push(`/sector?id=${section.id}`)}>Till Boulders</button>
                        </div>
                    </Popup>
                </Circle>
            })}
        </MapContainer>
    )
}