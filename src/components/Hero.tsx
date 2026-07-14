import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-parchment-dark/60">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="font-display text-5xl uppercase leading-[1.05] text-ink sm:text-6xl">
            Histórias que edificam.
            <br />
            Verdades que transformam.
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-soft">
            Conteúdos profundos sobre a Igreja Católica, nossa fé e os heróis
            que nos precederam.
          </p>
          <Link
            href="/categorias"
            className="mt-8 inline-flex items-center gap-2 bg-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-footer-bg transition hover:bg-gold-dark"
          >
            Explorar artigos
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full border-4 border-gold bg-footer-bg sm:h-96 sm:w-96">
          <span className="font-serif text-7xl text-gold">M</span>
        </div>
      </div>
    </section>
  );
}
