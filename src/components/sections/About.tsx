import { motion } from "framer-motion";
import {
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
      "Building practical applications with modern programming languages and web technologies.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Exploring AI-powered workflows and automation to solve real-world problems.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Working with data, SQL, Excel, and analytics to turn information into useful insights.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Technology",
    description:
      "Combining technology with healthcare-domain experience to build better digital solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">

        <SectionHeading
          eyebrow="About Me"
          title="Technology with purpose."
          description="I'm a Computer Science professional interested in software engineering, AI automation, data, and technology that creates meaningful solutions."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <GlassCard
                  className="
                    group
                    h-full
                    p-8
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-white/20
                    hover:bg-white/[0.07]
                  "
                >
                  <div
                    className="
                      mb-6
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

                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/45">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}