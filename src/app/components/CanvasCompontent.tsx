import { useEffect, useRef } from "react";

export default function CanvasComponent({ image }: any) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const maxWidth = 800;
        const maxHeight = 600;

        const width = image.width;
        const height = image.height;

        if (image) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const scaleX = canvas.width / img.width;
                    const scaleY = canvas.height / img.height;
                    const scale = Math.min(scaleX, scaleY);

                    const newWidth = img.width * scale;
                    const newHeight = img.height * scale;

                    const x = (canvas.width - newWidth) / 2;
                    const y = (canvas.height - newHeight) / 2;

                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    ctx.drawImage(img, x, y, newWidth, newHeight);
                };
                img.src = e.target?.result as string;
            };
            reader.readAsDataURL(image);
        }
    }, [image]);

    return (
    
            <div className="flex-none w-full max-w-[800px] max-h-[330px] h-full">
                <canvas ref={canvasRef} className="w-full block border-b border-black max-h-[330px] h-full" width={800} height={600} />
            </div>
       
    )
}