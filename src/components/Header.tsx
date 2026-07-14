import Link from "next/link";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/categorias", label: "Categorias" },
  { href: "/series", label: "Séries" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="border-b border-ink/10 bg-parchment">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-footer-bg text-gold">
            <span className="font-serif text-xl">M</span>
          </span>
          <span>
            <span className="block font-serif text-2xl leading-none text-ink sm:text-3xl">
              Arca de Maria
            </span>
            <span className="mt-1 block text-[11px] font-semibold tracking-widest text-ink-soft sm:text-xs">
              FÉ, VERDADE E HISTÓRIA PARA FORTALECER SUA ALMA
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold tracking-wide text-ink lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-gold-dark">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-ink">
          <button aria-label="Buscar" className="transition hover:text-gold-dark">
            🔍
          </button>
          <a href="#" aria-label="YouTube" className="transition hover:text-gold-dark">
            ▶️
          </a>
          <a href="#" aria-label="Instagram" className="transition hover:text-gold-dark">
            📷
          </a>
          <a href="mailto:contato@arcademaria.com.br" aria-label="E-mail" className="transition hover:text-gold-dark">
            ✉️
          </a>
        </div>
      </div>
    </header>
  );
}
