"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Chip from "@/components/Chip";

interface Project {
  name: string;
  description: string;
  longDescription?: string;
  stack: string[];
  href: string;
  featured?: boolean;
  status: "completed" | "in-progress" | "planned";
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      name: "Species Recognition System",
      description: "Automated endangered species detection using computer vision",
      longDescription: "A comprehensive ML solution for wildlife conservation that uses CNNs to identify endangered species from camera trap images. Includes data preprocessing, model training, and a web interface for real-time predictions.",
      stack: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
      href: "https://github.com/KartikMalik07",
      featured: true,
      status: "completed"
    },
    {
      name: "HealthMate – Healthcare Chatbot",
      description: "Rural-first assistant for basic medical triage and guidance",
      longDescription: "An AI-powered healthcare assistant designed for rural communities with limited medical access. Features symptom analysis, basic triage, and integration with local healthcare providers.",
      stack: ["Node.js", "Firebase", "Google Vision AI", "React", "Express"],
      href: "https://github.com/KartikMalik07",
      featured: true,
      status: "completed"
    },
    {
      name: "Microservices Bakery System",
      description: "Scalable inventory and order management system",
      longDescription: "A complete microservices architecture for a bakery chain, handling inventory management, order processing, and customer management with message queues and caching.",
      stack: ["FastAPI", "RabbitMQ", "Redis", "PostgreSQL", "React", "Docker"],
      href: "https://github.com/KartikMalik07",
      featured: true,
      status: "completed"
    },
    {
      name: "Cloud Infrastructure Automation",
      description: "Infrastructure as Code with Terraform and AWS",
      longDescription: "Automated deployment pipeline for cloud infrastructure using Terraform, including VPC setup, ECS clusters, and monitoring with CloudWatch.",
      stack: ["Terraform", "AWS", "Docker", "GitHub Actions", "Monitoring"],
      href: "https://github.com/KartikMalik07",
      status: "completed"
    },
    {
      name: "Real-time Chat Application",
      description: "Scalable chat platform with WebSocket support",
      longDescription: "A modern chat application with real-time messaging, file sharing, and group management. Built with Socket.io for real-time communication.",
      stack: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
      href: "https://github.com/KartikMalik07",
      status: "completed"
    },
    {
      name: "ML Model Deployment Pipeline",
      description: "Automated ML model training and deployment system",
      longDescription: "End-to-end pipeline for machine learning model development, from data preprocessing to model deployment with A/B testing capabilities.",
      stack: ["Python", "MLflow", "Kubernetes", "Flask", "PostgreSQL"],
      href: "https://github.com/KartikMalik07",
      status: "in-progress"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <>
      <Section title="Featured Projects">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              className="group"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="block border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-xl group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status.replace('-', ' ')}
                  </span>
                </div>

                <p className="text-gray-600 mb-3">{project.description}</p>

                {project.longDescription && (
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>
                )}

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.stack.map((tech) => (
                    <Chip key={tech} label={tech} className="text-xs" />
                  ))}
                </div>

                <div className="flex items-center text-sm text-blue-600 group-hover:text-blue-800 transition-colors">
                  View Project
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section title="Other Projects" className="bg-gray-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              className="group"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="block border rounded-2xl p-5 hover:shadow-md transition-all duration-300 bg-white h-full"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status.replace('-', ' ')}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                  {project.stack.slice(0, 3).map((tech) => (
                    <Chip key={tech} label={tech} className="text-xs" />
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-xs text-gray-500">+{project.stack.length - 3} more</span>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section title="Open Source Contributions">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            I believe in giving back to the developer community. Here are some ways I contribute to open source projects and share knowledge.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border rounded-2xl p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Code Contributions</h3>
              <p className="text-sm text-gray-600">Bug fixes and feature improvements to open source projects</p>
            </div>

            <div className="border rounded-2xl p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-gray-600">Improving documentation and writing tutorials</p>
            </div>

            <div className="border rounded-2xl p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-gray-600">Helping developers in forums and discussions</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/KartikMalik07"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              View All Projects on GitHub
            </a>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
