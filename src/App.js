// import React from "react";
// import ReactDOM from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Cutipie" }),
    React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "mine" }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
