import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

type ExperienceItem = {
  type: "work" | "education" | "training";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
};

const experienceItems: ExperienceItem[] = [
  {
    type: "work",
    title: "Customer Service Representative",
    organization: "Provider Services",
    period: "2024 — Present",
    description:
      "Supporting healthcare provider operations by handling inquiries, resolving issues, and delivering accurate information across provider-facing workflows.",
    highlights: [
      "Provider support and issue resolution",
      "Benefits and eligibility inquiries",
      "Claims and escalation handling",
      "HIPAA-conscious information handling",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "Partido State University",
    period: "Academic Background",
    description:
      "Computer Science studies focused on programming, software development, databases, algorithms, and problem-solving.",
    highlights: [
      "Programming and software development",
      "Database design and SQL",
      "Web development",
      "Computer science fundamentals",
    ],
  },
  {
    type: "training",
    title: "AI Automation Training",
    organization: "Professional Development",
    period: "2026",
    description:
      "Developing practical knowledge in AI automation, cloud AI technologies, and workflow optimization.",
    highlights: [
      "AI automation concepts",
      "Cloud AI technologies",
      "Workflow automation",
      "Technology-driven process improvement",
    ],
  },
];

const typeConfig = {
  work: {
    icon: BriefcaseBusiness,
    label: "Professional Experience",
  },
  education: {
    icon: GraduationCap,
    label: "Education",
  },
  training: {
    icon: Sparkles,
    label: "Professional Development",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where technology meets real-world problems."
          description="A combination of professional experience, computer science education, and continuous technical development."
        />

        <div className="relative mt-20">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-5
              top-0
              h-full
              w-px
              bg-gradient-to-b
              from-blue-400/40
              via-white/10
              to-transparent
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-12">
            {experienceItems.map((item, index) => {
              const config = typeConfig[item.type];
              const Icon = config.icon;

              return (
                <motion.div
                  key={`${item.title}-${item.organization}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="
                    relative
                    grid
                    md:grid-cols-2
                    md:gap-12
                  "
                >
                  {/* Timeline marker */}
                  <div
                    className="
                      absolute
                      left-5
                      top-8
                      z-10
                      flex
                      h-10
                      w-10
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-[#050816]
                      text-blue-400
                      shadow-lg
                      shadow-blue-500/10
                      md:left-1/2
                    "
                  >
                    <Icon size={17} />
                  </div>

                  {/* Date */}
                  <div
                    className={`
                      mb-4
                      pl-14
                      md:mb-0
                      md:pl-0
                      ${
                        index % 2 === 0
                          ? "md:order-1 md:text-right"
                          : "md:order-2"
                      }
                    `}
                  >
                    <span className="text-sm font-medium text-blue-400">
                      {item.period}
                    </span>

                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/25">
                      {config.label}
                    </p>
                  </div>

                  {/* Experience card */}
                  <div
                    className={`
                      pl-14
                      md:pl-0
                      ${
                        index % 2 === 0
                          ? "md:order-2"
                          : "md:order-1"
                      }
                    `}
                  >
                    <GlassCard
                      className="
                        group
                        p-7
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:border-white/20
                        hover:bg-white/[0.07]
                      "
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-white/40">
                            {item.organization}
                          </p>
                        </div>

                        <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/30 sm:block">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-white/45">
                        {item.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {item.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-start gap-3 text-sm text-white/60"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}