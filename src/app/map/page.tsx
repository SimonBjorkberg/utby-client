'use client'

import { useRouter } from "next/navigation";
import Map from "../../../public/js";
import { useEffect, useState } from "react";

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
    }, [selSection])

    console.log(selSection)

    return (
        <div className={`w-full h-dvh flex flex-col`}>
            <div onClick={() => router.push('/')} className={`text-3xl h-[70px] py-4 w-full bg-orange-500 text-white`}><p className='absolute left-[calc(50%-40px)]'>Karta</p><svg className='w-10 rotate-180' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="white" stroke="white" opacity="0" transform="matrix(0 -1 1 0 0 24)" /><path d="m10 19a1 1 0 0 1 -.64-.23 1 1 0 0 1 -.13-1.41l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a1 1 0 0 1 -.83.36z" fill="white" /></svg></div>
            <Map setSelSection={setSelSection} />
            {selSection && <div className={`transition-all duration-300 w-full min-h-[140px] max-h-[140px] flex text-white ${show ? "h-[140px]" : "h-0"}`}>
                <div className="max-h-40 text-black">
                    <img className="max-w-40 w-40 h-full object-scale-down bg-neutral-900" src={selSection.images[0]} />
                </div>
                <div className="w-full p-2 h-full bg-white text-black">
                    <p className="">{selSection.name}</p>
                    <p className="font-extralight text-sm">Antal Boulders: {selSection.boulders.length}</p>
                </div>
                <button onClick={() => router.push(`/sector?id=${selSection._id}`)} className="bg-orange-500">
                    <svg className='w-10' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m0 0h24v24h-24z" fill="white" stroke="white" opacity="0" transform="matrix(0 -1 1 0 0 24)" />
                        <path d="m10 19a1 1 0 0 1 -.64-.23 1 1 0 0 1 -.13-1.41l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a1 1 0 0 1 -.83.36z" fill="white" />
                    </svg>
                </button>
            </div>}
        </div>
    )
}

