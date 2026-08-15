import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  HeartPulse,
} from "lucide-react";

import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building practical applications with programming languages, web technologies, databases, and modern development tools.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Exploring AI-powered workflows and automation to reduce repetitive work and create more efficient solutions.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Working with SQL, Excel, databases, and data-driven workflows to transform information into actionable insights.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Technology",
    description:
      "Bringing together technical knowledge and healthcare-domain experience to understand problems from both the technology and user perspective.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="About Me"
          title="Technology with purpose."
          description="A technical foundation shaped by curiosity, practical problem-solving, and a desire to build technology that makes a difference."
        />

        {/* Introduction */}
        <div className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Main Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <GlassCard
              className="
                h-full
                p-8
                sm:p-10
              "
            >
              <div className="flex h-full flex-col justify-between">

                <div>
                  {/* Small Label */}
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      uppercase
                      tracking-wider
                      text-white/45
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    A little about me
                  </div>

                  {/* Main Text */}
                  <h3
                    className="
                      mt-7
                      max-w-xl
                      text-3xl
                      font-semibold
                      leading-tight
                      tracking-tight
                      text-white
                      sm:text-4xl
                    "
                  >
                    I enjoy turning complex problems into simple,
                    practical solutions.
                  </h3>

                  <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-white/45 sm:text-base">
                    <p>
                      I'm a Computer Science professional with a strong
                      interest in software development, automation,
                      artificial intelligence, and data-driven systems.
                    </p>

                    <p>
                      My experience has given me an appreciation for both
                      sides of technology — how systems are built and how
                      people actually interact with them in the real world.
                    </p>

                    <p>
                      I enjoy learning new technologies, experimenting with
                      ideas, and turning what I learn into useful projects
                      and practical solutions.
                    </p>
                  </div>
                </div>

                {/* Bottom Statement */}
                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/30">
                      Current direction
                    </p>

                    <p className="mt-1 text-sm font-medium text-white/70">
                      Software Engineering · AI · Automation
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-white/40
                    "
                    aria-hidden="true"
                  >
                    <ArrowUpRight size={17} />
                  </div>
                </div>

              </div>
            </GlassCard>
          </motion.div>

          {/* Technical Highlights */}
          <div className="grid gap-6 sm:grid-cols-2">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                >
                  <GlassCard
                    className="
                      group
                      h-full
                      p-6
                      sm:p-7
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        mb-6
                        flex
                        h-11
                        w-11
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
                      <Icon size={20} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {item.description}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Bottom Skills Statement */}
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
            delay: 0.2,
          }}
          className="mt-6"
        >
          <GlassCard
            className="
              px-6
              py-5
              sm:px-8
            "
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-xs uppercase tracking-wider text-white/30">
                  Areas I enjoy working with
                </p>

                <p className="mt-1 text-sm text-white/55">
                  Software · Web Development · Python · Java · C++ ·
                  Databases · AI Automation · Data
                </p>
              </div>

              <div
                className="
                  hidden
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_12px_rgba(52,211,153,0.7)]
                  sm:block
                "
                aria-hidden="true"
              />

            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
}