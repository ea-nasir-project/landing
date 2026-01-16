import pedroImg from "@/images/authors/pedro.webp";
import alexandreImg from "@/images/authors/alexandre.webp";
import elianaImg from "@/images/authors/eliana.webp";

export interface Author {
  name: string;
  slug: string;
  image: ImageMetadata;
  bio: string;  
}

export const authors: Author[] = [
  {
    name: "Pedro Lima",
    slug: "pedro-lima",
    image: pedroImg,
    bio: `Sócio-fundador da e-Renova e cientista de dados. \nNossa missão é ser agente inspirador de transformação através da tecnologia e conscientização.`,
  },
  {
    name: "Alexandre Uglar",
    slug: "alexandre-uglar",
    image: alexandreImg,
    bio: `Sócio-fundador da e-Renova, economista e desenvolvedor full stack. \nNossa motivação é tornar realidade o discurso sustentável.`,
  },
  {
    name: "Eliana",
    slug: "eliana",
    image: elianaImg,
    bio: "",
  },
];
