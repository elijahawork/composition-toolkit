import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const app = <App />
function init() {
  createPage();
}
function createPage() {
  ReactDOM.render(app, document.getElementById('root'));
}
export function main() {
  init();  
}