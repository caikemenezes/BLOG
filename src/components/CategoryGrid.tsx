import Link from "next/link";
import { categories } from "@/lib/categories";

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8 flex items-end justify-between border-b-2 border-ink pb-3">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          Explore as Categorias
        </h2>
        <Link
          href="/categorias"
          className="text-sm font-semibold text-gold-dark transition hover:text-ink"
        >
          Ver todas →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categorias/${category.slug}`}
            className="group flex flex-col items-center gap-3 text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink/20 bg-parchment text-2xl transition group-hover:border-gold group-hover:bg-gold/10">
              {category.icon}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft group-hover:text-ink">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
