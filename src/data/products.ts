
export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  benefits: string[];
  image: string;
  color: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Trimtone Enhancer",
    category: "Gestion du poids",
    price: 23000,
    originalPrice: 27500,
    description: "Complément alimentaire pour la gestion du poids qui aide à augmenter la combustion des graisses et à maintenir des niveaux de sucre sains.",
    benefits: [
      "Aide à augmenter la combustion des graisses",
      "Aide à maintenir des niveaux de sucre équilibrés",
      "Formule 100% naturelle"
    ],
    image: "/lovable-uploads/b9eaedbf-8d57-4bed-991d-2322cbc562f4.png",
    color: "#4CB5F5" // Bleu
  },
  {
    id: 2,
    name: "Resveratrol",
    category: "Antioxydant",
    price: 22000,
    description: "Puissant antioxydant qui favorise la santé cardiovasculaire et le vieillissement en bonne santé.",
    benefits: [
      "Super antioxydant",
      "Favorise l'anti-âge et la longévité",
      "Soutient la santé cardiovasculaire"
    ],
    image: "/lovable-uploads/60489334-b94c-43db-a4cc-7963a44f1077.png",
    color: "#E63946" // Rouge
  },
  {
    id: 3,
    name: "Colon Detox",
    category: "Détoxification",
    price: 21000,
    description: "Formule détoxifiante naturelle avec probiotiques pour améliorer l'absorption des nutriments et soutenir la santé digestive.",
    benefits: [
      "Améliore l'absorption des nutriments",
      "Laxatif naturel à base de plantes",
      "Contient des probiotiques bénéfiques"
    ],
    image: "/lovable-uploads/9056b1ca-4ef9-424c-991e-94011eefa59b.png",
    color: "#2A9D8F" // Vert
  },
  {
    id: 4,
    name: "Andro-T",
    category: "Hormone",
    price: 24500,
    description: "Booster naturel de testostérone qui aide à augmenter la libido, la stamina et la vitalité.",
    benefits: [
      "Booste la libido et la stamina",
      "Aide à augmenter le dynamisme et la vitalité",
      "Formule 100% naturelle"
    ],
    image: "/lovable-uploads/289ec7a1-3048-4b71-b082-04df57c55a24.png",
    color: "#212529" // Noir
  },
  {
    id: 5,
    name: "Liver Care",
    category: "Santé du foie",
    price: 20500,
    description: "Supplément pour soutenir la santé du foie, aider au processus de détoxification et améliorer la défense antioxydante.",
    benefits: [
      "Soutient le processus de détoxification",
      "Aide à améliorer la défense antioxydante",
      "Soutient la santé globale"
    ],
    image: "/lovable-uploads/eed988a9-2d4f-4e42-97f5-5820e78a6095.png",
    color: "#F4A261" // Orange
  },
  {
    id: 6,
    name: "Muscle-Bone Care",
    category: "Santé osseuse",
    price: 21500,
    description: "Combinaison de calcium, magnésium et zinc pour soutenir la fonction musculaire, nerveuse et la santé des os.",
    benefits: [
      "Soutient les fonctions nerveuses et musculaires",
      "Favorise des os et des dents solides",
      "Formule équilibrée de minéraux essentiels"
    ],
    image: "/lovable-uploads/6c55edad-a37b-4969-9e6e-70d89bf0c27b.png",
    color: "#C28F3B" // Brun
  },
  {
    id: 7,
    name: "Hair, Skin + Nails",
    category: "Beauté",
    price: 22500,
    description: "Formule complète avec 22 ingrédients clés pour soutenir une peau plus saine, des cheveux plus épais et des ongles plus forts.",
    benefits: [
      "Soutient une peau plus saine",
      "Favorise des cheveux plus épais",
      "Renforce les ongles"
    ],
    image: "/lovable-uploads/5084105f-716a-47cb-9948-36bda36d8f82.png",
    color: "#D45087" // Rose
  },
  {
    id: 8,
    name: "Super Omega-3",
    category: "Santé cardiovasculaire",
    price: 25000,
    description: "Supplément d'huile de poisson de haute qualité qui favorise la santé cardiaque et cérébrale et soutient la circulation.",
    benefits: [
      "Favorise la santé cardiaque et cérébrale",
      "Soutient la santé circulatoire",
      "Favorise le bien-être général"
    ],
    image: "/lovable-uploads/990f85d9-3db9-4f59-ac2c-6b5fac463d35.png",
    color: "#E63946" // Rouge
  },
  {
    id: 9,
    name: "Super Focus",
    category: "Santé cognitive",
    price: 28000,
    description: "Supplément cognitif avancé pour soutenir la concentration, la mémoire et promouvoir une humeur positive.",
    benefits: [
      "Soutient la concentration et la mémoire",
      "Favorise une humeur positive",
      "Aide à augmenter la concentration"
    ],
    image: "/lovable-uploads/2b303a4a-f3f5-4838-a53f-1b06dff84d62.png",
    color: "#6930C3" // Violet
  }
];

export default products;
