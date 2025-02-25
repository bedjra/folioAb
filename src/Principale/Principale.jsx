import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom'; // Import NavLink
import { FaHome, FaInfoCircle, FaServicestack, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import "./Principale.css";

const Principale = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="debut">
      <div className="content">
        <header className="header-container">
        <img className='inge' src="/menu.png" alt="Profile" />
          <div className="dots">
          
            <h6>Portfolio</h6>
          </div>
          <div className="profile-details">
            <span className="admin_name">
              Welcome <br /> Admin
            </span>
            &nbsp;
            <img src="/profile.jpg" alt="Profile" />
          </div>
        </header>
      </div>

      <div className="wrapper">
        <nav>
          <div className={`global ${isNavOpen ? "open" : ""}`}>
          <div className="sidebar">
              <ul className="nav-links">
                <li>
                  <NavLink to="accueil" activeClassName="">
                    <FaHome className="icon" />
                    <span className="links_name">Accueil</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="Apropos" activeClassName="active">
                    <FaInfoCircle className="icon" />
                    <span className="links_name">À propos</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="services" activeClassName="active">
                    <FaServicestack className="icon" />
                    <span className="links_name">Services</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="realisations" activeClassName="active">
                    <FaProjectDiagram className="icon" />
                    <span className="links_name">Réalisations</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="contact" activeClassName="active">
                    <FaEnvelope className="icon" />
                    <span className="links_name">Contact</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="content-area">
          <div className="routage">
            {/* L'Outlet ici charge le contenu de la route sélectionnée */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principale;
