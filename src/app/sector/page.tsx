'use client'

import { useSearchParams } from "next/navigation"
import { data } from "../../../public/data/data"
import { useEffect, useState } from "react"
import Path from "../components/Path"

interface Sector {
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
        path: string,
    }[],
    gboLink: string,
    cragLink: string,
    images: any[],
}

export default function Sector() {
    const [sector, setSector] = useState<Sector | undefined>(undefined)
    const [selectedPath, setSelectedPath] = useState("")

    const params = useSearchParams()
    const p = params.get('id')

    const getSector = () => {
        const s = data.filter((sector) => {
            return sector.id === p;
        })
        setSector(s[0])
    }

    useEffect(() => {
        getSector()
    }, [])

    return (
        <>
            <div>
                {sector && <main className="flex flex-col items-center justify-between w-full h-dvh">
                    <h2 className="py-2 text-xl font-bold">{sector.title}</h2>
                    <div>
                        {sector.images[0] && <svg width={800} height={600} viewBox="0 0 800 600" className="object-fit max-w-[800px] bg-neutral-900" xmlns="http://www.w3.org/2000/svg">
                            <image href={sector.images[0].src} className="object-fit w-full h-full" />
                            {sector.boulders.map((boulder, i: number) => {
                                return <Path key={i} boulder={boulder} setSelectedPath={setSelectedPath} selectedPath={selectedPath} />
                            })}
                        </svg>}
                    </div>
                    <div className="w-full overflow-y-scroll">
                        {sector.boulders.map((boulder, i) => {
                            return <div key={i} className={`h-20 ${i % 2 === 0 ? "bg-neutral-200" : "bg-white"}`} onClick={() => setSelectedPath(boulder.id)}><p className={`w-full h-full p-3 ${selectedPath === boulder.id ? "bg-red-300" : ""}`}>{boulder.name}</p></div>
                        })}
                    </div>
                </main>}
            </div>
        </>
    )
}