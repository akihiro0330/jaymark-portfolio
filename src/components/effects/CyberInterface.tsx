import {
  useEffect,
  useRef,
  useState,
} from "react";

type CursorPosition = {
  x: number;
  y: number;
};

export default function CyberInterface() {
  const [cursor, setCursor] =
    useState<CursorPosition>({
      x: 0,
      y: 0,
    });

  const [cursorVisible, setCursorVisible] =
    useState(false);

  const [time, setTime] =
    useState("00:00:00");

  const frameRef =
    useRef<number | null>(null);

  const latestCursor =
    useRef<CursorPosition>({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const pointerMedia =
      window.matchMedia(
        "(hover: hover) and (pointer: fine)"
      );

    function updateCursor() {
      setCursor(
        latestCursor.current
      );

      frameRef.current = null;
    }

    function handlePointerMove(
      event: PointerEvent
    ) {
      latestCursor.current = {
        x: event.clientX,
        y: event.clientY,
      };

      setCursorVisible(true);

      if (
        frameRef.current === null
      ) {
        frameRef.current =
          window.requestAnimationFrame(
            updateCursor
          );
      }
    }

    function handlePointerLeave() {
      setCursorVisible(false);
    }

    if (pointerMedia.matches) {
      window.addEventListener(
        "pointermove",
        handlePointerMove,
        {
          passive: true,
        }
      );

      document.documentElement.addEventListener(
        "mouseleave",
        handlePointerLeave
      );
    }

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave
      );

      if (
        frameRef.current !== null
      ) {
        window.cancelAnimationFrame(
          frameRef.current
        );
      }
    };
  }, []);

  useEffect(() => {
    function updateTime() {
      const now = new Date();

      setTime(
        now.toLocaleTimeString(
          "en-US",
          {
            hour12: false,
          }
        )
      );
    }

    updateTime();

    const timer =
      window.setInterval(
        updateTime,
        1000
      );

    return () =>
      window.clearInterval(timer);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-30
        overflow-hidden
      "
    >
      {/* ==========================
          VIEWPORT CORNERS
      =========================== */}

      <ViewportCorners />

      {/* ==========================
          TOP SYSTEM BAR
      =========================== */}

      <div
        className="
          absolute
          left-1/2
          top-3
          hidden
          -translate-x-1/2
          items-center
          gap-4
          font-mono
          text-[7px]
          uppercase
          tracking-[0.18em]
          text-emerald-400/25
          lg:flex
        "
      >
        <span>
          JAY_OS
        </span>

        <span className="text-white/10">
          //
        </span>

        <span>
          SECURE SESSION
        </span>

        <span className="text-white/10">
          //
        </span>

        <span>
          {time}
        </span>
      </div>

      {/* ==========================
          LEFT RULER
      =========================== */}

      <div
        className="
          cyber-ruler
          absolute
          bottom-20
          left-2
          top-20
          hidden
          w-3
          opacity-30
          2xl:block
        "
      />

      {/* ==========================
          RIGHT RULER
      =========================== */}

      <div
        className="
          cyber-ruler
          absolute
          bottom-20
          right-2
          top-20
          hidden
          w-3
          opacity-30
          2xl:block
        "
      />

      {/* ==========================
          CURSOR TARGET
      =========================== */}

      {cursorVisible && (
        <div
          className="
            cyber-cursor-target
            absolute
            hidden
            h-12
            w-12
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-emerald-400/15
            md:block
          "
          style={{
            left: cursor.x,
            top: cursor.y,
          }}
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-1
              w-1
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-emerald-300/60
              shadow-[0_0_8px_rgba(52,211,153,0.8)]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-[-6px]
              h-3
              w-px
              -translate-x-1/2
              bg-emerald-400/25
            "
          />

          <div
            className="
              absolute
              bottom-[-6px]
              left-1/2
              h-3
              w-px
              -translate-x-1/2
              bg-emerald-400/25
            "
          />

          <div
            className="
              absolute
              left-[-6px]
              top-1/2
              h-px
              w-3
              -translate-y-1/2
              bg-emerald-400/25
            "
          />

          <div
            className="
              absolute
              right-[-6px]
              top-1/2
              h-px
              w-3
              -translate-y-1/2
              bg-emerald-400/25
            "
          />

          <span
            className="
              absolute
              left-14
              top-1/2
              -translate-y-1/2
              whitespace-nowrap
              font-mono
              text-[7px]
              tracking-[0.1em]
              text-emerald-400/25
            "
          >
            X:{Math.round(cursor.x)}
            {" "}
            Y:{Math.round(cursor.y)}
          </span>
        </div>
      )}

      {/* ==========================
          NETWORK NODES
      =========================== */}

      <NetworkNodes />

      {/* ==========================
          RADAR
      =========================== */}

      <div
        className="
          absolute
          right-7
          top-28
          hidden
          h-28
          w-28
          lg:block
        "
      >
        <div
          className="
            absolute
            inset-0
            rounded-full
            border
            border-emerald-400/[0.08]
          "
        />

        <div
          className="
            absolute
            inset-[25%]
            rounded-full
            border
            border-emerald-400/[0.07]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-px
            -translate-x-1/2
            bg-emerald-400/[0.05]
          "
        />

        <div
          className="
            absolute
            left-0
            top-1/2
            h-px
            w-full
            -translate-y-1/2
            bg-emerald-400/[0.05]
          "
        />

        <div
          className="
            cyber-radar-sweep
            absolute
            left-1/2
            top-1/2
            h-[48%]
            w-px
            origin-bottom
            bg-gradient-to-t
            from-emerald-300/30
            to-transparent
          "
        />

        <div
          className="
            cyber-node-pulse
            absolute
            left-[65%]
            top-[32%]
            h-1
            w-1
            rounded-full
            bg-emerald-300/60
          "
        />

        <span
          className="
            absolute
            -bottom-5
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            font-mono
            text-[7px]
            uppercase
            tracking-[0.15em]
            text-emerald-400/20
          "
        >
          NODE SCAN
        </span>
      </div>

      {/* ==========================
          WAVEFORM
      =========================== */}

      <div
        className="
          absolute
          bottom-8
          right-8
          hidden
          items-end
          gap-[2px]
          xl:flex
        "
      >
        {[
          5, 11, 7, 17, 9, 22,
          14, 8, 19, 11, 25, 15,
          7, 20, 12, 17, 6, 13,
        ].map((height, index) => (
          <span
            key={index}
            className="
              cyber-wave-bar
              w-[2px]
              bg-emerald-400/25
            "
            style={{
              height,
              animationDelay:
                `${index * 70}ms`,
            }}
          />
        ))}

        <span
          className="
            ml-2
            font-mono
            text-[7px]
            uppercase
            tracking-[0.12em]
            text-emerald-400/20
          "
        >
          SIGNAL
        </span>
      </div>

      {/* ==========================
          ENCRYPTION INDICATOR
      =========================== */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-2
          font-mono
          text-[7px]
          uppercase
          tracking-[0.18em]
          text-white/15
          lg:flex
        "
      >
        <span
          className="
            h-1
            w-1
            rounded-full
            bg-emerald-400/50
          "
        />

        TLS // ENCRYPTED

        <span className="text-emerald-400/25">
          256
        </span>
      </div>

      {/* ==========================
          DATA TICKER
      =========================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          hidden
          h-[18px]
          overflow-hidden
          border-t
          border-emerald-400/[0.04]
          bg-[#050816]/20
          lg:block
        "
      >
        <div
          className="
            cyber-data-ticker
            absolute
            whitespace-nowrap
            font-mono
            text-[7px]
            leading-[18px]
            tracking-[0.18em]
            text-emerald-400/[0.12]
          "
        >
          0x4A4159 // SYSTEM ONLINE //
          UI_READY // 01001010 01000001
          01011001 // NETWORK SECURE //
          AUTOMATION ACTIVE // CORE_OK //
          DATA_STREAM NOMINAL //
          0x4A4159 // SYSTEM ONLINE //
          UI_READY // 01001010 01000001
          01011001 // NETWORK SECURE //
          AUTOMATION ACTIVE // CORE_OK //
          DATA_STREAM NOMINAL //
        </div>
      </div>

      <style>
        {`
          .cyber-ruler {
            background-image:
              repeating-linear-gradient(
                to bottom,
                rgba(52,211,153,0.18) 0,
                rgba(52,211,153,0.18) 1px,
                transparent 1px,
                transparent 12px
              );
          }

          .cyber-cursor-target {
            transition:
              width 180ms ease,
              height 180ms ease,
              border-color 180ms ease;
          }

          .cyber-radar-sweep {
            animation:
              cyberRadar 4s linear infinite;

            transform:
              translate(-50%, -100%)
              rotate(0deg);

            transform-origin:
              50% 100%;
          }

          @keyframes cyberRadar {
            to {
              transform:
                translate(-50%, -100%)
                rotate(360deg);
            }
          }

          .cyber-node-pulse {
            animation:
              cyberNodePulse
              1.8s ease-out infinite;
          }

          @keyframes cyberNodePulse {
            0% {
              box-shadow:
                0 0 0 0
                rgba(52,211,153,0.4);
            }

            100% {
              box-shadow:
                0 0 0 14px
                rgba(52,211,153,0);
            }
          }

          .cyber-wave-bar {
            transform-origin:
              bottom;

            animation:
              cyberWave
              1.2s ease-in-out infinite
              alternate;
          }

          @keyframes cyberWave {
            from {
              transform:
                scaleY(0.35);
              opacity: 0.15;
            }

            to {
              transform:
                scaleY(1);
              opacity: 0.55;
            }
          }

          .cyber-data-ticker {
            animation:
              cyberTicker
              28s linear infinite;
          }

          @keyframes cyberTicker {
            from {
              transform:
                translateX(0);
            }

            to {
              transform:
                translateX(-50%);
            }
          }

          @media
          (prefers-reduced-motion: reduce) {
            .cyber-radar-sweep,
            .cyber-node-pulse,
            .cyber-wave-bar,
            .cyber-data-ticker {
              animation: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}

function ViewportCorners() {
  const corner =
    "absolute h-8 w-8";

  const horizontal =
    "absolute h-px w-5 bg-emerald-400/15";

  const vertical =
    "absolute h-5 w-px bg-emerald-400/15";

  return (
    <>
      <div
        className={`${corner} left-4 top-4`}
      >
        <span
          className={`${horizontal} left-0 top-0`}
        />
        <span
          className={`${vertical} left-0 top-0`}
        />
      </div>

      <div
        className={`${corner} right-4 top-4`}
      >
        <span
          className={`${horizontal} right-0 top-0`}
        />
        <span
          className={`${vertical} right-0 top-0`}
        />
      </div>

      <div
        className={`${corner} bottom-4 left-4`}
      >
        <span
          className={`${horizontal} bottom-0 left-0`}
        />
        <span
          className={`${vertical} bottom-0 left-0`}
        />
      </div>

      <div
        className={`${corner} bottom-4 right-4`}
      >
        <span
          className={`${horizontal} bottom-0 right-0`}
        />
        <span
          className={`${vertical} bottom-0 right-0`}
        />
      </div>
    </>
  );
}

function NetworkNodes() {
  return (
    <svg
      viewBox="0 0 1000 700"
      preserveAspectRatio="none"
      className="
        absolute
        inset-0
        hidden
        h-full
        w-full
        opacity-[0.13]
        xl:block
      "
    >
      <defs>
        <linearGradient
          id="cyberNetworkGradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="#34d399"
            stopOpacity="0"
          />

          <stop
            offset="50%"
            stopColor="#34d399"
            stopOpacity="0.55"
          />

          <stop
            offset="100%"
            stopColor="#22d3ee"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>

      <g
        fill="none"
        stroke="url(#cyberNetworkGradient)"
        strokeWidth="0.7"
      >
        <path d="M80 180 L210 110 L340 210" />
        <path d="M210 110 L410 80" />
        <path d="M340 210 L470 160" />

        <path d="M700 440 L820 350 L930 420" />
        <path d="M820 350 L880 260" />
        <path d="M700 440 L620 360" />
      </g>

      <g fill="#34d399">
        <circle
          cx="80"
          cy="180"
          r="2"
        />
        <circle
          cx="210"
          cy="110"
          r="2.5"
        />
        <circle
          cx="340"
          cy="210"
          r="2"
        />
        <circle
          cx="410"
          cy="80"
          r="1.5"
        />
        <circle
          cx="470"
          cy="160"
          r="1.5"
        />

        <circle
          cx="700"
          cy="440"
          r="2"
        />
        <circle
          cx="820"
          cy="350"
          r="2.5"
        />
        <circle
          cx="930"
          cy="420"
          r="2"
        />
        <circle
          cx="880"
          cy="260"
          r="1.5"
        />
        <circle
          cx="620"
          cy="360"
          r="1.5"
        />
      </g>
    </svg>
  );
}