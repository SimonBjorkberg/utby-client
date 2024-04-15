'use client'
import 'leaflet/dist/leaflet.css'
import { data } from '../../../public/data/data'

import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet'
import { useRouter } from 'next/navigation'
import GeoLocation from './GeoLocation';
import SectionMarker from './SectionMarker'

export default function LeafletMap() {
    const router = useRouter()

    return (
        <MapContainer className='w-full h-full' center={[57.74494299413902, 12.057094987938887]} zoom={16} scrollWheelZoom={true}>
            <TileLayer
                url="https://maps.infra.entryscape.com/maps/basic/{z}/{x}/{y}.png?key=srAw96F43apXJCHhfWnu"
            />
            <GeoLocation />
            {data.map((section, i) => { return <SectionMarker key={i} section={section} /> })}
        </MapContainer>
    )
}