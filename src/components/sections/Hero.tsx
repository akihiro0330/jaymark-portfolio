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

type HeroProps = {
  introReady?: boolean;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero({
  introReady = true,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* LEFT SIDE */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            {/* Availability */}
            <motion.div
              initial={false}
              animate={
                introReady
                  ? {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: 18,
                      filter: "blur(8px)",
                    }
              }
              transition={{
                duration: 0.55,
                delay: introReady ? 0.05 : 0,
                ease: easeOut,
              }}
              className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/60 backdrop-blur-xl lg:mx-0"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              Available for opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={false}
              animate={
                introReady
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: 35,
                      scale: 0.985,
                      filter: "blur(14px)",
                    }
              }
              transition={{
                duration: 0.85,
                delay: introReady ? 0.12 : 0,
                ease: easeOut,
              }}
              className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.2rem]"
            >
              Building
              <br className="hidden sm:block" />

              <span className="sm:ml-3 lg:ml-0">technology</span>

              <br />

              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                that matters.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={false}
              animate={
                introReady
                  ? {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      y: 20,
                      filter: "blur(8px)",
                    }
              }
              transition={{
                duration: 0.7,
                delay: introReady ? 0.3 : 0,
                ease: easeOut,
              }}
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg lg:mx-0 lg:max-w-xl"
            >
              I'm Jay Mark, a Computer Science professional building software,
              automation, and data-driven solutions at the intersection of
              technology and real-world problems.
            </motion.p>

            {/* CTA Buttons */}
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
                delay: introReady ? 0.46 : 0,
                ease: easeOut,
              }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <a href="#projects">
                <Button>
                  View My Work
                  <ArrowDown size={16} />
                </Button>
              </a>

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
                delay: introReady ? 0.62 : 0,
                ease: easeOut,
              }}
              className="mt-10 flex justify-center gap-3 lg:justify-start"
            >
              <a
                href="https://github.com/akihiro0330"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/jay-mark-bolalaque-/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#contact"
                aria-label="Contact me by email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE — PORTRAIT */}
          <motion.div
            initial={false}
            animate={
              introReady
                ? {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    scale: 0.88,
                    y: 24,
                    filter: "blur(18px)",
                  }
            }
            transition={{
              duration: 1,
              delay: introReady ? 0.18 : 0,
              ease: easeOut,
            }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="group relative w-full max-w-[330px] sm:max-w-[370px] lg:max-w-[420px]">
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
                  delay: introReady ? 0.05 : 0,
                  ease: easeOut,
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[90px] transition-all duration-1000 group-hover:bg-blue-500/30 group-hover:blur-[110px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 top-16 h-44 w-44 rounded-full bg-purple-500/20 blur-[70px] transition-all duration-1000 group-hover:-translate-y-3 group-hover:translate-x-3"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-8 bottom-10 h-36 w-36 rounded-full bg-cyan-400/15 blur-[65px] transition-all duration-1000 group-hover:-translate-x-3 group-hover:translate-y-3"
              />

              <motion.div
                animate={
                  introReady
                    ? {
                        y: [0, -6, 0],
                      }
                    : {
                        y: 0,
                      }
                }
                transition={
                  introReady
                    ? {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : {
                        duration: 0,
                      }
                }
                className="relative aspect-[4/5] overflow-visible rounded-[2.5rem] border border-white/[0.10] bg-white/[0.035] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl motion-reduce:transform-none"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-px rounded-[2.45rem] border border-white/[0.04]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-400/[0.06] via-transparent to-purple-400/[0.08]"
                />

                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-5 h-1 w-12 -translate-x-1/2 rounded-full bg-white/10"
                />

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
                          filter: "blur(0px)",
                        }
                      : {
                          opacity: 0,
                          y: 34,
                          scale: 0.94,
                          filter: "blur(12px)",
                        }
                  }
                  transition={{
                    duration: 0.95,
                    delay: introReady ? 0.35 : 0,
                    ease: easeOut,
                  }}
                  className="pointer-events-none absolute bottom-0 left-1/2 z-10 w-[108%] max-w-none -translate-x-1/2 select-none object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] transition-transform duration-700 group-hover:scale-[1.025]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-24 rounded-b-[2.5rem] bg-gradient-to-t from-[#050816]/80 via-[#050816]/20 to-transparent"
                />
              </motion.div>

              <motion.div
                initial={false}
                animate={
                  introReady
                    ? {
                        opacity: 1,
                        y: [0, 4, 0],
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
                          duration: 0.55,
                          delay: 0.65,
                        },
                        y: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                    : {
                        duration: 0,
                      }
                }
                className="absolute -bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-[#0a0d1a]/80 px-4 py-2 text-xs text-white/50 shadow-xl backdrop-blur-xl motion-reduce:transform-none"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                Software · AI · Data
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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
            delay: introReady ? 1.15 : 0,
            ease: easeOut,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/30 xl:flex"
        >
          <span>Scroll to explore</span>

          <motion.div
            animate={
              introReady
                ? {
                    y: [0, 5, 0],
                  }
                : {
                    y: 0,
                  }
            }
            transition={
              introReady
                ? {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : {
                    duration: 0,
                  }
            }
          >
            <ArrowDown size={15} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
