import { Navigation } from "@/components/navigation";

import { Footer } from "@/components/footer";
import { EthiopianPattern } from "@/components/ethiopian-pattern";
import {
  EthiopianFlag,
  EthiopianDivider,
  EthiopianQuote,
} from "@/components/ethiopian-cultural-elements";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Zap,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import BackgroundVideo from "@/components/VideoBackground";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* <Navigation /> */}
      {/* <BackgroundVideo /> */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <Badge
              variant="secondary"
              className="mb-4 animate-bounce-in hover-glow inline-flex items-center space-x-2 px-3 py-1.5 text-xs sm:text-sm bg-white/10 backdrop-blur-sm border-white/20"
            >
              <EthiopianFlag className="h-3 w-4 sm:h-4 sm:w-6" />
              <span className="hidden xs:inline text-white">
                Proudly Ethiopian • Advanced Protection
              </span>
              <span className="xs:hidden text-white">
                Ethiopian • Advanced Protection
              </span>
            </Badge>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up animation-delay-200">
              <span className="bg-gradient-to-r from-white via-yellow-300 to-green-400 bg-clip-text text-transparent animate-shimmer">
                EthioShield
              </span>
              <br />

              <span className="text-gradient-to-r from-primary via-secondary to-accent">
                Advanced Antivirus
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 px-4 sm:px-0">
              Protect your digital world with cutting-edge security technology,
              crafted with Ethiopian excellence and global standards.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up animation-delay-600 px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 hover-lift hover-glow w-full xs:w-auto"
                asChild
              >
                {/* <Link href="/dashboard">
                  Get Protected Now
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link> */}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 hover-scale bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 w-full xs:w-auto"
                asChild
              >
                {/* <Link href="/signin">Sign In</Link> */}
              </Button>
            </div>

            <div className="flex flex-col xs:flex-row items-center justify-center space-y-2 xs:space-y-0 xs:space-x-4 sm:space-x-8 text-xs sm:text-sm text-white/80 stagger-children px-4 sm:px-0">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 animate-float" />
                <span>Real-time Protection</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 animate-float animation-delay-200" />
                <span>Zero-day Defense</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 animate-float animation-delay-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with number in green and red */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center text-white">
            <ScrollReveal animation="scale-in" delay={100}>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  <AnimatedCounter end={50000} suffix="+" />
                </div>
                <p className="text-white/90 text-xs sm:text-sm">
                  Protected Users
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale-in" delay={200}>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  <AnimatedCounter end={1247} />
                </div>
                <p className="text-white/90 text-xs sm:text-sm">
                  Threats Blocked
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale-in" delay={300}>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  <AnimatedCounter end={99} suffix="%" />
                </div>
                <p className="text-white/90 text-xs sm:text-sm">
                  Detection Rate
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale-in" delay={400}>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  <AnimatedCounter end={24} suffix="/7" />
                </div>
                <p className="text-white/90 text-xs sm:text-sm">
                  Support Available
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12 sm:mb-16">
            {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Why Choose EthioShield?
            </h2> */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Advanced protection meets Ethiopian innovation
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 stagger-children">
            <Card className="relative overflow-hidden group hover-lift hover-glow transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors animate-float">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">
                  Real-time Protection
                </CardTitle>
                <CardDescription className="text-sm">
                  Advanced threat detection powered by AI and machine learning
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden group hover-lift hover-glow transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-secondary/20 transition-colors animate-float animation-delay-200">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <CardTitle className="text-base sm:text-lg">
                  Lightning Fast
                </CardTitle>
                <CardDescription className="text-sm">
                  Optimized performance that doesn't slow down your system
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden group hover-lift hover-glow transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent/20 transition-colors animate-float animation-delay-400">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <CardTitle className="text-base sm:text-lg">
                  Global Coverage
                </CardTitle>
                <CardDescription className="text-sm">
                  Worldwide threat intelligence with local Ethiopian support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden group hover-lift hover-glow transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors animate-float animation-delay-600">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">
                  Expert Support
                </CardTitle>
                <CardDescription className="text-sm">
                  24/7 support from Ethiopian cybersecurity experts
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Ethiopian Heritage Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12 sm:mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 space-y-2 sm:space-y-0 sm:space-x-4">
              <EthiopianFlag className="h-6 w-8 sm:h-8 sm:w-12" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Ethiopian Digital Heritage
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Combining ancient wisdom with modern technology to protect
              Ethiopia's digital future
            </p>
          </ScrollReveal>

          <EthiopianDivider className="mb-8 sm:mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <EthiopianQuote author="Ethiopian Proverb">
                When spider webs unite, they can tie up a lion. Together, we
                build stronger digital defenses.
              </EthiopianQuote>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                      Local Expertise
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Built by Ethiopian cybersecurity experts who understand
                      local threats and challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                      Cultural Values
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Respecting Ethiopian values of community, trust, and
                      collective security in the digital age.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                      Community Support
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      24/7 support in Amharic, Oromo, Tigrinya, and English from
                      our Ethiopian team.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* <ScrollReveal>
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
          <EthiopianPattern className="text-white/10 animate-rotate-slow" />
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up">
              Ready to Secure Your Digital Life?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 px-4 sm:px-0">
              Join thousands of Ethiopians who trust EthioShield for their
              cybersecurity needs
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 hover-lift animate-fade-in-up animation-delay-400"
              asChild
            >
              <Link href="/signin">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-white/80 text-xs sm:text-sm animate-fade-in-up animation-delay-600">
              <div className="flex items-center space-x-2">
                <EthiopianFlag className="h-3 w-4 sm:h-4 sm:w-6" />
                <span>ኢትዮጵያን ዲጂታል ወደፊት ማስጠበቅ</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>Securing Ethiopia's Digital Future</span>
            </div>
          </div>
        </section>
      </ScrollReveal> */}

      {/* <Footer /> */}
    </div>
  );
}
