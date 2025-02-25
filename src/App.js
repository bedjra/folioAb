import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import des composants
import Login from "./Login/Login.jsx";
import Principale from "./Principale/Principale.jsx";
import Accueil from "./Principale/pages/Accueil/Accueil.jsx";
import  Propos from "./Principale/pages/Propos/Propos.jsx";
import Services from "./Principale/pages/Services/Services.jsx";
import Realisations from "./Principale/pages/Realisations/Realisations.jsx";
import Contact from "./Principale/pages/Contact/Contact.jsx";
function App() {
  return (
    <Router>
      <Routes>
        {/* Route pour la page de login */}
        <Route path="/" element={<Login />} />

        {/* Route Principale avec routes enfants */}
        <Route path="" element={<Principale />}>
          
          {/* Routes enfants */}
          <Route path="accueil" element={<Accueil />} />
          <Route path="" element={<Accueil />} />  
          <Route path="apropos" element={<Propos />} />
          <Route path="services" element={<Services/>} />
          <Route path="realisations" element={<Realisations />} />
          <Route path="contact" element={<Contact/>} />

        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
