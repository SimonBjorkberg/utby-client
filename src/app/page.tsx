'use client'

import GoogleMaps from "./components/GoogleMaps";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="h-dvh flex flex-col">
      <Navbar />
      <div className="w-full h-full">
        <GoogleMaps />
      </div>
    </main>
  );
}
