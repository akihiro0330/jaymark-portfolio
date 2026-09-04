import {
  type ReactNode,
} from "react";

import {
  motion,
} from "framer-motion";

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

type HeroProps = {
  introReady?: boolean;
};

const easeOut = [
  0.22,
  1,
  0.36,
  1,
] as const;

export default function Hero({
  introReady = true,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        max-w-full
        items-start
        overflow-hidden

        px-4
        pb-[calc(10rem+env(safe-area-inset-bottom))]
        pt-24

        sm:px-6
        sm:pb-32
        sm:pt-28

        lg:min-h-screen
        lg:items-center
        lg:pb-24
        lg:pt-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          min-w-0
          max-w-6xl

          xl:max-w-7xl
        "
      >
        <div
          className="
            grid
            min-w-0
            items-center

            gap-11

            sm:gap-14

            lg:grid-cols-[1.12fr_0.88fr]
            lg:gap-12

            xl:grid-cols-[1.08fr_0.92fr]
            xl:gap-16
          "
        >
          {/* =====================================
              LEFT SIDE
          ====================================== */}

          <div
            className="
              order-2
              min-w-0
              max-w-full
              text-center

              lg:order-1
              lg:text-left
            "
          >
            {/* Availability */}

            <motion.div
              initial={false}
              animate={
                introReady
                  ? {
                      opacity: 1,
                      y: 0,
                      filter:
                        "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: 18,
                      filter:
                        "blur(8px)",
                    }
              }
              transition={{
                duration: 0.55,
                delay: introReady
                  ? 0.05
                  : 0,
                ease: easeOut,
              }}
              className="
                mx-auto
                mb-6
                inline-flex
                max-w-full
                items-center
                gap-2
                whitespace-nowrap

                rounded-full

                border
                border-white/10

                bg-white/[0.05]

                px-4
                py-2

                text-[13px]
                text-white/60

                backdrop-blur-xl

                sm:text-sm

                lg:mx-0
              "
            >
              <span
                className="
                  h-2
                  w-2
                  shrink-0

                  rounded-full

                  bg-emerald-400

                  shadow-[0_0_12px_rgba(52,211,153,0.8)]
                "
              />

              <span>
                Available for opportunities
              </span>
            </motion.div>

            {/* =====================================
                HEADING
            ====================================== */}

            <motion.h1
              initial={false}
              animate={
                introReady
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter:
                        "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: 35,
                      scale: 0.985,
                      filter:
                        "blur(14px)",
                    }
              }
              transition={{
                duration: 0.85,
                delay: introReady
                  ? 0.12
                  : 0,
                ease: easeOut,
              }}
              className="
                mx-auto
                max-w-full

                text-center
                font-semibold
                tracking-[-0.05em]

                text-[clamp(2.8rem,12vw,3.5rem)]
                leading-[0.98]

                sm:text-6xl
                sm:leading-[1]

                md:text-7xl

                lg:mx-0
                lg:text-left
                lg:text-[3.85rem]
                lg:leading-[0.98]

                xl:text-[4.4rem]

                2xl:text-[4.8rem]
              "
            >
              {/* =================================
                  MOBILE
              ================================== */}

              <span className="block sm:hidden">
                <span className="block">
                  Building
                </span>

                <span className="block">
                  technology
                </span>

                <span
                  className="
                    block

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
              </span>

              {/* =================================
                  TABLET + DESKTOP
              ================================== */}

              <span className="hidden sm:block">
                <span
                  className="
                    block
                    whitespace-nowrap
                  "
                >
                  Building{" "}
                  technology
                </span>

                <span
                  className="
                    block

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
              </span>
            </motion.h1>

            {/* =====================================
                DESCRIPTION
            ====================================== */}

            <motion.p
              initial={false}
              animate={
                introReady
                  ? {
                      opacity: 1,
                      y: 0,
                      filter:
                        "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: 20,
                      filter:
                        "blur(8px)",
                    }
              }
              transition={{
                duration: 0.7,
                delay: introReady
                  ? 0.3
                  : 0,
                ease: easeOut,
              }}
              className="
                mx-auto
                mt-7
                max-w-[34rem]

                px-1

                text-[15px]
                leading-7
                text-white/50

                sm:mt-8
                sm:max-w-2xl
                sm:px-0
                sm:text-lg
                sm:leading-8

                lg:mx-0
                lg:max-w-xl
              "
            >
              I'm Jay Mark, a Computer Science
              professional building software,
              automation, and data-driven solutions
              at the intersection of technology and
              real-world problems.
            </motion.p>

            {/* =====================================
                CTA BUTTONS
            ====================================== */}

            <motion.div
              initial={false}
              animate={
                introReady
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              transition={{
                duration: 0.65,
                delay: introReady
                  ? 0.46
                  : 0,
                ease: easeOut,
              }}
              className="
                mt-9
                flex
                w-full
                flex-col
                items-center
                justify-center
                gap-3

                sm:mt-10
                sm:w-auto
                sm:flex-row

                lg:justify-start
              "
            >
              <a
                href="#projects"
                className="
                  w-full
                  max-w-[280px]

                  sm:w-auto
                  sm:max-w-none
                "
              >
                <Button>
                  View My Work

                  <ArrowDown
                    size={16}
                  />
                </Button>
              </a>

              <a
                href="/JAY-MARK-BOLALAQUE-PROFESSIONAL-CV.pdf"
                download="JAY-MARK-BOLALAQUE-PROFESSIONAL-CV.pdf"
                className="
                  w-full
                  max-w-[280px]

                  sm:w-auto
                  sm:max-w-none
                "
              >
                <Button
                  variant="secondary"
                >
                  Download CV

                  <Download
                    size={16}
                  />
                </Button>
              </a>
            </motion.div>

            {/* =====================================
                SOCIAL LINKS
            ====================================== */}

            <motion.div
              initial={false}
              animate={
                introReady
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 12,
                    }
              }
              transition={{
                duration: 0.7,
                delay: introReady
                  ? 0.62
                  : 0,
                ease: easeOut,
              }}
              className="
                mt-8
                flex
                justify-center
                gap-3

                sm:mt-10

                lg:justify-start
              "
            >
              <SocialLink
                href="https://github.com/akihiro0330"
                label="GitHub"
              >
                <FaGithub
                  size={18}
                />
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/in/jay-mark-bolalaque-/"
                label="LinkedIn"
              >
                <FaLinkedinIn
                  size={18}
                />
              </SocialLink>

              <SocialLink
                href="#contact"
                label="Contact me by email"
                external={false}
              >
                <Mail size={18} />
              </SocialLink>
            </motion.div>
          </div>

          {/* =====================================
              RIGHT SIDE — PORTRAIT
          ====================================== */}

          <motion.div
            initial={false}
            animate={
              introReady
                ? {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    filter:
                      "blur(0px)",
                  }
                : {
                    opacity: 0,
                    scale: 0.88,
                    y: 24,
                    filter:
                      "blur(18px)",
                  }
            }
            transition={{
              duration: 1,
              delay: introReady
                ? 0.18
                : 0,
              ease: easeOut,
            }}
            className="
              order-1
              flex
              min-w-0
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

                max-w-[285px]

                min-[390px]:max-w-[300px]

                sm:max-w-[350px]

                md:max-w-[370px]

                lg:max-w-[390px]

                xl:max-w-[420px]
              "
            >
              {/* =====================================
                  MAIN GLOW
              ====================================== */}

              <motion.div
                aria-hidden="true"
                initial={false}
                animate={
                  introReady
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : {
                        opacity: 0,
                        scale: 0.35,
                      }
                }
                transition={{
                  duration: 1.15,
                  delay: introReady
                    ? 0.05
                    : 0,
                  ease: easeOut,
                }}
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

                  blur-[80px]

                  transition-all
                  duration-1000

                  group-hover:bg-blue-500/30

                  sm:blur-[90px]

                  lg:group-hover:blur-[110px]
                "
              />

              {/* Purple glow */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute

                  -right-6
                  top-14

                  h-32
                  w-32

                  rounded-full

                  bg-purple-500/20

                  blur-[60px]

                  transition-all
                  duration-1000

                  sm:-right-10
                  sm:top-16
                  sm:h-44
                  sm:w-44
                  sm:blur-[70px]

                  lg:group-hover:-translate-y-3
                  lg:group-hover:translate-x-3
                "
              />

              {/* Cyan glow */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute

                  -left-5
                  bottom-8

                  h-28
                  w-28

                  rounded-full

                  bg-cyan-400/15

                  blur-[55px]

                  transition-all
                  duration-1000

                  sm:-left-8
                  sm:bottom-10
                  sm:h-36
                  sm:w-36
                  sm:blur-[65px]

                  lg:group-hover:-translate-x-3
                  lg:group-hover:translate-y-3
                "
              />

              {/* =====================================
                  PORTRAIT CARD
              ====================================== */}

              <motion.div
                animate={
                  introReady
                    ? {
                        y: [
                          0,
                          -6,
                          0,
                        ],
                      }
                    : {
                        y: 0,
                      }
                }
                transition={
                  introReady
                    ? {
                        duration: 5,
                        repeat:
                          Infinity,
                        ease:
                          "easeInOut",
                      }
                    : {
                        duration: 0,
                      }
                }
                className="
                  relative

                  aspect-[4/5]

                  overflow-visible

                  rounded-[2rem]

                  border
                  border-white/[0.10]

                  bg-white/[0.035]

                  shadow-[0_30px_100px_rgba(0,0,0,0.35)]

                  backdrop-blur-2xl

                  motion-reduce:transform-none

                  sm:rounded-[2.5rem]
                "
              >
                {/* Inner border */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-px

                    rounded-[1.95rem]

                    border
                    border-white/[0.04]

                    sm:rounded-[2.45rem]
                  "
                />

                {/* Glass gradient */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    overflow-hidden

                    rounded-[2rem]

                    bg-gradient-to-br
                    from-blue-400/[0.06]
                    via-transparent
                    to-purple-400/[0.08]

                    sm:rounded-[2.5rem]
                  "
                />

                {/* Top indicator */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-4

                    h-1
                    w-10

                    -translate-x-1/2

                    rounded-full

                    bg-white/10

                    sm:top-5
                    sm:w-12
                  "
                />

                {/* Portrait */}

                <motion.img
                  src="/jay-mark-bolalaque.png"
                  alt="Jay Mark Bolalaque"
                  draggable={false}
                  initial={false}
                  animate={
                    introReady
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          filter:
                            "blur(0px)",
                        }
                      : {
                          opacity: 0,
                          y: 34,
                          scale: 0.94,
                          filter:
                            "blur(12px)",
                        }
                  }
                  transition={{
                    duration: 0.95,
                    delay: introReady
                      ? 0.35
                      : 0,
                    ease: easeOut,
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

                    lg:group-hover:scale-[1.025]
                  "
                />

                {/* Bottom fade */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-20

                    h-20

                    rounded-b-[2rem]

                    bg-gradient-to-t
                    from-[#050816]/80
                    via-[#050816]/20
                    to-transparent

                    sm:h-24
                    sm:rounded-b-[2.5rem]
                  "
                />
              </motion.div>

              {/* =====================================
                  FLOATING SKILL BADGE
              ====================================== */}

              <motion.div
                initial={false}
                animate={
                  introReady
                    ? {
                        opacity: 1,
                        y: [
                          0,
                          4,
                          0,
                        ],
                      }
                    : {
                        opacity: 0,
                        y: 10,
                      }
                }
                transition={
                  introReady
                    ? {
                        opacity: {
                          duration:
                            0.55,
                          delay:
                            0.65,
                        },

                        y: {
                          duration: 4,
                          repeat:
                            Infinity,
                          ease:
                            "easeInOut",
                        },
                      }
                    : {
                        duration: 0,
                      }
                }
                className="
                  absolute
                  -bottom-3
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

                  bg-[#0a0d1a]/85

                  px-3.5
                  py-2

                  text-[11px]
                  text-white/50

                  shadow-xl
                  backdrop-blur-xl

                  motion-reduce:transform-none

                  sm:-bottom-4
                  sm:px-4
                  sm:text-xs
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

        {/* =====================================
            DESKTOP SCROLL INDICATOR
        ====================================== */}

        <motion.div
          initial={false}
          animate={
            introReady
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 10,
                }
          }
          transition={{
            duration: 0.7,
            delay: introReady
              ? 1.15
              : 0,
            ease: easeOut,
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
          <span>
            Scroll to explore
          </span>

          <motion.div
            animate={
              introReady
                ? {
                    y: [
                      0,
                      5,
                      0,
                    ],
                  }
                : {
                    y: 0,
                  }
            }
            transition={
              introReady
                ? {
                    duration: 1.5,
                    repeat:
                      Infinity,
                    ease:
                      "easeInOut",
                  }
                : {
                    duration: 0,
                  }
            }
          >
            <ArrowDown
              size={15}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===========================================
   SOCIAL LINK
=========================================== */

function SocialLink({
  href,
  label,
  children,
  external = true,
}: {
  href: string;
  label: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={
        external
          ? "_blank"
          : undefined
      }
      rel={
        external
          ? "noopener noreferrer"
          : undefined
      }
      aria-label={label}
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

        backdrop-blur-xl

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/10
        hover:text-white

        sm:h-10
        sm:w-10
      "
    >
      {children}
    </a>
  );
}