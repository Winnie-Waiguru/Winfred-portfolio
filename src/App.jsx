import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="m-0 p-0 flex flex-col min-h-screen">
      <main className="flex-grow">
        <Introduction />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
