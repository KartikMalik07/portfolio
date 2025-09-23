"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Chip from "@/components/Chip";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-24 sm:py-28 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              Hi, I'm Kartik Malik
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-gray-700"
            >
              Full Stack Developer • ML Enthusiast • DevOps Explorer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="mt-4 text-gray-600 max-w-prose"
            >
              I build practical, scalable apps with React, FastAPI, and cloud-native tooling.
              Curious mind, constant learner — always exploring, always shipping.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mt-6 flex gap-3"
            >
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn-primary">
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="mt-6 flex flex-wrap"
            >
              <Chip label="React" />
              <Chip label="Next.js" />
              <Chip label="FastAPI" />
              <Chip label="Docker" />
              <Chip label="Kubernetes" />
              <Chip label="AWS" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="justify-self-center"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl border shadow-sm grid place-content-center bg-gradient-to-br from-gray-50 to-gray-100">
              <span className="text-4xl md:text-5xl font-black text-gray-800">KM</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats/Highlights */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900">15+</h3>
            <p className="text-sm text-gray-600 mt-1">Projects Built</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">3+</h3>
            <p className="text-sm text-gray-600 mt-1">Years of Hands-on Projects</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">8+</h3>
            <p className="text-sm text-gray-600 mt-1">Technologies</p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to build something amazing?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects.
            Let's connect and see how we can work together.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get In Touch
            </Link>
            <a
              href="https://github.com/KartikMalik07"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              View GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 items-center gap-4">
          <div>
            <p className="font-semibold">Kartik Malik</p>
            <p className="text-sm text-gray-600">Full Stack Developer • ML</p>
          </div>
          <p className="text-sm text-gray-500 md:text-right">
            © {new Date().getFullYear()} Kartik Malik. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
