import { refreshpage } from "./index.js";


export function menupage() {
  refreshpage();
  const header = document.createElement("header");
  const headernode = document.createTextNode("menu");
  header.appendChild(headernode);
  const element = document.getElementById("content");
  element.appendChild(header);
}