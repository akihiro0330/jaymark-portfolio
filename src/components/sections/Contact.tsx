import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
};

const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "jaymark.bolalaque@icloud.com",
    href: "mailto:jaymark.bolalaque@icloud.com",
    icon: <Mail size={19} />,
  },
  {
    label: "Phone",
    value: "+63 927 423 5045",
    href: "tel:+639274235045",
    icon: <Phone size={19} />,
  },
  {
    label: "LinkedIn",
    value: "jay-mark-bolalaque",
    href: "https://www.linkedin.com/in/jay-mark-bolalaque-/",
    icon: <FaLinkedinIn size={18} />,
  },
  {
    label: "GitHub",
    value: "akihiro0330",
    href: "https://github.com/akihiro0330",
    icon: <FaGithub size={19} />,
  },
  {
    label: "Facebook",
    value: "onlyfanss.jayyy",
    href: "https://www.facebook.com/onlyfanss.jayyy",
    icon: <FaFacebookF size={18} />,
  },
  {
    label: "Instagram",
    value: "@onlyfanss.jayyy",
    href: "https://www.instagram.com/onlyfanss.jayyy",
    icon: <FaInstagram size={19} />,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.06]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something meaningful."
          description="Have an opportunity, project, or idea in mind? I'd love to hear from you."
        />

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <GlassCard
            className="
              group
              relative
              overflow-hidden
              p-8
              sm:p-12
            "
          >
            {/* Aurora effects */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-72
                w-72
                rounded-full
                bg-blue-500/[0.08]
                blur-[80px]
                transition-all
                duration-1000
                group-hover:scale-125
                group-hover:bg-blue-500/[0.16]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-32
                h-72
                w-72
                rounded-full
                bg-purple-500/[0.06]
                blur-[80px]
                transition-all
                duration-1000
                group-hover:scale-125
                group-hover:bg-purple-500/[0.12]
              "
            />

            <div className="relative">

              {/* CTA header */}
              <div
                className="
                  flex
                  flex-col
                  gap-8
                  md:flex-row
                  md:items-end
                  md:justify-between
                "
              >
                <div className="max-w-2xl">
                  <p
                    className="
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-blue-400
                    "
                  >
                    Open to opportunities
                  </p>

                  <h3
                    className="
                      mt-4
                      text-3xl
                      font-semibold
                      tracking-[-0.03em]
                      text-white
                      sm:text-4xl
                      md:text-5xl
                    "
                  >
                    Let's talk.
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-xl
                      text-sm
                      leading-7
                      text-white/45
                      sm:text-base
                    "
                  >
                    Whether you're looking for a software developer,
                    AI automation enthusiast, data-focused problem solver,
                    or someone who understands healthcare operations,
                    feel free to reach out.
                  </p>
                </div>

                {/* Primary CTA */}
                <motion.a
                  href="mailto:jaymark.bolalaque@icloud.com"
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    inline-flex
                    shrink-0
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-black
                    shadow-[0_0_30px_rgba(255,255,255,0.08)]
                    transition-all
                    duration-300
                    hover:shadow-[0_0_40px_rgba(96,165,250,0.2)]
                  "
                >
                  Start a conversation
                  <ArrowUpRight size={17} />
                </motion.a>
              </div>

              {/* Divider */}
              <div className="my-10 h-px bg-white/[0.07]" />

              {/* Contact grid */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {contactItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      group/contact
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      p-4
                      transition-all
                      duration-300
                      hover:border-white/[0.15]
                      hover:bg-white/[0.06]
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.05]
                        text-white/50
                        transition-all
                        duration-300
                        group-hover/contact:border-blue-400/20
                        group-hover/contact:bg-blue-400/[0.08]
                        group-hover/contact:text-blue-400
                      "
                    >
                      {item.icon}
                    </div>

                    {/* Information */}
                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.15em]
                          text-white/25
                        "
                      >
                        {item.label}
                      </p>

                      <p
                        className="
                          mt-1
                          truncate
                          text-sm
                          text-white/60
                          transition-colors
                          duration-300
                          group-hover/contact:text-white
                        "
                      >
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="
                        shrink-0
                        text-white/20
                        transition-all
                        duration-300
                        group-hover/contact:-translate-y-0.5
                        group-hover/contact:translate-x-0.5
                        group-hover/contact:text-white/60
                      "
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}