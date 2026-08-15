import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Copy,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

const email = "jaymark.bolalaque@icloud.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something meaningful."
          description="Whether it's a software project, automation opportunity, or simply a conversation about technology, I'd be happy to connect."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <GlassCard
            className="
              relative
              overflow-hidden
              p-8
              sm:p-12
            "
          >
            {/* Background effects */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-64
                w-64
                -translate-x-1/2
                rounded-full
                bg-blue-500/10
                blur-[100px]
              "
            />

            <div className="relative text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  text-blue-400
                "
              >
                <Mail size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Start a conversation
              </h3>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                I'm always interested in learning, building, and connecting
                with people working on interesting problems.
              </p>

              {/* Email */}
              <div
                className="
                  mx-auto
                  mt-8
                  flex
                  max-w-xl
                  flex-col
                  items-center
                  gap-3
                  sm:flex-row
                  sm:justify-center
                "
              >
                <a
                  href={`mailto:${email}`}
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-5
                    text-sm
                    text-white/70
                    transition-all
                    duration-300
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  {email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-5
                    text-sm
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    hover:bg-white/90
                  "
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied" : "Copy Email"}
                </button>
              </div>

              {/* Social links */}
              <div className="mt-10 flex justify-center gap-3">
                <a
                  href="https://github.com/akihiro0330/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-white/50
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/jay-mark-bolalaque-/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-white/50
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  <FaLinkedinIn size={17} />
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}