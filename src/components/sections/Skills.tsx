import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  Cloud,
  BarChart3,
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
      "Languages and technologies I use to build software and web applications.",
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
      "Tools and frameworks for developing intelligent and automated solutions.",
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
      "Working with structured data, databases, spreadsheets, and analytics.",
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
      "Exploring cloud technologies and workflow automation to improve processes.",
    icon: Cloud,
    skills: [
      "Microsoft Azure",
      "AI Automation",
      "Power Automate",
      "API Integration",
    ],
  },
  {
    title: "Analytics & Business",
    description:
      "Combining technical skills with business and operational problem-solving.",
    icon: BarChart3,
    skills: [
      "Data Visualization",
      "Reporting",
      "Process Improvement",
      "Healthcare Operations",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools for turning ideas into reality."
          description="A combination of software development, AI, data, automation, and domain knowledge."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={index === 0 ? "lg:col-span-2" : ""}
              >
                <GlassCard
                  className="
                    group
                    h-full
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-white/20
                    hover:bg-white/[0.07]
                  "
                >
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
                        bg-white/[0.06]
                        text-blue-400
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    >
                      <Icon size={22} />
                    </div>

                    <span className="text-xs text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.04]
                          px-3
                          py-1.5
                          text-xs
                          text-white/60
                          transition-colors
                          duration-300
                          hover:border-white/20
                          hover:bg-white/[0.08]
                          hover:text-white
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}