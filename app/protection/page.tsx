"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BackgroundVideo } from "@/components/background-video";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Zap,
  Eye,
  Lock,
  Wifi,
  HardDrive,
  CheckCircle,
} from "lucide-react";
import { EthiopianFlag } from "@/components/ethiopian-cultural-elements";

export default function ProtectionPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fullscreen Background Video */}
      <div className="fixed inset-0 -z-10">
        <BackgroundVideo darkMode />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <EthiopianFlag className="h-3 w-4 mr-2" />
                Advanced Protection Suite
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                Complete Digital Protection
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Comprehensive security solutions designed to protect Ethiopian
                businesses and individuals from all digital threats.
              </p>
            </div>
          </div>
        </section>

        {/* Protection Features */}
        <section className="py-30 px-20 bg-muted/30 backdrop-blur-sm">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Real-time Antivirus",
                  description:
                    "Advanced threat detection with AI-powered scanning",
                  features: [
                    "Malware Detection",
                    "Virus Removal",
                    "Quarantine System",
                  ],
                },
                {
                  icon: Lock,
                  title: "Firewall Protection",
                  description: "Network security and intrusion prevention",
                  features: [
                    "Network Monitoring",
                    "Port Protection",
                    "Traffic Analysis",
                  ],
                },
                {
                  icon: Eye,
                  title: "Privacy Guard",
                  description: "Protect your personal data and online privacy",
                  features: [
                    "Data Encryption",
                    "Privacy Scanning",
                    "Secure Browsing",
                  ],
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="hover-lift hover-glow transition-all duration-300"
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
