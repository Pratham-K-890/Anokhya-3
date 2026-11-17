import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section flex min-h-[70svh] flex-col items-center justify-center text-center">
      <p className="eyebrow mb-3">404</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">This page wandered off-campus</h1>
      <p className="mt-3 max-w-md text-[var(--color-muted-foreground)]">
        The page you&rsquo;re looking for doesn&rsquo;t exist. Head back and explore the events instead.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back home
      </Link>
    </section>
  );
}
