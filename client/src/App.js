import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
//Components
import GridLayput from "./components/GridLayout/GridLayout";
import Blobs from "./components/Blobs/Blobs";
import Navbar from "./components/Navbar/Navbar";

// Pages
import HomePage from "./pages/HomePage/HomePage";

//CSS
import "./App.css";
import TestPage from "./pages/TestPage/TestPage";

function App() {
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // eslint-disable-next-line
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div className="app">
      <Navbar />
      {/* <GridLayput /> */}
      {/* <Blobs /> */}
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
