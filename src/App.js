import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import {
  BackToTop,
  CommandPalette,
  Footer,
  Nav,
  useTheme,
  useToast,
} from "./components/Layout";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Shell() {
  const [theme, toggleTheme] = useTheme();
  const [toast, toastNode] = useToast();
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      } else if (
        e.key === "/" &&
        !/input|textarea|select/i.test(document.activeElement.tagName)
      ) {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <Nav
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenPalette={() => setPaletteOpen(true)}
      />
      <main id="main">
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home toast={toast} />
          </Route>
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/education" component={Education} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact">
            <Contact toast={toast} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <BackToTop />
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onToggleTheme={toggleTheme}
        toast={toast}
      />
      {toastNode}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
