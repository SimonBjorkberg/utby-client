'use client'

import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function CreateSector() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [image, setImage] = useState(undefined)

    const router = useRouter()

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        if (image) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    // Calculate scaling factors
                    const scaleX = canvas.width / img.width;
                    const scaleY = canvas.height / img.height;
                    const scale = Math.min(scaleX, scaleY);

                    // Calculate new dimensions
                    const newWidth = img.width * scale;
                    const newHeight = img.height * scale;

                    // Calculate position to center the image
                    const x = (canvas.width - newWidth) / 2;
                    const y = (canvas.height - newHeight) / 2;

                    // Clear the canvas
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    // Draw the image with the scaled dimensions
                    ctx.drawImage(img, x, y, newWidth, newHeight);
                };
                img.src = e.target?.result as string;
            };
            reader.readAsDataURL(image);
        }
    }, [image]);

    const handleImageChange = (e: any) => {
        const files = e.target.files
        if (files && files.length > 0) {
            setImage(files[0])
        }
    }

    return <main className="roboto-regular bg-white h-dvh">
        <nav className={`text-3xl h-[70px] flex justify-center relative py-4 w-full bg-orange-500 text-white`}>
            <p className=''>Create Sector</p>
            <svg onClick={() => router.push('/map')} className='w-10 rotate-180 absolute left-0' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 0h24v24h-24z" fill="white" stroke="white" opacity="0" transform="matrix(0 -1 1 0 0 24)" />
                <path d="m10 19a1 1 0 0 1 -.64-.23 1 1 0 0 1 -.13-1.41l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a1 1 0 0 1 -.83.36z" fill="white" />
            </svg>
        </nav>
        <div>
            <div className="w-full h-full max-w-[800px] max-h-[600px] overflow-hidden bg-neutral-900">
                <canvas ref={canvasRef} className="w-full max-w-[800px] max-h-[600px] h-full border-b border-black" width={800} height={600} />
            </div>
            <div className="flex flex-col items-center my-2 mx-2">
                <input onChange={handleImageChange} type="file" className="border p-1 w-full" />
            </div>
        </div>
    </main>
} 