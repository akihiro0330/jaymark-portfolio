import { useEffect, useRef } from "react";

const FRAME_COUNT = 96;
const FRAME_WIDTH = 320;
const FRAME_HEIGHT = 180;
const IDLE_FRAME = 0;
const EASE = 0.11;
const SPRITE_SRC = "/hero/character-tracking-sprite.jpg";

export default function InteractiveHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetFrameRef = useRef(IDLE_FRAME);
  const currentFrameRef = useRef(IDLE_FRAME);
  const pointerInsideRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", {
      alpha: false,
      desynchronized: true,
    });
    if (!context) return;

    const image = new Image();
    image.decoding = "async";
    image.src = SPRITE_SRC;

    let animationFrame = 0;
    let ready = false;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.round(rect.width * dpr));
      height = Math.max(1, Math.round(rect.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const drawFrame = (frame: number) => {
      if (!ready || width <= 0 || height <= 0) return;

      const index = Math.max(
        0,
        Math.min(FRAME_COUNT - 1, Math.round(frame)),
      );

      const sourceX = index * FRAME_WIDTH;

      // Equivalent to object-fit: cover while preserving the original 16:9 composition.
      const sourceAspect = FRAME_WIDTH / FRAME_HEIGHT;
      const targetAspect = width / height;

      let drawWidth = width;
      let drawHeight = height;
      let drawX = 0;
      let drawY = 0;

      if (targetAspect > sourceAspect) {
        drawHeight = width / sourceAspect;
        drawY = (height - drawHeight) / 2;
      } else {
        drawWidth = height * sourceAspect;
        drawX = (width - drawWidth) / 2;
      }

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.clearRect(0, 0, width, height);
      context.drawImage(
        image,
        sourceX,
        0,
        FRAME_WIDTH,
        FRAME_HEIGHT,
        drawX,
        drawY,
        drawWidth,
        drawHeight,
      );
    };

    const tick = () => {
      const target = reducedMotion.matches
        ? IDLE_FRAME
        : targetFrameRef.current;

      const current = currentFrameRef.current;
      const delta = target - current;

      currentFrameRef.current =
        Math.abs(delta) < 0.01 ? target : current + delta * EASE;

      drawFrame(currentFrameRef.current);
      animationFrame = requestAnimationFrame(tick);
    };

    const setFrameFromPointer = (clientX: number) => {
      if (reducedMotion.matches) return;

      const rect = canvas.getBoundingClientRect();
      const normalized = Math.max(
        0,
        Math.min(1, (clientX - rect.left) / rect.width),
      );

      targetFrameRef.current = normalized * (FRAME_COUNT - 1);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerInsideRef.current = true;
      setFrameFromPointer(event.clientX);
    };

    const handlePointerLeave = () => {
      pointerInsideRef.current = false;
      targetFrameRef.current = IDLE_FRAME;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      setFrameFromPointer(touch.clientX);
    };

    const handleTouchEnd = () => {
      targetFrameRef.current = IDLE_FRAME;
    };

    image.onload = () => {
      ready = true;
      resize();
      drawFrame(IDLE_FRAME);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const hero = canvas.closest("#hero");
    const pointerTarget = hero ?? canvas;

    pointerTarget.addEventListener("pointermove", handlePointerMove as EventListener);
    pointerTarget.addEventListener("pointerleave", handlePointerLeave);
    pointerTarget.addEventListener("touchmove", handleTouchMove as EventListener, {
      passive: true,
    });
    pointerTarget.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("resize", resize);

    resize();
    animationFrame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      pointerTarget.removeEventListener(
        "pointermove",
        handlePointerMove as EventListener,
      );
      pointerTarget.removeEventListener("pointerleave", handlePointerLeave);
      pointerTarget.removeEventListener(
        "touchmove",
        handleTouchMove as EventListener,
      );
      pointerTarget.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-[0.62]"
      />

      <div className="absolute inset-0 bg-[#050816]/35" />

      <div
        className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/90 to-[#050816]/20 lg:via-[#050816]/78 lg:to-[#050816]/10"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]/40" />

      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
