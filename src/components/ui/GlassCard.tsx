import {
  type MouseEvent,
  type ReactNode,
  useState,
} from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setMousePosition({
      x,
      y,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    setMousePosition({
      x: 50,
      y: 50,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        backdrop-blur-xl
        transition-all
        duration-500
        ease-out
        hover:-translate-y-1
        hover:border-white/[0.18]
        hover:bg-white/[0.055]
        hover:shadow-[0_25px_80px_rgba(0,0,0,0.25)]
        motion-reduce:transform-none
        motion-reduce:transition-none
        ${className}
      `}
    >
      {/* Interactive Aurora */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          md:block
          motion-reduce:hidden
        "
        style={{
          background: `radial-gradient(
            500px circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(96, 165, 250, 0.11),
            rgba(168, 85, 247, 0.06) 30%,
            transparent 65%
          )`,
        }}
      />

      {/* Static mobile glass glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-blue-500/[0.04]
          blur-3xl
          md:hidden
        "
      />

      {/* Soft inner highlight */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-px
          rounded-[23px]
          border
          border-transparent
          transition-all
          duration-500
          group-hover:border-white/[0.06]
          motion-reduce:transition-none
        "
      />

      {/* Content */}
      <div
        className={`
          relative
          z-10
          transition-transform
          duration-500
          ease-out
          ${isHovered ? "scale-[1.005]" : "scale-100"}
          motion-reduce:transform-none
          motion-reduce:transition-none
        `}
      >
        {children}
      </div>
    </div>
  );
}