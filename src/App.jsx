// src/App.jsx
import { useRef } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SummarisingPage from "./components/summarise"; // Import the SummarisingPage component

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero /> {/* Pass the scroll function to Hero */}
        <SummarisingPage /> {/* Use the ref here */}
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
