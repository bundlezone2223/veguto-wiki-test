const LETTERS = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function firstLetter(s: string): string {
  const c = s.trim().charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
}

export function LetterFilter({
  active,
  onChange,
  available,
}: {
  active: string;
  onChange: (l: string) => void;
  available?: Set<string>;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-border bg-card p-3 shadow-sm">
      <button
        type="button"
        onClick={() => onChange("ALL")}
        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
          active === "ALL"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-accent hover:text-foreground"
        }`}
      >
        All
      </button>
      {LETTERS.map((l) => {
        const enabled = !available || available.has(l);
        const isActive = active === l;
        return (
          <button
            key={l}
            type="button"
            disabled={!enabled}
            onClick={() => onChange(l)}
            className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground"
                : enabled
                  ? "text-foreground hover:bg-accent"
                  : "cursor-not-allowed text-muted-foreground/30"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
