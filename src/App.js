import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage/LandingPage";

import "./App.css";

function App() {
  return (
    <div className="Home">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
