"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Caren transformed our accounting processes and saved us thousands in taxes. Her attention to detail is unmatched.",
    author: "John Chen",
    role: "CEO, Tech Innovations Inc.",
    initials: "JC",
  },
  {
    quote:
      "Working with Caren gave me peace of mind about my finances. Her recommendations helped me plan for retirement confidently.",
    author: "Maria Rodriguez",
    role: "Business Owner",
    initials: "MR",
  },
  {
    quote:
      "Professional, responsive, and incredibly knowledgeable. Caren is my go-to accountant for all financial matters.",
    author: "David Thompson",
    role: "Managing Director",
    initials: "DT",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses and individuals for exceptional accounting services
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sky-400 text-sky-400" />
                ))}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
