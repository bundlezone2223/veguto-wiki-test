import {
  Meta, Title, Excerpt, H2, H3, P, Bullets, Numbered, Quote, Callout, Figure,
} from "@/components/article-blocks";
import type { Article, Section } from "@/content/articles";
import { getCategoryMeta } from "@/content/articles";

function Block({ block }: { block: Section }) {
  switch (block.type) {
    case "h2":
      return <H2>{block.text}</H2>;
    case "h3":
      return <H3>{block.text}</H3>;
    case "p":
      return <P>{block.text}</P>;
    case "quote":
      return <Quote cite={block.cite}>{block.text}</Quote>;
    case "list":
      return block.ordered ? (
        <Numbered items={[...block.items]} />
      ) : (
        <Bullets items={[...block.items]} />
      );
    case "image":
      return <Figure src={block.src} alt={block.alt} caption={block.caption} />;
    case "callout":
      return <Callout title={block.title}>{block.text}</Callout>;
    default:
      return null;
  }
}

export function ArticleBody({ article }: { article: Article }) {
  const category = getCategoryMeta(article.category);
  return (
    <>
      <img
        src={article.thumbnail}
        alt={article.title}
        className="mb-6 h-56 w-full rounded-2xl border border-border object-cover md:h-72"
      />
      <Meta badge={category?.title ?? "Article"} />
      <Title>{article.title}</Title>
      <Excerpt>{article.description}</Excerpt>
      {article.content.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </>
  );
}
