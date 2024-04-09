import { useState } from "react"

export default function Navbar() {

    const [nav, setNav] = useState(false)

    return (
        <>
            <nav className="h-fit flex flex-row justify-end">
                <ul className="p-2">
                    <li onClick={() => setNav(true)} className="w-8">
                        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="m16 132h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16h-416c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16h-416c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16h-416c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" /></svg>
                    </li>
                </ul>
            </nav>
            {nav && <div className="absolute w-full h-dvh bg-red-500 z-10 flex flex-col">
                <div className="flex w-full p-2 justify-end">
                    <p onClick={() => setNav(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8">
                            <polygon fill="var(--ci-primary-color, currentColor)" points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313" />
                        </svg>
                    </p>
                </div>
                <div className="text-center">
                    <h2 className="">Sectors</h2>
                    <ul>
                        <li>
                            Test
                        </li>
                    </ul>
                </div>
            </div>}
        </>
    )
}