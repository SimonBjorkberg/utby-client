'use client'

import { useRouter } from "next/navigation"
import { useRef, useState } from "react";
import Carousel from "../components/Carousel";
import dataService from "../utils/data.service";

export default function Test() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [images, setImages] = useState<any>([])
    const [sectorName, setSectorName] = useState("")
    const [sectorCoords, setSectorCoords] = useState({ lat: "", lon: "" })
    const [zone, setZone] = useState("Utby")

    const router = useRouter()

    const handleImageChange = (e: any) => {
        const files = e.target.files
        if (files && files.length > 0) {
            const newImages = Array.from(files);
            setImages([...images, ...newImages])
        }
    }

    const handleGetPosition = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setSectorCoords({ lat: latitude.toString(), lon: longitude.toString() });
                },
                (error) => {
                    console.error("Error getting geolocation:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported in this browser");
        }
    }

    const appendImage = async (image: any) => {
        const formData = new FormData();
        formData.append("imageUrl", image);
        const response = await dataService.uploadImage(formData);
        console.log(response)
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        const body = { name: sectorName, position: { lat: sectorCoords.lat, lon: sectorCoords.lon }, images, zone }

        images.forEach((image: any) => {
            appendImage(image);
        })
    }

    return <main className="roboto-regular bg-white h-fit flex flex-col">
        <nav className={`text-3xl flex justify-center relative py-4 w-full bg-orange-500 text-white`}>
            <p className='font-light'>Create Sector</p>
            <svg onClick={() => router.push('/map')} className='w-10 rotate-180 absolute left-0 top-[calc(50%-20px)]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 0h24v24h-24z" fill="white" stroke="white" opacity="0" transform="matrix(0 -1 1 0 0 24)" />
                <path d="m10 19a1 1 0 0 1 -.64-.23 1 1 0 0 1 -.13-1.41l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a1 1 0 0 1 -.83.36z" fill="white" />
            </svg>
        </nav>
        <div className="h-full max-h-full flex flex-col bg-white">
            <Carousel canvasRef={canvasRef} images={images} />
            <form onSubmit={handleSubmit} className="flex flex-col items-center my-2 mx-2">
                <input onChange={handleImageChange} type="file" className="border p-2 w-full border-orange-500 rounded-md" multiple />
                <div className="flex flex-col w-full gap-2 mt-2">
                    <input onChange={(e) => setSectorName(e.target.value)} value={sectorName} type="text" placeholder="Sector Name" className="border p-2 w-full border-orange-500 rounded-md" />
                    <select onChange={(e => { setZone(e.target.value) })} value={zone} className="border p-2 w-full border-orange-500 rounded-md">
                        <option>Utby</option>
                    </select>
                    <p className="font-light text-lg">Coordinates</p>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Lat"
                            className="border p-2 w-full border-orange-500 rounded-md"
                            value={sectorCoords.lat || ""}
                            onChange={(e) => setSectorCoords({ ...sectorCoords, lat: e.target.value })}
                        />
                        < input
                            type="text"
                            placeholder="Lon"
                            className="border p-2 w-full border-orange-500 rounded-md"
                            value={sectorCoords.lon || ""}
                            onChange={(e) => setSectorCoords({ ...sectorCoords, lon: e.target.value })}
                        />
                    </div>
                    <p onClick={handleGetPosition} className="bg-orange-500 text-white p-2 rounded-md text-center">Get Current Position</p>
                </div>
                <button type="submit" className="p-4 bg-orange-500 w-full mt-5 rounded-md text-white">Submit</button>
            </form>
        </div>
    </main>
}