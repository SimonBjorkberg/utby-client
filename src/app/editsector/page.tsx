'use client'

interface Info {
    images: string[]
}

interface Point {
    x: number,
    y: number
}

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, useRef, ChangeEvent } from "react"
import dataService from "../utils/data.service"

export default function EditSector() {
    const [info, setInfo] = useState<Info | undefined>(undefined)
    const [clickPoints, setClickPoints] = useState<Point[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [name, setName] = useState("")
    const [grade, setGrade] = useState("4")
    const [description, setDescription] = useState("")
    const [imageRef, setImageRef] = useState(0)

    const params = useSearchParams()
    const id: string | null = params.get('id')
    const router = useRouter()

    const getInfo = async () => {
        if (id) {
            const response = await dataService.getSector(id)
            setInfo(response.data)
        }
    }

    useEffect(() => {
        getInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        if (info) {
            const backgroundImage = new Image();
            backgroundImage.src =
                info?.images[imageRef];

            backgroundImage.onload = () => {
                ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);


                if (clickPoints.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(clickPoints[0]?.x, clickPoints[0]?.y);

                    for (let i = 1; i < clickPoints.length; i++) {
                        const xc = (clickPoints[i].x + clickPoints[i - 1].x) / 2;
                        const yc = (clickPoints[i].y + clickPoints[i - 1].y) / 2;
                        ctx.quadraticCurveTo(clickPoints[i - 1].x, clickPoints[i - 1].y, xc, yc);
                    }

                    ctx.lineWidth = 2
                    ctx.strokeStyle = "red"

                    ctx.lineTo(clickPoints[clickPoints.length - 1].x, clickPoints[clickPoints.length - 1].y);
                    ctx.stroke();
                }

                if (clickPoints.length > 0) {
                    const firstPoint = clickPoints[0];
                    const squareSize = 10;
                    ctx.fillStyle = "red"
                    ctx.fillRect(firstPoint.x - squareSize / 2, firstPoint.y - squareSize / 2, squareSize, squareSize);
                }
            }
        };
    }, [clickPoints, info, imageRef]);

    const handleUndoClick = () => {
        setClickPoints((prevPoints) => {
            if (prevPoints.length > 0) {
                return prevPoints.slice(0, prevPoints.length - 1)
            }
            else {
                return prevPoints;
            }
        })
    }

    const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const x = (event.clientX - rect.left) * scaleX;
        const y = (event.clientY - rect.top) * scaleY;

        setClickPoints((prevPoints) => [...prevPoints, { x, y }]);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleGradeChange = (e: any) => {
        setGrade(e.target.value)
    }
    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }
    const handleImageChange = (e: any) => {
        setImageRef(e.target.value - 1)
    }

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        const info = {
            id,
            name,
            grade,
            description,
            path: clickPoints,
            imageRef
        }
        if (info.path.length >= 2 && info.name !== "" && info.description !== "") {
            const response = await dataService.createBoulder(info)
            if (response.data.message) {
                router.push(`/sector?id=${id}`)
            }
        }
    }

    return (
        <main className="h-dvh w-full flex flex-col items-center">
            <div className="p-3 w-full flex justify-between bg-orange-500 text-white">
                <p onClick={() => router.push(`/sector?id=${id}`)}>Back</p>
            </div>
            <div className="w-full max-w-[800px]">
                <canvas
                    className="w-full h-full block"
                    ref={canvasRef}
                    width={800}
                    height={600}
                    onClick={handleCanvasClick}
                />
            </div>
            <button className="bg-white p-4 w-full" onClick={handleUndoClick}>Undo</button>
            {info && <form onSubmit={handleSubmit} className="flex flex-col gap-2 text-xl my-2 w-full max-w-[800px]">
                <input className="p-3" onChange={(e) => handleNameChange(e)} type="text" placeholder="name" />
                <select onChange={(e) => handleGradeChange(e)} className="overflow-y-auto p-3">
                    <option>
                        4
                    </option>
                    <option>
                        5
                    </option>
                    <option>
                        6A
                    </option>
                    <option>
                        6A+
                    </option>
                    <option>
                        6B
                    </option>
                    <option>
                        6B+
                    </option>
                    <option>
                        6C
                    </option>
                    <option>
                        6C+
                    </option>
                    <option>
                        7A
                    </option>
                    <option>
                        7A+
                    </option>
                    <option>
                        7B
                    </option>
                    <option>
                        7B+
                    </option>
                    <option>
                        7C
                    </option>
                    <option>
                        7C+
                    </option>
                    <option>
                        8A
                    </option>
                    <option>
                        8A+
                    </option>
                    <option>
                        8B
                    </option>
                    <option>
                        8B+
                    </option>
                </select>
                <input className="p-3" onChange={(e) => handleDescriptionChange(e)} type="text" placeholder="description" />
                {info?.images.length > 1 && <select className="p-3" onChange={(e) => handleImageChange(e)}>
                    {info?.images.map((image, i) => {
                        return <option key={i}>
                            {i + 1}
                        </option>
                    })}
                </select>}
                <button type="submit">Submit</button>
            </form>}
        </main>
    )
}