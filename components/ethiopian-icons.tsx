export function EthiopianShield({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      <path d="M12 7l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-4z" fill="white" />
    </svg>
  )
}

export function EthiopianCross({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2v8h8v4h-8v8h-4v-8H0v-4h8V2h4z" />
      <circle cx="12" cy="12" r="2" fill="white" />
    </svg>
  )
}

export function EthiopianStar({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      <path d="M12 6l1.5 3L17 9.5l-2.5 2.5L15 16l-3-1.5L9 16l.5-4L7 9.5l3.5-.5L12 6z" fill="white" />
    </svg>
  )
}
