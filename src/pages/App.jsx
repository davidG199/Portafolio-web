import "../assets/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/home";
import PageProject from "./pageProjects";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProjectsPage" element={<PageProject />} />
      </Routes>
    </>
  );
}

export default App;
