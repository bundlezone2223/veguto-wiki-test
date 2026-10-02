import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";

export function ExpandingSearch() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        if (!q.trim()) return;
        navigate({ to: "/search", search: { q: q.trim() } });
        setOpen(false);
      }}
      className="relative flex items-center"
    >
      <div
        className={`flex items-center overflow-hidden rounded-full border bg-card transition-all duration-300 ${
          open ? "w-56 border-primary pl-3 pr-1 sm:w-64" : "w-9 border-border"
        }`}
      >
        <input
          ref={inputRef}
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search…"
          aria-label="Search"
          tabIndex={open ? 0 : -1}
          className={`h-9 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground ${
            open ? "opacity-100" : "w-0 opacity-0"
          }`}
        />
        <button
          type="button"
          onClick={() => {
            if (open && q.trim()) {
              navigate({ to: "/search", search: { q: q.trim() } });
              setOpen(false);
              return;
            }
            setOpen((v) => !v);
          }}
          aria-label={open ? "Close search" : "Open search"}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:text-primary"
        >
          {open && !q ? <X className="size-4" /> : <Search className="size-4" />}
        </button>
      </div>
    </form>
  );
}
