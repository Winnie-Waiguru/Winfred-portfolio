import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";

export const projects = [
  {
    id: 1,
    image: {
      small: "/bookFinder-small.webp",
      medium: "/bookFinder-medium.webp",
      alternate: "/bookFinder-img.png",
    },
    title: "Book Finder",
    description:
      "Developed a book finder application that allows users to discover books they want to read and generate a personalized favorites listto share as recommendations with friends.",
    stack: [FaHtml5, FaReact, BiLogoTailwindCss],
    projectUrl: "/",
  },
  {
    id: 2,
    image: {
      small: "/meal-health-app-small.webp",
      medium: "/meal-health-app-medium.webp",
      alternate: "/meal-health-app.png",
    },
    title: "Meal Health App",
    description:
      "Developed a book finder application that allows users to discover books they want to read and generate a personalized favorites listto share as recommendations with friends.",
    stack: [FaHtml5, FaReact, BiLogoTailwindCss, DiJavascript1],
    projectUrl: "/",
  },
  {
    id: 3,

    image: {
      small: "/savannah-clone-small.webp",
      medium: "/savannah-clone-medium.webp",
      alternate: "/savannah-clone.png",
    },
    title: "Savannah Clone",
    description:
      "Developed a book finder application that allows users to discover books they want to read and generate a personalized favorites listto share as recommendations with friends.",
    stack: [FaHtml5, FaReact, DiJavascript1],
    projectUrl: "/",
  },
];
