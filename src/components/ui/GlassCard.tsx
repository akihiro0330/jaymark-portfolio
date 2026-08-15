import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/[0.05]
        shadow-2xl
        shadow-black/20
        backdrop-blur-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}