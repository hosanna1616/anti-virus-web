"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Phone, Mail, Users, HelpCircle } from "lucide-react"
import { EthiopianFlag } from "@/components/ethiopian-cultural-elements"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background ">
      <Navigation />

      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-8 w-8 text-primary" />
              <EthiopianFlag className="h-4 w-6" />
            </div>
            <h1 className="text-3xl font-bold">Support Center</h1>
            <p className="text-muted-foreground">We're here to help you 24/7</p>
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-90">
            {/* Contact Methods */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Phone Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Speak directly with our Ethiopian support team</p>
                  <p className="font-semibold">+251 11 123 4567</p>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>Email Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Send us a detailed message</p>
                  <p className="font-semibold">support@ethioshield.com</p>
                  <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Live Chat</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Chat with our support agents</p>
                  <Button className="w-full">Start Chat</Button>
                </CardContent>
              </Card>
            </div>

            {/* Support Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Issue Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief description of your issue" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Please describe your issue in detail..." rows={6} />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "How do I install EthioShield?",
                  answer:
                    "Download the installer from our website and follow the setup wizard. The installation process takes about 5 minutes.",
                },
                {
                  question: "Is EthioShield compatible with other antivirus software?",
                  answer:
                    "We recommend uninstalling other antivirus software before installing EthioShield to avoid conflicts.",
                },
                {
                  question: "How often are virus definitions updated?",
                  answer:
                    "Our virus definitions are updated multiple times daily to protect against the latest threats.",
                },
                {
                  question: "Do you offer support in Ethiopian languages?",
                  answer: "Yes! We provide support in Amharic, Oromo, Tigrinya, and English.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <HelpCircle className="h-5 w-5" />
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
