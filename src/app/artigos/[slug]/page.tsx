import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { getCategory } from "@/lib/categories";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const category = getCategory(post.category);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <span className="text-xs font-bold uppercase tracking-wide text-gold-dark">
          {category?.name}
        </span>
        <h1 className="mt-2 font-serif text-3xl leading-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-3 flex items-center gap-4 text-xs text-ink-soft">
          <span>📅 {formatDate(post.date)}</span>
          <span>🕐 {post.readingMinutes} MIN DE LEITURA</span>
        </div>
        <div
          className="prose prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-soft mt-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </main>
      <Footer />
    </>
  );
}
