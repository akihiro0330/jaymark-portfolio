import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Automated File Sorting System",
    category: "Desktop Application",
    description:
      "A productivity-focused desktop application that automatically organizes files into structured folders based on file types and configurable rules, reducing repetitive manual file management.",
    technologies: [
      "Python",
      "Automation",
      "File System",
      "UI/UX",
    ],
    featured: true,
  },
  {
    title: "QR Attendance System",
    category: "Mobile Application",
    description:
      "A planned attendance management solution designed to streamline attendance recording through QR-based check-ins while reducing manual data entry.",
    technologies: [
      "Flutter",
      "Firebase",
      "QR Code",
      "Mobile Development",
    ],
  },
  {
    title: "Student Management System",
    category: "Web Application",
    description:
      "A database-driven web application designed to manage student information, academic records, and related data through a structured management interface.",
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Travel Booking System",
    category: "Database Project",
    description:
      "A relational database project focused on organizing travel bookings, customer information, destinations, and related transactions using structured SQL data models.",
    technologies: [
      "MySQL",
      "SQL",
      "Database Design",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've built and explored."
          description="A collection of software, automation, database, and application projects."
        />

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <GlassCard
                className="
                  h-full
                  p-7
                  sm:p-8
                "
              >
                <div
                  className={
                    project.featured
                      ? "relative grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center"
                      : "relative"
                  }
                >
                  {/* Project Content */}
                  <div>
                    {/* Category + Featured */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="
                          text-xs
                          font-medium
                          uppercase
                          tracking-[0.16em]
                          text-blue-400
                        "
                      >
                        {project.category}
                      </span>

                      {project.featured && (
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-full
                            border
                            border-blue-400/20
                            bg-blue-400/10
                            px-2.5
                            py-1
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-wider
                            text-blue-300
                          "
                        >
                          <Sparkles size={11} />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-4
                        text-2xl
                        font-semibold
                        tracking-tight
                        text-white
                        sm:text-3xl
                      "
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-4
                        max-w-2xl
                        text-sm
                        leading-7
                        text-white/45
                        sm:text-base
                      "
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-3
                            py-1.5
                            text-xs
                            text-white/55
                            transition-colors
                            duration-300
                            group-hover:border-white/[0.14]
                            group-hover:text-white/70
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    {(project.github || project.live) && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="
                              inline-flex
                              items-center
                              gap-2
                              rounded-full
                              border
                              border-white/10
                              bg-white/[0.05]
                              px-4
                              py-2.5
                              text-sm
                              text-white/70
                              transition-all
                              duration-300
                              hover:-translate-y-0.5
                              hover:border-white/20
                              hover:bg-white/10
                              hover:text-white
                            "
                          >
                            <FaGithub size={16} />
                            GitHub
                            <ArrowUpRight size={14} />
                          </a>
                        )}

                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                            className="
                              inline-flex
                              items-center
                              gap-2
                              rounded-full
                              bg-white
                              px-4
                              py-2.5
                              text-sm
                              font-medium
                              text-black
                              transition-all
                              duration-300
                              hover:-translate-y-0.5
                              hover:bg-white/90
                            "
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}

                    {/* No links message */}
                    {!project.github && !project.live && (
                      <div
                        className="
                          mt-8
                          inline-flex
                          items-center
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.03]
                          px-4
                          py-2.5
                          text-xs
                          text-white/35
                        "
                      >
                        Project in development
                      </div>
                    )}
                  </div>

                  {/* Project Preview */}
                  <div
                    className="
                      relative
                      hidden
                      min-h-[220px]
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20
                      md:block
                    "
                  >
                    {/* Background Aurora */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-blue-500/10
                        via-purple-500/5
                        to-transparent
                        opacity-70
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* Window */}
                    <div
                      className="
                        absolute
                        inset-5
                        overflow-hidden
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.025]
                      "
                    >
                      {/* Window Header */}
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          border-b
                          border-white/5
                          px-4
                          py-3
                        "
                      >
                        <div className="flex gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-white/20" />
                          <span className="h-2 w-2 rounded-full bg-white/20" />
                          <span className="h-2 w-2 rounded-full bg-white/20" />
                        </div>

                        <div className="h-2 w-16 rounded-full bg-white/5" />
                      </div>

                      {/* Window Content */}
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="h-3 w-24 rounded-full bg-white/10" />
                          <div className="h-6 w-6 rounded-lg bg-blue-400/10" />
                        </div>

                        <div className="mt-5 space-y-2">
                          <div className="h-2 w-full rounded-full bg-white/5" />
                          <div className="h-2 w-5/6 rounded-full bg-white/5" />
                          <div className="h-2 w-2/3 rounded-full bg-white/5" />
                        </div>

                        <div className="mt-5 grid grid-cols-3 gap-2">
                          <div className="h-14 rounded-lg bg-white/[0.035] transition-colors duration-500 group-hover:bg-blue-400/[0.06]" />
                          <div className="h-14 rounded-lg bg-white/[0.035] transition-colors duration-500 group-hover:bg-purple-400/[0.06]" />
                          <div className="h-14 rounded-lg bg-white/[0.035] transition-colors duration-500 group-hover:bg-cyan-400/[0.06]" />
                        </div>
                      </div>
                    </div>

                    {/* Project Number */}
                    <div
                      className="
                        absolute
                        bottom-4
                        right-4
                        text-xs
                        font-medium
                        tracking-widest
                        text-white/20
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}