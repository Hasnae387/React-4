import Briouates from "./img_Menu/Briouates2.jpeg";
import Harira from "./img_Menu/Harira.jpeg";
import TajinedePoulet from "./img_Menu/Tajine de poulet aux olives.jpeg";
import Tajine from "./img_Menu/La recette du tajine d'agneau aux pruneaux anti-inflammatoire ! - BMoove.jpeg";
import Couscous from "./img_Menu/Couscous Tfaya.jpeg";
import Salade from "./img_Menu/Salade marocaine.jpeg";
import Zaalouk from "./img_Menu/Zaalouk.jpeg";
import Taktouka from "./img_Menu/Taktouka.jpeg";
import Cornes from "./img_Menu/Cornes de gazelle .jpeg";
import Chebakia from "./img_Menu/Chebakia.jpeg";
import Rfissa from "./img_Menu/Rfissa2.jpeg";
import keftaTajine from "./img_Menu/keftaTajine.jpeg";
import makrout from "./img_Menu/makrout.jpeg";
import Ghriba from "./img_Menu/Ghriba2.jpeg";
import Thé from "./img_Menu/The3.jpeg";
import Pastilla from "./img_Menu/Pastilla.jpeg";

export const menu = [
  {
    category: "Entrées",
    items: [
      {
        name: "Briouates",
        description: "Feuilletés farcis au fromage, viande hachée ou légumes.",
        price: 20,
        image: Briouates,
      },
      {
        name: "Harira",
        description: "Soupe traditionnelle parfumée aux épices.",
        price: 15,
        image: Harira,
      },
    ],
  },
  {
    category: "Plats Principaux",
    items: [
      {
        name: "Tajine de Poulet",
        description: "Poulet mijoté avec olives et citron confit.",
        price: 12,
        image: TajinedePoulet,
      },
      {
        name: "Pastilla au Poulet",
        description: "Feuilleté sucré-salé au poulet, amandes et cannelle.",
        price: 14,
        image: Pastilla,
      },
      {
        name: "Tajine Kefta",
        description: "Boulettes de viande hachée en sauce tomate.",
        price: 14,
        image: keftaTajine,
      },
      {
        name: "Tajine d'Agneau aux Pruneaux",
        description: "Agneau tendre avec pruneaux et amandes.",
        price: 14,
        image: Tajine,
      },
      {
        name: "Couscous Royal",
        description: "Semoule fine accompagnée de légumes et viande.",
        price: 14,
        image: Couscous,
      },
      {
        name: "Rfissa",
        description: "Poulet aux lentilles servi sur msemen.",
        price: 14,
        image: Rfissa,
      },
    ],
  },
  {
    category: "Salades",
    items: [
      {
        name: "Salade Marocaine",
        description: "Tomates, concombres et persil à l'huile d'olive.",
        price: 12,
        image: Salade,
      },
      {
        name: "Zaalouk",
        description: "Purée d’aubergines épicée aux tomates.",
        price: 12,
        image: Zaalouk,
      },
      {
        name: "Taktouka",
        description: "Salade cuite de poivrons et tomates.",
        price: 14,
        image: Taktouka,
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Cornes de Gazelle",
        description: "Pâtisseries fourrées aux amandes.",
        price: 12,
        image: Cornes,
      },
      {
        name: "Chebakia",
        description: "Pâtisserie au miel et sésame.",
        price: 14,
        image: Chebakia,
      },
      {
        name: "Ghriba",
        description: "Biscuit sablé fondant aux amandes.",
        price: 14,
        image: Ghriba,
      },
      {
        name: "Makrout",
        description: "Gâteau à la semoule et aux dattes.",
        price: 14,
        image: makrout,
      },
    ],
  },
  {
    category: "Boissons",
    items: [
      {
        name: "Thé à la Menthe",
        description: "Thé vert infusé avec de la menthe fraîche.",
        price: 12,
        image: Thé,
      },
    ],
  },
];
