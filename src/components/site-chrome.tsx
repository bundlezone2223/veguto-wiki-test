import { Link } from "@tanstack/react-router";
import { Menu, Mail } from "lucide-react";
import { CATEGORY_LIST, DISCORD_URL } from "@/content/articles";
import { ExpandingSearch } from "@/components/expanding-search";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import logoUrl from "@/assets/veguto-logo.svg";
import youtubeIcon from "@/assets/icons/youtube.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import discordIcon from "@/assets/icons/discord.svg";

const YOUTUBE_URL = "https://youtube.com/@veguto";
const INSTAGRAM_URL = "https://instagram.com/veguto";
const CONTACT_EMAIL = "veguto27@gmail.com";

function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary lg:hidden"
        >
          <Menu size={18} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl text-primary">Veguto</SheetTitle>
        </SheetHeader>
        <p className="veg-sidebar-heading">Quick nav</p>
        <nav className="flex flex-col gap-1">
          <Link to="/" className="veg-sidebar-link">🏠 Home</Link>
          <Link to="/articles" className="veg-sidebar-link">📚 All articles</Link>
          <Link to="/tags" className="veg-sidebar-link">🏷️ Tags</Link>
          <Link to="/about" className="veg-sidebar-link">✨ About the wiki</Link>
        </nav>

        <p className="veg-sidebar-heading">Categories</p>
        <nav className="flex flex-col gap-1">
          {CATEGORY_LIST.filter((c) => !["aesthetics", "dark-side", "community"].includes(c.id)).map((c) => (
            <Link
              key={c.id}
              to="/category/$id"
              params={{ id: c.id }}
              className="veg-sidebar-link"
            >
              <span>{c.emoji}</span>
              <span>{c.title}</span>
            </Link>
          ))}
        </nav>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#5865F2] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
        >
          <img src={discordIcon} alt="" className="h-5 w-5 [filter:brightness(0)_invert(1)]" />
          Join our Discord
        </a>
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card/90 px-4 py-3 backdrop-blur md:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <Link to="/" className="group flex items-center gap-2 transition-opacity hover:opacity-80">
          <span className="font-display text-3xl text-primary">Veguto</span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            wiki
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium md:gap-4">
          <Link
            to="/category/$id"
            params={{ id: "anime-manga" }}
            className="hover:text-primary"
          >
            🌙 Anime
          </Link>
          <Link
            to="/category/$id"
            params={{ id: "gaming" }}
            className="hover:text-primary"
          >
            🎮 Gaming
          </Link>
          <ExpandingSearch />
          <SideMenu />
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

      <div className="bg-card/60 pt-12 pb-6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoUrl} alt="Veguto" className="h-10 w-10 [filter:invert(54%)_sepia(67%)_saturate(1953%)_hue-rotate(285deg)_brightness(101%)_contrast(101%)]" />
              <div className="leading-tight">
                <p className="font-display text-3xl text-primary">Veguto</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">wiki</p>
              </div>
            </Link>

            <div className="flex items-center gap-5">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="transition-transform hover:scale-110"
              >
                <img src={youtubeIcon} alt="" className="h-16 w-16 [filter:invert(54%)_sepia(67%)_saturate(1953%)_hue-rotate(285deg)_brightness(101%)_contrast(101%)]" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-transform hover:scale-110"
              >
                <img src={instagramIcon} alt="" className="h-16 w-16 [filter:invert(54%)_sepia(67%)_saturate(1953%)_hue-rotate(285deg)_brightness(101%)_contrast(101%)]" />
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className="transition-transform hover:scale-110"
              >
                <img src={discordIcon} alt="" className="h-16 w-16 [filter:invert(54%)_sepia(67%)_saturate(1953%)_hue-rotate(285deg)_brightness(101%)_contrast(101%)]" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h3 className="font-display text-xl text-primary">Veguto Wiki</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tiny guides for the things we love online — anime, cozy games, art, VTubers and aesthetics. 🌸
              </p>
            </div>

            <div>
              <p className="veg-sidebar-heading !mx-0 !mt-0">Explore</p>
              <ul className="mt-2 flex flex-col gap-1.5 text-sm">
                <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link to="/articles" className="text-muted-foreground hover:text-primary">All articles</Link></li>
                <li><Link to="/categories" className="text-muted-foreground hover:text-primary">Categories</Link></li>
                <li><Link to="/tags" className="text-muted-foreground hover:text-primary">Tags</Link></li>
                <li><Link to="/search" className="text-muted-foreground hover:text-primary">Search</Link></li>
              </ul>
            </div>

            <div>
              <p className="veg-sidebar-heading !mx-0 !mt-0">Resources</p>
              <ul className="mt-2 flex flex-col gap-1.5 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary"
                  >
                    <Mail size={14} /> Contact us
                  </a>
                </li>
                <li>
                  <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                    Discord community
                  </a>
                </li>
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">{CONTACT_EMAIL}</p>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-5 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Veguto. Made with 🌸 for the cozy internet.
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Divider({ children }: { children: React.ReactNode }) {
  return (
    <div className="veg-divider">
      <span>{children}</span>
    </div>
  );
}
