import "./styles.css";
import "./home.js";
import { homepage } from "./home.js";
import { menupage } from "./menu.js";
import { aboutpage } from "./about.js";

const homebtn = document.getElementById("homebtn");
const menubtn = document.getElementById("menubtn");
const aboutbtn = document.getElementById("aboutbtn");

homebtn.addEventListener("click", () => {
  homepage();
  console.log("home");
});

menubtn.addEventListener("click", () => {
  menupage();
  console.log("menu");
});

aboutbtn.addEventListener("click", () => {
  aboutpage();
  console.log("about");
});
