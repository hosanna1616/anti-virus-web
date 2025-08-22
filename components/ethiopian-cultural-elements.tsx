import type React from "react"
export function EthiopianFlag({ className = "h-6 w-8" }: { className?: string }) {
  return (
    <div className={`relative ${className} rounded-sm overflow-hidden shadow-sm`}>
      <div className="h-1/3 bg-[#009639]" />
      <div className="h-1/3 bg-[#FEDD00]" />
      <div className="h-1/3 bg-[#E03C31]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-[#FEDD00] flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#009639]">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export function EthiopianBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-primary via-secondary to-accent rounded-lg p-0.5">
        <div className="h-full w-full bg-background rounded-md" />
      </div>
      <div className="relative z-10 p-4">{children}</div>
    </div>
  )
}

export function EthiopianDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-16" />
        <div className="w-2 h-2 rounded-full bg-primary" />
        <div className="w-3 h-3 rounded-full bg-secondary" />
        <div className="w-2 h-2 rounded-full bg-accent" />
        <div className="h-px bg-gradient-to-r from-accent via-secondary to-transparent w-16" />
      </div>
    </div>
  )
}

export function EthiopianQuote({ children, author }: { children: React.ReactNode; author?: string }) {
  return (
    <div className="relative p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-lg border border-primary/20">
      <div className="absolute top-2 left-2 text-4xl text-primary/30 font-serif">"</div>
      <div className="relative z-10">
        <p className="text-lg italic text-foreground/90 mb-2">{children}</p>
        {author && <p className="text-sm text-muted-foreground">— {author}</p>}
      </div>
      <div className="absolute bottom-2 right-2 text-4xl text-accent/30 font-serif rotate-180">"</div>
    </div>
  )
}
