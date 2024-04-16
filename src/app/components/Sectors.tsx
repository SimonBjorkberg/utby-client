import { useEffect, useState } from "react"
import dataService from "../utils/data.service"

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
        latitude: string,
        longitude: string,
    },
    _id: string,
}

export default function Sectors() {
    const [showInfo, setShowInfo] = useState("")
    const [data, setData] = useState<Data[] | []>([])

    const handleShowInfo = (id: string) => {
        if (showInfo === id) {
            setShowInfo("")
        }
        else if (showInfo === "" || showInfo !== id) {
            setShowInfo(id)
        }
    }

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
        <div className="text-left flex flex-col items-center overflow-y-scroll gap-2 bg-white pt-[90px] pb-4">
            {data?.map((marker, i) => {
                return <div onClick={() => handleShowInfo(marker._id)} key={i} className="w-[90%] p-3 text-white bg-blue-500 flex flex-col">
                    <div className="flex justify-between">
                        <p>
                            {marker.name}
                        </p>
                        <div>
                            <svg className={`transition-all ${showInfo === marker._id ? "" : "rotate-180"}`} width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className={`w-full transition-all duration-300 bg-green-500 overflow-y-auto ${showInfo === marker._id ? "h-52" : "h-0"}`}>
                        {<ul>
                            {marker.boulders?.map((boulder, i) => {
                                return <li className="p-2" key={i}>{boulder.name}</li>
                            })}
                        </ul>}
                    </div>
                </div>
            })}
        </div>
    )
}