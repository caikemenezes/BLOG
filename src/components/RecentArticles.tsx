import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import { getCategory } from "@/lib/categories";
import { formatDate } from "@/lib/format";

export default function RecentArticles({ posts }: { posts: PostMeta[] }) {
  return (
    <div>
      <div className="mb-8 flex items-end justify-between border-b-2 border-ink pb-3">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          Artigos Recentes
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {posts.map((post) => {
          const category = getCategory(post.category);
          return (
            <article key={post.slug} className="flex gap-5 sm:gap-6">
              <Link
                href={`/artigos/${post.slug}`}
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded bg-footer-bg text-3xl text-gold sm:h-32 sm:w-32"
              >
                {category?.icon}
              </Link>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-wide text-gold-dark">
                  {category?.name}
                </span>
                <Link href={`/artigos/${post.slug}`}>
                  <h3 className="mt-1 font-serif text-lg text-ink transition hover:text-gold-dark sm:text-xl">
                    {post.title}
                  </h3>
                </Link>
                <p className="mt-2 hidden text-sm text-ink-soft sm:block">
                  {post.excerpt}
                </p>
                <div className="mt-2 flex items-center gap-4 text-xs text-ink-soft">
                  <span>📅 {formatDate(post.date)}</span>
                  <span>🕐 {post.readingMinutes} MIN DE LEITURA</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <Link
        href="/artigos"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark transition hover:text-ink"
      >
        Ver mais artigos →
      </Link>
    </div>
  );
}
