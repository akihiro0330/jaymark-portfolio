import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav
        className="
          mx-auto
          max-w-6xl
          rounded-2xl
          border
          border-white/10
          bg-black/30
          px-4
          py-3
          shadow-2xl
          shadow-black/20
          backdrop-blur-xl
        "
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="
              text-sm
              font-semibold
              tracking-tight
              text-white
              transition-opacity
              hover:opacity-70
            "
          >
            JAY MARK<span className="text-blue-400">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  rounded-full
                  px-3
                  py-2
                  text-xs
                  text-white/50
                  transition-all
                  duration-300
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="
              hidden
              rounded-full
              bg-white
              px-4
              py-2
              text-xs
              font-medium
              text-black
              transition-all
              duration-300
              hover:bg-white/90
              lg:block
            "
          >
            Let's Talk
          </a>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              text-white/70
              transition-colors
              hover:bg-white/10
              hover:text-white
              lg:hidden
            "
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="border-t border-white/10 pt-3">
                <div className="grid gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="
                        rounded-xl
                        px-3
                        py-3
                        text-sm
                        text-white/60
                        transition-colors
                        hover:bg-white/[0.06]
                        hover:text-white
                      "
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="
                    mt-2
                    block
                    rounded-xl
                    bg-white
                    px-4
                    py-3
                    text-center
                    text-sm
                    font-medium
                    text-black
                  "
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}