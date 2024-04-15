'use client'
import Map from '../../public/js/index'
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="h-dvh flex flex-col">
      <Navbar />
      <Map />
    </main>
  );
}
