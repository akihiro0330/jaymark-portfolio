import {
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionData = {
  id: string;
  number: string;
  label: string;
  system: string;
};

const sections: SectionData[] = [
  {
    id: "hero",
    number: "01",
    label: "HERO",
    system: "SYSTEM HOME",
  },
  {
    id: "about",
    number: "02",
    label: "ABOUT",
    system: "IDENTITY DATABASE",
  },
  {
    id: "skills",
    number: "03",
    label: "SKILLS",
    system: "CAPABILITY MATRIX",
  },
  {
    id: "experience",
    number: "04",
    label: "EXPERIENCE",
    system: "SYSTEM LOG",
  },
  {
    id: "projects",
    number: "05",
    label: "PROJECTS",
    system: "DEPLOYED SYSTEMS",
  },
  {
    id: "credentials",
    number: "06",
    label: "CREDENTIALS",
    system: "VERIFIED RECORDS",
  },
  {
    id: "contact",
    number: "07",
    label: "CONTACT",
    system: "COMMUNICATION UPLINK",
  },
];

export default function ScrollCyberSystem() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const markerRef =
    useRef<HTMLDivElement>(null);

  const pulseRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const triggers: ScrollTrigger[] = [];

    sections.forEach(
      (section, index) => {
        const target =
          document.getElementById(
            section.id
          );

        if (!target) {
          return;
        }

        const trigger =
          ScrollTrigger.create({
            trigger: target,

            start: "top 55%",

            end: "bottom 45%",

            onEnter: () => {
              setActiveIndex(index);
            },

            onEnterBack: () => {
              setActiveIndex(index);
            },
          });

        triggers.push(trigger);
      }
    );

    const pageTrigger =
      ScrollTrigger.create({
        trigger:
          document.documentElement,

        start: "top top",

        end: "max",

        onUpdate: (self) => {
          setScrollProgress(
            Math.round(
              self.progress * 100
            )
          );
        },
      });

    triggers.push(pageTrigger);

    if (
      !reduceMotion &&
      markerRef.current
    ) {
      gsap.to(
        markerRef.current,
        {
          opacity: 0.55,

          duration: 1.3,

          repeat: -1,

          yoyo: true,

          ease: "sine.inOut",
        }
      );
    }

    return () => {
      triggers.forEach(
        (trigger) =>
          trigger.kill()
      );

      ScrollTrigger.getAll().forEach(
        (trigger) => {
          if (
            trigger.vars.id ===
            "cyber-scroll-trigger"
          ) {
            trigger.kill();
          }
        }
      );
    };
  }, []);

  useEffect(() => {
    if (!pulseRef.current) {
      return;
    }

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) {
      return;
    }

    gsap.fromTo(
      pulseRef.current,
      {
        opacity: 0.8,
        scaleX: 0.4,
      },
      {
        opacity: 0,
        scaleX: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, [activeIndex]);

  const active =
    sections[activeIndex];

  const railProgress =
    sections.length > 1
      ? (activeIndex /
          (sections.length - 1)) *
        100
      : 0;

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-30
      "
    >
      {/* =================================
          ACTIVE SECTION LABEL
      ================================== */}

      <div
        className="
          absolute
          left-5
          top-1/2
          hidden
          -translate-y-1/2
          xl:block
        "
      >
        <div
          className="
            font-mono
            text-[8px]
            uppercase
            tracking-[0.22em]
          "
        >
          <div
            className="
              text-emerald-400/30
            "
          >
            SEC_{active.number}
          </div>

          <div
            className="
              mt-1
              text-white/35
            "
          >
            {active.label}
          </div>

          <div
            className="
              mt-1
              max-w-[120px]
              text-[7px]
              tracking-[0.15em]
              text-emerald-400/20
            "
          >
            {active.system}
          </div>
        </div>

        <div
          ref={pulseRef}
          className="
            mt-3
            h-px
            w-24
            origin-left
            bg-gradient-to-r
            from-emerald-400/50
            to-transparent
          "
        />
      </div>

      {/* =================================
          RIGHT SECTION RAIL
      ================================== */}

      <div
        className="
          absolute
          right-5
          top-1/2
          hidden
          -translate-y-1/2
          2xl:flex
          2xl:items-center
          2xl:gap-4
        "
      >
        <div
          className="
            relative
            h-[340px]
            w-px
            bg-white/[0.05]
          "
        >
          <div
            className="
              absolute
              left-0
              top-0
              w-px
              bg-gradient-to-b
              from-emerald-400/60
              to-cyan-400/20
              transition-[height]
              duration-700
              ease-out
            "
            style={{
              height: `${railProgress}%`,
            }}
          />

          <div
            ref={markerRef}
            className="
              absolute
              left-1/2
              h-2
              w-2
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-emerald-300/50
              bg-[#050816]
              shadow-[0_0_12px_rgba(52,211,153,0.45)]
              transition-[top]
              duration-700
              ease-out
            "
            style={{
              top: `${railProgress}%`,
            }}
          />

          {sections.map(
            (section, index) => {
              const position =
                (index /
                  (sections.length -
                    1)) *
                100;

              return (
                <div
                  key={
                    section.id
                  }
                  className="
                    absolute
                    left-1/2
                    h-1
                    w-1
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-white/15
                  "
                  style={{
                    top: `${position}%`,
                  }}
                />
              );
            }
          )}
        </div>

        <div
          className="
            flex
            h-[340px]
            flex-col
            justify-between
            font-mono
            text-[7px]
            uppercase
            tracking-[0.18em]
          "
        >
          {sections.map(
            (section, index) => (
              <span
                key={
                  section.id
                }
                className={`
                  transition-colors
                  duration-500

                  ${
                    index ===
                    activeIndex
                      ? "text-emerald-400/70"
                      : "text-white/12"
                  }
                `}
              >
                {section.number}
              </span>
            )
          )}
        </div>
      </div>

      {/* =================================
          CURRENT SECTION / MOBILE
      ================================== */}

      <div
        className="
          absolute
          bottom-[54px]
          left-1/2
          -translate-x-1/2
          xl:hidden
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            whitespace-nowrap
            font-mono
            text-[7px]
            uppercase
            tracking-[0.16em]
            text-white/20
          "
        >
          <span
            className="
              text-emerald-400/45
            "
          >
            SEC_{active.number}
          </span>

          <span>
            //
          </span>

          <span>
            {active.label}
          </span>
        </div>
      </div>

      {/* =================================
          PAGE PROGRESS
      ================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-white/[0.03]
        "
      >
        <div
          className="
            h-full
            bg-gradient-to-r
            from-emerald-400/50
            via-cyan-400/40
            to-blue-400/40
            shadow-[0_0_10px_rgba(52,211,153,0.2)]
            transition-[width]
            duration-150
          "
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>

      {/* =================================
          PERCENTAGE
      ================================== */}

      <div
        className="
          absolute
          bottom-6
          right-8
          hidden
          font-mono
          text-[7px]
          tracking-[0.18em]
          text-emerald-400/20
          xl:block
        "
      >
        SCR::{String(
          scrollProgress
        ).padStart(3, "0")}
        %
      </div>
    </div>
  );
}