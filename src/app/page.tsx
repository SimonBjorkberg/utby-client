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
        {show === "" && <div className='flex flex-col gap-10'>
          <h1 onClick={() => handleClick("sektorer")} className={`text-3xl py-4`}>Sektorer</h1>
          <h1 onClick={() => handleClick("karta")} className={`text-3xl py-4`}>Karta</h1>
        </div>}
        {show === "karta" && <div className={`w-full ${show === "karta" ? "h-dvh absolute" : ""}`}>
          <div onClick={() => handleClick("karta")} className={`text-3xl h-[70px] py-4`}><p className='absolute left-[calc(50%-40px)]'>Karta</p><svg className='w-10 rotate-180' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="white" stroke="white" opacity="0" transform="matrix(0 -1 1 0 0 24)" /><path d="m10 19a1 1 0 0 1 -.64-.23 1 1 0 0 1 -.13-1.41l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a1 1 0 0 1 -.83.36z" fill="white" /></svg></div>
          {show === "karta" && <Map />}
        </div>}
        {show === "sektorer" && <div className={`w-full ${show === "sektorer" ? "h-dvh absolute overflow-y-auto" : ""}`}>
          <div onClick={() => handleClick("sektorer")} className={`text-3xl h-[70px] py-4 fixed top-0 bg-orange-500 w-full flex z-10`}><p className='absolute left-[calc(50%-63px)]'>Sektorer</p><svg className='w-10 rotate-180' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="white" stroke="white" opacity="0" transform="matrix(0 -1 1 0 0 24)" /><path d="m10 19a1 1 0 0 1 -.64-.23 1 1 0 0 1 -.13-1.41l4.48-5.36-4.32-5.37a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6a1 1 0 0 1 -.83.36z" fill="white" /></svg></div>
          {show === "sektorer" && <Sectors />}
        </div>}
      </div>
    </main>
  );
}
