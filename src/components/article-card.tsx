import { Link } from "@tanstack/react-router";
import { getCategoryMeta, type Article } from "@/content/articles";

export function ArticleCover({
  article,
  className = "",
}: {
  article: Article;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={article.thumbnail}
        alt={article.title}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function ArticleCard({
  article,
  compact = false,
}: {
  article: Article;
  compact?: boolean;
}) {
  const category = getCategoryMeta(article.category);
  return (
    <Link
      to="/wiki/$slug"
      params={{ slug: article.slug }}
      className="veg-card group flex flex-col overflow-hidden !p-0"
    >
      <ArticleCover article={article} className={compact ? "h-28" : "h-40"} />
      <div className="flex flex-1 flex-col p-5">
        <span className="w-fit rounded-full bg-primary-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
          {category?.emoji} {category?.title}
        </span>
        <h3 className={`mt-3 font-sans font-semibold leading-snug ${compact ? "text-lg" : "text-xl"}`}>
          {article.title}
        </h3>
        {!compact && (
          <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{article.description}</p>
        )}
        <span className="mt-auto pt-4 text-sm font-semibold text-primary group-hover:underline">
          Read article →
        </span>
      </div>
    </Link>
  );
}
