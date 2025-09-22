import NavBar from "./NavBar";
import Introduction from "./Introduction";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { FocusTrap } from "focus-trap-react";

function Home() {
  return (
    <FocusTrap>
      <div className="m-0 p-0 flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Introduction />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </FocusTrap>
  );
}
export default Home;
