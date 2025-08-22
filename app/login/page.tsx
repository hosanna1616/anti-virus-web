"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { EthiopianPattern } from "@/components/ethiopian-pattern"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Eye, EyeOff, ArrowLeft, Mail, Lock, AlertCircle } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate authentication
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (formData.email === "admin@ethioshield.com" && formData.password === "password123") {
        router.push("/dashboard")
      } else {
        setError("Invalid email or password. Try admin@ethioshield.com / password123")
      }
    } catch (err) {
      setError("An error occurred during login")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-3 sm:p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <EthiopianPattern className="text-primary/5" />

      {/* Back to Home */}
      <Link
        href="/"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors z-10 text-sm sm:text-base"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="hidden xs:inline">Back to Home</span>
        <span className="xs:hidden">Back</span>
      </Link>

      {/* Login Card */}
      <Card className="w-full max-w-sm sm:max-w-md relative z-10 shadow-2xl border-0 bg-card/95 backdrop-blur mx-4 sm:mx-0">
        <CardHeader className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-accent animate-pulse" />
            </div>
          </div>

          <div>
            <CardTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-sm sm:text-base mt-2">Sign in to your EthioShield account</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Error Alert */}
            {error && (
              <Alert variant="destructive" className="animate-fade-in-up">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-sm">{error}</AlertDescription>
              </Alert>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@ethioshield.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10 h-11 sm:h-12 border-border/50 focus:border-primary transition-colors text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="pl-10 pr-10 h-11 sm:h-12 border-border/50 focus:border-primary transition-colors text-sm sm:text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between space-y-2 xs:space-y-0">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                />
                <Label htmlFor="remember" className="text-sm text-muted-foreground">
                  Remember me
                </Label>
              </div>
              <Link href="/forgot-password" className="text-sm text-primary hover:text-primary/80 transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-11 sm:h-12 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-white font-medium text-sm sm:text-base"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </Button>

            {/* Demo Credentials */}
            <div className="p-3 sm:p-4 bg-muted/50 rounded-lg border border-border/50">
              <p className="text-sm text-muted-foreground text-center mb-2">Demo Credentials:</p>
              <div className="text-xs sm:text-sm text-center space-y-1">
                <p>
                  <strong>Email:</strong> admin@ethioshield.com
                </p>
                <p>
                  <strong>Password:</strong> password123
                </p>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/signup" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Ethiopian Cultural Element */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-right text-xs text-muted-foreground/60 z-10">
        <p className="flex items-center space-x-1">
          <span>🇪🇹</span>
          <span className="hidden xs:inline">Securing Ethiopia's Digital Future</span>
          <span className="xs:hidden">Ethiopian Security</span>
        </p>
        <p className="mt-1 hidden sm:block">ኢትዮጵያን ዲጂታል ወደፊት ማስጠበቅ</p>
      </div>
    </div>
  )
}
