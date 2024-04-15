interface Props {
    boulder: {
        id: string,
        path: string,
    }
    setSelectedPath: any,
    selectedPath: any
}

export default function Path({ boulder, setSelectedPath, selectedPath }: Props) {
    return (
        <>
            <path onClick={() => setSelectedPath(boulder.id)} className={`${selectedPath === boulder.id ? "stroke-red-500 opacity-100" : "opacity-70 stroke-neutral-800 hover:cursor-pointer"}`} strokeWidth={2} fill="none" stroke="red" d={boulder.path} />
        </>
    )
}