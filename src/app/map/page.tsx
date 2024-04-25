'use client'

import { useRouter } from "next/navigation";
import Map from "../../../public/js";
import { useEffect, useState } from "react";
import MapSectionInfo from "../components/MapSectionInfo";

interface Section {
    _id: string,
    name: string,
    images: string[],
    boulders: {}[]
}

export default function MapView() {
    const [selSection, setSelSection] = useState<Section | undefined>(undefined)
    const [show, setShow] = useState(false)
    const router = useRouter()

    const showDelay = () => {
        if (selSection?.name) {
            setTimeout(() => {
                setShow(true)
            }, 200);
        }
    }

    useEffect(() => {
        showDelay()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selSection])

    return (
        <div className={`w-full h-dvh flex flex-col bg-white roboto-regular`}>
            <nav className={`text-3xl h-[70px] flex justify-center relative py-4 w-full bg-orange-500 text-white`}>
                <p className=''>Karta</p>
                <svg onClick={() => router.push('/')} className='w-10 rotate-180 absolute left-0' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m0 0h24v24h-24z" fill="white" stroke="white" opacity="0" transform="matrix(0 -1 1 0 0 24)" />
                    <path d="m10 19a1 1 0 0 1 -.64-.23 1 1 0 0 1 -.13-1.41l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a1 1 0 0 1 -.83.36z" fill="white" />
                </svg>
                <svg onClick={() => router.push('/createsector')} viewBox="0 0 24 24" className="w-10 absolute right-0" fill="white">
                    <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)" />
                    <path d="m19 11h-6v-6a1 1 0 0 0 -2 0v6h-6a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" fill="white" />
                </svg>
            </nav>
            <Map setSelSection={setSelSection} selSection={selSection} />
            {selSection && <MapSectionInfo show={show} selSection={selSection} setSelSection={setSelSection} />}
        </div>
    )
}

