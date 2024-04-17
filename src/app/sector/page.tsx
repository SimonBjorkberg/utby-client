'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Path from "../components/Path"
import dataService from "../utils/data.service"

interface Sector {
    id: string,
    title: string,
    position: {
        lat: number
        lng: number
    },
    boulders: {
        _id: string,
        name: string,
        description: string,
        grade: string,
        path: string,
        imageRef: number,
    }[],
    images: any[],
}

export default function Sector() {
    const [sector, setSector] = useState<Sector | undefined>(undefined)
    const [selectedPath, setSelectedPath] = useState("")
    const [imageNum, setImageNum] = useState(0)

    const imageArrayLength: number | undefined = sector?.images.length

    const params = useSearchParams()
    const router = useRouter()

    const id = params.get('id')

    const getSector = async (id: string) => {
        const response = await dataService.getSector(id)
        if (response) {
            setSector(response.data)
        }
    }

    useEffect(() => {
        if (id) {
            getSector(id)
        }
    }, [id])

    const handleImageSelect = () => {
        if (imageArrayLength) {
            if (imageNum === imageArrayLength - 1) {
                setImageNum(0)
            }
            else {
                setImageNum(prevNum => prevNum + 1)
            }
        }
    }

    const changeImage = () => {
        const boulder = sector?.boulders.filter((boulder) => {
            return boulder._id === selectedPath
        })
        if (boulder) {
            setImageNum(boulder[0].imageRef - 1)
        }
    }

    useEffect(() => {
        changeImage()
    }, [selectedPath])

    return (
        <>
            <div>
                {sector && <main className="flex flex-col items-center justify-between w-full h-dvh">

                    <div className="p-3 w-full">
                        <p className="text-white" onClick={() => router.push('/')}>Hem</p>
                    </div>

                    {sector.images.length <= 1 && <>
                        <div className="w-full">
                            {sector.images[0] && <svg viewBox="0 0 800 600" className="object-fit w-full md:h-[600px] h-[400px] bg-neutral-900" xmlns="http://www.w3.org/2000/svg">
                                <image href={sector.images[0]} className="object-fit w-full h-full" />
                                {sector.boulders.map((boulder, i: number) => {
                                    return <Path key={i} boulder={boulder} setSelectedPath={setSelectedPath} selectedPath={selectedPath} />
                                })}
                            </svg>}
                        </div>
                        <div className="w-full overflow-y-scroll">
                            {sector.boulders.map((boulder, i) => {
                                return <div key={i} className={`h-20`} onClick={() => setSelectedPath(boulder._id)}>
                                    <div className={`w-full h-full flex flex-col p-1 justify-between border-t border-b ${selectedPath === boulder._id ? "bg-neutral-200" : "border-white"}`}>
                                        <div>
                                            <p className="font-bold text-sm">{boulder.name}, <span className="font-light">{boulder.grade}</span></p>
                                            <p className="font-light text-sm">{boulder.description}</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </>}

                    {sector.images.length >= 2 && <>
                        <div className="w-full relative">
                            <div onClick={() => handleImageSelect()} className="absolute top-[calc(50%-20px)] w-10 left-0">
                                <svg className="rotate-180 stroke-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="red" opacity="0" transform="matrix(0 -1 1 0 0 24)" /><path d="m10 19a1 1 0 0 1 -.64-.23 1 1 0 0 1 -.13-1.41l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a1 1 0 0 1 -.83.36z" fill="#231f20" /></svg>
                            </div>
                            {sector.images[0] && <div className="bg-neutral-900"><svg viewBox="0 0 800 600" className="w-full object-cover max-w-[600px] mx-auto" xmlns="http://www.w3.org/2000/svg">
                                <image href={sector.images[imageNum]} className="w-full h-full" />
                                {sector.boulders.map((boulder, i) => (
                                    boulder.imageRef - 1 === imageNum ? (
                                        <Path key={i} boulder={boulder} setSelectedPath={setSelectedPath} selectedPath={selectedPath} />
                                    ) : null
                                ))}
                            </svg></div>}
                            <div onClick={() => handleImageSelect()} className="absolute top-[calc(50%-20px)] w-10 right-0">
                                <svg className="stroke-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="red" opacity="0" transform="matrix(0 -1 1 0 0 24)" /><path d="m10 19a1 1 0 0 1 -.64-.23 1 1 0 0 1 -.13-1.41l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a1 1 0 0 1 -.83.36z" fill="#231f20" /></svg>
                            </div>
                        </div>
                        <div className="w-full overflow-y-scroll">
                            {sector.boulders.map((boulder, i) => {
                                return <div key={i} className={`h-20 bg-white`} onClick={() => setSelectedPath(boulder._id)}>
                                    <div className={`w-full h-full flex flex-col p-1 justify-between border-t border-b ${selectedPath === boulder._id ? "bg-neutral-200" : "border-white"}`}>
                                        <div>
                                            <p className="font-bold text-sm">{boulder.name}, <span className="font-light">{boulder.grade}</span></p>
                                            <p className="font-light text-sm">{boulder.description}</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </>}

                </main>}
            </div>
        </>
    )
}