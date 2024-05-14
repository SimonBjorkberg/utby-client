import useEmblaCarousel from 'embla-carousel-react';
import CanvasComponent from './CanvasCompontent';

export default function Carousel({ images }: any) {
    const [emblaRef] = useEmblaCarousel()


    return (
        <div className="overflow-hidden bg-neutral-900 w-full max-w-[800px] max-h-[330px] h-full" ref={emblaRef}>
            {images.length === 0 && <div className=" overflow-hidden bg-neutral-900">
                <canvas className="border-b border-black" width={800} height={600} />
            </div>}
            <div className='flex max-h-[330px] h-full'>
                {images.map((image: any, i: number) => {
                    return <CanvasComponent key={i} image={image} />
                })}
            </div>
        </div>
    )
}