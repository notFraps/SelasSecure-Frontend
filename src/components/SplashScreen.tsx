"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade out after 2 seconds
    const timer = setTimeout(() => setFadeOut(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <Image
        src="/logo.jpg" // replace with your logo path
        alt="Project Logo"
        width={200}
        height={200}
        className="logo"
        loading="eager"
      />
    </div>
  );
}
