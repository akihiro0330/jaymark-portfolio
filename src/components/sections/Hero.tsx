import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-6
        pb-20
        pt-32
      "
    >
      <div className="mx-auto w-full max-w-6xl">

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-10
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
              order-2
              text-center
              lg:order-1
              lg:text-left
            "
          >
            {/* Availability */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
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
                lg:mx-0
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_12px_rgba(52,211,153,0.8)]
                "
              />

              Available for opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="
                text-5xl
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
                sm:text-6xl
                md:text-7xl
                lg:text-[5.2rem]
              "
            >
              Building
              <br className="hidden sm:block" />

              <span className="sm:ml-3 lg:ml-0">
                technology
              </span>

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  via-purple-400
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                that matters.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-white/50
                sm:text-lg
                lg:mx-0
                lg:max-w-xl
              "
            >
              I'm Jay Mark, a Computer Science professional building
              software, automation, and data-driven solutions at the
              intersection of technology and real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="
                mt-10
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
                lg:justify-start
              "
            >
              {/* View Work */}
              <a href="#projects">
                <Button>
                  View My Work
                  <ArrowDown size={16} />
                </Button>
              </a>

              {/* Download CV */}
              <a
                href="/JAY-MARK-BOLALAQUE-PROFESSIONAL-CV.pdf"
                download="JAY-MARK-BOLALAQUE-PROFESSIONAL-CV.pdf"
              >
                <Button variant="secondary">
                  Download CV
                  <Download size={16} />
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="
                mt-10
                flex
                justify-center
                gap-3
                lg:justify-start
              "
            >
              {/* GitHub */}
              <a
                href="https://github.com/akihiro0330"
                target="_blank"
                rel="noopener noreferrer"
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
                  hover:border-white/20
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
                rel="noopener noreferrer"
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
                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <FaLinkedinIn size={18} />
              </a>

              {/* Email */}
              <a
                href="#contact"
                aria-label="Contact me by email"
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
                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE — PORTRAIT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="
              order-1
              flex
              justify-center
              lg:order-2
              lg:justify-end
            "
          >
            <div
              className="
                group
                relative
                w-full
                max-w-[330px]
                sm:max-w-[370px]
                lg:max-w-[420px]
              "
            >
              {/* Large background glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[85%]
                  w-[85%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-blue-500/20
                  blur-[90px]
                  transition-all
                  duration-1000
                  group-hover:bg-blue-500/30
                  group-hover:blur-[110px]
                "
              />

              {/* Purple glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  top-16
                  h-44
                  w-44
                  rounded-full
                  bg-purple-500/20
                  blur-[70px]
                  transition-all
                  duration-1000
                  group-hover:translate-x-3
                  group-hover:-translate-y-3
                "
              />

              {/* Cyan glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-8
                  bottom-10
                  h-36
                  w-36
                  rounded-full
                  bg-cyan-400/15
                  blur-[65px]
                  transition-all
                  duration-1000
                  group-hover:-translate-x-3
                  group-hover:translate-y-3
                "
              />

              {/* Glass background card */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  aspect-[4/5]
                  overflow-visible
                  rounded-[2.5rem]
                  border
                  border-white/[0.10]
                  bg-white/[0.035]
                  shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                  backdrop-blur-2xl
                  motion-reduce:transform-none
                "
              >
                {/* Inner highlight */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-px
                    rounded-[2.45rem]
                    border
                    border-white/[0.04]
                  "
                />

                {/* Decorative gradient */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    overflow-hidden
                    rounded-[2.5rem]
                    bg-gradient-to-br
                    from-blue-400/[0.06]
                    via-transparent
                    to-purple-400/[0.08]
                  "
                />

                {/* Decorative top pill */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-5
                    h-1
                    w-12
                    -translate-x-1/2
                    rounded-full
                    bg-white/10
                  "
                />

                {/* Portrait */}
                <motion.img
                  src="/jay-mark-bolalaque.png"
                  alt="Jay Mark Bolalaque"
                  draggable={false}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.45,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    z-10
                    w-[108%]
                    max-w-none
                    -translate-x-1/2
                    select-none
                    object-contain
                    drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]
                    transition-transform
                    duration-700
                    group-hover:scale-[1.025]
                  "
                />

                {/* Bottom glass reflection */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-20
                    h-24
                    rounded-b-[2.5rem]
                    bg-gradient-to-t
                    from-[#050816]/80
                    via-[#050816]/20
                    to-transparent
                  "
                />
              </motion.div>

              {/* Floating status badge */}
              <motion.div
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-4
                  left-1/2
                  z-30
                  flex
                  -translate-x-1/2
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-white/10
                  bg-[#0a0d1a]/80
                  px-4
                  py-2
                  text-xs
                  text-white/50
                  shadow-xl
                  backdrop-blur-xl
                  motion-reduce:transform-none
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

                Software · AI · Data
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
          }}
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
            xl:flex
          "
        >
          <span>Scroll to explore</span>

          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
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