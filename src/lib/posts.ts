import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readingMinutes: number;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function readPostFile(fileName: string) {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug, data, content };
}

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = fileNames.map((fileName) => {
    const { slug, data, content } = readPostFile(fileName);
    return {
      slug,
      title: data.title as string,
      category: data.category as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const { data, content } = readPostFile(`${slug}.md`);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title as string,
    category: data.category as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    contentHtml: processed.toString(),
  };
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
