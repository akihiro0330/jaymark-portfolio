import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type PageIntroProps = {
  onReveal?: () => void;
  onComplete?: () => void;
};

const terminalLines = [
  { time: 350, text: "> INITIALIZING JAY_OS..." },
  { time: 900, text: "> LOADING DEVELOPMENT MODULES..." },
  { time: 1450, text: "> CONNECTING AUTOMATION ENGINE..." },
  { time: 2050, text: "> VERIFYING SYSTEM INTEGRITY..." },
  { time: 2600, text: "> BUILDING INTERFACE..." },
];

const diagnostics = [
  { label: "CORE", value: "ONLINE" },
  { label: "UI", value: "READY" },
  { label: "NETWORK", value: "SECURE" },
  { label: "AUTOMATION", value: "ACTIVE" },
];

export default function PageIntro({
  onReveal,
  onComplete,
}: PageIntroProps) {
  const [visible, setVisible] = useState(true);
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [diagnosticCount, setDiagnosticCount] = useState(0);
  const [showIdentity, setShowIdentity] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [revealing, setRevealing] = useState(false);

  const timersRef = useRef<number[]>([]);
  const progressTimerRef = useRef<number | null>(null);
  const revealCalledRef = useRef(false);
  const completeCalledRef = useRef(false);
  const revealStartedRef = useRef(false);
  const previousOverflowRef = useRef("");

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => {
      window.clearTimeout(timer);
    });

    timersRef.current = [];

    if (progressTimerRef.current !== null) {
      window.clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
  }, []);

  const callReveal = useCallback(() => {
    if (revealCalledRef.current) {
      return;
    }

    revealCalledRef.current = true;
    onReveal?.();
  }, [onReveal]);

  const finishIntro = useCallback(() => {
    if (completeCalledRef.current) {
      return;
    }

    completeCalledRef.current = true;
    document.body.style.overflow = previousOverflowRef.current;
    setVisible(false);
    onComplete?.();
  }, [onComplete]);

  const beginReveal = useCallback(() => {
    if (revealStartedRef.current) {
      return;
    }

    revealStartedRef.current = true;
    setProgress(100);
    setAccessGranted(true);
    setRevealing(true);
    callReveal();

    const finishTimer = window.setTimeout(() => {
      finishIntro();
    }, 1050);

    timersRef.current.push(finishTimer);
  }, [callReveal, finishIntro]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    previousOverflowRef.current = document.body.style.overflow;

    if (reduceMotion) {
      callReveal();
      finishIntro();
      return;
    }

    document.body.style.overflow = "hidden";

    terminalLines.forEach((line, index) => {
      const timer = window.setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.time);

      timersRef.current.push(timer);
    });

    diagnostics.forEach((_, index) => {
      const timer = window.setTimeout(() => {
        setDiagnosticCount(index + 1);
      }, 1050 + index * 420);

      timersRef.current.push(timer);
    });

    timersRef.current.push(
      window.setTimeout(() => setShowIdentity(true), 3300),
      window.setTimeout(() => setAccessGranted(true), 4750),
      window.setTimeout(() => beginReveal(), 5900)
    );

    progressTimerRef.current = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 96) {
          return current;
        }

        let increment = 1;

        if (current < 20) {
          increment = Math.floor(Math.random() * 5) + 2;
        } else if (current < 60) {
          increment = Math.floor(Math.random() * 4) + 1;
        } else if (current < 85) {
          increment = Math.floor(Math.random() * 3) + 1;
        }

        return Math.min(current + increment, 96);
      });
    }, 95);

    return () => {
      clearTimers();
      document.body.style.overflow = previousOverflowRef.current;
    };
  }, [beginReveal, callReveal, clearTimers, finishIntro]);

  function handleSkip() {
    clearTimers();
    beginReveal();
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#010403] font-mono text-emerald-400"
      aria-label="Portfolio startup animation"
    >
      <div
        aria-hidden="true"
        className="cyber-grid pointer-events-none absolute inset-0"
      />

      <div
        aria-hidden="true"
        className="scanlines pointer-events-none absolute inset-0 z-30"
      />

      <div
        aria-hidden="true"
        className="scanner-line pointer-events-none absolute left-0 right-0 z-30 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent shadow-[0_0_20px_rgba(52,211,153,0.8)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.045] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="data-stream pointer-events-none absolute bottom-0 left-4 top-0 hidden w-20 overflow-hidden text-[9px] leading-4 text-emerald-400/15 md:block"
      >
        01001010<br />01000001<br />01011001<br />F8A29C<br />10110110<br />
        7B02FF<br />01001010<br />01000001<br />01011001<br />SYS010<br />
        FF902A<br />10101011<br />00AF12<br />01010101<br />AF67FF<br />
        10011010<br />7E09AA<br />00110110<br />0xJAY<br />10010101
      </div>

      <div
        aria-hidden="true"
        className="data-stream-reverse pointer-events-none absolute bottom-0 right-4 top-0 hidden w-20 overflow-hidden text-right text-[9px] leading-4 text-emerald-400/15 md:block"
      >
        10101101<br />FC9021<br />00101010<br />SYS001<br />5AC221<br />
        11101010<br />01010100<br />00FABC<br />10101110<br />01001100<br />
        FFF102<br />11000110<br />00AF91<br />01011010
      </div>

      <div className="absolute left-5 right-5 top-5 z-40 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-emerald-400/35 sm:left-8 sm:right-8 sm:top-7">
        <span>JAY SYSTEM // PORTFOLIO</span>
        <span className="hidden sm:block">SESSION: SECURE</span>
      </div>

      <button
        type="button"
        onClick={handleSkip}
        className="absolute bottom-5 right-5 z-[70] rounded-md border border-emerald-400/20 bg-black/40 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-emerald-400/50 backdrop-blur-md transition hover:border-emerald-400/50 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 sm:bottom-7 sm:right-8"
      >
        Skip Intro
      </button>

      <div
        className={`relative z-10 flex h-full items-center justify-center px-5 py-20 transition-all duration-500 sm:px-8 ${
          revealing
            ? "scale-110 opacity-0 blur-md"
            : "scale-100 opacity-100 blur-0"
        }`}
      >
        <div className="grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div className="relative overflow-hidden rounded-xl border border-emerald-400/20 bg-black/45 shadow-[0_0_70px_rgba(16,185,129,0.06)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-emerald-400/10 px-4 py-3">
              <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400/60" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              </div>

              <span className="text-[9px] tracking-[0.2em] text-emerald-400/30">
                ROOT://PORTFOLIO
              </span>
            </div>

            <div className="min-h-[330px] p-5 sm:p-7">
              <p className="text-xs text-emerald-300/65 sm:text-sm">
                <span className="text-emerald-400">jay@system</span>
                <span className="text-white/20">:</span>
                <span className="text-cyan-300">~</span>
                <span className="text-white/20">$</span> ./boot_portfolio.sh
              </p>

              <div className="mt-6 space-y-2.5">
                {terminalLines.map((line, index) => (
                  <p
                    key={line.text}
                    className={`text-[11px] leading-5 transition-all duration-300 sm:text-xs ${
                      index < visibleLines
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2 opacity-0"
                    }`}
                  >
                    <span className="mr-2 text-emerald-300/30">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                    {line.text}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <div className="mb-2 flex items-center justify-between text-[9px] uppercase tracking-[0.18em] text-emerald-400/35">
                  <span>System Load</span>
                  <span>{progress}%</span>
                </div>

                <div className="relative h-1 overflow-hidden bg-emerald-400/10">
                  <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.9)] transition-[width] duration-100"
                  />
                </div>

                <div className="mt-3 flex justify-between text-[8px] text-emerald-400/20">
                  <span>0x000</span>
                  <span>MEMORY_OK</span>
                  <span>0xFFF</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
              <div className="hud-ring-slow absolute inset-0 rounded-full border border-emerald-400/15" />
              <div className="hud-ring absolute inset-[10%] rounded-full border-r border-t border-emerald-300/60" />
              <div className="hud-ring-reverse absolute inset-[20%] rounded-full border-b border-l border-cyan-300/40" />

              <div className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-400/15 to-transparent" />
              <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent" />

              <div className="absolute inset-[32%] rounded-full border border-emerald-400/25 bg-emerald-400/[0.03] shadow-[0_0_40px_rgba(52,211,153,0.12)]" />

              <div
                className={`relative z-10 text-center transition-all duration-700 ${
                  showIdentity
                    ? "scale-100 opacity-100 blur-0"
                    : "scale-125 opacity-0 blur-md"
                }`}
              >
                <div
                  className="glitch-text text-5xl font-bold tracking-[-0.08em] text-white sm:text-6xl"
                  data-text="JAY."
                >
                  JAY.
                </div>

                <p className="mt-3 text-[8px] uppercase tracking-[0.34em] text-emerald-400/40">
                  Developer Identity
                </p>
              </div>
            </div>

            <div className="mt-7 grid w-full max-w-sm grid-cols-2 gap-2">
              {diagnostics.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between border border-emerald-400/10 bg-emerald-400/[0.025] px-3 py-2 text-[8px] tracking-[0.15em] transition-all duration-500 ${
                    index < diagnosticCount
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  <span className="text-white/30">{item.label}</span>
                  <span className="text-emerald-400">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-500 ${
          accessGranted && !revealing
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <div
          className={`border-y border-emerald-400/30 bg-black/60 px-10 py-5 text-center shadow-[0_0_50px_rgba(16,185,129,0.08)] transition-all duration-500 ${
            accessGranted ? "scale-100" : "scale-90"
          }`}
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-emerald-400/45">
            Authentication
          </p>
          <p className="mt-2 text-2xl font-bold tracking-[0.15em] text-emerald-300 sm:text-3xl">
            ACCESS GRANTED
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 z-[55] h-1/2 bg-[#010403] transition-all duration-[950ms] ease-[cubic-bezier(0.77,0,0.18,1)] ${
          revealing
            ? "-translate-y-full opacity-100"
            : "translate-y-0 opacity-0"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-[55] h-1/2 bg-[#010403] transition-all duration-[950ms] ease-[cubic-bezier(0.77,0,0.18,1)] ${
          revealing
            ? "translate-y-full opacity-100"
            : "translate-y-0 opacity-0"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 z-[60] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200 shadow-[0_0_35px_rgba(110,231,183,1)] transition-all duration-700 ${
          revealing
            ? "scale-[36] opacity-0"
            : "scale-0 opacity-0"
        }`}
      />

      <style>
        {`
          .cyber-grid {
            background-image:
              linear-gradient(rgba(52, 211, 153, 0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(52, 211, 153, 0.035) 1px, transparent 1px);
            background-size: 46px 46px;
            mask-image: radial-gradient(circle at center, black, transparent 80%);
          }

          .scanlines {
            background: repeating-linear-gradient(
              to bottom,
              transparent,
              transparent 3px,
              rgba(16, 185, 129, 0.035) 4px
            );
          }

          .scanner-line {
            animation: scannerMove 2.1s linear infinite;
          }

          @keyframes scannerMove {
            from { top: -2%; }
            to { top: 102%; }
          }

          .hud-ring {
            animation: hudRotate 3s linear infinite;
          }

          .hud-ring-slow {
            animation: hudRotate 12s linear infinite;
          }

          .hud-ring-reverse {
            animation: hudRotateReverse 5s linear infinite;
          }

          @keyframes hudRotate {
            to { transform: rotate(360deg); }
          }

          @keyframes hudRotateReverse {
            to { transform: rotate(-360deg); }
          }

          .data-stream {
            animation: dataMove 5s linear infinite;
          }

          .data-stream-reverse {
            animation: dataMoveReverse 6s linear infinite;
          }

          @keyframes dataMove {
            from { transform: translateY(-30%); }
            to { transform: translateY(20%); }
          }

          @keyframes dataMoveReverse {
            from { transform: translateY(15%); }
            to { transform: translateY(-25%); }
          }

          .glitch-text {
            position: relative;
          }

          .glitch-text::before,
          .glitch-text::after {
            content: attr(data-text);
            position: absolute;
            inset: 0;
            pointer-events: none;
          }

          .glitch-text::before {
            color: #67e8f9;
            transform: translateX(2px);
            clip-path: inset(0 0 55% 0);
            animation: glitchOne 1.4s infinite steps(2);
          }

          .glitch-text::after {
            color: #34d399;
            transform: translateX(-2px);
            clip-path: inset(55% 0 0 0);
            animation: glitchTwo 1.1s infinite steps(2);
          }

          @keyframes glitchOne {
            0%, 92%, 100% { transform: translateX(0); }
            94% { transform: translateX(5px); }
            96% { transform: translateX(-3px); }
          }

          @keyframes glitchTwo {
            0%, 88%, 100% { transform: translateX(0); }
            90% { transform: translateX(-5px); }
            93% { transform: translateX(3px); }
          }

          @media (prefers-reduced-motion: reduce) {
            .scanner-line,
            .hud-ring,
            .hud-ring-slow,
            .hud-ring-reverse,
            .data-stream,
            .data-stream-reverse,
            .glitch-text::before,
            .glitch-text::after {
              animation: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}
