import { motion } from "framer-motion";
import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        `
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-full
          px-6
          py-3
          text-sm
          font-medium
          transition-all
          duration-300
        `,
        variant === "primary"
          ? `
            bg-white
            text-black
            shadow-lg
            shadow-white/10
            hover:bg-white/90
          `
          : `
            border
            border-white/10
            bg-white/[0.06]
            text-white
            backdrop-blur-xl
            hover:bg-white/10
          `,
      )}
    >
      {children}
    </motion.button>
  );
}