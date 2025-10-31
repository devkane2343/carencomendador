"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "SME Tax Compliance System",
    description:
      "Implemented comprehensive tax compliance system for a growing manufacturing company, reducing tax liability by 23%.",
    category: "Corporate",
  },
  {
    title: "Expense Tracking Dashboard",
    description:
      "Developed real-time expense tracking dashboard for a tech startup, improving financial visibility and control.",
    category: "Startup",
  },
  {
    title: "Retirement Planning Strategy",
    description: "Designed comprehensive retirement plan for executive team, optimizing tax-deferred contributions.",
    category: "Personal Finance",
  },
  {
    title: "Audit & Controls Implementation",
    description: "Conducted full financial audit and implemented internal controls for regulatory compliance.",
    category: "Enterprise",
  },
]

export function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.35 },
    },
  }

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real-world success stories and case studies</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-gradient-to-r from-white to-sky-50 rounded-xl p-6 md:p-8 border border-border hover:border-sky-400 transition-all duration-300 cursor-pointer hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="inline-block mb-3">
                    <span className="text-sm font-semibold text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
