import { refreshpage } from "./index.js";

export function homepage() {
  refreshpage();
  const header = document.createElement("header");
  const headernode = document.createTextNode("THE BEEF");
  header.appendChild(headernode);
  const element = document.getElementById("content");
  element.appendChild(header);
}
