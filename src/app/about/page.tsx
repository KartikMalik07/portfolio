"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Chip from "@/components/Chip";
import Progress from "@/components/Progress";

export default function AboutPage() {
  const technologies = [
    "AWS", "Docker", "Kubernetes", "CI/CD",
    "React", "Java", "Node.js", "TypeScript", "Git", "Python",
    "FastAPI", "Next.js", "Redis", "MongoDB", "HTML", "CSS", "Machine Learning",
  ];

  const skills = [
    { label: "React", value: 80 },
    { label: "Java", value: 85 },
    { label: "Docker", value: 85 },
    { label: "Kubernetes", value: 75 },
    { label: "JavaScript/TypeScript", value: 70 },
    { label: "Python", value: 80 },
    { label: "AWS", value: 85 },
    { label: "Machine Learning", value: 70 },
  ];

  return (
    <>
      <Section title="About Me">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm a final year CSE student at UPES Dehradun, specializing in Cloud & Virtualisation. Skilled in AI-powered applications and scalable cloud systems
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              What drives me is the intersection of practical software development and cutting-edge
              machine learning. I believe in building solutions that not only work but scale and
              adapt to real-world challenges.
            </p>

            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-gray-200 pl-4">
                <h4 className="font-medium">Current</h4>
                <p className="text-sm text-gray-600">CSE Student, Building Projects on Augmented Reality</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <h4 className="font-medium">2024-2025</h4>
                <p className="text-sm text-gray-600">Deep dive into ML and DevOps practices</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <h4 className="font-medium">2022</h4>
                <p className="text-sm text-gray-600">Started full-stack development with React</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Skills (self-rated)</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <Progress
                  key={skill.label}
                  label={skill.label}
                  value={skill.value}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section title="Technologies I Work With" className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2"
        >
          {technologies.map((tech) => (
            <Chip key={tech} label={tech} />
          ))}
        </motion.div>
      </Section>

      <Section title="What I'm Learning">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-3">Currently Exploring</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• System Designs</li>
              <li>• Go Lang</li>
              <li>• Microservices architecture patterns</li>
              <li>• Advanced ML model deployment</li>
            </ul>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-3">Next on the List</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Agentic Ai</li>
              <li>• RAG-Models</li>
              <li>• DevSecOps practices</li>
            </ul>
          </div>
        </motion.div>
      </Section>

      <Section title="Beyond Code">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-gray-700 leading-relaxed">
When I’m not buried in a project, I’m usually at the gym working on strength and mind-muscle connection, or outside recharging in nature. I enjoy experimenting—whether it’s with workouts, photography, or making creative reels that mix humor with aesthetics.

I’ve got a curious streak, so I read widely, not just about tech but also about people, psychology, and ideas that stretch how we see the world. For me, it’s about balance: building things with my mind, but also challenging and grounding myself in the real world.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            I'm particularly passionate about creating solutions that bridge the gap between complex
            technical implementations and user-friendly experiences. Whether it's optimizing a machine
            learning pipeline or designing an intuitive UI, I always keep the end user in mind.
          </p>
        </motion.div>
      </Section>
    </>
  );
}
