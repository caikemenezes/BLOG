import Link from "next/link";
import { featuredSeries } from "@/lib/series";
import { getQuoteOfTheDay } from "@/lib/quotes";

export default function Sidebar() {
  const quote = getQuoteOfTheDay();

  return (
    <aside className="flex flex-col gap-6">
      <div className="bg-footer-bg p-6 text-footer-fg">
        <span className="text-xs font-bold uppercase tracking-widest text-gold">
          Série em Destaque
        </span>
        <h3 className="mt-3 font-serif text-xl leading-tight">
          {featuredSeries.title}
        </h3>
        <p className="mt-3 text-sm text-footer-fg/80">
          {featuredSeries.description}
        </p>
        <Link
          href={`/series/${featuredSeries.slug}`}
          className="mt-5 inline-flex items-center gap-2 bg-gold px-5 py-2 text-xs font-bold uppercase tracking-wide text-footer-bg transition hover:bg-gold-dark"
        >
          Ver série
        </Link>
      </div>

      <div className="border border-ink/15 bg-parchment-dark/40 p-6">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-dark">
          Citação do Dia
        </span>
        <blockquote className="mt-3 font-serif text-lg italic leading-snug text-ink">
          “{quote.text}”
        </blockquote>
        <p className="mt-3 text-sm text-ink-soft">— {quote.author}</p>
      </div>

      <div className="border border-ink/15 p-6">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-dark">
          Receba Novidades
        </span>
        <p className="mt-3 text-sm text-ink-soft">
          Assine nossa newsletter e receba conteúdos exclusivos diretamente
          no seu e-mail.
        </p>
        <form className="mt-4 flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            placeholder="Seu melhor e-mail"
            className="w-full border border-ink/20 bg-parchment px-4 py-2 text-sm text-ink placeholder:text-ink-soft/70 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="whitespace-nowrap bg-gold px-5 py-2 text-xs font-bold uppercase tracking-wide text-footer-bg transition hover:bg-gold-dark"
          >
            Assinar
          </button>
        </form>
      </div>

      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-gold-dark">
          Siga-nos
        </span>
        <div className="mt-3 flex gap-3 text-xl">
          <a href="#" aria-label="YouTube" className="transition hover:text-gold-dark">▶️</a>
          <a href="#" aria-label="Instagram" className="transition hover:text-gold-dark">📷</a>
          <a href="#" aria-label="Facebook" className="transition hover:text-gold-dark">📘</a>
          <a href="#" aria-label="Telegram" className="transition hover:text-gold-dark">✈️</a>
        </div>
      </div>
    </aside>
  );
}
