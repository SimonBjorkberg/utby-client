interface Props {
    boulder: {
        _id: string,
        path: string,
    }
    setSelectedPath: any,
    selectedPath: any,
}

export default function Path({ boulder, setSelectedPath, selectedPath }: Props) {
    return (
        <>
            <path onClick={() => setSelectedPath(boulder._id)} className={`${selectedPath === boulder._id ? "stroke-red-500 opacity-100 z-10 stroke-[4] lg:stroke-[2.5]" : "opacity-70 stroke-neutral-800 hover:cursor-pointer z-0 stroke-2"}`} fill="none" stroke="red" d={boulder.path} />
        </>
    )
}