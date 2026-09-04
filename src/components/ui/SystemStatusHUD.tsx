import {
  Activity,
  Cpu,
  Database,
  Radio,
  ShieldCheck,
  Wifi,
} from "lucide-react";

import {
  type ProjectTelemetry,
  useProjectTelemetry,
} from "../../context/ProjectTelemetryContext";

type StatusItemProps = {
  label: string;
  value: string;
};

function StatusItem({ label, value }: StatusItemProps) {
  return (
    <div className="flex items-center justify-between gap-5 font-mono text-[8px] uppercase tracking-[0.14em]">
      <span className="text-white/25">{label}</span>
      <span className="flex items-center gap-1.5 text-emerald-400/65">
        <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
        {value}
      </span>
    </div>
  );
}

export default function SystemStatusHUD() {
  const {
    projectsMode,
    activeProject,
    projectCount,
  } = useProjectTelemetry();

  return (
    <>
      <aside
        aria-label={
          projectsMode
            ? "Project deployment monitor"
            : "Portfolio system status"
        }
        className="pointer-events-none fixed bottom-6 left-6 z-40 hidden w-[230px] xl:block"
      >
        <div className="relative overflow-hidden rounded-xl border border-emerald-400/[0.10] bg-[#050816]/65 p-4 shadow-[0_15px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <div className="cyber-hud-scanner absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/45 to-transparent" />

          <span className="absolute left-2 top-2 h-2 w-px bg-emerald-400/25" />
          <span className="absolute left-2 top-2 h-px w-2 bg-emerald-400/25" />
          <span className="absolute right-2 top-2 h-2 w-px bg-emerald-400/25" />
          <span className="absolute right-2 top-2 h-px w-2 bg-emerald-400/25" />

          {projectsMode ? (
            <DeploymentMonitor
              activeProject={activeProject}
              projectCount={projectCount}
            />
          ) : (
            <NormalSystemStatus />
          )}
        </div>
      </aside>

      <div className="pointer-events-none fixed bottom-4 left-1/2 z-40 -translate-x-1/2 xl:hidden">
        <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-emerald-400/[0.10] bg-[#050816]/70 px-3 py-1.5 font-mono text-[7px] uppercase tracking-[0.16em] text-emerald-400/45 backdrop-blur-xl">
          <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />

          {projectsMode && activeProject ? (
            <>
              PRJ_{activeProject.number}
              <span className="text-white/15">//</span>
              <span className="max-w-[140px] truncate">
                {activeProject.title}
              </span>
            </>
          ) : (
            <>System Online</>
          )}
        </div>
      </div>

      <style>{`
        .cyber-hud-scanner {
          animation: cyberHudScanner 3.2s ease-in-out infinite;
        }

        @keyframes cyberHudScanner {
          0%, 100% { opacity: 0.15; transform: translateX(-50%); }
          50% { opacity: 0.8; transform: translateX(50%); }
        }

        .deployment-pulse {
          animation: deploymentPulse 1.8s ease-in-out infinite;
        }

        @keyframes deploymentPulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 1; }
        }

        .deployment-bars span {
          transform-origin: bottom;
          animation: deploymentBars 1.4s ease-in-out infinite alternate;
        }

        @keyframes deploymentBars {
          from { transform: scaleY(0.35); opacity: 0.2; }
          to { transform: scaleY(1); opacity: 0.7; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cyber-hud-scanner,
          .deployment-pulse,
          .deployment-bars span {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}

function NormalSystemStatus() {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity size={12} className="text-emerald-400/70" />
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
            System Status
          </span>
        </div>
        <SystemPulse />
      </div>

      <div className="space-y-2.5">
        <StatusItem label="Core" value="Online" />
        <StatusItem label="Interface" value="Ready" />
        <StatusItem label="Session" value="Secure" />
      </div>

      <div className="mt-4 h-px bg-white/[0.05]" />

      <div className="mt-3 flex items-center justify-between text-emerald-400/30">
        <Cpu size={11} />
        <Wifi size={11} />
        <ShieldCheck size={11} />
        <span className="font-mono text-[7px] tracking-[0.15em]">
          JAY_OS
        </span>
      </div>
    </>
  );
}

type DeploymentMonitorProps = {
  activeProject: ProjectTelemetry | null;
  projectCount: number;
};

function DeploymentMonitor({
  activeProject,
  projectCount,
}: DeploymentMonitorProps) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Database size={12} className="text-emerald-400/70" />
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/45">
              Deployment Monitor
            </span>
          </div>
          <div className="mt-1 font-mono text-[6px] uppercase tracking-[0.18em] text-emerald-400/25">
            SEC_05 // PROJECT DATABASE
          </div>
        </div>
        <SystemPulse />
      </div>

      <div className="mt-4 space-y-1 border-y border-emerald-400/[0.06] py-3 font-mono text-[6px] uppercase tracking-[0.14em] text-emerald-400/25">
        <div>&gt; INDEXING DATABASE</div>
        <div>&gt; {projectCount} RECORDS FOUND</div>
        <div className="deployment-pulse text-emerald-300/50">
          &gt; MONITOR ONLINE_
        </div>
      </div>

      <div className="mt-4">
        <div className="font-mono text-[6px] uppercase tracking-[0.16em] text-white/20">
          Active Deployment
        </div>

        {activeProject ? (
          <>
            <div className="mt-2 flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-emerald-400/15 bg-emerald-400/[0.05] font-mono text-[8px] text-emerald-300/65">
                {activeProject.number}
              </div>

              <div className="min-w-0">
                <div className="truncate font-mono text-[9px] uppercase tracking-[0.08em] text-white/65">
                  {activeProject.title}
                </div>
                <div className="mt-1 truncate font-mono text-[6px] uppercase tracking-[0.12em] text-white/20">
                  {activeProject.category}
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <MiniTelemetry
                label="ID"
                value={`PRJ_${activeProject.number}`}
              />
              <MiniTelemetry
                label="STATE"
                value={activeProject.status}
              />
            </div>
          </>
        ) : (
          <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.1em] text-white/25">
            Scanning...
          </div>
        )}
      </div>

      <div className="mt-4 flex items-end justify-between border-t border-white/[0.05] pt-3">
        <div>
          <div className="flex items-center gap-1.5 font-mono text-[6px] uppercase tracking-[0.15em] text-emerald-400/25">
            <Radio size={9} />
            Data Link
          </div>
          <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.12em] text-emerald-400/45">
            ACTIVE
          </div>
        </div>

        <div className="deployment-bars flex h-6 items-end gap-[2px]">
          {[8, 16, 11, 20, 13, 23, 17, 10, 19].map(
            (height, index) => (
              <span
                key={index}
                className="w-[2px] bg-emerald-400/50"
                style={{
                  height,
                  animationDelay: `${index * 80}ms`,
                }}
              />
            )
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between font-mono text-[6px] uppercase tracking-[0.15em] text-white/15">
        <span>JAY_OS::DEPLOY</span>
        <span className="text-emerald-400/35">LINKED</span>
      </div>
    </>
  );
}

function MiniTelemetry({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-white/[0.05] bg-white/[0.015] px-2 py-2">
      <div className="font-mono text-[5px] uppercase tracking-[0.14em] text-white/20">
        {label}
      </div>
      <div className="mt-1 truncate font-mono text-[7px] uppercase tracking-[0.08em] text-emerald-400/45">
        {value}
      </div>
    </div>
  );
}

function SystemPulse() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
    </span>
  );
}
