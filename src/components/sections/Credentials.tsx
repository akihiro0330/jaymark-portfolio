import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  FileText,
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

  // Online verification link
  credentialUrl?: string;

  // Local certificate PDF
  certificateFile?: string;

  // Certificate identifier
  certificateId?: string;

  // Optional expiration date
  expiryDate?: string;
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
    type: "certification",
    title: "HIPAA Compliance Training Program",
    organization: "HIPAA Compliance Training",
    date: "January 2026",
    description:
      "Compliance training covering HIPAA fundamentals, the Privacy Rule, the Security Rule, breach notification and enforcement, and HIPAA compliance best practices.",
    skills: [
      "HIPAA Compliance",
      "Privacy Rule",
      "Security Rule",
      "Breach Notification",
      "Healthcare Compliance",
    ],
    certificateFile: "/HIPAA-0029891.pdf",
    certificateId: "HIPAA-0029891",
    expiryDate: "January 2027",
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

        <div
          className="
            mt-20
            grid
            items-stretch
            gap-6
            md:grid-cols-2
          "
        >
          {credentials.map((credential, index) => {
            const config = typeConfig[credential.type];
            const Icon = config.icon;

            const isVerified = Boolean(credential.credentialUrl);
            const hasCertificate = Boolean(credential.certificateFile);
            const hasCredentialFooter = isVerified || hasCertificate;

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
                className="h-full"
              >
                <GlassCard
                  className="
                    h-full
                    p-7
                  "
                  contentClassName="
                    flex
                    h-full
                    min-h-0
                    flex-col
                  "
                >
                  {/* Decorative glow */}
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
                  <div
                    className="
                      relative
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    {/* Icon */}
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

                    {/* Status + Date */}
                    <div
                      className="
                        flex
                        flex-wrap
                        justify-end
                        gap-2
                      "
                    >
                      {/* Externally verified credentials */}
                      {isVerified && (
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

                      {/* PDF certificate */}
                      {hasCertificate && !isVerified && (
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-full
                            border
                            border-blue-400/20
                            bg-blue-400/[0.06]
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.15em]
                            text-blue-300/80
                          "
                        >
                          <FileText size={11} />
                          Certificate
                        </span>
                      )}

                      {/* Date */}
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
                    {/* Credential Type */}
                    <p
                      className="
                        mt-6
                        text-xs
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-blue-400
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
                        text-white
                      "
                    >
                      {credential.title}
                    </h3>

                    {/* Organization */}
                    <p className="mt-2 text-sm text-white/40">
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

                    {/* HIPAA Certificate Details */}
                    {credential.certificateId && (
                      <div
                        className="
                          mt-5
                          flex
                          flex-wrap
                          gap-x-6
                          gap-y-2
                          text-xs
                          text-white/35
                        "
                      >
                        <span>
                          ID:{" "}
                          <span className="text-white/55">
                            {credential.certificateId}
                          </span>
                        </span>

                        {credential.expiryDate && (
                          <span>
                            Expires:{" "}
                            <span className="text-white/55">
                              {credential.expiryDate}
                            </span>
                          </span>
                        )}
                      </div>
                    )}

                    {/* Skills */}
                    <div
                      className="
                        mt-6
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
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
                  </div>

                  {/* Bottom credential area */}
                  {hasCredentialFooter && (
                    <div
                      className="
                        relative
                        mt-auto
                        flex
                        flex-col
                        gap-4
                        border-t
                        border-white/[0.07]
                        pt-6
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                      "
                    >
                      {/* Google / AAPC verification */}
                      {isVerified && (
                        <>
                          <div
                            className="
                              flex
                              items-center
                              gap-2
                              text-sm
                              text-white/35
                            "
                          >
                            <span
                              className="
                                h-1.5
                                w-1.5
                                shrink-0
                                rounded-full
                                bg-blue-400
                              "
                            />

                            <span>Verified Credential</span>
                          </div>

                          <a
                            href={credential.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              inline-flex
                              shrink-0
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
                        </>
                      )}

                      {/* HIPAA PDF certificate */}
                      {hasCertificate && !isVerified && (
                        <>
                          <div
                            className="
                              flex
                              items-center
                              gap-2
                              text-sm
                              text-white/35
                            "
                          >
                            <span
                              className="
                                h-1.5
                                w-1.5
                                shrink-0
                                rounded-full
                                bg-blue-400
                              "
                            />

                            <span>
                              Certificate ID: {credential.certificateId}
                            </span>
                          </div>

                          <a
                            href={credential.certificateFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              inline-flex
                              shrink-0
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
                            View certificate
                            <ExternalLink size={15} />
                          </a>
                        </>
                      )}
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