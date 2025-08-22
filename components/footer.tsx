"use client";

import Link from "next/link";
import {
  Shield,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { EthiopianFlag } from "@/components/ethiopian-cultural-elements";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Brand Section */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                EthioShield
              </span>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Advanced cybersecurity protection crafted with Ethiopian
              excellence. Securing Ethiopia's digital future with cutting-edge
              technology.
            </p>
            <div className="flex items-center space-x-2">
              <EthiopianFlag className="h-3 w-5" />
              <span className="text-xs text-muted-foreground">
                Proudly Ethiopian
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-1">
              {[
                { name: "Home", href: "/" },
                { name: "Dashboard", href: "/dashboard" },
                { name: "Protection", href: "/protection" },
                { name: "Settings", href: "/settings" },
                { name: "Support", href: "/support" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs text-muted-foreground">
                  support@ethioshield.com
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs text-muted-foreground">
                  +251 964672947
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs text-muted-foreground">
                  Addis Ababa, Ethiopia
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Follow Us</h3>
            <div className="flex space-x-3">
              {[
                {
                  icon: Facebook,
                  href: "https://facebook.com/ethioshield",
                  label: "Facebook",
                },
                {
                  icon: Twitter,
                  href: "https://twitter.com/ethioshield",
                  label: "Twitter",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/ethioshield",
                  label: "Instagram",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/company/ethioshield",
                  label: "LinkedIn",
                },
                {
                  icon: Youtube,
                  href: "https://youtube.com/@ethioshield",
                  label: "YouTube",
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md bg-muted hover:bg-primary hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Stay updated with the latest security news and Ethiopian tech
              innovations.
            </p>
            <div className="border-t mt-6 pt-4 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-xs text-muted-foreground">
                © 2025 EthioShield. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
