'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [show, setShow] = useState("")
  const router = useRouter()

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
        <div className='flex flex-col gap-10'>
          <h1 onClick={() => handleClick("sektorer")} className={`text-3xl py-4`}>Sektorer</h1>
          <h1 onClick={() => router.push('/map')} className={`text-3xl py-4`}>Karta</h1>
        </div>
      </div>
    </main>
  );
}
