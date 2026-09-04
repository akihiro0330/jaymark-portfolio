import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export type ProjectTelemetry = {
  number: string;
  title: string;
  category: string;
  status: string;
};

type ProjectTelemetryContextValue = {
  projectsMode: boolean;
  activeProject: ProjectTelemetry | null;
  activeProjectNumber: string | null;
  projectCount: number;
};

const ProjectTelemetryContext =
  createContext<ProjectTelemetryContextValue>({
    projectsMode: false,
    activeProject: null,
    activeProjectNumber: null,
    projectCount: 0,
  });

export function ProjectTelemetryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [projectsMode, setProjectsMode] = useState(false);
  const [activeProject, setActiveProject] =
    useState<ProjectTelemetry | null>(null);
  const [projectCount, setProjectCount] = useState(0);
  const ratiosRef = useRef(new Map<Element, number>());

  useEffect(() => {
    const section = document.getElementById("projects");
    if (!section) return;

    const cards = Array.from(
      section.querySelectorAll("[data-cyber-project]")
    );

    setProjectCount(cards.length);

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setProjectsMode(entry.isIntersecting);
        if (!entry.isIntersecting) setActiveProject(null);
      },
      {
        rootMargin: "-18% 0px -18% 0px",
        threshold: [0, 0.05, 0.12, 0.25],
      }
    );

    sectionObserver.observe(section);

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current.set(
            entry.target,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        });

        let bestElement: Element | null = null;
        let bestRatio = 0;

        ratiosRef.current.forEach((ratio, element) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestElement = element;
          }
        });

        if (!bestElement) return;

        const element = bestElement as HTMLElement;

        setActiveProject({
          number: element.dataset.projectNumber ?? "00",
          title: element.dataset.projectTitle ?? "UNKNOWN",
          category: element.dataset.projectCategory ?? "PROJECT",
          status: element.dataset.projectStatus ?? "INDEXED",
        });
      },
      {
        rootMargin: "-15% 0px -25% 0px",
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8],
      }
    );

    cards.forEach((card) => {
      ratiosRef.current.set(card, 0);
      cardObserver.observe(card);
    });

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
      ratiosRef.current.clear();
    };
  }, []);

  return (
    <ProjectTelemetryContext.Provider
      value={{
        projectsMode,
        activeProject,
        activeProjectNumber: activeProject?.number ?? null,
        projectCount,
      }}
    >
      {children}
    </ProjectTelemetryContext.Provider>
  );
}

export function useProjectTelemetry() {
  return useContext(ProjectTelemetryContext);
}
