export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base glow */}
      <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Purple glow */}
      <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[120px] animate-aurora" />

      {/* Cyan glow */}
      <div className="absolute right-[-10%] top-[40%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-aurora-reverse" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}