"use client"

import { motion } from "framer-motion"
import { BarChart3, Briefcase, FileText, TrendingUp, Lightbulb, Calculator } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Tax Preparation & Filing",
    description:
      "Comprehensive tax planning and filing services for individuals and businesses to minimize your tax burden.",
  },
  {
    icon: Calculator,
    title: "Payroll & Bookkeeping",
    description: "Accurate payroll processing and complete bookkeeping to keep your finances organized and compliant.",
  },
  {
    icon: Briefcase,
    title: "Business Financial Planning",
    description: "Strategic financial planning to help your business grow, scale, and achieve long-term profitability.",
  },
  {
    icon: BarChart3,
    title: "Auditing & Reporting",
    description:
      "Professional audit services and detailed financial reports for stakeholders and regulatory compliance.",
  },
  {
    icon: TrendingUp,
    title: "Financial Consultation",
    description: "Expert guidance on investment strategies, retirement planning, and wealth management.",
  },
  {
    icon: Lightbulb,
    title: "Business Advisory",
    description: "Strategic consulting to optimize operations, reduce costs, and improve financial performance.",
  },
]

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 },
    },
  }

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Services I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive accounting and financial services tailored to your unique needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-xl p-6 md:p-8 border border-border hover:border-sky-300 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 -z-10" />

                <div className="bg-sky-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-200 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-sky-600" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full w-0 group-hover:w-full transition-all duration-300" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
