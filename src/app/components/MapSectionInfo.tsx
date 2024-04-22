import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
    show: any,
    selSection: {
        images: string[],
        name: string,
        boulders: {}[],
        _id: string,
    }
}

export default function MapSectionInfo({ show, selSection }: Props) {

    const router = useRouter()

    return (
        <div className={`transition-all duration-300 w-full min-h-[140px] max-h-[140px] flex text-white bg-white ${show ? "h-[140px]" : "h-0"}`}>
            <div className="max-h-40 text-black">
                <Image className="max-w-40 w-40 h-full object-scale-down bg-neutral-900" width={160} height={160} src={selSection.images[0]} alt="" />
            </div>
            <div className="w-full p-2 h-full bg-white text-black">
                <p className="">{selSection.name}</p>
                <p className="font-extralight text-sm">Antal Problem: {selSection.boulders.length}</p>
            </div>
            <button className="flex items-end p-5">
                <svg onClick={() => router.push(`/sector?id=${selSection._id}`)} className='w-10 bg-orange-500 rounded-full' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m0 0h24v24h-24z" fill="white" stroke="white" opacity="0" transform="matrix(0 -1 1 0 0 24)" />
                    <path d="m10 19a1 1 0 0 1 -.64-.23 1 1 0 0 1 -.13-1.41l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a1 1 0 0 1 -.83.36z" fill="white" />
                </svg>
            </button>
        </div>
    )
}