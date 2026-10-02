export type TagMeta = {
  /** url-safe id, e.g. "pixel-art" */
  slug: string;
  /** raw tag as written in articles, e.g. "pixel art" */
  label: string;
  /** display title, e.g. "Pixel Art" */
  title: string;
  /** short description used on tag pages / mentions */
  blurb: string;
};

export type TagData = TagMeta;