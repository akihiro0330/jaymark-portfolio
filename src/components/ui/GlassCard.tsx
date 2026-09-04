import {
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  intensity?: number;
  disableTilt?: boolean;
};

type PointerPosition = {
  x: number;
  y: number;
};

export default function GlassCard({
  children,
  className = "",
  contentClassName = "",
  intensity = 7,
  disableTilt = false,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [pointer, setPointer] =
    useState<PointerPosition>({
      x: 50,
      y: 50,
    });

  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  const [isHovered, setIsHovered] =
    useState(false);

  const [supportsHover, setSupportsHover] =
    useState(false);

  const [reducedMotion, setReducedMotion] =
    useState(false);

  useEffect(() => {
    const hoverQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updatePreferences = () => {
      setSupportsHover(hoverQuery.matches);
      setReducedMotion(motionQuery.matches);
    };

    updatePreferences();

    hoverQuery.addEventListener(
      "change",
      updatePreferences
    );

    motionQuery.addEventListener(
      "change",
      updatePreferences
    );

    return () => {
      hoverQuery.removeEventListener(
        "change",
        updatePreferences
      );

      motionQuery.removeEventListener(
        "change",
        updatePreferences
      );
    };
  }, []);

  const tiltEnabled =
    supportsHover &&
    !reducedMotion &&
    !disableTilt;

  function handleMouseMove(
    event: MouseEvent<HTMLDivElement>
  ) {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const rect =
      card.getBoundingClientRect();

    const localX =
      event.clientX - rect.left;

    const localY =
      event.clientY - rect.top;

    const percentX =
      (localX / rect.width) * 100;

    const percentY =
      (localY / rect.height) * 100;

    setPointer({
      x: percentX,
      y: percentY,
    });

    if (!tiltEnabled) {
      return;
    }

    const normalizedX =
      percentX / 100 - 0.5;

    const normalizedY =
      percentY / 100 - 0.5;

    setRotation({
      x: normalizedY * -intensity,
      y: normalizedX * intensity,
    });
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);

    setPointer({
      x: 50,
      y: 50,
    });

    setRotation({
      x: 0,
      y: 0,
    });
  }

  const cardStyle: CSSProperties = {
    transform:
      tiltEnabled && isHovered
        ? `
          perspective(1200px)
          rotateX(${rotation.x}deg)
          rotateY(${rotation.y}deg)
          translateZ(0)
          scale3d(1.008, 1.008, 1.008)
        `
        : `
          perspective(1200px)
          rotateX(0deg)
          rotateY(0deg)
          translateZ(0)
          scale3d(1, 1, 1)
        `,

    transformStyle: "preserve-3d",

    transition:
      isHovered && tiltEnabled
        ? "transform 100ms ease-out"
        : "transform 550ms cubic-bezier(0.22, 1, 0.36, 1)",
  };

  const liquidStyle: CSSProperties = {
    background: `
      radial-gradient(
        600px circle at ${pointer.x}% ${pointer.y}%,
        rgba(96, 165, 250, 0.16),
        rgba(56, 189, 248, 0.08) 24%,
        rgba(168, 85, 247, 0.06) 42%,
        transparent 68%
      )
    `,
  };

  const glareStyle: CSSProperties = {
    background: `
      radial-gradient(
        420px circle at ${pointer.x}% ${pointer.y}%,
        rgba(255,255,255,0.17),
        rgba(255,255,255,0.055) 25%,
        transparent 62%
      )
    `,
  };

  const borderStyle: CSSProperties = {
    background: `
      radial-gradient(
        450px circle at ${pointer.x}% ${pointer.y}%,
        rgba(125, 211, 252, 0.34),
        rgba(196, 181, 253, 0.16) 32%,
        rgba(255,255,255,0.06) 58%,
        transparent 72%
      )
    `,
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
      className={`
        group
        relative
        isolate
        overflow-hidden
        rounded-[1.75rem]
        border
        border-white/[0.10]
        bg-white/[0.035]
        shadow-[0_24px_80px_rgba(0,0,0,0.22)]
        backdrop-blur-2xl
        will-change-transform

        hover:border-white/[0.16]
        hover:bg-white/[0.045]
        hover:shadow-[0_35px_120px_rgba(0,0,0,0.32)]

        motion-reduce:transform-none
        motion-reduce:transition-none

        ${className}
      `}
    >
      {/* =====================================================
          LIQUID AURORA
      ====================================================== */}
      <div
        aria-hidden="true"
        style={liquidStyle}
        className={`
          pointer-events-none
          absolute
          -inset-[20%]
          z-0
          opacity-40
          blur-2xl
          transition-opacity
          duration-500

          md:opacity-0
          md:group-hover:opacity-100

          motion-reduce:hidden
        `}
      />

      {/* =====================================================
          MOVING GLASS GLARE
      ====================================================== */}
      <div
        aria-hidden="true"
        style={glareStyle}
        className={`
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          opacity-0
          transition-opacity
          duration-300

          md:block
          md:group-hover:opacity-100

          motion-reduce:hidden
        `}
      />

      {/* =====================================================
          REFRACTIVE BORDER
      ====================================================== */}
      <div
        aria-hidden="true"
        style={borderStyle}
        className={`
          pointer-events-none
          absolute
          inset-0
          z-[2]
          hidden
          rounded-[inherit]
          opacity-0
          transition-opacity
          duration-300

          md:block
          md:group-hover:opacity-100

          motion-reduce:hidden
        `}
      />

      {/* Inner dark mask keeps border subtle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-px
          z-[3]
          rounded-[calc(1.75rem-1px)]
          bg-[#090b11]/10
        "
      />

      {/* =====================================================
          TOP REFLECTION
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-[8%]
          top-0
          z-[4]
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/35
          to-transparent
          opacity-60
        "
      />

      {/* =====================================================
          LIQUID BLOBS
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-20
          z-[1]
          h-48
          w-48
          rounded-full
          bg-blue-500/[0.07]
          blur-[60px]
          transition-all
          duration-700

          group-hover:-translate-x-5
          group-hover:translate-y-4
          group-hover:scale-125
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-16
          z-[1]
          h-52
          w-52
          rounded-full
          bg-purple-500/[0.06]
          blur-[70px]
          transition-all
          duration-700

          group-hover:translate-x-6
          group-hover:-translate-y-4
          group-hover:scale-125
        "
      />

      {/* =====================================================
          GLASS NOISE / ATMOSPHERE
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[4]
          opacity-[0.035]
          mix-blend-overlay

          [background-image:radial-gradient(rgba(255,255,255,0.7)_0.5px,transparent_0.5px)]
          [background-size:5px_5px]
        "
      />

      {/* =====================================================
          INNER EDGE
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-px
          z-[5]
          rounded-[calc(1.75rem-1px)]
          border
          border-white/[0.035]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
        "
      />

      {/* =====================================================
          CONTENT DEPTH LAYER
      ====================================================== */}
      <div
        style={{
          transform:
            tiltEnabled && isHovered
              ? "translateZ(28px)"
              : "translateZ(0px)",

          transition:
            "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className={`
          relative
          z-10
          h-full

          motion-reduce:transform-none

          ${contentClassName}
        `}
      >
        {children}
      </div>
    </div>
  );
}