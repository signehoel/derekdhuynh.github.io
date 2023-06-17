import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Episodes from "./pages/Episodes";
import Team from "./pages/Team";
import { useEffect } from "react";
import DesktopBreakpoint from './components/responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from './components/responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from './components/responsive_utilities/mobile_breakpoint';


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/stemcast":
        title = "";
        metaDescription = "";
        break;
      case "/stemcast/episodes":
        title = "";
        metaDescription = "";
        break;
      case "/stemcast/team":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
      <Routes>
        <Route path="/stemcast" element={<LandingPage />} />
        <Route path="/stemcast/episodes" element={<Episodes />} />
        <Route path="/stemcast/team" element={<Team />} />
      </Routes>
  );
}
export default App;