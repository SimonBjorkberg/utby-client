'use client'
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import dataService from "../utils/data.service"

interface Sector {
    id: string,
    name: string,
    position: {
        lat: number
        lng: number
    },
    boulders: {
        _id: string,
        name: string,
        description: string,
        grade: string,
        path: {
            x: number,
            y: number,
        }[],
        imageRef: number,
    }[],
    images: any[],
}

export default function Sector() {
    const [sector, setSector] = useState<Sector | undefined>(undefined)
    const [selectedPath, setSelectedPath] = useState({})
    const [imageRef, setImageRef] = useState(0)

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        if (sector) {
            const backgroundImage = new Image();
            backgroundImage.onload = () => {
                const scaleX = canvas.width / backgroundImage.width;
                const scaleY = canvas.height / backgroundImage.height;
                const scale = Math.min(scaleX, scaleY);

                const newWidth = backgroundImage.width * scale;
                const newHeight = backgroundImage.height * scale;

                const x = (canvas.width - newWidth) / 2;
                const y = (canvas.height - newHeight) / 2;

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(backgroundImage, x, y, newWidth, newHeight);

                sector.boulders.map((boulder) => {
                    if (imageRef === boulder.imageRef) {
                        ctx.beginPath();
                        ctx.moveTo(boulder.path[0]?.x, boulder.path[0]?.y);

                        for (let i = 1; i < boulder.path.length; i++) {
                            const xc = (boulder.path[i].x + boulder.path[i - 1].x) / 2;
                            const yc = (boulder.path[i].y + boulder.path[i - 1].y) / 2;
                            ctx.quadraticCurveTo(boulder.path[i - 1].x, boulder.path[i - 1].y, xc, yc);
                        }

                        if (selectedPath === boulder._id) {
                            ctx.lineWidth = 3;
                            ctx.strokeStyle = "red";
                        } else if (boulder._id !== selectedPath) {
                            ctx.lineWidth = 2;
                            ctx.strokeStyle = "black";
                        }

                        ctx.lineTo(boulder.path[boulder.path.length - 1].x, boulder.path[boulder.path.length - 1].y);
                        ctx.stroke();
                    }
                });
            };
            backgroundImage.src = sector.images[imageRef];
        }
    }, [sector, imageRef, selectedPath]);

    const params = useSearchParams()
    const router = useRouter()

    const id = params.get('id')

    const getSector = async (id: string) => {
        const response = await dataService.getSector(id)
        if (response.data) {
            setSector(response.data)
            if (response.data.boulders[0]) {
                setSelectedPath(response.data.boulders[0]._id)
            }
        }
    }
    useEffect(() => {
        if (id) {
            getSector(id)
        }
    }, [id])

    const handleImageSelect = () => {
        if (sector) {
            if (imageRef === sector.images.length - 1) {
                setImageRef(0)
            }
            else {
                setImageRef(prevNum => prevNum + 1)
            }
        }
    }

    const changeImage = () => {
        const boulder = sector?.boulders.filter((boulder) => {
            return boulder._id === selectedPath
        })
        if (boulder) {
            setImageRef(boulder[0].imageRef)
        }
    }

    useEffect(() => {
        changeImage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedPath])

    return (
        <>
            <div>
                {sector && <main className="flex flex-col items-center w-full h-dvh bg-white roboto-regular">
                    <nav className={`text-2xl flex justify-center relative py-4 w-full bg-orange-500 text-white`}>
                        <p className="">{sector.name}</p>
                        <svg onClick={() => router.push('/map')} className='w-10 rotate-180 absolute left-0 top-[calc(50%-20px)]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m0 0h24v24h-24z" fill="white" stroke="white" opacity="0" transform="matrix(0 -1 1 0 0 24)" />
                            <path d="m10 19a1 1 0 0 1 -.64-.23 1 1 0 0 1 -.13-1.41l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a1 1 0 0 1 -.83.36z" fill="white" />
                        </svg>
                        <svg onClick={() => router.push(`/editsector?id=${id}`)} viewBox="0 0 24 24" className="w-10 absolute right-0 top-[calc(50%-20px)]" fill="white">
                            <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)" />
                            <path d="m19 11h-6v-6a1 1 0 0 0 -2 0v6h-6a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" fill="white" />
                        </svg>
                    </nav>
                    <div className="w-full relative max-w-[800px] bg-neutral-900">
                        <div onClick={() => handleImageSelect()} className="absolute top-[calc(50%-20px)] w-10 left-0">
                            <svg className="rotate-180 stroke-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="red" opacity="0" transform="matrix(0 -1 1 0 0 24)" /><path d="m10 19a1 1 0 0 1 -.64-.23 1 1 0 0 1 -.13-1.41l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a1 1 0 0 1 -.83.36z" fill="#231f20" /></svg>
                        </div>
                        <canvas
                            className="w-full h-full block"
                            ref={canvasRef}
                            width={800}
                            height={600}
                        />
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
                </main>}
            </div>
        </>
    )
}