// src/App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import AppRoutes from "./utils/routes";
import "./firebase/firebaseConfig";

const App = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <AppRoutes />{" "}
        {/* Renders the HomePage with Header and Footer, and blank routes */}
      </div>
      <ButtonGradient /> {/* Optional: if needed across all routes */}
    </>
  );
};

export default App;
