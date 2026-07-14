import Link from "next/link";
import { categories } from "@/lib/categories";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/categorias", label: "Categorias" },
  { href: "/series", label: "Séries" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-footer-bg text-footer-fg">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold text-gold">
              <span className="font-serif text-lg">M</span>
            </span>
            <span className="font-serif text-xl">Arca de Maria</span>
          </div>
          <p className="mt-4 text-sm text-footer-fg/70">
            A maior biblioteca digital de formação católica em português.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
            Navegação
          </h4>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-footer-fg/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
            Categorias
          </h4>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-footer-fg/80">
            {categories.slice(0, 6).map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/categorias/${category.slug}`}
                  className="transition hover:text-gold"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
            Contato
          </h4>
          <p className="mt-4 text-sm text-footer-fg/80">
            contato@arcademaria.com.br
          </p>
          <div className="mt-4 flex gap-3 text-lg">
            <a href="#" aria-label="YouTube" className="transition hover:text-gold">▶️</a>
            <a href="#" aria-label="Instagram" className="transition hover:text-gold">📷</a>
            <a href="#" aria-label="Facebook" className="transition hover:text-gold">📘</a>
            <a href="#" aria-label="Telegram" className="transition hover:text-gold">✈️</a>
          </div>
        </div>
      </div>

      <div className="border-t border-footer-fg/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-footer-fg/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Arca de Maria. Todos os direitos reservados.</span>
          <span>Desenvolvido com ♥ para a glória de Deus.</span>
        </div>
      </div>
    </footer>
  );
}
