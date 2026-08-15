import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
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
    accent: "Education",
  },
  certification: {
    icon: Award,
    label: "Certification",
    accent: "Verified Credential",
  },
  training: {
    icon: ShieldCheck,
    label: "Professional Development",
    accent: "Training",
  },
};

function CredentialIcon({
  type,
}: {
  type: Credential["type"];
}) {
  const Icon = typeConfig[type].icon;

  return (
    <div
      className="
        relative
        flex
        h-12
        w-12
        shrink-0
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

      {type === "certification" && (
        <span
          className="
            absolute
            -right-1
            -top-1
            flex
            h-4
            w-4
            items-center
            justify-center
            rounded-full
            border
            border-[#050816]
            bg-emerald-400
            text-[#050816]
          "
        >
          <CheckCircle2 size={10} strokeWidth={3} />
        </span>
      )}
    </div>
  );
}

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="relative px-6 py-32"
      aria-labelledby="credentials-heading"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div id="credentials-heading">
          <SectionHeading
            eyebrow="Credentials"
            title="Learning never stops."
            description="Education, certifications, and professional development that continue to shape my technical journey."
          />
        </div>

        {/* Credentials Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {credentials.map((credential, index) => {
            const config = typeConfig[credential.type];
            const isCertification = credential.type === "certification";

            return (
              <motion.div
                key={credential.title}
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
              >
                <GlassCard
                  className={`
                    group
                    relative
                    h-full
                    overflow-hidden
                    p-7
                    sm:p-8
                    ${
                      isCertification
                        ? "border-blue-400/[0.15]"
                        : ""
                    }
                  `}
                >
                  {/* Aurora Accent */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-48
                      w-48
                      rounded-full
                      bg-blue-500/[0.07]
                      blur-3xl
                      transition-all
                      duration-700
                      group-hover:bg-blue-500/[0.16]
                      group-hover:scale-125
                    "
                  />

                  {/* Secondary Aurora */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-24
                      -left-24
                      h-40
                      w-40
                      rounded-full
                      bg-purple-500/[0.04]
                      blur-3xl
                      transition-all
                      duration-700
                      group-hover:bg-purple-500/[0.12]
                    "
                  />

                  <div className="relative">

                    {/* Top Row */}
                    <div className="flex items-start justify-between gap-4">

                      <CredentialIcon type={credential.type} />

                      <div className="flex items-center gap-2">

                        {isCertification && (
                          <span
                            className="
                              hidden
                              rounded-full
                              border
                              border-emerald-400/20
                              bg-emerald-400/[0.05]
                              px-3
                              py-1.5
                              text-[10px]
                              font-medium
                              uppercase
                              tracking-[0.12em]
                              text-emerald-400/70
                              sm:block
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

                    {/* Category */}
                    <p
                      className="
                        mt-6
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-blue-400/80
                      "
                    >
                      {config.label}
                    </p>

                    {/* Title */}
                    <h3
                      className="
                        mt-3
                        text-xl
                        font-semibold
                        leading-snug
                        tracking-tight
                        text-white
                        sm:text-2xl
                      "
                    >
                      {credential.title}
                    </h3>

                    {/* Organization */}
                    <p
                      className="
                        mt-2
                        text-sm
                        font-medium
                        text-white/40
                      "
                    >
                      {credential.organization}
                    </p>

                    {/* Description */}
                    <p
                      className="
                        mt-5
                        text-sm
                        leading-7
                        text-white/45
                      "
                    >
                      {credential.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-7">
                      <p
                        className="
                          mb-3
                          text-[10px]
                          uppercase
                          tracking-[0.16em]
                          text-white/20
                        "
                      >
                        Areas covered
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {credential.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{
                              y: -2,
                            }}
                            transition={{
                              duration: 0.2,
                            }}
                            className="
                              inline-flex
                              cursor-default
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
                              hover:text-white
                            "
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
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
                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-xs
                          text-white/25
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-blue-400/70
                          "
                        />

                        {config.accent}
                      </div>

                      {credential.credentialUrl && (
                        <a
                          href={credential.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            text-xs
                            font-medium
                            text-white/45
                            transition-colors
                            duration-300
                            hover:text-white
                          "
                        >
                          View credential
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>

                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
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
                  Continuous development
                </p>

                <p
                  className="
                    mt-2
                    max-w-2xl
                    text-sm
                    leading-6
                    text-white/50
                  "
                >
                  Combining formal education, professional certifications,
                  and hands-on training to continuously expand my technical
                  capabilities.
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