"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Star, Users, Zap, Shield, ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import ChatBot from "@/components/chat-bot"

export default function BusinessWebsite() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const services = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge technology solutions that drive growth and efficiency.",
      features: ["Cloud Migration", "Process Automation", "Digital Strategy"],
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions and 24/7 monitoring.",
      features: ["Threat Detection", "Security Audits", "Compliance Management"],
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Consulting",
      description: "Expert guidance to help you make informed decisions and achieve your business goals.",
      features: ["Strategic Planning", "Market Analysis", "Growth Optimization"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content:
        "Their digital transformation services helped us increase efficiency by 40% and reduce costs significantly.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Global Dynamics",
      content: "Outstanding cybersecurity implementation. We feel completely secure and protected now.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Innovation Labs",
      content: "The consulting team provided invaluable insights that transformed our business strategy.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">InnovateTech</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                🚀 Leading Innovation Since 2020
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Business{" "}
                </span>
                with AI & Technology
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We help businesses leverage cutting-edge technology to drive growth, improve efficiency, and stay ahead
                of the competition in today's digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-blue-100">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-blue-100">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Solutions for Modern Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From digital transformation to cybersecurity, we provide end-to-end solutions that help your business
              thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20">About InnovateTech</Badge>
              <h2 className="text-4xl font-bold mb-6">Pioneering the Future of Business Technology</h2>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Founded in 2020, InnovateTech has been at the forefront of digital transformation, helping businesses of
                all sizes leverage technology to achieve unprecedented growth and efficiency.
              </p>
              <p className="text-lg text-blue-100 mb-8">
                Our team of experts combines deep technical knowledge with business acumen to deliver solutions that not
                only meet today's challenges but also prepare you for tomorrow's opportunities.
              </p>
              <Button size="lg" variant="outline" className="bg-white text-blue-600 border-white hover:bg-blue-50">
                Our Story
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-blue-100">Team Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Countries Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">$2M+</div>
                <div className="text-blue-100">Cost Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Client Success Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from businesses that have transformed with our help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Get In Touch</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600">Let's discuss how we can help you achieve your goals.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center p-6">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </Card>
            <Card className="border-0 shadow-lg text-center p-6">
              <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">hello@innovatetech.com</p>
            </Card>
            <Card className="border-0 shadow-lg text-center p-6">
              <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Innovation St, Tech City</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
                <span className="text-xl font-bold">InnovateTech</span>
              </div>
              <p className="text-gray-400">Transforming businesses through innovative technology solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Digital Transformation</li>
                <li>Cybersecurity</li>
                <li>Consulting</li>
                <li>Cloud Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Community</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InnovateTech. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen && (
          <Button
            onClick={() => setIsChatOpen(true)}
            size="lg"
            className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Chat Interface */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold">InnovateTech Assistant</h3>
                <p className="text-xs text-blue-100">Online now</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1">
            <ChatBot />
          </div>
        </div>
      )}
    </div>
  )
}
