"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./theme-provider";

interface BackgroundVideoProps {
  className?: string;
}

export function BackgroundVideo({ className = "" }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { theme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Video autoplay failed");
      });
    }
  }, []);

  const videoSrc = isDark ? "/security-dark.webm" : "/security-dark.webm";

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/cybersecurity-shield.png"
      >
        <source src={videoSrc} type="video/webm" />
      </video>

      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-br from-black/70 via-blue-900/40 to-primary/20"
            : "bg-gradient-to-br from-black/70 via-blue-900/40 to-primary/20"
        }`}
      />

      {/* Ethiopian pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-repeat"
          // style={{
          //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${
          //     isDark ? "ffffff" : "000000"
          //   }' fillOpacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0L0 15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          //   backgroundSize: "60px 60px",
          // }}
        />
      </div>
    </div>
  );
}
