import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="font-display text-7xl text-primary">404</h1>
      <h2 className="mt-3 text-xl font-semibold text-foreground">This page wandered off</h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        The little article you were looking for isn't here. Try heading back home.
      </p>
      <Link to="/" className="veg-pill mt-6">
        Back home
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="font-display text-4xl text-foreground">Something broke 🌸</h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        Try refreshing — and if it keeps happening, head home.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="veg-pill"
        >
          Try again
        </button>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Veguto Wiki — Tiny guides for the internet we love" },
      {
        name: "description",
        content:
          "Veguto Wiki collects little guides on anime, manga, cozy gaming, kawaii & dark aesthetics, drawing, cosplay, VTubers, roleplay, MBTI and more.",
      },
      { name: "author", content: "Veguto" },
      { property: "og:site_name", content: "Veguto Wiki" },
      { property: "og:title", content: "Veguto Wiki — Tiny guides for the internet we love" },
      {
        property: "og:description",
        content:
          "Little wiki articles on anime, manga, cozy gaming, kawaii, cosplay, VTubers, roleplay, MBTI and the soft + dark aesthetics in between.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Veguto Wiki",
          description:
            "Little wiki articles on anime, manga, cozy gaming, kawaii, cosplay, VTubers, roleplay, MBTI and the aesthetics in between.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
