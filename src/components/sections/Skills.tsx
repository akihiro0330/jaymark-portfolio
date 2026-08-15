import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Sparkles,
} from "lucide-react";

import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

type SkillGroup = {
  title: string;
  description: string;
  icon: typeof Code2;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Programming & Development",
    description:
      "Languages and technologies I use to build software, web applications, and practical digital solutions.",
    icon: Code2,
    skills: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Exploring intelligent systems, machine learning frameworks, and AI-powered automation.",
    icon: BrainCircuit,
    skills: [
      "AI Automation",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Azure AI",
    ],
  },
  {
    title: "Data & Databases",
    description:
      "Working with structured data, relational databases, spreadsheets, and analytical workflows.",
    icon: Database,
    skills: [
      "MySQL",
      "SQL",
      "Excel",
      "Data Analytics",
      "Pivot Tables",
      "VLOOKUP / XLOOKUP",
    ],
  },
  {
    title: "Cloud & Automation",
    description:
      "Using cloud platforms, workflow automation, and integrations to improve processes.",
    icon: Cloud,
    skills: [
      "Microsoft Azure",
      "Power Automate",
      "API Integration",
      "AI Automation",
    ],
  },
  {
    title: "Analytics & Business",
    description:
      "Combining technical thinking with analytics, reporting, and operational problem-solving.",
    icon: BarChart3,
    skills: [
      "Data Visualization",
      "Reporting",
      "Process Improvement",
      "Healthcare Operations",
    ],
  },
];

function SkillChip({ skill }: { skill: string }) {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="
        inline-flex
        cursor-default
        items-center
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
        hover:border-white/20
        hover:bg-white/[0.08]
        hover:text-white/90
      "
    >
      {skill}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools for turning ideas into reality."
          description="A combination of software development, AI, data, automation, and domain knowledge."
        />

        {/* Capability Grid */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            const isPrimary = index === 0;

            return (
              <motion.div
                key={group.title}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={isPrimary ? "lg:col-span-2" : ""}
              >
                <GlassCard
                  className={`
                    group
                    h-full
                    p-7
                    sm:p-8
                    ${isPrimary ? "lg:min-h-[300px]" : ""}
                  `}
                >
                  <div
                    className={
                      isPrimary
                        ? "grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
                        : ""
                    }
                  >

                    {/* Information */}
                    <div>
                      {/* Icon + Number */}
                      <div className="flex items-start justify-between">

                        <div
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.05]
                            text-blue-400
                            transition-all
                            duration-500
                            group-hover:scale-110
                            group-hover:border-blue-400/20
                            group-hover:bg-blue-400/[0.08]
                          "
                        >
                          <Icon size={21} />
                        </div>

                        <span
                          className="
                            text-xs
                            font-medium
                            tracking-[0.2em]
                            text-white/20
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="
                          mt-6
                          text-xl
                          font-semibold
                          tracking-tight
                          text-white
                          sm:text-2xl
                        "
                      >
                        {group.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="
                          mt-3
                          max-w-lg
                          text-sm
                          leading-6
                          text-white/40
                        "
                      >
                        {group.description}
                      </p>
                    </div>

                    {/* Skills */}
                    <div
                      className={`
                        ${isPrimary ? "lg:pl-4" : "mt-6"}
                      `}
                    >
                      {isPrimary && (
                        <div
                          className="
                            mb-4
                            flex
                            items-center
                            gap-2
                            text-xs
                            uppercase
                            tracking-[0.16em]
                            text-white/25
                          "
                        >
                          <Sparkles size={13} />
                          Core Technologies
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <SkillChip
                            key={skill}
                            skill={skill}
                          />
                        ))}
                      </div>
                    </div>

                  </div>
                </GlassCard>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Capability Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="mt-6"
        >
          <GlassCard className="px-6 py-6 sm:px-8">
            <div
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.16em]
                    text-white/25
                  "
                >
                  My approach
                </p>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
                  I focus on understanding the problem first, choosing
                  the right tools for the job, and building solutions
                  that are practical, maintainable, and useful.
                </p>
              </div>

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2
                  text-xs
                  text-emerald-400/70
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_10px_rgba(52,211,153,0.7)]
                  "
                />
                Always learning
              </div>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
}