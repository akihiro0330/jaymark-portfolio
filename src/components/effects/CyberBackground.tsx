import { useEffect, useState } from "react";

const dataLeft = [
  "0x4A4159",
  "01001010",
  "SYS::CORE",
  "A7F29C",
  "00110101",
  "NET::OK",
  "FF02A1",
  "10110110",
  "UI::READY",
  "7B91CF",
];

const dataRight = [
  "SECURE",
  "0xFF29",
  "11001010",
  "SYS::JAY",
  "00AF91",
  "ACTIVE",
  "10101101",
  "F8A210",
  "ONLINE",
  "01101001",
];

export default function CyberBackground() {
  const [pointer, setPointer] = useState({
    x: 50,
    y: 30,
  });

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (!media.matches) {
      return;
    }

    function handlePointerMove(
      event: PointerEvent
    ) {
      setPointer({
        x:
          (event.clientX /
            window.innerWidth) *
          100,

        y:
          (event.clientY /
            window.innerHeight) *
          100,
      });
    }

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
    >
      {/* Base technical grid */}
      <div className="cyber-main-grid absolute inset-0" />

      {/* Larger secondary grid */}
      <div className="cyber-large-grid absolute inset-0" />

      {/* Perspective floor near Hero */}
      <div
        className="
          cyber-perspective-grid
          absolute
          left-1/2
          top-[300px]
          h-[700px]
          w-[140%]
          -translate-x-1/2
          opacity-30
        "
      />

      {/* Cursor-following emerald light */}
      <div
        className="
          absolute
          inset-0
          hidden
          transition-opacity
          duration-500
          md:block
        "
        style={{
          background: `
            radial-gradient(
              500px circle at ${pointer.x}% ${pointer.y}%,
              rgba(52, 211, 153, 0.045),
              rgba(34, 211, 238, 0.018) 35%,
              transparent 70%
            )
          `,
        }}
      />

      {/* Vertical central system line */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          top-0
          hidden
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-transparent
          via-emerald-400/[0.045]
          to-transparent
          xl:block
        "
      />

      {/* Horizontal technical lines */}
      <div
        className="
          absolute
          left-0
          right-0
          top-[25%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-emerald-400/[0.05]
          to-transparent
        "
      />

      <div
        className="
          absolute
          left-0
          right-0
          top-[55%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/[0.035]
          to-transparent
        "
      />

      <div
        className="
          absolute
          left-0
          right-0
          top-[82%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-purple-400/[0.035]
          to-transparent
        "
      />

      {/* Animated scanner */}
      <div
        className="
          cyber-page-scanner
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-emerald-300/20
          to-transparent
          shadow-[0_0_25px_rgba(52,211,153,0.15)]
        "
      />

      {/* Left telemetry rail */}
      <div
        className="
          cyber-data-left
          absolute
          left-5
          top-[8rem]
          hidden
          flex-col
          gap-5
          font-mono
          text-[8px]
          uppercase
          tracking-[0.16em]
          text-emerald-400/[0.12]
          2xl:flex
        "
      >
        {dataLeft.map((item, index) => (
          <span key={`${item}-${index}`}>
            {String(index + 1).padStart(
              2,
              "0"
            )}
            {" // "}
            {item}
          </span>
        ))}
      </div>

      {/* Right telemetry rail */}
      <div
        className="
          cyber-data-right
          absolute
          right-5
          top-[22rem]
          hidden
          flex-col
          items-end
          gap-5
          font-mono
          text-[8px]
          uppercase
          tracking-[0.16em]
          text-cyan-400/[0.10]
          2xl:flex
        "
      >
        {dataRight.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            {" // "}
            {String(index + 1).padStart(
              2,
              "0"
            )}
          </span>
        ))}
      </div>

      {/* Floating coordinates */}
      <div
        className="
          cyber-float-one
          absolute
          left-[8%]
          top-[14%]
          hidden
          font-mono
          text-[8px]
          tracking-[0.2em]
          text-emerald-400/[0.13]
          lg:block
        "
      >
        POS_X::08.42
        <br />
        POS_Y::14.09
      </div>

      <div
        className="
          cyber-float-two
          absolute
          right-[10%]
          top-[38%]
          hidden
          text-right
          font-mono
          text-[8px]
          tracking-[0.2em]
          text-cyan-400/[0.10]
          lg:block
        "
      >
        NODE::ACTIVE
        <br />
        LATENCY::12MS
      </div>

      <div
        className="
          cyber-float-three
          absolute
          bottom-[20%]
          left-[12%]
          hidden
          font-mono
          text-[8px]
          tracking-[0.2em]
          text-purple-400/[0.10]
          lg:block
        "
      >
        DATA_STREAM
        <br />
        STATUS::NOMINAL
      </div>

      {/* Decorative targeting brackets */}
      <div
        className="
          cyber-target
          absolute
          right-[7%]
          top-[18%]
          hidden
          h-20
          w-20
          lg:block
        "
      >
        <span className="absolute left-0 top-0 h-4 w-px bg-emerald-400/10" />
        <span className="absolute left-0 top-0 h-px w-4 bg-emerald-400/10" />

        <span className="absolute right-0 top-0 h-4 w-px bg-emerald-400/10" />
        <span className="absolute right-0 top-0 h-px w-4 bg-emerald-400/10" />

        <span className="absolute bottom-0 left-0 h-4 w-px bg-emerald-400/10" />
        <span className="absolute bottom-0 left-0 h-px w-4 bg-emerald-400/10" />

        <span className="absolute bottom-0 right-0 h-4 w-px bg-emerald-400/10" />
        <span className="absolute bottom-0 right-0 h-px w-4 bg-emerald-400/10" />

        <span
          className="
            cyber-target-dot
            absolute
            left-1/2
            top-1/2
            h-1
            w-1
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-emerald-400/30
          "
        />
      </div>

      {/* Global scanline texture */}
      <div className="cyber-scanlines absolute inset-0" />

      {/* Noise-like dot texture */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.018]
          [background-image:radial-gradient(rgba(255,255,255,0.8)_0.5px,transparent_0.5px)]
          [background-size:5px_5px]
        "
      />

      {/* Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,8,22,0.45)_100%)]
        "
      />

      <style>
        {`
          .cyber-main-grid {
            background-image:
              linear-gradient(
                rgba(52, 211, 153, 0.025) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(52, 211, 153, 0.025) 1px,
                transparent 1px
              );

            background-size: 64px 64px;

            mask-image:
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.9),
                rgba(0,0,0,0.3) 60%,
                transparent
              );
          }

          .cyber-large-grid {
            background-image:
              linear-gradient(
                rgba(96,165,250,0.012) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(96,165,250,0.012) 1px,
                transparent 1px
              );

            background-size: 256px 256px;
          }

          .cyber-perspective-grid {
            background-image:
              linear-gradient(
                rgba(52,211,153,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(52,211,153,0.035) 1px,
                transparent 1px
              );

            background-size: 70px 70px;

            transform:
              translateX(-50%)
              perspective(600px)
              rotateX(65deg);

            transform-origin: center top;

            mask-image:
              linear-gradient(
                to bottom,
                black,
                transparent 80%
              );
          }

          .cyber-page-scanner {
            animation:
              cyberPageScanner
              10s linear infinite;
          }

          @keyframes cyberPageScanner {
            0% {
              top: 0%;
              opacity: 0;
            }

            5% {
              opacity: 1;
            }

            95% {
              opacity: 1;
            }

            100% {
              top: 100%;
              opacity: 0;
            }
          }

          .cyber-scanlines {
            background:
              repeating-linear-gradient(
                to bottom,
                transparent,
                transparent 3px,
                rgba(52,211,153,0.012) 4px
              );
          }

          .cyber-data-left {
            animation:
              cyberDataLeft
              9s ease-in-out infinite;
          }

          .cyber-data-right {
            animation:
              cyberDataRight
              11s ease-in-out infinite;
          }

          @keyframes cyberDataLeft {
            0%,
            100% {
              transform:
                translateY(0);
            }

            50% {
              transform:
                translateY(35px);
            }
          }

          @keyframes cyberDataRight {
            0%,
            100% {
              transform:
                translateY(0);
            }

            50% {
              transform:
                translateY(-40px);
            }
          }

          .cyber-float-one {
            animation:
              cyberFloatOne
              8s ease-in-out infinite;
          }

          .cyber-float-two {
            animation:
              cyberFloatTwo
              10s ease-in-out infinite;
          }

          .cyber-float-three {
            animation:
              cyberFloatThree
              12s ease-in-out infinite;
          }

          @keyframes cyberFloatOne {
            50% {
              transform:
                translateY(-12px);
            }
          }

          @keyframes cyberFloatTwo {
            50% {
              transform:
                translate(-8px, 12px);
            }
          }

          @keyframes cyberFloatThree {
            50% {
              transform:
                translate(10px, -10px);
            }
          }

          .cyber-target {
            animation:
              cyberTargetRotate
              18s linear infinite;
          }

          .cyber-target-dot {
            animation:
              cyberTargetPulse
              2s ease-in-out infinite;
          }

          @keyframes cyberTargetRotate {
            to {
              transform:
                rotate(360deg);
            }
          }

          @keyframes cyberTargetPulse {
            0%,
            100% {
              opacity: 0.2;
              transform:
                translate(-50%, -50%)
                scale(1);
            }

            50% {
              opacity: 0.8;
              transform:
                translate(-50%, -50%)
                scale(2);
            }
          }

          @media
          (prefers-reduced-motion: reduce) {
            .cyber-page-scanner,
            .cyber-data-left,
            .cyber-data-right,
            .cyber-float-one,
            .cyber-float-two,
            .cyber-float-three,
            .cyber-target,
            .cyber-target-dot {
              animation: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}