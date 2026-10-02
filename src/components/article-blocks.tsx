import type { ReactNode } from "react";

/* ----------------------------- Hero & header ---------------------------- */

export function Hero({
  emoji,
  gradient,
  children,
}: {
  emoji?: string;
  gradient?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className="relative mb-6 flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl md:h-72"
      style={{
        background:
          gradient ??
          "linear-gradient(135deg,oklch(0.85 0.12 350),oklch(0.78 0.14 300))",
      }}
      aria-hidden={!children}
    >
      {emoji && (
        <span
          className="text-7xl md:text-8xl"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,.18))" }}
        >
          {emoji}
        </span>
      )}
      {children}
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,.45),transparent_55%)]" />
    </div>
  );
}

export function Meta({
  badge,
  date,
}: {
  badge?: string;
  date?: string;
}) {
  if (!badge && !date) return null;
  return (
    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
      {badge && (
        <span className="rounded-full bg-primary-soft px-3 py-1 font-semibold uppercase tracking-wider text-primary">
          {badge}
        </span>
      )}
      {date && <span>{date}</span>}
    </div>
  );
}

export function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-display text-4xl leading-tight md:text-5xl">
      <span className="bg-gradient-to-r from-primary to-[oklch(0.72_0.16_300)] bg-clip-text text-transparent">
        {children}
      </span>
    </h1>
  );
}

export function Excerpt({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 text-base text-muted-foreground md:text-lg">{children}</p>
  );
}

/* ----------------------------- Body blocks ------------------------------ */

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 mb-4 font-display text-2xl md:text-3xl">
      <span className="bg-gradient-to-r from-primary to-[oklch(0.72_0.16_300)] bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-6 mb-2 text-lg font-semibold text-[oklch(0.55_0.15_300)]">
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-[15px] leading-[1.9]">{children}</p>;
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mb-4 space-y-2 text-[15px]">
      {items.map((item, i) => (
        <li key={i} className="relative pl-6 leading-relaxed">
          <span className="absolute left-0 top-1 text-primary">◆</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Numbered({ items }: { items: ReactNode[] }) {
  return (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-[15px] leading-relaxed marker:font-bold marker:text-primary">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}

export function Quote({
  children,
  cite,
}: {
  children: ReactNode;
  cite?: ReactNode;
}) {
  return (
    <blockquote className="my-6 rounded-r-lg border-l-4 border-primary bg-primary-soft/60 p-4 italic">
      <p className="text-base md:text-lg">{children}</p>
      {cite && (
        <footer className="mt-2 text-xs not-italic text-muted-foreground">
          — {cite}
        </footer>
      )}
    </blockquote>
  );
}

export function Figure({
  emoji,
  src,
  alt,
  caption,
}: {
  emoji?: string;
  src?: string;
  alt?: string;
  caption?: ReactNode;
}) {
  return (
    <figure className="my-6">
      {src ? (
        <img
          src={src}
          alt={alt ?? ""}
          className="h-auto w-full rounded-xl border border-border"
        />
      ) : (
        <div
          className="flex h-56 w-full items-center justify-center rounded-xl border border-border text-6xl"
          style={{
            background:
              "linear-gradient(135deg,oklch(0.92 0.06 320),oklch(0.9 0.08 280))",
          }}
          aria-hidden
        >
          {emoji ?? "✨"}
        </div>
      )}
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Callout({
  title,
  children,
}: {
  title?: ReactNode;
  children: ReactNode;
}) {
  return (
    <aside className="my-6 rounded-xl border border-primary/30 bg-gradient-to-br from-[oklch(0.94_0.04_350)] to-[oklch(0.94_0.05_300)] p-5">
      {title && (
        <h4 className="mb-1 font-semibold text-[oklch(0.4_0.1_330)]">
          {title}
        </h4>
      )}
      <div className="text-[15px] leading-relaxed">{children}</div>
    </aside>
  );
}
