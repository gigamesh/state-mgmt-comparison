import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.generated.css";
import MobXApp from "./Apps/MobXApp";
import ContextApp from "./Apps/ContextApp";
import XStateApp from "./Apps/XStateApp";
import * as serviceWorker from "./serviceWorker";

const mobxPanel = document.getElementById("root-mobx");
const contextPanel = document.getElementById("root-context");
const xStatePanel = document.getElementById("root-xstate");

const panels = [mobxPanel, contextPanel, xStatePanel];

const nav = document.getElementById("app-nav");

nav.addEventListener("click", (e) => {
  const { id } = e.target.dataset;
  panels.forEach((panel) => {
    if (panel.id === id) {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  });
});

ReactDOM.render(
  <React.StrictMode>
    <MobXApp />
  </React.StrictMode>,
  mobxPanel
);

ReactDOM.render(
  <React.StrictMode>
    <ContextApp />
  </React.StrictMode>,
  contextPanel
);

ReactDOM.render(
  <React.StrictMode>
    <XStateApp />
  </React.StrictMode>,
  xStatePanel
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
