'use client'
import { useEffect, useRef, useState } from "react";

interface Point {
    x: number,
    y: number
}

export default function Test() {
    const [clickPoints, setClickPoints] = useState<Point[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const backgroundImage = new Image();
        backgroundImage.src =
            'https://res.cloudinary.com/dij3kpsfn/image/upload/v1713277003/utby/new/k%C3%B6ksv%C3%A4ggen_hln106.jpg';

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
        };
    }, [clickPoints]);

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

    console.log(clickPoints)

    const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setClickPoints((prevPoints) => [...prevPoints, { x, y }]);
    };

    return (
        <main className="h-dvh w-full flex flex-col items-center">
            <canvas
                ref={canvasRef}
                width={800}
                height={600}
                onClick={handleCanvasClick}
            />
            <button onClick={handleUndoClick}>Undo</button>
        </main>
    );
}