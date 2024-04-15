'use client'
import { useState } from 'react';
import Map from '../../public/js/index'
import Sectors from './components/Sectors';

export default function Home() {
  const [show, setShow] = useState("")

  const handleClick = (string: string) => {
    if (show === string) {
      setShow("")
    }
    else {
      setShow(string)
    }
  }

  return (
    <main className="h-dvh flex flex-col bg-orange-500">
      <div className='h-full w-full text-white font-bold flex flex-col text-center justify-center gap-5'>
        {show === "" && <div>
          <h1 onClick={() => handleClick("karta")} className={`text-3xl py-4`}>Karta</h1>
          <h1 onClick={() => handleClick("sektorer")} className={`text-3xl py-4`}>Sektorer</h1>
        </div>}
        {show === "karta" && <div className={`w-full  ${show === "karta" ? "h-dvh absolute" : ""}`}>
          <h1 onClick={() => handleClick("karta")} className={`text-3xl py-4`}>Karta</h1>
          {show === "karta" && <Map />}
        </div>}
        {show === "sektorer" && <div className={`w-full  ${show === "sektorer" ? "h-dvh absolute overflow-y-auto" : ""}`}>
          <h1 onClick={() => handleClick("sektorer")} className={`text-3xl py-4 fixed top-0 bg-orange-500 w-full z-10`}>Sektorer</h1>
          {show === "sektorer" && <Sectors />}
        </div>}
      </div>
    </main>
  );
}
