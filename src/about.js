export function aboutpage() {
  const header = document.createElement("header");
  const headernode = document.createTextNode("about");
  header.appendChild(headernode);
  const element = document.getElementById("content");
  element.appendChild(header);
}