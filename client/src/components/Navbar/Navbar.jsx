import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Fantasy Football
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link text-light active" aria-current="page" to="/">
                Home
              </Link>

            </li>
            {
              props.islogged ? 
                <li className="nav-item">
                  <Link className="nav-link text-light active" to="/logout">
                    Logout
                  </Link>
                </li>
                :
                <li className="nav-item">
                  <Link className="nav-link text-light active" aria-current="page" to="/loginregister">
                    Login/Register
                  </Link>
                </li>                
            }

            <li className="nav-item">
              <Link className="nav-link text-light active" aria-current="page" to="/selectyourteam">
                SelectYourTeam
              </Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link text-light active" aria-current="page" to="/myteam">
                MyTeam
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
