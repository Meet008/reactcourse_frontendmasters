import React from "react";
import { render } from "react-dom";
//import Pet from "./Pet";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  //   return React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Cutipie" }),
  //     React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "mine" })
  //     //React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" })
  //   );

  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
