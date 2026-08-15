import { motion } from "framer-motion";
import {
  ArrowUp,
  Heart,
} from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/akihiro0330",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jay-mark-bolalaque-/",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/onlyfanss.jayyy",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/onlyfanss.jayyy",
    icon: FaInstagram,
  },
];

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] px-6">

      {/* Ambient Aurora */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-64
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/[0.04]
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* Main Footer */}
        <div
          className="
            flex
            flex-col
            gap-12
            py-14
            md:flex-row
            md:items-start
            md:justify-between
          "
        >

          {/* Brand */}
          <div className="max-w-sm">

            <motion.a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                scrollToTop();
              }}
              whileHover={{ y: -2 }}
              className="
                inline-block
                text-2xl
                font-bold
                tracking-[-0.05em]
                text-white
              "
            >
              JAY<span className="text-blue-400">.</span>
            </motion.a>

            <p
              className="
                mt-4
                max-w-xs
                text-sm
                leading-6
                text-white/35
              "
            >
              Computer Science professional focused on software development,
              AI automation, data, and meaningful technology solutions.
            </p>

            {/* Availability */}
            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.03]
                px-3
                py-1.5
                text-xs
                text-white/40
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

              Available for opportunities
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/25
              "
            >
              Navigation
            </p>

            <nav className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    text-sm
                    text-white/40
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/25
              "
            >
              Connect
            </p>

            <div className="mt-5 flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      text-white/40
                      transition-all
                      duration-300
                      hover:border-white/[0.15]
                      hover:bg-white/[0.07]
                      hover:text-white
                    "
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>

            <a
              href="mailto:jaymark.bolalaque@icloud.com"
              className="
                mt-5
                inline-block
                text-sm
                text-white/40
                transition-colors
                duration-300
                hover:text-white
              "
            >
              jaymark.bolalaque@icloud.com
            </a>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-px bg-white/[0.07]" />

        {/* Bottom Bar */}
        <div
          className="
            flex
            flex-col
            gap-5
            py-6
            text-xs
            text-white/25
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Copyright */}
          <p>
            © {currentYear} Jay Mark Bolalaque. All rights reserved.
          </p>

          {/* Built With */}
          <p className="flex items-center gap-1.5">
            Built with
            <Heart
              size={12}
              className="text-blue-400/60"
              fill="currentColor"
            />
            React & TypeScript.
          </p>

          {/* Back to Top */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            aria-label="Back to top"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              self-start
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.03]
              text-white/40
              transition-all
              duration-300
              hover:border-white/[0.15]
              hover:bg-white/[0.08]
              hover:text-white
              sm:self-auto
            "
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}