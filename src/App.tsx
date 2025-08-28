import React from "react";
import { motion } from "framer-motion";

/**
 * Single-file React portfolio starter for Kartik Malik
 * - TailwindCSS classes used (no setup needed to preview here)
 * - Structure mirrors Manav's site: Navbar, Hero, About, Skills, Projects, Contact, Footer
 * - Replace placeholder links as needed
 */

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }>= ({ id, title, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 py-20">
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-3xl md:text-4xl font-bold tracking-tight mb-8"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const Chip: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-flex items-center text-sm md:text-base rounded-full border px-3 py-1 mr-2 mb-2">
    {label}
  </span>
);

const Progress: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm font-medium mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div className="h-full w-0" style={{ width: `${value}%` }} />
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl">KM.</a>
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a href="#home" className="hover:opacity-70">Home</a></li>
            <li><a href="#about" className="hover:opacity-70">About</a></li>
            <li><a href="#projects" className="hover:opacity-70">Projects</a></li>
            <li><a href="#contact" className="hover:opacity-70">Contact</a></li>
          </ul>
          <div className="flex items-center gap-3">
            <a href="mailto:kartikmalik71004@gmail.com" className="text-sm underline">Email</a>
            <a href="https://www.linkedin.com/in/kartik-malik-a69391284/" target="_blank" rel="noreferrer" className="text-sm underline">LinkedIn</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-24 sm:py-28 md:py-32">
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
            <p className="mt-4 text-lg md:text-xl text-gray-700">
              Full Stack Developer • ML Enthusiast • DevOps Explorer
            </p>
            <p className="mt-4 text-gray-600 max-w-prose">
              I build practical, scalable apps with React, FastAPI, and cloud-native tooling.
              Curious mind, constant learner — always exploring, always shipping.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="rounded-2xl px-4 py-2 border text-sm font-medium">View Projects</a>
              <a href="#contact" className="rounded-2xl px-4 py-2 border text-sm font-medium">Contact Me</a>
            </div>
            <div className="mt-6 flex flex-wrap">
              <Chip label="React" />
              <Chip label="Next.js" />
              <Chip label="FastAPI" />
              <Chip label="Docker" />
              <Chip label="Kubernetes" />
              <Chip label="AWS" />
            </div>
          </div>
          <div className="justify-self-center">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl border shadow-sm grid place-content-center">
              <span className="text-4xl md:text-5xl font-black">KM</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-gray-700 leading-relaxed">
            I'm a pre-final year CSE(Hons) student and a builder at heart. My toolkit spans
            React/Next.js on the front, FastAPI/Node on the back, and CI/CD on top.
            On the ML side, I prototype in Python and ship with C++/LibTorch when needed.
          </p>
          <div>
            <h3 className="font-semibold mb-3">Skills (self-rated)</h3>
            <Progress label="React" value={85} />
            <Progress label="Next.js" value={80} />
            <Progress label="Docker" value={85} />
            <Progress label="Kubernetes" value={75} />
            <Progress label="JavaScript/TypeScript" value={85} />
            <Progress label="Python" value={80} />
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Technologies I work with</h3>
          <div className="flex flex-wrap">
            {["AWS","EC2","S3","Lambda","Docker","Kubernetes","CI/CD","React","Next.js","Node.js","TypeScript","Git"].map(t => (
              <Chip key={t} label={t} />
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            name: "Species Recognition",
            desc: "Automated endangered species detection.",
            stack: "Python · CNN · TensorFlow · OpenCV",
            href: "https://github.com/KartikMalik07" // TODO: replace with repo link
          },{
            name: "HealthMate – Healthcare Chatbot",
            desc: "Rural-first assistant for basic triage.",
            stack: "Node · Firebase · Vision AI",
            href: "https://github.com/KartikMalik07"
          },{
            name: "Inventory/Order System",
            desc: "Microservices bakery system.",
            stack: "FastAPI · RabbitMQ · Redis · React",
            href: "https://github.com/KartikMalik07"
          }].map(card => (
            <a key={card.name} href={card.href} target="_blank" rel="noreferrer" className="block border rounded-2xl p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-lg">{card.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{card.desc}</p>
              <p className="text-xs mt-3">{card.stack}</p>
            </a>
          ))}
        </div>
        <div className="mt-6">
          <a className="underline" href="https://github.com/KartikMalik07" target="_blank" rel="noreferrer">View more on GitHub →</a>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get In Touch">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-gray-700 max-w-prose">
              I'm open to internships and collaboration on full‑stack + ML hybrids.
              Drop a message — I read everything.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p><span className="font-medium">Email</span>: <a href="mailto:kartikmalik71004@gmail.com" className="underline">kartikmalik71004@gmail.com</a></p>
              <p><span className="font-medium">LinkedIn</span>: <a href="https://www.linkedin.com/in/kartik-malik-a69391284/" className="underline" target="_blank" rel="noreferrer">/in/kartik-malik-a69391284</a></p>
              <p><span className="font-medium">GitHub</span>: <a href="https://github.com/KartikMalik07" className="underline" target="_blank" rel="noreferrer">@KartikMalik07</a></p>
            </div>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="border rounded-2xl p-5">
            <label className="block text-sm font-medium">Name</label>
            <input className="w-full mt-1 mb-3 border rounded-xl px-3 py-2" placeholder="Your name" />
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full mt-1 mb-3 border rounded-xl px-3 py-2" placeholder="you@example.com" />
            <label className="block text-sm font-medium">Message</label>
            <textarea className="w-full mt-1 mb-4 border rounded-xl px-3 py-2 h-28" placeholder="Say hi" />
            <button className="rounded-2xl px-4 py-2 border text-sm font-medium">Send Message</button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 items-center gap-4">
          <div>
            <p className="font-semibold">Kartik Malik</p>
            <p className="text-sm text-gray-600">Full Stack Developer • ML</p>
          </div>
          <p className="text-sm text-gray-500 md:text-right">© {new Date().getFullYear()} Kartik Malik. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
