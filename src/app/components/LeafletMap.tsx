'use client'
import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer, } from 'react-leaflet'
import GeoLocation from './GeoLocation';
import SectionMarker from './SectionMarker'
import { useEffect, useState } from 'react'
import dataService from '../utils/data.service'

interface Data {
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
};

interface Props {
    setSelSection: any,
    selSection: any,
};


export default function LeafletMap({ setSelSection, selSection }: Props) {
    const [data, setData] = useState<Data[] | []>([])

    const getData = async () => {
        const response = await dataService.allSectors();
        if (response) {
            setData(response.data)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <MapContainer className='w-full h-full' center={[57.74494299413902, 12.057094987938887]} zoom={16} scrollWheelZoom={true}>
            <TileLayer
                url="https://maps.infra.entryscape.com/maps/basic/{z}/{x}/{y}.png?key=srAw96F43apXJCHhfWnu"
            />
            <GeoLocation />
            {data.map((section, i) => { return <SectionMarker setSelSection={setSelSection} key={i} section={section} selSection={selSection} /> })}
        </MapContainer>
    )
}