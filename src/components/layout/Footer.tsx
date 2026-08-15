import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-sm text-white/35 sm:flex-row">
        <p>
          © {currentYear} Jay Mark Bolalaque. All rights reserved.
        </p>

        <p className="flex items-center gap-1.5">
          Built with
          <Heart size={13} className="text-white/50" />
          using React & TypeScript.
        </p>

        <a
          href="#"
          aria-label="Back to top"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            text-white/50
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-white/10
            hover:text-white
          "
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}