export function EthiopianPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-5 ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Traditional Ethiopian Cross Pattern */}
          <pattern id="ethiopian-cross" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="none" />
            {/* Ethiopian Orthodox Cross */}
            <g transform="translate(40,40)">
              <path
                d="M0,-20 L0,-10 L-10,-10 L-10,0 L-20,0 L-20,10 L-10,10 L-10,20 L0,20 L0,10 L10,10 L10,20 L20,20 L20,10 L20,0 L10,0 L10,-10 L0,-10 Z"
                fill="currentColor"
                opacity="0.3"
              />
              <circle cx="0" cy="0" r="3" fill="currentColor" opacity="0.5" />
            </g>
          </pattern>

          {/* Traditional Weaving Pattern */}
          <pattern id="ethiopian-weave" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="60" height="60" fill="none" />
            <g stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4">
              <path d="M0,0 L60,60 M0,60 L60,0" />
              <path d="M30,0 L30,60 M0,30 L60,30" />
              <circle cx="15" cy="15" r="2" fill="currentColor" opacity="0.6" />
              <circle cx="45" cy="15" r="2" fill="currentColor" opacity="0.6" />
              <circle cx="15" cy="45" r="2" fill="currentColor" opacity="0.6" />
              <circle cx="45" cy="45" r="2" fill="currentColor" opacity="0.6" />
            </g>
          </pattern>

          {/* Aksumite Geometric Pattern */}
          <pattern id="aksumite-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="none" />
            <g transform="translate(50,50)" opacity="0.3">
              <polygon
                points="0,-25 15,-15 25,0 15,15 0,25 -15,15 -25,0 -15,-15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <polygon points="0,-15 10,-8 15,0 10,8 0,15 -10,8 -15,0 -10,-8" fill="currentColor" opacity="0.4" />
              <circle cx="0" cy="0" r="3" fill="currentColor" opacity="0.8" />
            </g>
          </pattern>

          {/* Traditional Textile Pattern */}
          <pattern id="textile-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" />
            <g opacity="0.4">
              <path d="M20,5 L35,20 L20,35 L5,20 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <path d="M20,10 L30,20 L20,30 L10,20 Z" fill="currentColor" opacity="0.3" />
              <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.7" />
            </g>
          </pattern>

          {/* Combined Pattern */}
          <pattern id="ethiopian-combined" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <rect width="200" height="200" fill="url(#ethiopian-cross)" opacity="0.3" />
            <rect width="200" height="200" fill="url(#ethiopian-weave)" opacity="0.2" />
            <rect width="200" height="200" fill="url(#aksumite-pattern)" opacity="0.25" />
            <rect width="200" height="200" fill="url(#textile-pattern)" opacity="0.2" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#ethiopian-combined)" />
      </svg>
    </div>
  )
}
