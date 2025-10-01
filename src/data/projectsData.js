import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
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
    summary:
      "Developed a book finder application that allows users to discover books they want to read and generate a personalized favorites list to share as recommendations with friends.",
    description:
      "The Book Library Application is a web app that allows users to search for books using the Open Library API, view detailed information (such as title, author, cover, and description), favorite books, receive genre-based recommendations, and download a list of books they have read to share with friends.",
    stackIcon: [FaReact, BiLogoTailwindCss],
    techStack: [
      "React",
      "Open Library API",
      "Tailwind CSS",
      "Vercel (for deployment)",
      "LocalStorage (for storing favorites)",
    ],
    deploymentUrl:
      "https://book-finder-app-2u3h-31k20dyox-winfred-waigurus-projects.vercel.app/",
    gitHubUrl: "https://github.com/Winnie-Waiguru/bookFinder-app.git",
    learnings:
      "As a beginner frontend developer, I learned how to structure a project into components, work with APIs to fetch and display data dynamically, manage state in a React application, use localStorage to persist data without authentication, style an app using Tailwind CSS, and deploy a project to a live environment with Vercel.",
  },
  {
    id: 2,
    image: {
      small: "/chatroomazureai-small.webp",
      medium: "/chatroomazureai-medium.webp",
      alternate: "/chatroomazureai-alt.png",
    },
    title: "ChatRoomAzureAI",
    summary:
      "A real-time chat application extended with Google AI Studio integration and a Tailwind CSS UI redesign.",
    description:
      "ChatRoomAzureAI is a full-stack real-time chat application forked from an open-source project. I redesigned the UI with Tailwind CSS, integrated Google AI Studio API for AI-powered responses, and deployed the frontend and backend to production. The project supports role-based access, real-time messaging with Socket.io, private chats, and a mobile-responsive design.",
    stackIcon: [FaReact, BiLogoTailwindCss],
    techStack: [
      "React",
      "Tailwind CSS",
      "Google AI Studio API",
      "GitHub Pages",
      "Render",
    ],
    deploymentUrl: "https://winnie-waiguru.github.io/ChatRoomAzureAI/",
    gitHubUrl: "https://github.com/Winnie-Waiguru/ChatRoomAzureAI.git",
    learnings:
      "Through this project, I gained experience in integrating third-party AI APIs into existing applications, configuring environment variables for different environments (development vs production), and deploying full-stack applications with separate frontend and backend hosting services. I also strengthened my skills in UI/UX design using Tailwind CSS.",
  },
  {
    id: 3,
    image: {
      small: "/meal-health-app-small.webp",
      medium: "/meal-health-app-medium.webp",
      alternate: "/meal-health-app.png",
    },
    title: "Meal Health App",
    summary:
      "Meal Health App is a full-stack web application that replaces paper-based meal tracking with a digital solution, enabling users to create profiles, log meals with nutritional data, and track the meals they are supposed to eat by the end of the day.",
    description:
      "A digital meal and health tracking application that replaces the traditional paper-based system. The app enables users to create profiles, log meals, track nutritional value,. It also incorporates authentication and role-based access control to ensure secure and personalized user experiences.",
    stackIcon: [FaHtml5, FaCss3, DiJavascript1],
    techStack: [
      " frontend: HTML, CSS, JavaScript, EJS",
      "backend: Node.js, Express.js",
      " database: PostgreSQL",
    ],
    deploymentUrl: "/",
    gitHubUrl: "/",
    learnings:
      "Through this project, I learned how to design and implement authentication and role-based access control in a web application, ensuring that users have secure and tailored access to features. I gained hands-on experience in creating RESTful API endpoints for user actions such as registration, login, and data retrieval, while also learning how to manage and query relational data in PostgreSQL. Working with EJS templates helped me understand how to integrate frontend views with backend logic to render dynamic content effectively. I also developed skills in managing user data securely, handling session persistence, and structuring a full-stack project from database schema design to UI presentation.",
  },
];
