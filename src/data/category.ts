export interface Category {
  title: string;
  slug: string;
  color: "green" | "blue" | "yellow" | "stone";
  description: string;
}

export const categories: Category[] = [
  {
    title: "Sustentabilidade",
    slug: "sustentabilidade",
    color: "green",
    description: "Artigos sobre meio ambiente e reciclagem.",
  },
  {
    title: "Reciclagem",
    slug: "reciclagem",
    color: "yellow",
    description: "Tudo sobre reciclagem de eletrônicos.",
  },
  {
    title: "Economia Circular",
    slug: "economia-circular",
    color: "blue",
    description: "Tudo sobre economia circular.",
  },
  {
    title: "Energia Renovável",
    slug: "energia-renovavel",
    color: "stone",
    description: "Tudo sobre energia renovável.",
  },
];
