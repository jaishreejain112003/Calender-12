// import logo from "./logo.svg";
// import "./App.css";
import React, { Fragment } from "react";
import "./App.css";

import Calendar from "./Components/Calendar";
import { NavBar } from "./NavBar";

// import {Datepicker} from './Components/Datepicker';
function App() {
  return (
    <>
      <NavBar />;
      <Fragment className={"$ { React } style  cont "}>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">Calendar</h1>
            </div>
          </div>
        </section>
        <div className="container has-text-centered">
          <Calendar />
        </div>
      </Fragment>
    </>
  );
}

export default App;
