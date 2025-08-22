
"use client";


import { useEffect, useState } from "react";

// Define the props interface for type safety
interface AnimatedCounterProps {
  end: number; // The final number to count up to
  duration?: number; // Optional: animation duration in milliseconds (default 2000ms)
  prefix?: string; // Optional: text to show before the number
  suffix?: string; // Optional: text to show after the number
  className?: string; // Optional: CSS classes for styling
}

// Export the AnimatedCounter component with destructured props
export function AnimatedCounter({
  end, // Extract 'end' from props
  duration = 2000, // Default duration to 2000ms if not provided
  prefix = "", // Default prefix to empty string
  suffix = "", // Default suffix to empty string
  className = "", // Default className to empty string
}: AnimatedCounterProps) {
  // State to track the current count value during animation
  const [count, setCount] = useState(0);

  // useEffect hook to handle the animation when component mounts or dependencies change
  useEffect(() => {
    // Variables to track animation state
    let startTime: number; // Timestamp when animation started
    let animationFrame: number; // ID for the animation frame (for cleanup)

    // Animation function that runs on each frame
    const animate = (currentTime: number) => {
      // Initialize startTime on first frame
      if (!startTime) startTime = currentTime;

      // Calculate progress (0 to 1) based on elapsed time and total duration
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation (starts fast, slows down at end)
      // easeOutQuart formula: 1 - (1 - progress)^4
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      // Calculate and set the current count based on eased progress
      setCount(Math.floor(easeOutQuart * end));

      // Continue animation if not yet complete
      if (progress < 1) {
        // Request next animation frame and store the ID
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Start the animation by requesting the first frame
    animationFrame = requestAnimationFrame(animate);

    // Cleanup function to cancel animation when component unmounts or dependencies change
    return () => {
      if (animationFrame) {
        // Cancel any pending animation frame to prevent memory leaks
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]); // Dependencies: re-run effect if end or duration changes

  // Render the counter with prefix, formatted number, and suffix
  return (
    <span className={className}>
      {prefix}
      {count.toLocaleString()} {/* Format number with thousands separators */}
      {suffix}
    </span>
  );
}
