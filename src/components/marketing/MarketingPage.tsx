import Link from "next/link";

interface MarketingPageProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function MarketingPage({
  eyebrow,
  title,
  description,
  primaryLabel = "Back to Home",
  primaryHref = "/",
}: MarketingPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 uppercase tracking-[0.45em] text-cyan-400">
          {eyebrow}
        </p>

        <h1 className="mb-8 text-5xl font-black lg:text-7xl">
          {title}
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-zinc-400">
          {description}
        </p>

        <Link
          href={primaryHref}
          className="inline-flex rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
        >
          {primaryLabel}
        </Link>
      </div>
    </main>
  );
}
