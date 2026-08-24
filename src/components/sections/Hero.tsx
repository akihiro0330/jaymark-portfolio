import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pb-20 pt-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mx-auto
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              px-4
              py-2
              text-sm
              text-white/60
              backdrop-blur-xl
            "
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Available for opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="
              text-5xl
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Building technology
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              that matters.
            </span>
          </motion.h1>

          {/* Description */}
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-white/50
                sm:text-lg
            "
        >
            I'm Jay Mark, a Computer Science professional building software,
            automation, and data-driven solutions at the intersection of
            technology and real-world problems.
        </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {/* View My Work */}
            <a href="#projects">
              <Button>
                View My Work
                <ArrowDown size={16} />
              </Button>
            </a>

            {/* Download CV */}
            <a
              href="\JAY-MARK-BOLALAQUE-PROFESSIONAL-CV.pdf"
              download="JAY-MARK-BOLALAQUE-PROFESSIONAL-CV.pdf"
            >
              <Button variant="secondary">
                Download CV
                <Download size={16} />
              </Button>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex justify-center gap-3"
          >
            {/* GitHub */}
            <a
              href="https://github.com/akihiro0330"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
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
                text-white/50
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/10
                hover:text-white
              "
            >
              <FaGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jay-mark-bolalaque-/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
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
                text-white/50
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/10
                hover:text-white
              "
            >
              <FaLinkedinIn size={18} />
            </a>

            {/* Email */}
            <a
              href="#contact"
              aria-label="Email"
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
                text-white/50
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/10
                hover:text-white
              "
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="
            absolute
            bottom-8
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-xs
            text-white/30
            sm:flex
          "
        >
          <span>Scroll to explore</span>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={15} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}