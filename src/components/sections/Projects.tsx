import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ExternalLink,
  Smartphone,
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
  status?: "In Development" | "Completed" | "Prototype";
  screenshots?: string[];
  features?: string[];
};

const projects: Project[] = [
  {
    title: "Kivora",
    category: "Mobile Application",
    description:
      "A modern personal finance and digital wallet application designed to bring bank accounts, e-wallets, cash, credit cards, transactions, IDs, and digital passes into one secure experience. Kivora combines financial management and spending insights with balance privacy, local data persistence, device authentication, and a polished mobile-first interface.",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Expo Router",
      "SQLite",
      "AsyncStorage",
      "Local Authentication",
      "React Native SVG",
    ],
    featured: true,
    status: "In Development",
    github: "https://github.com/akihiro0330/Kivora",
    screenshots: [
      "/projects/kivora/kivora-home.png",
      "/projects/kivora/kivora-wallet.png",
      "/projects/kivora/kivora-lock.png",
    ],
    features: [
      "Multi-account wallet management",
      "Income, expense & transfer tracking",
      "Spending analytics",
      "Digital ID & pass storage",
      "Device authentication",
      "Balance privacy controls",
      "Theme-aware interface",
      "Local SQLite persistence",
    ],
  },

  {
    title: "JM Digital",
    category: "Business Website",
    description:
      "A production-ready business website created to showcase web and software development services, highlight previous work, and allow prospective clients to submit inquiries through a responsive contact experience.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Resend",
      "Vercel",
    ],
    status: "Completed",
    github: "https://github.com/akihiro0330/jm-digital",
    live: "https://jm-digital-website.vercel.app/",
    features: [
      "Responsive business landing page",
      "Services showcase",
      "Portfolio presentation",
      "Client inquiry form",
      "Resend email integration",
      "Production deployment on Vercel",
    ],
  },

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
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Ambient section glows */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-10%]
          top-[20%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-500/[0.04]
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[45%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-purple-500/[0.04]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've built and explored."
          description="A collection of mobile applications, software, automation, database, and development projects."
        />

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={
                project.featured
                  ? "lg:col-span-2"
                  : ""
              }
            >
              <GlassCard
                className="
                  h-full
                  p-7
                  sm:p-8
                "
                contentClassName="h-full"
              >
                {project.featured ? (
                  /* =========================================================
                     FEATURED PROJECT — KIVORA
                  ========================================================= */
                  <div
                    className="
                      relative
                      grid
                      gap-12
                      xl:grid-cols-[0.92fr_1.08fr]
                      xl:items-center
                    "
                  >
                    {/* ================= LEFT: CONTENT ================= */}
                    <div className="relative z-10">
                      {/* Category / status badges */}
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

                        {project.status && (
                          <span
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              rounded-full
                              border
                              border-amber-400/15
                              bg-amber-400/[0.06]
                              px-2.5
                              py-1
                              text-[10px]
                              font-medium
                              uppercase
                              tracking-wider
                              text-amber-200/70
                            "
                          >
                            <span
                              className="
                                h-1.5
                                w-1.5
                                animate-pulse
                                rounded-full
                                bg-amber-300
                              "
                            />

                            {project.status}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <div className="mt-5 flex items-center gap-3">
                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-blue-400/15
                            bg-blue-400/[0.08]
                            text-blue-300
                          "
                        >
                          <Smartphone size={20} />
                        </div>

                        <h3
                          className="
                            text-3xl
                            font-semibold
                            tracking-[-0.03em]
                            text-white
                            sm:text-4xl
                          "
                        >
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p
                        className="
                          mt-6
                          max-w-xl
                          text-sm
                          leading-7
                          text-white/45
                          sm:text-base
                        "
                      >
                        {project.description}
                      </p>

                      {/* Features */}
                      {project.features && (
                        <div
                          className="
                            mt-7
                            grid
                            gap-x-5
                            gap-y-3
                            sm:grid-cols-2
                          "
                        >
                          {project.features.map(
                            (feature) => (
                              <div
                                key={feature}
                                className="
                                  flex
                                  items-start
                                  gap-2.5
                                  text-sm
                                  text-white/50
                                "
                              >
                                <span
                                  className="
                                    mt-0.5
                                    flex
                                    h-5
                                    w-5
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-blue-400/15
                                    bg-blue-400/[0.07]
                                    text-blue-300
                                  "
                                >
                                  <Check size={11} />
                                </span>

                                <span>{feature}</span>
                              </div>
                            )
                          )}
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.technologies.map(
                          (technology) => (
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
                                transition-all
                                duration-300
                                hover:border-white/20
                                hover:bg-white/[0.08]
                                hover:text-white
                              "
                            >
                              {technology}
                            </span>
                          )
                        )}
                      </div>

                      {/* Project Links */}
                      <div className="mt-9 flex flex-wrap gap-3">
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
                              bg-white
                              px-5
                              py-2.5
                              text-sm
                              font-medium
                              text-black
                              transition-all
                              duration-300
                              hover:-translate-y-0.5
                              hover:bg-white/90
                              hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)]
                            "
                          >
                            <FaGithub size={16} />

                            View on GitHub

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
                              border
                              border-white/10
                              bg-white/[0.05]
                              px-5
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
                            <ExternalLink size={16} />

                            Live Demo
                          </a>
                        )}
                      </div>

                      {/* Native app note */}
                      {!project.live && (
                        <p
                          className="
                            mt-4
                            max-w-md
                            text-xs
                            leading-5
                            text-white/25
                          "
                        >
                          Native mobile application currently
                          tested through Expo during development.
                      </p>
                      )}
                    </div>

                    {/* ================= RIGHT: KIVORA SHOWCASE ================= */}
                    <div
                      className="
                        relative
                        mx-auto
                        w-full
                        max-w-[620px]
                        xl:mx-0
                      "
                    >
                      {/* Large background glow */}
                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          left-1/2
                          top-1/2
                          h-[75%]
                          w-[80%]
                          -translate-x-1/2
                          -translate-y-1/2
                          rounded-full
                          bg-blue-500/10
                          blur-[90px]
                        "
                      />

                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          bottom-[5%]
                          right-[5%]
                          h-48
                          w-48
                          rounded-full
                          bg-purple-500/10
                          blur-[70px]
                        "
                      />

                      {/* Desktop / tablet screenshot composition */}
                      <div
                        className="
                          relative
                          hidden
                          min-h-[510px]
                          sm:block
                        "
                      >
                        {/* Left phone — Home */}
                        {project.screenshots?.[0] && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: -30,
                              rotate: -4,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              rotate: -4,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.8,
                              delay: 0.2,
                            }}
                            className="
                              absolute
                              bottom-3
                              left-[2%]
                              z-10
                              w-[34%]
                              overflow-hidden
                              rounded-[1.8rem]
                              border
                              border-white/10
                              bg-black
                              shadow-[0_30px_80px_rgba(0,0,0,0.55)]
                              transition-all
                              duration-500
                              hover:z-40
                              hover:-translate-y-3
                              hover:rotate-0
                              hover:scale-[1.03]
                              sm:rounded-[2rem]
                            "
                          >
                            <img
                              src={
                                project
                                  .screenshots[0]
                              }
                              alt="Kivora home dashboard"
                              loading="lazy"
                              draggable={false}
                              className="
                                block
                                h-auto
                                w-full
                                select-none
                              "
                            />
                          </motion.div>
                        )}

                        {/* Center phone — Wallet */}
                        {project.screenshots?.[1] && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 30,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.8,
                              delay: 0.3,
                            }}
                            className="
                              absolute
                              left-1/2
                              top-0
                              z-30
                              w-[38%]
                              -translate-x-1/2
                              overflow-hidden
                              rounded-[2rem]
                              border
                              border-blue-300/20
                              bg-black
                              shadow-[0_35px_100px_rgba(0,0,0,0.7)]
                              transition-all
                              duration-500
                              hover:-translate-y-3
                              hover:scale-[1.025]
                            "
                          >
                            <img
                              src={
                                project
                                  .screenshots[1]
                              }
                              alt="Kivora wallet screen"
                              loading="lazy"
                              draggable={false}
                              className="
                                block
                                h-auto
                                w-full
                                select-none
                              "
                            />

                            {/* subtle highlight */}
                            <div
                              aria-hidden="true"
                              className="
                                pointer-events-none
                                absolute
                                inset-0
                                rounded-[2rem]
                                bg-gradient-to-br
                                from-white/[0.04]
                                via-transparent
                                to-transparent
                              "
                            />
                          </motion.div>
                        )}

                        {/* Right phone — Lock */}
                        {project.screenshots?.[2] && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: 30,
                              rotate: 4,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              rotate: 4,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.8,
                              delay: 0.4,
                            }}
                            className="
                              absolute
                              bottom-3
                              right-[2%]
                              z-20
                              w-[34%]
                              overflow-hidden
                              rounded-[1.8rem]
                              border
                              border-white/10
                              bg-black
                              shadow-[0_30px_80px_rgba(0,0,0,0.55)]
                              transition-all
                              duration-500
                              hover:z-40
                              hover:-translate-y-3
                              hover:rotate-0
                              hover:scale-[1.03]
                              sm:rounded-[2rem]
                            "
                          >
                            <img
                              src={
                                project
                                  .screenshots[2]
                              }
                              alt="Kivora wallet authentication screen"
                              loading="lazy"
                              draggable={false}
                              className="
                                block
                                h-auto
                                w-full
                                select-none
                              "
                            />
                          </motion.div>
                        )}
                      </div>

                      {/* Mobile screenshot */}
                      <div className="relative sm:hidden">
                        {project.screenshots?.[0] && (
                          <div
                            className="
                              mx-auto
                              w-[72%]
                              max-w-[280px]
                              overflow-hidden
                              rounded-[2rem]
                              border
                              border-white/10
                              bg-black
                              shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                            "
                          >
                            <img
                              src={
                                project
                                  .screenshots[0]
                              }
                              alt="Kivora mobile application"
                              loading="lazy"
                              draggable={false}
                              className="block h-auto w-full"
                            />
                          </div>
                        )}

                        {/* mobile screen selector style */}
                        <div
                          className="
                            mt-5
                            flex
                            justify-center
                            gap-1.5
                          "
                        >
                          <span className="h-1.5 w-5 rounded-full bg-blue-400" />
                          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* =========================================================
                     STANDARD PROJECT CARD
                  ========================================================= */
                  <div className="relative flex h-full flex-col">
                    {/* Category */}
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

                      {project.status && (
                        <span
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-2.5
                            py-1
                            text-[10px]
                            uppercase
                            tracking-wider
                            text-white/35
                          "
                        >
                          {project.status}
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
                      {project.technologies.map(
                        (technology) => (
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
                        )
                      )}
                    </div>

                    {/* Links */}
                    {(project.github || project.live) && (
                      <div className="mt-auto flex flex-wrap gap-3 pt-8">
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

                    {/* No links */}
                    {!project.github &&
                      !project.live && (
                        <div className="mt-auto pt-8">
                          <span
                            className="
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
                            Project details coming soon
                          </span>
                        </div>
                      )}

                    {/* Project number */}
                    <span
                      className="
                        absolute
                        right-0
                        top-0
                        text-xs
                        font-medium
                        tracking-widest
                        text-white/15
                      "
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}