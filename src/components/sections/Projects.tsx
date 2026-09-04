import {
  type ReactNode,
  useEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Images,
  Monitor,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";

import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import {
  useProjectTelemetry,
} from "../../context/ProjectTelemetryContext";

type ProjectStatus =
  | "In Development"
  | "Active Development"
  | "Completed"
  | "Prototype";

type Screenshot = {
  src: string;
  title: string;
  description: string;
};

type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  github?: string;
  live?: string;
  status?: ProjectStatus;
  screenshots?: Screenshot[];
  features?: string[];
  expandableGallery?: boolean;
};

const projects: Project[] = [
  {
    title: "Kivora",
    category: "Mobile Application",
    description:
      "A modern personal finance and digital wallet application designed to bring bank accounts, e-wallets, cash, credit cards, transactions, IDs, and digital passes into one secure experience. Kivora combines financial management and spending insights with balance privacy, local data persistence, device authentication, and a polished mobile-first interface.",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Expo Router",
      "SQLite",
      "AsyncStorage",
      "Local Authentication",
      "React Native SVG",
    ],
    featured: true,
    status: "In Development",
    github: "https://github.com/akihiro0330/Kivora",
    screenshots: [
      {
        src: "/projects/kivora/kivora-home.png",
        title: "Home",
        description: "Kivora personal finance dashboard.",
      },
      {
        src: "/projects/kivora/kivora-wallet.png",
        title: "Wallet",
        description: "Accounts, IDs, and digital wallet management.",
      },
      {
        src: "/projects/kivora/kivora-lock.png",
        title: "Security",
        description: "Device-authenticated wallet protection.",
      },
    ],
    features: [
      "Multi-account wallet management",
      "Income, expense & transfer tracking",
      "Spending analytics",
      "Digital ID & pass storage",
      "Device authentication",
      "Balance privacy controls",
      "Theme-aware interface",
      "Local SQLite persistence",
    ],
  },

  {
    title: "SmartSort",
    category: "Desktop Automation",
    description:
      "A desktop file automation application built to simplify and automate file organization through configurable classification rules, drag-and-drop sorting, folder monitoring, activity tracking, and recoverable workflows. SmartSort combines automation with a polished native desktop interface designed for practical day-to-day file management.",
    technologies: [
      "Python",
      "PySide6",
      "Automation",
      "File System",
      "QThread",
      "Folder Monitoring",
      "Rules Engine",
      "Desktop UI",
    ],
    status: "Active Development",
    github: "https://github.com/akihiro0330/SmartSort-v2",
    expandableGallery: true,
    features: [
      "Drag-and-drop Smart Sort",
      "Automatic file classification",
      "Live folder monitoring",
      "Configurable sorting rules",
      "Activity and history tracking",
      "Recoverable file operations",
      "Background worker processing",
      "Desktop-native interface",
    ],
    screenshots: [
      {
        src: "/projects/smartsort/overview.png",
        title: "Overview",
        description:
          "Dashboard showing file automation statistics, activity, and monitored folders.",
      },
      {
        src: "/projects/smartsort/smart-sort.png",
        title: "Smart Sort",
        description:
          "Drag-and-drop workspace for previewing and organizing files.",
      },
      {
        src: "/projects/smartsort/automation.png",
        title: "Automation",
        description:
          "Folder monitoring and automated file organization controls.",
      },
      {
        src: "/projects/smartsort/rules.png",
        title: "Rules",
        description:
          "Configurable classification rules used to determine file destinations.",
      },
      {
        src: "/projects/smartsort/activity.png",
        title: "Activity",
        description:
          "History of organization actions with visibility into file movements.",
      },
      {
        src: "/projects/smartsort/settings.png",
        title: "Settings",
        description:
          "Application preferences and automation configuration.",
      },
    ],
  },

  {
    title: "SSS Member Dashboard Redesign",
    category: "Web Application / UI Redesign",
    description:
      "An independent redesign concept for the SSS member portal focused on clearer information hierarchy, responsive navigation, privacy controls, and a more accessible member experience across desktop and mobile devices.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Responsive Design",
      "Vercel",
    ],
    status: "Prototype",
    live: "https://sss-member-dashboard.vercel.app/",
    expandableGallery: true,
    features: [
      "Responsive member dashboard",
      "Contribution history and analytics",
      "Loan information and eligibility UI",
      "Benefits directory",
      "Notification center",
      "Member profile controls",
      "SSS number privacy masking",
      "Light and dark themes",
      "Responsive mobile navigation",
      "Desktop and mobile layouts",
    ],
    screenshots: [
      {
        src: "/projects/sss-dashboard/dashboard.png",
        title: "Member Overview",
        description:
          "Redesigned desktop member dashboard presenting account standing, contributions, loans, and benefits at a glance.",
      },
      {
        src: "/projects/sss-dashboard/contributions.png",
        title: "Contributions",
        description:
          "Contribution history with yearly totals, posting status, monthly trends, and statement controls.",
      },
      {
        src: "/projects/sss-dashboard/loans.png",
        title: "Loans",
        description:
          "Loan dashboard presenting current standing, eligibility information, previous loans, and illustrative loan estimates.",
      },
      {
        src: "/projects/sss-dashboard/benefits.png",
        title: "Benefits",
        description:
          "Searchable benefits directory designed to make benefit programs and eligibility information easier to discover.",
      },
      {
        src: "/projects/sss-dashboard/notifications.png",
        title: "Notification Center",
        description:
          "Interactive notification drawer for contribution updates, account reminders, and service information.",
      },
      {
        src: "/projects/sss-dashboard/profile.png",
        title: "Member Profile",
        description:
          "Desktop member profile panel with account information, privacy preferences, security options, and theme controls.",
      },
      {
        src: "/projects/sss-dashboard/mobile-dashboard.png",
        title: "Mobile Dashboard",
        description:
          "Responsive mobile member overview with touch-friendly navigation and reorganized dashboard content.",
      },
      {
        src: "/projects/sss-dashboard/mobile-dashboard-dark.png",
        title: "Mobile Dark Mode",
        description:
          "Dark-theme mobile dashboard demonstrating adaptive colors and responsive component styling.",
      },
      {
        src: "/projects/sss-dashboard/mobile-menu.png",
        title: "Mobile Member Menu",
        description:
          "Touch-optimized account menu with member information, security, preferences, appearance, and support controls.",
      },
      {
        src: "/projects/sss-dashboard/dark-mode.png",
        title: "Desktop Dark Mode",
        description:
          "Dark-mode desktop experience with the member profile interface layered over the dashboard.",
      },
    ],
  },

  {
    title: "JM Digital",
    category: "Business Website",
    description:
      "A production-ready business website created to showcase web and software development services, highlight previous work, and allow prospective clients to submit inquiries through a responsive contact experience.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Resend",
      "Vercel",
    ],
    status: "Completed",
    github: "https://github.com/akihiro0330/jm-digital",
    live: "https://jm-digital-website.vercel.app/",
    features: [
      "Responsive business landing page",
      "Services showcase",
      "Portfolio presentation",
      "Client inquiry form",
      "Resend email integration",
      "Production deployment on Vercel",
    ],
  },

  {
    title: "QR Attendance System",
    category: "Mobile Application",
    description:
      "A planned attendance management solution designed to streamline attendance recording through QR-based check-ins while reducing manual data entry.",
    technologies: [
      "Flutter",
      "Firebase",
      "QR Code",
      "Mobile Development",
    ],
  },

  {
    title: "Student Management System",
    category: "Web Application",
    description:
      "A database-driven web application designed to manage student information, academic records, and related data through a structured management interface.",
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  {
    title: "Travel Booking System",
    category: "Database Project",
    description:
      "A relational database project focused on organizing travel bookings, customer information, destinations, and related transactions using structured SQL data models.",
    technologies: [
      "MySQL",
      "SQL",
      "Database Design",
    ],
  },
];

export default function Projects() {
  const [expandedProject, setExpandedProject] =
    useState<string | null>(null);

  const [selectedScreenshot, setSelectedScreenshot] =
    useState<Screenshot | null>(null);

  const {
    projectsMode,
    activeProjectNumber,
  } = useProjectTelemetry();

  function toggleGallery(projectTitle: string) {
    setExpandedProject((current) =>
      current === projectTitle
        ? null
        : projectTitle
    );
  }

  function closeLightbox() {
    setSelectedScreenshot(null);
  }

  useEffect(() => {
    if (!selectedScreenshot) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedScreenshot(null);
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [selectedScreenshot]);

  return (
    <>
      <section
        id="projects"
        className="
          relative
          overflow-hidden
          px-4
          py-24
          sm:px-6
          sm:py-32
        "
      >
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[-10%]
            top-[20%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/[0.04]
            blur-[120px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[45%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-purple-500/[0.04]
            blur-[120px]
          "
        />

        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Things I've built and explored."
            description="A collection of mobile applications, desktop automation, production websites, software, and database projects."
          />

          <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">
            {projects.map(
              (project, index) => {
                const hasExpandableGallery =
                  project.expandableGallery === true;

                const isGalleryExpanded =
                  expandedProject ===
                  project.title;

                const projectNumber =
                  String(index + 1).padStart(2, "0");

                const isActive =
                  projectsMode &&
                  activeProjectNumber === projectNumber;

                return (
                  <motion.div
                    key={project.title}
                    data-cyber-project="true"
                    data-project-number={projectNumber}
                    data-project-title={project.title}
                    data-project-category={project.category}
                    data-project-status={
                      project.status ?? "Indexed"
                    }
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.07,
                    }}
                    className={`
                      group/project
                      relative
                      ${
                        project.featured ||
                        hasExpandableGallery
                          ? "lg:col-span-2"
                          : ""
                      }
                    `}
                  >
                    <CyberProjectFrame
                      number={projectNumber}
                      active={isActive}
                    />

                    <motion.div
                      animate={
                        isActive
                          ? { scale: 1.006, y: -2 }
                          : { scale: 1, y: 0 }
                      }
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative z-10 h-full"
                    >
                    <GlassCard
                      className="
                        h-full
                        p-5
                        sm:p-7
                        lg:p-8
                      "
                      contentClassName="h-full"
                    >
                      {project.featured ? (
                        <FeaturedKivora
                          project={project}
                        />
                      ) : hasExpandableGallery ? (
                        <ShowcaseProject
                          project={project}
                          expanded={
                            isGalleryExpanded
                          }
                          onToggle={() =>
                            toggleGallery(
                              project.title
                            )
                          }
                          onOpenScreenshot={
                            setSelectedScreenshot
                          }
                        />
                      ) : (
                        <StandardProject
                          project={project}
                          index={index}
                        />
                      )}
                    </GlassCard>
                    </motion.div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* Fullscreen screenshot viewer */}
      <AnimatePresence>
        {selectedScreenshot && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedScreenshot.title} screenshot`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onMouseDown={closeLightbox}
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              bg-black/85
              p-3
              backdrop-blur-xl
              sm:p-6
              lg:p-10
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
              }}
              onMouseDown={(event) =>
                event.stopPropagation()
              }
              className="
                relative
                flex
                max-h-[95vh]
                w-full
                max-w-7xl
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#0b0c10]
                shadow-[0_40px_120px_rgba(0,0,0,0.8)]
              "
            >
              {/* Header */}
              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-4
                  py-3
                  sm:px-5
                "
              >
                <div className="min-w-0">
                  <p
                    className="
                      truncate
                      text-sm
                      font-medium
                      text-white
                    "
                  >
                    {
                      selectedScreenshot.title
                    }
                  </p>

                  <p
                    className="
                      mt-0.5
                      hidden
                      text-xs
                      text-white/35
                      sm:block
                    "
                  >
                    {
                      selectedScreenshot.description
                    }
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close screenshot"
                  className="
                    ml-4
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.05]
                    text-white/60
                    transition-colors
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  <X size={17} />
                </button>
              </div>

              {/* Image */}
              <div
                className="
                  flex
                  min-h-0
                  flex-1
                  items-center
                  justify-center
                  overflow-auto
                  bg-black/30
                  p-2
                  sm:p-4
                "
              >
                <img
                  src={
                    selectedScreenshot.src
                  }
                  alt={
                    selectedScreenshot.title
                  }
                  className="
                    max-h-[82vh]
                    max-w-full
                    object-contain
                  "
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   FEATURED KIVORA
========================================================= */

function FeaturedKivora({
  project,
}: {
  project: Project;
}) {
  const screenshots =
    project.screenshots ?? [];

  return (
    <div
      className="
        relative
        grid
        gap-10
        xl:grid-cols-[0.92fr_1.08fr]
        xl:items-center
      "
    >
      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.16em]
              text-blue-400
            "
          >
            {project.category}
          </span>

          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-blue-400/20
              bg-blue-400/10
              px-2.5
              py-1
              text-[10px]
              font-medium
              uppercase
              tracking-wider
              text-blue-300
            "
          >
            <Sparkles size={11} />
            Featured
          </span>

          {project.status && (
            <StatusBadge
              status={project.status}
            />
          )}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-blue-400/15
              bg-blue-400/[0.08]
              text-blue-300
            "
          >
            <Smartphone size={20} />
          </div>

          <h3
            className="
              text-3xl
              font-semibold
              tracking-[-0.03em]
              text-white
              sm:text-4xl
            "
          >
            {project.title}
          </h3>
        </div>

        <p
          className="
            mt-6
            max-w-xl
            text-sm
            leading-7
            text-white/45
            sm:text-base
          "
        >
          {project.description}
        </p>

        <FeatureList
          features={project.features}
        />

        <TechnologyList
          technologies={
            project.technologies
          }
        />

        <div className="mt-9 flex flex-wrap gap-3">
          {project.github && (
            <ProjectLink
              href={project.github}
              label="View on GitHub"
              icon={
                <FaGithub size={16} />
              }
              primary
            />
          )}

          {project.live && (
            <ProjectLink
              href={project.live}
              label="Live Demo"
              icon={
                <ExternalLink
                  size={16}
                />
              }
            />
          )}
        </div>

        {!project.live && (
          <p
            className="
              mt-4
              max-w-md
              text-xs
              leading-5
              text-white/25
            "
          >
            Native mobile application
            currently tested through Expo
            during development.
          </p>
        )}
      </div>

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[620px]
          xl:mx-0
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[75%]
            w-[80%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/10
            blur-[90px]
          "
        />

        {/* Desktop phones */}
        <div
          className="
            relative
            hidden
            min-h-[510px]
            sm:block
          "
        >
          {screenshots[0] && (
            <PhoneScreenshot
              screenshot={
                screenshots[0]
              }
              className="
                absolute
                bottom-3
                left-[2%]
                z-10
                w-[34%]
                -rotate-[4deg]
              "
            />
          )}

          {screenshots[1] && (
            <PhoneScreenshot
              screenshot={
                screenshots[1]
              }
              className="
                absolute
                left-1/2
                top-0
                z-30
                w-[38%]
                -translate-x-1/2
              "
            />
          )}

          {screenshots[2] && (
            <PhoneScreenshot
              screenshot={
                screenshots[2]
              }
              className="
                absolute
                bottom-3
                right-[2%]
                z-20
                w-[34%]
                rotate-[4deg]
              "
            />
          )}
        </div>

        {/* Mobile */}
        {screenshots[0] && (
          <div className="relative sm:hidden">
            <div
              className="
                mx-auto
                w-[72%]
                max-w-[280px]
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-black
                shadow-[0_30px_80px_rgba(0,0,0,0.6)]
              "
            >
              <img
                src={
                  screenshots[0].src
                }
                alt={
                  screenshots[0].title
                }
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   EXPANDABLE SHOWCASE PROJECT
========================================================= */

function ShowcaseProject({
  project,
  expanded,
  onToggle,
  onOpenScreenshot,
}: {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
  onOpenScreenshot: (
    screenshot: Screenshot
  ) => void;
}) {
  const screenshots =
    project.screenshots ?? [];

  return (
    <div className="relative">
      <div
        className="
          grid
          gap-10
          xl:grid-cols-[0.9fr_1.1fr]
          xl:items-center
        "
      >
        {/* Content */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.16em]
                text-blue-400
              "
            >
              {project.category}
            </span>

            {project.status && (
              <StatusBadge
                status={project.status}
              />
            )}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-purple-400/15
                bg-purple-400/[0.08]
                text-purple-300
              "
            >
              <Monitor size={20} />
            </div>

            <h3
              className="
                text-3xl
                font-semibold
                tracking-[-0.03em]
                text-white
                sm:text-4xl
              "
            >
              {project.title}
            </h3>
          </div>

          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-white/45
              sm:text-base
            "
          >
            {project.description}
          </p>

          <FeatureList
            features={
              project.features
            }
          />

          <TechnologyList
            technologies={
              project.technologies
            }
          />

          <div className="mt-9 flex flex-wrap gap-3">
            {project.github && (
              <ProjectLink
                href={project.github}
                label="View on GitHub"
                icon={
                  <FaGithub
                    size={16}
                  />
                }
                primary
              />
            )}

            {project.live && (
              <ProjectLink
                href={project.live}
                label="Live Demo"
                icon={
                  <ExternalLink
                    size={16}
                  />
                }
                primary={!project.github}
              />
            )}

            <button
              type="button"
              onClick={onToggle}
              aria-expanded={expanded}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.05]
                px-5
                py-2.5
                text-sm
                text-white/70
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-white/20
                hover:bg-white/10
                hover:text-white
              "
            >
              <Images size={16} />

              {expanded
                ? "Hide Screenshots"
                : "View Screenshots"}

              {expanded ? (
                <ChevronUp size={14} />
              ) : (
                <ChevronDown
                  size={14}
                />
              )}
            </button>
          </div>
        </div>

        {/* Primary preview */}
        {screenshots[0] && (
          <button
            type="button"
            onClick={() =>
              onOpenScreenshot(
                screenshots[0]
              )
            }
            className="
              group/preview
              relative
              block
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-black/30
              text-left
              shadow-[0_30px_80px_rgba(0,0,0,0.35)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-white/20
            "
          >
            <div
              className="
                absolute
                inset-0
                z-10
                bg-gradient-to-t
                from-black/50
                via-transparent
                to-transparent
              "
            />

            <img
              src={
                screenshots[0].src
              }
              alt={
                screenshots[0].title
              }
              loading="lazy"
              className="
                block
                h-auto
                w-full
                object-contain
                transition-transform
                duration-700
                group-hover/preview:scale-[1.015]
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-20
                flex
                items-end
                justify-between
                gap-4
                p-4
                sm:p-5
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  {project.title}
                </p>

                <p
                  className="
                    mt-1
                    hidden
                    text-xs
                    text-white/45
                    sm:block
                  "
                >
                  Click to enlarge
                </p>
              </div>

              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  text-white/70
                  backdrop-blur-md
                "
              >
                <Images size={15} />
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Expandable screenshots */}
      <AnimatePresence initial={false}>
        {expanded &&
          screenshots.length > 0 && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="overflow-hidden"
            >
              <div
                className="
                  mt-10
                  border-t
                  border-white/10
                  pt-8
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-2
                    sm:flex-row
                    sm:items-end
                    sm:justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        text-sm
                        font-medium
                        text-white
                      "
                    >
                      {project.title} Documentation
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-white/35
                      "
                    >
                      Explore the
                      application
                      interface and
                      major workflows.
                    </p>
                  </div>

                  <span
                    className="
                      text-xs
                      text-white/25
                    "
                  >
                    {
                      screenshots.length
                    }{" "}
                    screens
                  </span>
                </div>

                <div
                  className="
                    mt-6
                    grid
                    grid-cols-1
                    gap-4
                    sm:grid-cols-2
                    xl:grid-cols-3
                  "
                >
                  {screenshots.map(
                    (
                      screenshot,
                      screenshotIndex
                    ) => (
                      <motion.button
                        key={
                          screenshot.src
                        }
                        type="button"
                        initial={{
                          opacity: 0,
                          y: 16,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          delay:
                            screenshotIndex *
                            0.05,
                        }}
                        onClick={() =>
                          onOpenScreenshot(
                            screenshot
                          )
                        }
                        className="
                          group/image
                          overflow-hidden
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.025]
                          text-left
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-white/20
                          hover:bg-white/[0.04]
                        "
                      >
                        <div
                          className="
                            relative
                            overflow-hidden
                            bg-black/30
                          "
                        >
                          <img
                            src={
                              screenshot.src
                            }
                            alt={
                              screenshot.title
                            }
                            loading="lazy"
                            className="
                              aspect-[16/10]
                              w-full
                              object-contain
                              transition-transform
                              duration-500
                              group-hover/image:scale-[1.02]
                            "
                          />

                          <div
                            className="
                              pointer-events-none
                              absolute
                              inset-0
                              bg-gradient-to-t
                              from-black/25
                              to-transparent
                            "
                          />
                        </div>

                        <div className="p-4">
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-3
                            "
                          >
                            <p
                              className="
                                text-sm
                                font-medium
                                text-white/85
                              "
                            >
                              {
                                screenshot.title
                              }
                            </p>

                            <ArrowUpRight
                              size={14}
                              className="
                                shrink-0
                                text-white/25
                                transition-colors
                                group-hover/image:text-blue-300
                              "
                            />
                          </div>

                          <p
                            className="
                              mt-2
                              line-clamp-2
                              text-xs
                              leading-5
                              text-white/35
                            "
                          >
                            {
                              screenshot.description
                            }
                          </p>
                        </div>
                      </motion.button>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   STANDARD PROJECT
========================================================= */

function StandardProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className="relative flex h-full flex-col">
      <div className="flex flex-wrap items-center gap-3 pr-8">
        <span
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.16em]
            text-blue-400
          "
        >
          {project.category}
        </span>

        {project.status && (
          <StatusBadge
            status={project.status}
          />
        )}
      </div>

      <h3
        className="
          mt-4
          text-2xl
          font-semibold
          tracking-tight
          text-white
          sm:text-3xl
        "
      >
        {project.title}
      </h3>

      <p
        className="
          mt-4
          max-w-2xl
          text-sm
          leading-7
          text-white/45
          sm:text-base
        "
      >
        {project.description}
      </p>

      <TechnologyList
        technologies={
          project.technologies
        }
      />

      {(project.github ||
        project.live) && (
        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          {project.github && (
            <ProjectLink
              href={project.github}
              label="GitHub"
              icon={
                <FaGithub size={16} />
              }
            />
          )}

          {project.live && (
            <ProjectLink
              href={project.live}
              label="Live Demo"
              icon={
                <ExternalLink
                  size={16}
                />
              }
              primary
            />
          )}
        </div>
      )}

      {!project.github &&
        !project.live && (
          <div className="mt-auto pt-8">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2.5
                text-xs
                text-white/35
              "
            >
              Project details coming soon
            </span>
          </div>
        )}

      <span
        className="
          absolute
          right-0
          top-0
          text-xs
          font-medium
          tracking-widest
          text-white/15
        "
      >
        {String(index + 1).padStart(
          2,
          "0"
        )}
      </span>
    </div>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function StatusBadge({
  status,
}: {
  status: ProjectStatus;
}) {
  const active =
    status === "In Development" ||
    status === "Active Development";

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        rounded-full
        border
        px-2.5
        py-1
        text-[10px]
        font-medium
        uppercase
        tracking-wider
        ${
          active
            ? `
              border-amber-400/15
              bg-amber-400/[0.06]
              text-amber-200/70
            `
            : `
              border-emerald-400/15
              bg-emerald-400/[0.06]
              text-emerald-200/70
            `
        }
      `}
    >
      <span
        className={`
          h-1.5
          w-1.5
          rounded-full
          ${
            active
              ? "animate-pulse bg-amber-300"
              : "bg-emerald-300"
          }
        `}
      />

      {status}
    </span>
  );
}

function FeatureList({
  features,
}: {
  features?: string[];
}) {
  if (!features?.length) {
    return null;
  }

  return (
    <div
      className="
        mt-7
        grid
        gap-x-5
        gap-y-3
        sm:grid-cols-2
      "
    >
      {features.map((feature) => (
        <div
          key={feature}
          className="
            flex
            items-start
            gap-2.5
            text-sm
            text-white/50
          "
        >
          <span
            className="
              mt-0.5
              flex
              h-5
              w-5
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-blue-400/15
              bg-blue-400/[0.07]
              text-blue-300
            "
          >
            <Check size={11} />
          </span>

          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}

function TechnologyList({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="mt-7 flex flex-wrap gap-2">
      {technologies.map(
        (technology) => (
          <span
            key={technology}
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-3
              py-1.5
              text-xs
              text-white/55
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.08]
              hover:text-white
            "
          >
            {technology}
          </span>
        )
      )}
    </div>
  );
}

function ProjectLink({
  href,
  label,
  icon,
  primary = false,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        px-5
        py-2.5
        text-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        ${
          primary
            ? `
              bg-white
              font-medium
              text-black
              hover:bg-white/90
            `
            : `
              border
              border-white/10
              bg-white/[0.05]
              text-white/70
              hover:border-white/20
              hover:bg-white/10
              hover:text-white
            `
        }
      `}
    >
      {icon}

      {label}

      <ArrowUpRight size={14} />
    </a>
  );
}

function PhoneScreenshot({
  screenshot,
  className = "",
}: {
  screenshot: Screenshot;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
        rotate: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        overflow-hidden
        rounded-[2rem]
        border
        border-white/10
        bg-black
        shadow-[0_30px_80px_rgba(0,0,0,0.55)]
        ${className}
      `}
    >
      <img
        src={screenshot.src}
        alt={screenshot.title}
        loading="lazy"
        draggable={false}
        className="
          block
          h-auto
          w-full
          select-none
        "
      />
    </motion.div>
  );
}

/* =========================================================
   CYBER PROJECT TELEMETRY FRAME
========================================================= */

type CyberCornerPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

function CyberProjectFrame({
  number,
  active,
}: {
  number: string;
  active: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-[5px] z-20"
    >
      <div
        className={`
          absolute inset-0 rounded-[28px]
          transition-all duration-700
          ${
            active
              ? "opacity-100 shadow-[0_0_45px_rgba(52,211,153,0.08)]"
              : "opacity-0"
          }
        `}
      />

      <div
        className={`
          absolute -top-3 left-5 flex items-center gap-2
          font-mono text-[7px] uppercase tracking-[0.18em]
          transition-all duration-500
          ${
            active
              ? "translate-y-0 opacity-100 text-emerald-300/70"
              : "translate-y-1 opacity-0"
          }
        `}
      >
        <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.9)]" />
        PRJ_{number}
        <span className="text-white/15">//</span>
        ACTIVE
      </div>

      <CyberCorner position="top-left" active={active} />
      <CyberCorner position="top-right" active={active} />
      <CyberCorner position="bottom-left" active={active} />
      <CyberCorner position="bottom-right" active={active} />

      <div
        className={`
          absolute inset-x-3 top-0 h-full overflow-hidden rounded-[24px]
          transition-opacity duration-500
          ${active ? "opacity-100" : "opacity-0"}
        `}
      >
        <div className="cyber-project-scanner absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/45 to-transparent shadow-[0_0_18px_rgba(52,211,153,0.3)]" />
        <div className="cyber-project-scanner-glow absolute left-[10%] right-[10%] top-0 h-12 bg-gradient-to-b from-emerald-400/[0.045] to-transparent" />
      </div>

      <div
        className={`
          absolute -bottom-3 right-6 font-mono text-[6px]
          uppercase tracking-[0.15em] transition-all duration-500
          ${active ? "opacity-60 text-emerald-400" : "opacity-0"}
        `}
      >
        LINK::PRJ_{number} // SCANNING
      </div>

      <style>{`
        .cyber-project-scanner,
        .cyber-project-scanner-glow {
          animation: cyberProjectScan 3.6s ease-in-out infinite;
        }

        @keyframes cyberProjectScan {
          0% { top: 0%; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cyber-project-scanner,
          .cyber-project-scanner-glow {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function CyberCorner({
  position,
  active,
}: {
  position: CyberCornerPosition;
  active: boolean;
}) {
  const positions: Record<CyberCornerPosition, string> = {
    "top-left": "left-0 top-0",
    "top-right": "right-0 top-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const horizontal: Record<CyberCornerPosition, string> = {
    "top-left": "left-0 top-0",
    "top-right": "right-0 top-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const vertical: Record<CyberCornerPosition, string> = {
    "top-left": "left-0 top-0",
    "top-right": "right-0 top-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <div
      className={`
        absolute h-7 w-7 transition-all duration-500
        ${positions[position]}
        ${active ? "scale-100 opacity-100" : "scale-75 opacity-0"}
      `}
    >
      <span
        className={`
          absolute h-px w-5 bg-emerald-300/65
          shadow-[0_0_7px_rgba(52,211,153,0.35)]
          ${horizontal[position]}
        `}
      />
      <span
        className={`
          absolute h-5 w-px bg-emerald-300/65
          shadow-[0_0_7px_rgba(52,211,153,0.35)]
          ${vertical[position]}
        `}
      />
    </div>
  );
}
