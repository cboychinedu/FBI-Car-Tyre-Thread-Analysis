// Importing the necessary moduels
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import "../Css/App.css";
import 'semantic-ui-css/semantic.min.css';
import fbiSeal from "../Images/fbi.png";

// Creaging the functional component
let Footer = (props) => {
  // Rendering
  return (
    <Fragment>
      <div className="ui inverted vertical footer segment footer-div">
        <div className="ui container footer">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <ul className="ui inverted">
                <li className="list-items"> <h4 className="ui inverted header footer-header">About</h4> </li>
                <li className="list-items"> <NavLink to="#" className="item sitemap">Mission & Priorities</NavLink> </li>
                <li className="list-items"> <NavLink to="#" className="item contact-us">Leadership & Structure</NavLink> </li>
                <li className="list-items"> <NavLink to="#" className="item"> Partnerships </NavLink> </li>
                <li className="list-items"> <NavLink to="#" className="item"> FAQs </NavLink> </li>
              </ul>
            </div>
            <div className="three wide column">
              <ul className="ui inverted inner-footer">
                <li className="list-items"> <h4 className="ui inverted header footer-header"> What We Investigate </h4> </li>
                <li className="list-items"> <NavLink to="#" className="item order"> Terrorism </NavLink> </li>
                <li className="list-items"> <NavLink to="#" className="item"> Counterintelligence </NavLink> </li>
                <li className="list-items"> <NavLink to="#" className="item"> Cyber Crime </NavLink> </li>
                <li className="list-items"> <NavLink to="#" className="item"> Civil Rights </NavLink> </li>
                <li className="list-items"> <NavLink to="#" className="item"> Organized Crime </NavLink> </li>
                <li className="list-items"> <NavLink to="#" className="item"> Violent Crime </NavLink> </li>
              </ul>
            </div>
            <div className="seven wide column last-footer-div">
              <ul className="ui inverted inner-footer">
                <li className="list-items fbi-logo-and-header">
                  <div>
                    <img src={fbiSeal} className="fbi-footer-logo-image"/>
                  </div>
                  <h1 className="ui inverted header footer-header fbi-header">FBI</h1>
                  <p className="fbi-bureau-para"> FEDERAL BUREAU <br/> OF INVESTIGATION </p>
                </li>
                <li className="list-items">
                  <p className="fbi-contact-center"> FBI.gov Contact Center </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    </Fragment>
  )
}


// Exporting the footer
export default Footer;
