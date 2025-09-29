import { lazy, Suspense } from "react";
import { FocusTrap } from "focus-trap-react";
import NavBar from "./NavBar";
import Introduction from "./Introduction";
import Footer from "./Footer";

const LazyAbout = lazy(() => import("./About"));
const LazyProjects = lazy(() => import("./Projects"));
const LazyContact = lazy(() => import("./Contact"));

function Home() {
  return (
    <FocusTrap>
      <div className="m-0 p-0 flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Introduction />
          <Suspense
            fallback={
              <div className="section-style">Loading About section...</div>
            }
          >
            <LazyAbout />
          </Suspense>
          <Suspense
            fallback={
              <div className="section-style">Loading Projects section...</div>
            }
          >
            <LazyProjects />
          </Suspense>
          <Suspense
            fallback={
              <div className="section-style">Loading Contact section...</div>
            }
          >
            <LazyContact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </FocusTrap>
  );
}
export default Home;
