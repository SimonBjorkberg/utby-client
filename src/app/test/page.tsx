'use client'
import { useEffect, useRef, useState } from "react";

export default function Test() {

    function calculateControlPoints(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        const dx1 = x1 - x0;
        const dy1 = y1 - y0;
        const dx3 = x3 - x2;
        const dy3 = y3 - y2;
        const c1x = x1 + dx1 / 1;
        const c1y = y1 + dy1 / 1;
        const c2x = x2 - dx3 / 1;
        const c2y = y2 - dy3 / 1;

        return { c1x, c1y, c2x, c2y };
    }

    const [coordinates, setCoordinates] = useState<any>([]);
    const [coordinateString, setCoordinateString] = useState("")
    const svgRef = useRef<SVGSVGElement>(null);

    const handleCanvasClick = (event: any) => {
        const svgCanvas = svgRef.current!;
        if (!svgCanvas) return

        const pt = svgCanvas.createSVGPoint();
        pt.x = event.clientX;
        pt.y = event.clientY;
        const cursorPoint = pt.matrixTransform(svgCanvas.getScreenCTM()?.inverse());

        if (coordinates.length === 4) {
            setCoordinates([]);
            setCoordinateString("");
        } else {
            const newCoordinates = [...coordinates, { x: cursorPoint.x, y: cursorPoint.y }];
            setCoordinates((prevCoordinates: any) => [...prevCoordinates, { x: cursorPoint.x, y: cursorPoint.y }]);
            const newCoordinateString = newCoordinates.map(coord => `${coord.x},${coord.y}`).join(' ');
            setCoordinateString(newCoordinateString);
        }
    };

    useEffect(() => {
        if (coordinates.length === 4) {
            const { c1x, c1y, c2x, c2y } = calculateControlPoints(
                coordinates[0].x, coordinates[0].y,
                coordinates[1].x, coordinates[1].y,
                coordinates[2].x, coordinates[2].y,
                coordinates[3].x, coordinates[3].y
            );

            const pathString = `M${coordinates[0].x},${coordinates[0].y} C${c1x},${c1y},${c2x},${c2y},${coordinates[3].x},${coordinates[3].y}`;
            setCoordinateString(pathString);
        }
    }, [coordinates]);

    console.log(coordinateString)



    return (
        <main className="h-dvh w-full flex flex-col items-center">
            <div className="w-full relative">
                <h1>Interactive SVG Path Creator</h1>
                <p>Click on the SVG canvas to start creating a path. Click three more times to complete the path.</p>
                <div className="bg-white">
                    <svg className="w-full object-cover max-w-[600px] mx-auto" ref={svgRef} id="svgCanvas" viewBox="0 0 800 600" onClick={(e) => handleCanvasClick(e)}>
                        <image href="https://res.cloudinary.com/dij3kpsfn/image/upload/v1713744099/mpfc2_vbopfo.png" />
                        {coordinates && <path strokeWidth={4} d={coordinateString} stroke="red" fill="none" />}
                    </svg>
                </div>
            </div>
        </main>
    );
}

/* <path d={`M ${coordinates[0].x},${coordinates[0].y} C ${coordinates[1].x},${coordinates[1].y} ${coordinates[2].x},${coordinates[2].y} ${coordinates[3].x},${coordinates[3].y}`} stroke="black" fill="none" /> */