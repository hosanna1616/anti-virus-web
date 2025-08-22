"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./theme-provider";

interface BackgroundVideoProps {
  className?: string;
}

export function BackgroundVideo({ className = "" }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { theme } = useTheme();

  // Default to dark theme for server-side rendering
  const isDark =
    typeof window === "undefined"
      ? true
      : theme === "dark" ||
        (theme === "system" &&
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
        <div className="w-full h-full bg-repeat" />
      </div>
    </div>
  );
}
