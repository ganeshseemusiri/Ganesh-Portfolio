import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tools from "./components/Tools";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((previousMode) => !previousMode);
  };

  return (
    <div className={darkMode ? "app dark-theme" : "app light-theme"}>

      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <main>
        <Home />
        <About />
        <Tools/>
        <Certifications/>
        <Contact/>
      </main>

    </div>
  );
}

export default App;