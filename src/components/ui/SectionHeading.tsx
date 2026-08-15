type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-8 text-white/50 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}