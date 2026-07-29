export type Category = {
  slug: string;
  name: string;
  icon: string;
};

export const categories: Category[] = [
  { slug: "historia-da-igreja", name: "História da Igreja", icon: "/icons/historia-da-igreja.png" },
  { slug: "doutrina-catolica", name: "Doutrina Católica", icon: "/icons/doutrina-catolica.png" },
  { slug: "biblia", name: "Bíblia", icon: "/icons/biblia.png" },
  { slug: "nossa-senhora", name: "Nossa Senhora", icon: "/icons/nossa-senhora.png" },
  { slug: "vida-dos-santos", name: "Vida dos Santos", icon: "/icons/vida-dos-santos.png" },
  { slug: "liturgia-e-sacramentos", name: "Liturgia e Sacramentos", icon: "/icons/liturgia-e-sacramentos.png" },
  { slug: "vida-espiritual", name: "Vida Espiritual", icon: "/icons/vida-espiritual.png" },
  { slug: "formacao-catolica", name: "Formação Católica", icon: "/icons/formacao-catolica.png" },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
