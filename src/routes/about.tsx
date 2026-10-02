import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Divider } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Veguto Wiki" },
      {
        name: "description",
        content:
          "Veguto Wiki is a cozy little encyclopedia of internet aesthetics, fandoms and creative communities — written for the friends who actually live there.",
      },
      { property: "og:title", content: "About — Veguto Wiki" },
      {
        property: "og:description",
        content: "A cozy little encyclopedia of internet aesthetics, fandoms and creative communities.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Divider>About Veguto Wiki</Divider>
      <main className="mx-auto max-w-2xl px-4 pb-16">
        <div className="text-center">
          <div className="text-5xl">🌸</div>
          <h1 className="mt-3 font-display text-5xl">What is Veguto Wiki?</h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Veguto Wiki is a tiny encyclopedia of internet things we love —
            anime, cozy gaming, kawaii aesthetics, drawing, cosplay, VTubers,
            roleplay, MBTI, and all the soft (and dark) corners in between.
          </p>
        </div>

        <section className="mt-10 space-y-4 text-[15px] leading-relaxed">
          <p>
            Every article is short, warm, and written for the friend who's
            just curious. No condescension, no walls of jargon — just a
            friendly explainer with the next thing to click on.
          </p>
          <p>
            We cover anime &amp; manga, manhwa, isekai and fantasy, cozy
            and indie games, modding, kawaii and dark aesthetics, drawing
            and pixel art, VTubers and PNGTubers, streamer setups, roleplay
            and OCs, MBTI and Enneagram, Discord communities, and the
            internet's softest cats. 🐾
          </p>
        </section>

        <div className="mt-10 text-center">
          <Link to="/categories" className="veg-pill">
            Browse categories
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
