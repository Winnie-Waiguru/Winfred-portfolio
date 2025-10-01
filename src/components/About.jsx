import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";

function About() {
  const skills = [
    { icon: FaHtml5, title: "Html5" },
    { icon: FaCss3Alt, title: "CSS3" },
    { icon: DiJavascript1, title: "JavaScript" },
    { icon: FaReact, title: "React" },
    { icon: FaBootstrap, title: "Bootstrap" },
    { icon: BiLogoTailwindCss, title: "Tailwindcss" },
  ];
  return (
    <section id="about" className="section-style" aria-labelledby="about-title">
      <div>
        <h2 id="about-title" className="h2-style">
          About
        </h2>
        <div className="decoration-line w-[78px] md:w-[100px]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-10">
        <div>
          <p className="p-style">
            With a Bachelor of Science in Information Technology and hands-on
            training in front-end development through ALX, I am continuously
            sharpening my skills and expanding my creative toolkit. What excites
            me most is the process of creating, learning, and transforming ideas
            into digital experiences that truly connect with people. <br />
            <br />
            My approach to development is guided by a passion for aesthetics and
            visual storytelling. From semantic HTML and CSS to modern frameworks
            like React and Tailwind CSS.The skills and tools I use to bring app
            designs to life are:
            <picture>
              <source srcSet="./finger-down.webp" type="image/webp" />
              <img
                src="./finger-down.png"
                alt="finger pointing down"
                className=" inline md:hidden w-8 h-10"
                loading="lazy"
                aria-hidden="true"
              />
            </picture>
            <picture>
              <source srcSet="./finger-left.png" type="image/webp" />
              <img
                src="./finger-left.png"
                alt="finger pointing left"
                className="hidden md:inline w-8 h-10"
                loading="lazy"
                aria-hidden="true"
              />
            </picture>
          </p>
        </div>
        <ul className="bg-Accent-light rounded-2xl shadow-2xl w-full h-auto px-4 py-10 grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon; //Create component so that it easier for styling
            return (
              <li key={index} className="flex flex-col items-center">
                <Icon className="secondary-icon" aria-hidden="true" />
                <p className="text-base md:text-lg text-Primary">
                  {skill.title}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default About;
