import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CheckCircle2,
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
    <section
      id="experience"
      className="relative px-6 py-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div id="experience-heading">
          <SectionHeading
            eyebrow="Experience"
            title="Where technology meets real-world problems."
            description="A combination of professional experience, computer science education, and continuous technical development."
          />
        </div>

        {/* Timeline */}
        <div
          className="relative mt-20"
          aria-label="Experience timeline"
        >

          {/* Timeline Line */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-0
              left-5
              top-0
              w-px
              bg-gradient-to-b
              from-blue-400/50
              via-white/10
              to-transparent
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-14">

            {experienceItems.map((item, index) => {
              const config = typeConfig[item.type];
              const Icon = config.icon;
              const isCurrent = index === 0;

              return (
                <motion.div
                  key={`${item.title}-${item.organization}`}
                  initial={{
                    opacity: 0,
                    y: 35,
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
                    duration: 0.65,
                    delay: index * 0.1,
                  }}
                  className="
                    relative
                    grid
                    md:grid-cols-2
                    md:gap-12
                  "
                >

                  {/* Timeline Marker */}
                  <div
                    className={`
                      absolute
                      left-5
                      top-8
                      z-20
                      flex
                      h-10
                      w-10
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      bg-[#050816]
                      shadow-lg
                      transition-all
                      duration-500
                      md:left-1/2
                      ${
                        isCurrent
                          ? "border-blue-400/40 text-blue-400 shadow-blue-500/20"
                          : "border-white/10 text-white/35 shadow-black/20"
                      }
                    `}
                  >
                    <Icon size={17} />

                    {/* Active Indicator */}
                    {isCurrent && (
                      <span
                        className="
                          absolute
                          inset-0
                          rounded-full
                          border
                          border-blue-400/30
                          animate-ping
                          motion-reduce:animate-none
                        "
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Date / Category */}
                  <div
                    className={`
                      mb-5
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
                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        gap-2
                        md:justify-end
                      "
                    >
                      <span
                        className={`
                          text-sm
                          font-medium
                          ${
                            isCurrent
                              ? "text-blue-400"
                              : "text-white/40"
                          }
                        `}
                      >
                        {item.period}
                      </span>

                      {isCurrent && (
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-full
                            border
                            border-emerald-400/20
                            bg-emerald-400/[0.06]
                            px-2.5
                            py-1
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-wider
                            text-emerald-400/80
                          "
                        >
                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-emerald-400
                              shadow-[0_0_8px_rgba(52,211,153,0.7)]
                            "
                          />
                          Current
                        </span>
                      )}
                    </div>

                    <p
                      className="
                        mt-2
                        text-xs
                        uppercase
                        tracking-[0.15em]
                        text-white/25
                      "
                    >
                      {config.label}
                    </p>
                  </div>

                  {/* Experience Card */}
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
                      className={`
                        group
                        p-7
                        sm:p-8
                        ${
                          isCurrent
                            ? "border-blue-400/[0.12]"
                            : ""
                        }
                      `}
                    >
                      {/* Current Role Accent */}
                      {isCurrent && (
                        <div
                          aria-hidden="true"
                          className="
                            absolute
                            left-0
                            top-0
                            h-full
                            w-px
                            bg-gradient-to-b
                            from-blue-400/70
                            via-purple-400/30
                            to-transparent
                          "
                        />
                      )}

                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <h3
                            className="
                              text-xl
                              font-semibold
                              tracking-tight
                              text-white
                              sm:text-2xl
                            "
                          >
                            {item.title}
                          </h3>

                          <p
                            className="
                              mt-1.5
                              text-sm
                              font-medium
                              text-white/40
                            "
                          >
                            {item.organization}
                          </p>
                        </div>

                        {/* Number */}
                        <span
                          className="
                            hidden
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-3
                            py-1
                            text-xs
                            font-medium
                            tracking-wider
                            text-white/25
                            sm:block
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Description */}
                      <p
                        className="
                          mt-6
                          text-sm
                          leading-7
                          text-white/45
                        "
                      >
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-7 space-y-3">
                        {item.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="
                              flex
                              items-start
                              gap-3
                              text-sm
                              text-white/60
                            "
                          >
                            <CheckCircle2
                              size={15}
                              className="
                                mt-0.5
                                shrink-0
                                text-blue-400/70
                              "
                            />

                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Metadata */}
                      <div
                        className="
                          mt-7
                          flex
                          items-center
                          justify-between
                          border-t
                          border-white/[0.07]
                          pt-5
                        "
                      >
                        <span
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.16em]
                            text-white/20
                          "
                        >
                          {config.label}
                        </span>

                        {isCurrent && (
                          <span
                            className="
                              inline-flex
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
                                shadow-[0_0_8px_rgba(52,211,153,0.7)]
                              "
                            />
                            Active
                          </span>
                        )}
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