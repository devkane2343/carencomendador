"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-sky-200 to-blue-300 rounded-2xl h-100 w-130 md:h-full flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src="/aboutimg.jpg"
                alt="Caren Comendador, Professional Accountant"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm Caren Comendador, a certified public accountant with over 10 years of experience helping businesses
                and individuals achieve their financial goals. My passion is transforming complex financial data into
                clear, actionable insights.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">CPA License</h3>
                  <p className="text-muted-foreground">State Licensed & AICPA Member</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">10+ Years Experience</h3>
                  <p className="text-muted-foreground">Trusted by 100+ happy clients</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Continuing Education</h3>
                  <p className="text-muted-foreground">Always up-to-date with tax law changes</p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              <div className="bg-sky-50 rounded-xl p-6 text-center border border-sky-100">
                <p className="text-4xl font-bold text-sky-600 mb-2">10+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-6 text-center border border-sky-100">
                <p className="text-4xl font-bold text-sky-600 mb-2">100+</p>
                <p className="text-muted-foreground">Clients Served</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
