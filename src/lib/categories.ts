export type Category = {
  slug: string;
  name: string;
  icon: string;
};

export const categories: Category[] = [
  { slug: "historia-da-igreja", name: "História da Igreja", icon: "⛪" },
  { slug: "doutrina-catolica", name: "Doutrina Católica", icon: "✝️" },
  { slug: "biblia", name: "Bíblia", icon: "📖" },
  { slug: "nossa-senhora", name: "Nossa Senhora", icon: "👑" },
  { slug: "vida-dos-santos", name: "Vida dos Santos", icon: "🙏" },
  { slug: "liturgia-e-sacramentos", name: "Liturgia e Sacramentos", icon: "🍷" },
  { slug: "vida-espiritual", name: "Vida Espiritual", icon: "🕊️" },
  { slug: "formacao-catolica", name: "Formação Católica", icon: "🏛️" },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
