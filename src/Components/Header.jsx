import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="nav-link active" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li>
                <Link className="nav-link active" to="JuzCards">
                  Juz
                </Link>
              </li>
              <li>
                <Link className="nav-link active" to="SurahCards">
                  Surah
                </Link>
              </li>
              <li className="nav-item">

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
