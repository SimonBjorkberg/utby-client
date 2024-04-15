'use client'

import { useSearchParams } from "next/navigation"
import { data } from "../../../public/data/data"
import { useEffect, useState } from "react"
import Path from "../components/Path"
import Link from "next/link"

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
        description: string,
        grade: string,
        path: string,
        gboLink: string,
        cragLink: string,
    }[],
    images: any[],
}

export default function Sector() {
    const [sector, setSector] = useState<Sector | undefined>(undefined)
    const [selectedPath, setSelectedPath] = useState("1")

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
                    <div className="w-full">
                        {sector.images[0] && <svg viewBox="0 0 800 600" className="object-fit w-full md:h-[600px] h-[400px] bg-neutral-900" xmlns="http://www.w3.org/2000/svg">
                            <image href={sector.images[0].src} className="object-fit w-full h-full" />
                            {sector.boulders.map((boulder, i: number) => {
                                return <Path key={i} boulder={boulder} setSelectedPath={setSelectedPath} selectedPath={selectedPath} />
                            })}
                        </svg>}
                    </div>
                    <div className="w-full overflow-y-scroll">
                        {sector.boulders.map((boulder, i) => {
                            return <div key={i} className={`h-24 ${i % 2 === 0 ? "bg-neutral-200" : "bg-white"}`} onClick={() => setSelectedPath(boulder.id)}>
                                <div className={`w-full h-full flex flex-col p-1 justify-between border-t border-b ${selectedPath === boulder.id ? "bg-neutral-400 border-black" : "border-neutral-200"}`}>
                                    <div>
                                        <p className="font-bold text-sm">{boulder.name}, <span className="font-light">{boulder.grade}</span></p>
                                        <p className="font-light text-sm">{boulder.description}</p>
                                    </div>
                                    <div className="flex justify-end gap-4">
                                        {boulder.gboLink !== "" && <Link className="text-sm text-blue-500" href={boulder.gboLink} target="_blank">Gbo.Crimp</Link>}
                                        {boulder.cragLink !== "" && <Link className="text-sm text-blue-500" href={boulder.cragLink} target="_blank">27Crags</Link>}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </main>}
            </div>
        </>
    )
}