import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";

export function SearchBar({
  initial = "",
  placeholder = "Search articles, tags, vibes…",
  size = "md",
}: {
  initial?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
}) {
  const [q, setQ] = useState(initial);
  const navigate = useNavigate();
  const heights = { sm: "h-10", md: "h-12", lg: "h-14" }[size];

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        navigate({ to: "/search", search: { q: q.trim() } });
      }}
      className={`flex w-full items-center gap-2 rounded-full border border-border bg-card pl-5 pr-2 shadow-sm focus-within:border-primary focus-within:shadow-md ${heights}`}
    >
      <Search className="size-4 shrink-0 text-muted-foreground" />
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        aria-label="Search Veguto Wiki"
        className="h-full flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />
      <button
        type="submit"
        className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Search
      </button>
    </form>
  );
}
