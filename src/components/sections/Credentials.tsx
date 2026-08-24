import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

type Credential = {
  type: "education" | "certification" | "training";
  title: string;
  organization: string;
  date: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
};

const credentials: Credential[] = [
  {
    type: "certification",
    title: "Google Project Management Professional Certificate",
    organization: "Google",
    date: "August 2026",
    description:
      "Professional certificate covering project management fundamentals, project planning, stakeholder management, risk management, Agile methodologies, Scrum, and practical project execution.",
    skills: [
      "Project Management",
      "Project Planning",
      "Agile Methodologies",
      "Scrum",
      "Stakeholder Management",
      "Risk Management",
    ],
    credentialUrl:
      "https://coursera.org/verify/professional-cert/ZU99L1P19CZF",
  },
  {
    type: "certification",
    title: "Medical Biller Professional Certificate",
    organization: "AAPC",
    date: "2026",
    description:
      "Professional training covering medical billing fundamentals, claims workflows, insurance concepts, and healthcare revenue-cycle processes.",
    skills: [
      "Medical Billing",
      "Claims Lifecycle",
      "Insurance",
      "Healthcare Operations",
    ],
    credentialUrl:
      "https://coursera.org/verify/professional-cert/PI2EDR0WJNGJ",
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "Partido State University",
    date: "Academic Background",
    description:
      "Computer Science studies covering programming, databases, web development, algorithms, software development, and computational problem-solving.",
    skills: [
      "Programming",
      "Software Development",
      "Databases",
      "Algorithms",
    ],
  },
  {
    type: "training",
    title: "AI Automation Training",
    organization: "Professional Development",
    date: "2026",
    description:
      "Focused on practical applications of artificial intelligence, automation, cloud technologies, and workflow optimization.",
    skills: [
      "AI Automation",
      "Workflow Automation",
      "Cloud AI",
      "Process Improvement",
    ],
  },
  {
    type: "training",
    title: "Information Technology Training",
    organization: "Global IT / Jaken Computer Learning Services",
    date: "Professional Training",
    description:
      "Technical training covering information technology fundamentals and productivity tools, including Microsoft Excel.",
    skills: [
      "Information Technology",
      "Microsoft Excel",
      "Productivity Tools",
    ],
  },
];

const typeConfig = {
  education: {
    icon: GraduationCap,
    label: "Education",
  },
  certification: {
    icon: Award,
    label: "Certification",
  },
  training: {
    icon: ShieldCheck,
    label: "Training",
  },
};

export default function Credentials() {
  return (
    <section id="credentials" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Learning never stops."
          description="Education, certifications, and professional development that continue to shape my technical journey."
        />

        <div className="mt-20 grid items-stretch gap-6 md:grid-cols-2">
          {credentials.map((credential, index) => {
            const config = typeConfig[credential.type];
            const Icon = config.icon;

            return (
              <motion.div
                key={credential.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="h-full"
              >
                <GlassCard
                    className="
                      group
                      relative
                      flex
                      h-full
                      flex-col
                      overflow-hidden
                      p-7
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-white/20
                      hover:bg-white/[0.07]
                    "
                  >
                    {/* Background glow */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -right-16
                        -top-16
                        h-40
                        w-40
                        rounded-full
                        bg-blue-500/10
                        blur-3xl
                        transition-all
                        duration-500
                        group-hover:bg-blue-500/20
                      "
                    />

                    {/* Header */}
                    <div className="relative flex items-start justify-between gap-4">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
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

                      <div className="flex flex-wrap justify-end gap-2">
                        {credential.credentialUrl && (
                          <span
                            className="
                              rounded-full
                              border
                              border-emerald-400/20
                              bg-emerald-400/[0.06]
                              px-3
                              py-1.5
                              text-xs
                              font-medium
                              uppercase
                              tracking-[0.15em]
                              text-emerald-300/80
                            "
                          >
                            Verified
                          </span>
                        )}

                        <span
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-3
                            py-1.5
                            text-xs
                            text-white/30
                          "
                        >
                          {credential.date}
                        </span>
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="relative">
                      <p className="mt-6 text-xs font-medium uppercase tracking-[0.15em] text-blue-400">
                        {config.label}
                      </p>

                      <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
                        {credential.title}
                      </h3>

                      <p className="mt-2 text-sm text-white/40">
                        {credential.organization}
                      </p>

                      <p className="mt-5 text-sm leading-7 text-white/45">
                        {credential.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {credential.skills.map((skill) => (
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
                              text-white/55
                            "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* VERIFIED CREDENTIAL — PINNED TO BOTTOM */}
                    {credential.credentialUrl && (
                      <div
                        className="
                          relative
                          mt-auto
                          flex
                          items-center
                          justify-between
                          gap-4
                          border-t
                          border-white/[0.07]
                          pt-6
                        "
                      >
                        <div className="flex items-center gap-2 text-sm text-white/35">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          <span>Verified Credential</span>
                        </div>

                        <a
                          href={credential.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            whitespace-nowrap
                            text-sm
                            text-white/50
                            transition-colors
                            duration-300
                            hover:text-white
                          "
                        >
                          View credential
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    )}
                  </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}