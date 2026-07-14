export type Quote = {
  text: string;
  author: string;
};

export const quotes: Quote[] = [
  {
    text: "A oração é o levantar da mente e do coração a Deus ou o pedir bens convenientes.",
    author: "São João Damasceno",
  },
  {
    text: "Fora do amor não há nem sequer sombra de esperança.",
    author: "São Tomás de Aquino",
  },
  {
    text: "Nada te perturbe, nada te espante; tudo passa, Deus não muda.",
    author: "Santa Teresa d'Ávila",
  },
  {
    text: "A glória de Deus é o homem vivo.",
    author: "Santo Irineu de Lyon",
  },
  {
    text: "Onde está a caridade e o amor, aí está Deus.",
    author: "Tradição da Igreja",
  },
];

export function getQuoteOfTheDay(date: Date = new Date()): Quote {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const diff = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - start;
  const dayOfYear = Math.floor(diff / 86400000);
  return quotes[dayOfYear % quotes.length];
}
