"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Shield } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Protection", href: "/protection" },
  { name: "Settings", href: "/settings" },
  { name: "Support", href: "/support" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-slide-down">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 lg:px-6">
        <Link href="/" className="flex items-center space-x-2 hover-scale">
          <div className="relative">
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary animate-logo-rotate" />
            <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-accent animate-pulse" />
          </div>
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            EthioShield
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 hover-lift animate-fade-in-left animation-delay-${(index + 1) * 100}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="hover-scale text-xs sm:text-sm px-2 sm:px-3" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          {/* <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 hover-glow animate-glow-pulse text-xs sm:text-sm px-2 sm:px-4"
          >
            <span className="hidden sm:inline">Get Protected</span>
            <span className="sm:hidden">Protect</span>
          </Button> */}
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="sm" className="hover-rotate p-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 sm:w-80 animate-slide-down">
            <div className="flex flex-col space-y-6 mt-8">
              <div className="space-y-2 stagger-children">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 p-3 rounded-lg hover:bg-muted hover-lift"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-6 border-t space-y-3">
                <div className="flex items-center justify-between p-3">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeToggle />
                </div>
                <Button variant="ghost" className="w-full justify-start text-base p-3 h-auto" asChild>
                  <Link href="/signin" onClick={() => setIsOpen(false)}>
                    Sign In to Account
                  </Link>
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90 hover-glow text-base p-3 h-auto">
                  Get Protected Now
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
