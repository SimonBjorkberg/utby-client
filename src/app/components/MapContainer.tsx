import Map from "../../../public/js"

interface Props {
    show: any,
    setShow: any,
}

export default function MapContainer({ show, setShow }: Props) {

    const handleClick = (string: string) => {
        if (show === string) {
            setShow("")
        }
        else {
            setShow(string)
        }
    }

    if (show === "karta") {
        <div className={`w-full bg-red-500 ${show === "karta" ? "h-dvh" : ""}`}>
            <h1 onClick={() => handleClick("karta")} className={`text-3xl py-4 transition-all duration-1000`}>Karta</h1>
            {show === "karta" && <Map />}
        </div>
    }

    return (
        <>
            {show === "" && <div className={`w-full bg-red-500 ${show === "karta" ? "h-dvh" : ""}`}>
                <h1 onClick={() => handleClick("karta")} className={`text-3xl py-4 transition-all duration-1000`}>Karta</h1>
                {show === "karta" && <Map />}
            </div>}
        </>
    )
}