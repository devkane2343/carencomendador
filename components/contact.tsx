"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, FileText } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Get In Touch</h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Ready to take control of your finances? Let's discuss how I can help you achieve your financial goals.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:caren@accountingpro.com"
                className="flex items-center gap-4 text-lg text-muted-foreground hover:text-sky-600 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <span>caren@accountingpro.com</span>
              </a>

              <a
                href="#linkedin"
                className="flex items-center gap-4 text-lg text-muted-foreground hover:text-sky-600 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="#download"
                className="flex items-center gap-4 text-lg text-muted-foreground hover:text-sky-600 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <FileText className="w-6 h-6" />
                </div>
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-white to-sky-50 rounded-2xl p-6 md:p-8 border border-border shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your needs..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
